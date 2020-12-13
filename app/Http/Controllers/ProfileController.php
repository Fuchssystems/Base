<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;
use App\Models\Profile;
use App\Models\ProfileRelation;
use App\Models\Session;
use App\Models\Session_watched_profiles;
use Illuminate\Support\Carbon;
use Validator;
use Illuminate\Pagination\Paginator;

class ProfileController extends Controller
{
    // get chat profiles for passed search filter
    public function chatProfileSearch(Request $request)
    {
      $sessionId = $request->only(['sessionId'])['sessionId'];
      $requestFields = $request->only(['searchFilter']);
      $data = $requestFields['searchFilter'];
      $data['sessionId'] = $sessionId;
      $validator = Validator::make($data, [
        'sessionId' => 'required|integer',
        'name' => 'sometimes|max:255',
        'genders' => 'sometimes|array|min:1',
        'genders.' => 'sometimes|string|distinct|min:4', // genders: male, female, diverse
        'minAge' => 'sometimes|integer|min:12|max:90',
        'maxAge' => 'sometimes|integer|min:12|max:90',
        'distance' => 'sometimes|integer|min:0|max:805',
        'queryPage' => 'required|integer|min:1',
      ]);

      if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 401);
      }

      // $profiles = Profile::with(['profileImage'])->where('name', 'LIKE', '%'.$data['name'].'%')->limit(100)->get()->toArray();
      $query = Profile::with(['profileImage']);
      if (isset($data['name'])) {
        if (!empty($data['name'])) {
          $query->where('name', 'LIKE', '%'.$data['name'].'%');
        }
      }

      // min und max age
      if(isset($data['minAge']) && isset($data['maxAge'])) {
        $minAgeBirthday = date('Y-m-d', strtotime('-' . $data['minAge'] . ' years'));
        $maxAgeBirthday = date('Y-m-d', strtotime('-' . $data['maxAge'] . ' years'));
        $query->whereBetween('birthday', [$maxAgeBirthday, $minAgeBirthday]);
      }
      elseif(isset($data['minAge'])) { // maxAge not set
        $query->where('birthday', '<', date('Y-m-d', strtotime('-' . $data['minAge'] . ' years')));
      }
      elseif(isset($data['maxAge'])) { // minAge not set
        $query->where('birthday', '>', date('Y-m-d', strtotime('-' . $data['maxAge'] . ' years')));
      }

      if(isset($data['genders'])) {
        // query only if at least 1 gender not true
        $gendersArray = $data['genders'];
        if(!isset($gendersArray['male']) || !$gendersArray['male']
          || !isset($gendersArray['female']) || !$gendersArray['female']
          || !isset($gendersArray['diverse']) || !$gendersArray['diverse']) {
            $query->whereIn('gender_male_female_diverse_null', $data['genders']);
        }
      }

      // exclude active profile
      $activeUserProfile = Auth::user()->activeProfile;
      $query->where('id', '<>', $activeUserProfile->id);

      $activeLatitude = $activeUserProfile->latitude;
      $activeLongitude = $activeUserProfile->longitude;
      if(isset($data['distance'])) {
        $query->whereRaw("111.045*haversine(latitude, longitude, '{$activeLatitude}', '{$activeLongitude}') <= " . $data['distance']);
      }

      $query->orderBy('name', 'asc');

      Paginator::currentPageResolver(function() use ($data) {
        return $data['queryPage'];
      });
      $profiles = $query->paginate(100);

      // add fields is_contact, unread_messages_counter
      $profiles->map(function ($profile) use ($activeUserProfile) {
        $profile['is_contact'] = false;
        $profile['unread_messages_counter'] = 0;
        $index = ProfileRelation::make_index_profile_and_related($activeUserProfile->id, $profile->id);
        $profileRelation = ProfileRelation::where('index_profile_and_related', $index)->first();
        if ($profileRelation) {
          $profile['is_contact'] = $profileRelation->is_contact;
          $profile['unread_messages_counter'] = $profileRelation->unread_messages_counter;
        }
      });

      dispatch(function () use ($profiles, $sessionId, $activeUserProfile) {
        // update Session_watched_profiles table
        // for Notifcations of loged in status via Websockets

        // delete Session_watched_profiles not logged more than 3 minutes
        $dateTimeOutdated = Carbon::now()->subSeconds(180)->toDateTimeString();
        $watchedProfilesToDelete = Session::where('last_online', '<', $dateTimeOutdated);
        $watchedProfilesToDelete->delete();

        // delete old Session_watched_profiles of this session
        $session = Session::find($sessionId);
        if (!is_null($session)) {
          $session->watchedProfiles()->delete();
        }

        // create Session_watched_profiles records
        $profiles->each(function ($profile) use ($sessionId, $activeUserProfile){
          $watchedProfile = Session_watched_profiles::create([
            'session_id' => $sessionId,
            'profile_id_watcher' => $activeUserProfile->id,
            'profile_id_observed' => $profile->id,
          ]);
          $watchedProfile->save();
        });
      })->afterResponse();

      return response()->json([
        'profiles' => $profiles,
      ]);
    }
}
