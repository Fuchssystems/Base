<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use Illuminate\Validation\Rule;
use Illuminate\Support\Str;
use App;
use App\Models\User;
use App\Mail\TemporaryPassword;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Carbon;

class TemporaryPasswordController extends Controller
{
  public function requestSecurityQuestion(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'email' => [
        'required',
        Rule::exists('users', 'email')->whereNull('deleted_at'), // exclude soft deleted
      ],
    ]);

    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 401);
    }

    $status = 200;
    $result = '';
    $security_question_key = '';
    $user = User::firstWhere('email', $request->email);
    if (is_null($user)) {
      $status = 500;
      $message = 'user for validated email does not exist. email' . $request->email;
      return response()->json($message, $status);
    }

    if (is_null($user->security_question_key) || is_null($user->answer_security_question)) {
      $result = 'no_question_defined_for_account';
    }
    if(strlen($result) === 0) {
      $result = 'OK';
      $security_question_key = $user->security_question_key;
    }

    return response()->json([
      'result' => $result,
      'security_question_key' => $security_question_key,
    ], $status);
  }

  public function requestTemporaryPassword(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'email' => 'exists:users',
      'securityQuestionKey' => 'required',
      'answerSecurityQuestion' => 'required|min:2',
    ]);

    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 401);
    }

    $status = 200;
    $result = '';
    $security_question_key = '';
    $user = User::firstWhere('email', $request->email);
    if (is_null($user)) {
      $status = 500;
      $message = 'user for validated email does not exist. email' . $request->email;
      return response()->json($message, $status);
    }

    if (is_null($user->security_question_key) || is_null($user->answer_security_question)) {
      $result = 'no_question_defined_for_account';
    }

    // reset wrong answert counter and date
    if(strlen($result) === 0 && !is_null($user->last_date_wrong_answer_security_question)) {
      $resetIfBeforeDate = Carbon::now()
      ->subMinutes(\Config::get('app.wrongSecurityQuestionPauseAfterTooManyMinutes'))->toDateTimeString();
      if ($user->last_date_wrong_answer_security_question < $resetIfBeforeDate) {
        $user->wrong_answers_counter_security_question = 0;
        $user->last_date_wrong_answer_security_question = null;
        $user->save();
      }
    }

    //test if already too many wrong answers
    if(strlen($result) === 0) {
      if($user->wrong_answers_counter_security_question >= \Config::get('app.wrongSecurityQuestionAnswersAllowedBeforePaused')) {
        $result = 'too_many_wrong_answers_to_security_question';
      }
    }

    if(strlen($result) === 0) {
      if(($request->securityQuestionKey !== $user->security_question_key)
        || ($request->answerSecurityQuestion !== $user->answer_security_question)) {
        $user->wrong_answers_counter_security_question +=1;
        $user->last_date_wrong_answer_security_question = Carbon::now()->toDateTimeString();
        $user->save();
        $result = 'incorrect_answer_to_security_question';
      }
    }

    if(strlen($result) === 0) {
      $result = 'OK';

      // reset wrong answer counter and date
      $user->wrong_answers_counter_security_question = 0;
      $user->last_date_wrong_answer_security_question = null;
      
      // generate and set temporary password
      $temporaryPassword = Str::random(10);
      $user->password = bcrypt($temporaryPassword);
      $user->is_temporary_password = true;
      $user->save();

      // send email after response
      dispatch(function () use ($user, $request, $temporaryPassword) {        
        App::setLocale($user->preferredLocale());
        if (!empty(\Config::get('app.emailSendAllToAddress'))) $user->email = \Config::get('app.emailSendAllToAddress');
        $subject = __('mail.temporaryPassword_Subject', ['appName' => \Config::get('app.name')]);
        Mail::to($user)->send(new TemporaryPassword([
          'subject' => $subject,
          'locale' => $user->preferredLocale(),
          'username' => $user->name,
          'password' => $temporaryPassword,
        ]));
      })->afterResponse();
    }

    return response()->json([
      'result' => $result,
    ], $status);
  }
}
