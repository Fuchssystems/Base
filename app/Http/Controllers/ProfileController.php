<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;
use App\Models\Profile;
use Validator;
use Illuminate\Pagination\Paginator;

class ProfileController extends Controller
{
    // get chat profiles for passed search filter
    public function chatProfileSearch(Request $request)
    {
      $requestFields = $request->only(['searchFilter']);
      $data = $requestFields['searchFilter'];
      $validator = Validator::make($data, [
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

      $activeUserProfile = Auth::user()->activeProfile;
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

      try {
        return response()->json([
          'profiles' => $profiles,
        ]);
      } finally {
        // update CreateTokenWatchedProfilesTable
        // for Notifcations of loged in status via Websockets
        // on logout and login
        // $deletedWatchedProfiles = Token_watched_profiles::where('token_id', $activeUserProfile->id)->delete();
      }
    }
}
