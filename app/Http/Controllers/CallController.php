<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\Call;
use App\Models\LogCall;
use App\Models\Profile;
use App\ownFunctionClasses\PusherMessages;

use Validator;
use Illuminate\Http\Request;

class CallController extends Controller
{
  // request for new videochat call
  public function requestNewCall(Request $request)
  {
    $data = $request->all();

    $validator = Validator::make($data, [
      'profileIdReceiver' => 'required|integer',
    ]);

    if ($validator->fails()) {
      return response()->json(['error' => $validator->errors()], 401);
    }

    $user = Auth::user();
    $activeProfile = $user->activeProfile;

    // create new call
    $call = new Call();
    $call->profile_id_caller = $activeProfile->id;
    $call->profile_id_receiver = $data['profileIdReceiver'];
    $profileReceiver = Profile::find($data['profileIdReceiver']);
    $call->profile_name_receiver = $profileReceiver->name;
    $call->status = 'newCallRequested';
    $call->save();
    
    // create new log call
    $logCall = new LogCall;
    $logCall->call_id = $call->id;
    $logCall->log_status = $call->status;
    $logCall->save();
    // update $call with last log id
    $call->last_log_id = $logCall->id;
    $call->save();

    dispatch(function () use ($call) {
      // signal receiver about new call
      PusherMessages::broadcastCallUpdateToReceiver($call);

      // wait 20 sec and check if receiver answered the call
      // if not notify the caller that call was not anwered
      sleep(20);
      $call->refresh();
      if(($call->status === 'newCallRequested') || ($call->status === 'isRinging')) {
        $call->status = 'receiverDidNotAnswer';
        $call->save();

        // create new log call
        $logCall = new LogCall;
        $logCall->call_id = $call->id;
        $logCall->log_status = $call->status;
        $logCall->save();
        // update $call with last log id
        $call->last_log_id = $logCall->id;
        $call->save();

        PusherMessages::broadcastCallUpdateToCaller($call);
      }
    })->afterResponse();

    return response()->json([
      'call' => $call,
    ]);
  }

  // update call status
  // broadcast new call record to other profile id
  public function updateCallStatus(Request $request)
  {
    $data = $request->all();

    $validator = Validator::make($data, [
      'id' => 'required|integer|exists:calls',
      'status' => 'required|string'
    ]);

    if ($validator->fails()) {
      return response()->json(['error' => $validator->errors()], 401);
    }

    $call = Call::find($data['id']);
    $old_callStatus = $call->status;
    // do not notify other profile if answer already timed out
    if (!($old_callStatus === 'receiverDidNotAnswer')) {
      $call->status = $data['status'];
      $call->save();

      // create new log call
      $logCall = new LogCall;
      $logCall->call_id = $call->id;
      $logCall->log_status = $call->status;
      $logCall->save();
      // update $call with last log id
      $call->last_log_id = $logCall->id;
      $call->save();

      dispatch(function () use ($call, $data) {
        $user = Auth::user();
        $activeProfile = $user->activeProfile;
        
        if ($call->profile_id_caller === $activeProfile->id) {
          PusherMessages::broadcastCallUpdateToReceiver($call);
        } else {
          PusherMessages::broadcastCallUpdateToCaller($call);
        }
      })->afterResponse();
    }

    return response()->json([
      'call' => $call,
    ]);
  }
}
