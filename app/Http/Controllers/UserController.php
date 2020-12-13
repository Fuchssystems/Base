<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\User;
use App\Models\Profile;
use App\Models\Session;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\helpers\localization;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Carbon;
use DateTime;
use App\ownFunctionClasses\PusherMessages;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if (Auth::attempt($request->only(['email', 'password']))) {
            $user = Auth::user();

            $activeProfile = $user->activeProfile;
            $activeProfile->online = true;
            $activeProfile->last_online = Carbon::now()->toDateTimeString();
            $activeProfile->save();

            $session = Session::create([
              'profile_id' => $activeProfile->id,
              'last_online' => $activeProfile->last_online,
            ]);
            $session->save();

            $status = 200;
            $response = [
                'user' => Auth::user(),
                'token' => Auth::user()->createToken('bigStore')->accessToken,
                'session' => $session,
                'profiles' => Auth::user()->profiles,
                'file' => $user->activeProfile->profileImage,
            ];

            dispatch(function () use ($activeProfile) {
              PusherMessages::broadcastOnlineStatus($activeProfile->id, true);
            })->afterResponse();
        }

        return response()->json($response, $status);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:50',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'c_password' => 'required|same:password',
            'language' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $data = $request->only(['name', 'email', 'password', 'language']);
        $data['password'] = bcrypt($data['password']);
        $data['is_admin'] = 0;
        $data['last_Token'] = 'last_Token here';

        $user = User::create($data);
        $token =  $user->createToken('bigStore')->accessToken;
        $user->last_Token = $token;

        // create 1 profile for new user and make it the active profile
        $profile = new Profile;
        $profile->user_id = $user->id;
        $profile->name = $user->name;

        $profile->online = true;
        $profile->last_online = Carbon::now()->toDateTimeString();

        $profile->save();

        $user->active_profile_id = $profile->id;        
        $user->save();

        $session = Session::create([
          'profile_id' => $profile->id,
          'last_online' => $profile->last_online,
        ]);
        $session->save();

        return response()->json([
            'user' => $user,
            'token' => $token,
            'session' => $session,
            'profiles' => $user->profiles,
        ]);
    }

    public function logout(Request $request)
    {
        $user = Auth::user();

        $activeProfile = $user->activeProfile;
        $activeProfile->online = false;
        $activeProfile->last_online = Carbon::now()->toDateTimeString();
        $activeProfile->save();

        $status = 200;

        $sessionId = $request->input('sessionId');
        dispatch(function () use ($activeProfile, $sessionId) {
          PusherMessages::broadcastOnlineStatus($activeProfile->id, false);

          // remove session
          if (!is_null($sessionId)) {
            $session = Session::find($sessionId);
            if (!is_null($session)) {
              $session->delete();
            }
          }
        })->afterResponse();

        return response()->json($status);
    }

    // user still alive - update online status of active profile
    public function alive(Request $request)
    {
        $user = Auth::user();

        $activeProfile = $user->activeProfile;
        $activeProfile->online = true;
        $activeProfile->last_online = Carbon::now()->toDateTimeString();
        $activeProfile->save();

        $sessionId = $request->input('sessionId');
        if (!is_null($sessionId)) {
          $session = Session::find($sessionId);
          if (!is_null($session)) {
            $session->last_online = Carbon::now()->toDateTimeString();
            $session->save();
          }
        }

        $status = 200;

        return response()->json($status);
    }

    public function show(User $user)
    {
        return response()->json($user);
    }

    public function update(Request $request)
    {
        $user = Auth::user();
        $fields = $request->input('fields');

        $fields_user = [];
        if (isset($fields['user'])) $fields_user = $fields['user'];
        $validator = Validator::make($fields_user, [
          'email' => [
            'sometimes',
            'required',
            'email',
            Rule::unique('users')->ignore($user->id),
          ],
          'password' => 'sometimes|required|min:6',
          'confirmPassword' => 'sometimes|required|same:password',
          'preferences' => 'sometimes',
        ]);
        if ($validator->fails()) {
          return response()->json(['error' => $validator->errors()], 401);
        }

        if (isset($fields_user['password'])) $fields_user['password'] = bcrypt($fields_user['password']);
        if (isset($fields_user['confirmPassword'])) unset($fields_user['confirmPassword']);

        $user->fill($fields_user);
        
        // table profiles
        $fields_profile = [];
        if (isset($fields['profile'])) $fields_profile = $fields['profile'];
        $birthdayAllowedFrom = Carbon::today()->subYears(12)->toDateString();
        $birthdayAllowedTo = Carbon::today()->subYears(100)->toDateString();
        $validator = Validator::make($fields_profile, [
          'name' => 'sometimes|required|min:2|max:50',
          'country_code_iso_3166_alpha_2' => 'sometimes|required|size:2',
          'areacode' => 'sometimes|required|min:2|max:20',
          'city' => 'sometimes|required|min:2|max:20',
          'birthday' => [
            'sometimes', 'required', 'date',
            function ($attribute, $value, $fail) use ($birthdayAllowedFrom, $birthdayAllowedTo) {
              if ($value > $birthdayAllowedFrom || $value < $birthdayAllowedTo) {
                $fail('The birthday must result in an age between 12 and 100 years.');
              }
            },
          ],
          'gender_male_female_diverse_null' => ['sometimes', 'required', Rule::in(['male', 'female', 'diverse'])],
        ]);
        if ($validator->fails()) {
          return response()->json(['error' => $validator->errors()], 401);
        }
        $profile = Profile::firstOrNew(['id' => $user->active_profile_id]);
        $profile->user_id = $user->id;
        $profile->fill($fields_profile);

        // update geocoordinates if adress changed
        if (($profile->country_code_iso_3166_alpha_2 || $profile->getOriginal('country_code_iso_3166_alpha_2'))
          || ($profile->areacode || $profile->getOriginal('areacode'))
          || ($profile->city || $profile->getOriginal('city'))) {
            $adress = $profile->areacode . ' ' . $profile->city
              . ', ' . $profile->country_code_iso_3166_alpha_2;
            // setter of field latitude also sets longitude
            $profile->longitude = $adress;
        }

        $profile->save();
        if (!$user->active_profile_id) $user->active_profile_id = $profile->id;
        $user->save();

        return response()->json([
          'user' => $user,
          'profiles' => $user->profiles,
        ]);
      }

    public function createWebuser(Request $request)
    {
        $data = [
          'name' => 'guest created at '.now(),
          'email' => now(), # unique email
          'password' => bcrypt('guest'),
          'language' => $request->input('language'),
          'guest' => true,
          'last_Token' => '',
        ];

        $user = User::create($data);
        $user->save();
        
        // remember token to take over guest data at login/register
        $token = $user->createToken('bigStore')->accessToken;
        $user->last_Token = $token;
        $user->save();

        return response()->json([
          'user' => $user,
          'token' => $token,
      ]);
    }

    // update user preferences - authorization not required
    public function updatePreferencesUnauthorized(Request $request)
    {
      $fields = $request->input('fields');

      $fields_user = [];
      $fields_user = $fields['user'];
      $validator = Validator::make($fields_user, [
        'id' => 'required',
        'language' => 'sometimes',
      ]);
      if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 401);
      }

      $user = User::find($fields_user['id']);
      if($user) {
        $user->fill($fields_user);
        $user->save();
      }
    }

    public function delete(Request $request)
    {
        $status = 401;
        $response = ['error' => 'Unauthorised'];

        $user = Auth::user();
        $password = $request->input('password');
        $validator = Validator::make(['password' => $password], [
          'password' => 'required|min:6',
        ]);
        if ($validator->fails()) {
          return response()->json(['error' => $validator->errors()], 401);
        }

        if (!Hash::check($password, $user->password)) {
          return response()->json(['error' => ['password' => ['backend_error_wrong_password']]], 401);
        }

        $response = 'Delete success';
        $status = 200;
        $user->delete();
        return response()->json($response, $status);
    }

    public function test(Request $request)
    {
      return response()->json('Test respone');
    }
}