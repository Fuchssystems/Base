<?php

namespace App\Http\Controllers;

use Auth;
use App\User;
use App\Profile;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\helpers\localization;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if (Auth::attempt($request->only(['email', 'password']))) {
            $user = Auth::user();

            $status = 200;
            $response = [
                'user' => Auth::user(),
                'token' => Auth::user()->createToken('bigStore')->accessToken,
                'profiles' => Auth::user()->profiles,
                'file' => $user->activeProfile->profileImage,
            ];
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
        $profile->save();

        $user->active_profile_id = $profile->id;        
        $user->save();

        return response()->json([
            'user' => $user,
            'token' => $token,
            'profiles' => $user->profiles,
        ]);
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
        $validator = Validator::make($fields_profile, [
          'name' => 'sometimes|required|min:2|max:50',
          'country_code_iso_3166_alpha_2' => 'sometimes|required|size:2',
          'areacode' => 'sometimes|required|min:2|max:20',
          'city' => 'sometimes|required|min:2|max:20',
        ]);
        if ($validator->fails()) {
          return response()->json(['error' => $validator->errors()], 401);
        }
        $profile = Profile::firstOrNew(['id' => $user->active_profile_id]);
        $profile->user_id = $user->id;
        $profile->fill($fields_profile);

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