<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Validator;
use App\Models\Verification_email;
use App\Models\User;

class EmailVerificationController extends Controller
{
  public function handleEmailVerificationLink(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'uuid' => 'required',
    ]);

    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 401);
    }
  
    $result = 'invalid_link';
    $verificationEmail = Verification_email::firstWhere('uuid', $request->uuid);
    if (!is_null($verificationEmail)) {
      $user = User::find($verificationEmail->user_id);
      if (!is_null($user)) {
        if (!$user->verified) {
          $user->verified = true;
          $user->date_verified = Carbon::now()->toDateTimeString();
          $user->save();
          $result = 'verified_successfully';
        } else {
          $result = 'was_already_verified';
        }
      }
    }

    return response()->json([
      'result' => $result,
    ]);
  }

  // delete timed out Verification_emails and their users not verified
  // scheduled in Console\Kernel.php
  public static function deleteTimedOutVerificationEmails()
  {
    var_dump('deleteTimedOutVerificationEmails');
    $deleteBeforeDate = Carbon::now()
      ->subMinutes(\Config::get('app.emailVerificationLifetimeMinutes'))->toDateTimeString();
      $verificationEmailsToDelete = Verification_email::where('last_date_send', '<', $deleteBeforeDate)->get();
      $verificationEmailsToDelete->each(function ($verificationEmail) {
        var_dump('$verificationEmail->user_id: ' . $verificationEmail->user_id);
        $user = User::find($verificationEmail->user_id);
        if (!$user->verified) {
          $user->delete(); // model will also delete Verfication_email
        } else {
          $verificationEmail->delete();
        }
      });
  }
}
