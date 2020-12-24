<?php

namespace App\Http\Controllers;

use App\Models\Chatmessage;
use App\Models\Profile;
use App\Models\ProfileRelation;
use App\ownFunctionClasses\PusherMessages;

use Illuminate\Http\Request;
use Validator;
use DB;
use Illuminate\Support\Carbon;

class ChatmessageController extends Controller
{
     // receive new posted chatmessage
     public function chatmessagePost(Request $request)
     {
        $requestAll = $request->all();
        $data = [];
        if (isset($requestAll['message'])) {
          $data = $requestAll['message'];
        }
        if (isset($requestAll['temporaryMessageId'])) {
          $data['temporaryMessageId'] = $requestAll['temporaryMessageId'];
        }
        $data['$temporaryMessageId'] = $requestAll['temporaryMessageId'];
        $validator = Validator::make($data, [
          'temporaryMessageId' => 'required|integer',
          'profileIdSender' => 'required|integer',
          'profileIdReceiver' => 'required|integer',
          'messageText' => 'required|string',
        ]);

        if ($validator->fails()) {
          return response()->json(['error' => $validator->errors()], 401);
        }

        
        // create new chatmessage
        $chatmessage = new Chatmessage();
        $chatmessage->profile_index_sender_receiver
          = Chatmessage::make_profile_index_sender_receiver($data['profileIdSender'], $data['profileIdReceiver']);
        $chatmessage->profile_id_sender = $data['profileIdSender'];
        $chatmessage->profile_id_receiver = $data['profileIdReceiver'];
        $chatmessage->messageText = $data['messageText'];
        $chatmessage->send_at = Carbon::now()->toDateTimeString();
        $chatmessage->read = false;
        $chatmessage->save();

        // create or update profile relations
        $index = ProfileRelation::make_index_profile_and_related($data['profileIdSender'], $data['profileIdReceiver']);
        $profileRelation = ProfileRelation::where('index_profile_and_related', $index)->first();
        if (!$profileRelation) {
          $profileRelation = new ProfileRelation();
          $profileRelation->index_profile_and_related = $index;
          $profileRelation->profile_id = $data['profileIdSender'];
          $profileRelation->related_profile_id = $data['profileIdReceiver'];
          $profileRelation->is_contact = true;
          $profileRelation->save();
        }

        $index = ProfileRelation::make_index_profile_and_related($data['profileIdReceiver'], $data['profileIdSender']);
        $profileRelation = ProfileRelation::where('index_profile_and_related', $index)->first();
        if (!$profileRelation) {
          $profileRelation = new ProfileRelation();
          $profileRelation->index_profile_and_related = $index;
          $profileRelation->profile_id = $data['profileIdReceiver'];
          $profileRelation->related_profile_id = $data['profileIdSender'];
          $profileRelation->is_contact = true;
        }
        $profileRelation->save();

        dispatch(function () use ($data, $chatmessage, $profileRelation) {
          PusherMessages::broadcastNewChatmessage($data['profileIdSender'], $data['profileIdReceiver'],
            $chatmessage, $profileRelation->relationUnreadMessages()
          );
        })->afterResponse();

        return response()->json([
          'chatmessage' => $chatmessage,
          'temporaryMessageId' => $data['temporaryMessageId'],
        ]);
     }

 // request for chatmessages of sender and receiver profiles
 public function getProfileChatmessages(Request $request)
 {
    $data = $request->all();

    $validator = Validator::make($data, [
      'profileIdSender' => 'required|integer',
      'profileIdReceiver' => 'required|integer',
    ]);

    if ($validator->fails()) {
      return response()->json(['error' => $validator->errors()], 401);
    }

    // get all chat messages for sender and receiver profile
    $index = Chatmessage::make_profile_index_sender_receiver($data['profileIdSender'], $data['profileIdReceiver']);
    $chatmessages = Chatmessage::where('profile_index_sender_receiver', $index)
      ->orderBy('send_at', 'asc')->get();

    // set read status of messages to read
    $now = Carbon::now()->toDateTimeString();
    $index = ProfileRelation::make_index_profile_and_related($data['profileIdSender'], $data['profileIdReceiver']);
    foreach($chatmessages as $chatmessage) {
      // $data['profileIdSender'] is from reading profile
      if (($chatmessage->profile_id_receiver === $data['profileIdSender']) && !$chatmessage->read) {
        $chatmessage->read = true;
        $chatmessage->read_at = $now;
        $chatmessage->save();
      }
      };
    
    $profileRelation = ProfileRelation::where('index_profile_and_related', $index)->first();

    $receiverProfile = Profile::find($data['profileIdReceiver']);
    $receiverProfile_unread_messages_count = $receiverProfile
      ? $receiverProfile->unread_messages_count : 0;

    return response()->json([
      'chatmessages' => $chatmessages,
      'profileRelation' => $profileRelation,
      'receiverProfile_unread_messages_count' => $receiverProfile_unread_messages_count,
    ]);
 }
 
  // confirm 1 chatmessage read by receiver
  public function confirmChatmessageRead(Request $request)
  {
    $data = $request->only(['chatMessageId']);

    $validator = Validator::make($data, [
      'chatMessageId' => 'required|integer',
    ]);

    if ($validator->fails()) {
      return response()->json(['error' => $validator->errors()], 401);
    }

    // set read status of messages to read
    $chatmessage = Chatmessage::find($data['chatMessageId']);
    if (!$chatmessage) {
      return response()->json(['error' => 'Chatmessage not found. id: ' . $data['chatMessageId']], 401);
    }
    $chatmessage->read = true;
    $chatmessage->read_at = Carbon::now()->toDateTimeString();
    $chatmessage->save();

    $receiverProfile = Profile::find($chatmessage->profile_id_receiver);
    $receiverProfile_unread_messages_count = $receiverProfile
      ? $receiverProfile->unread_messages_count : 0;

    $index = ProfileRelation::make_index_profile_and_related($chatmessage->profile_id_sender, $chatmessage->profile_id_receiver);
    $profileRelation = ProfileRelation::where('index_profile_and_related', $index)->first();  

    // return updated chatmessages and relation unread messages counter
    return response()->json([
      'chatmessage' => $chatmessage,
      'receiverProfile_unread_messages_count' => $receiverProfile_unread_messages_count,
      'profileRelation' => $profileRelation,
    ]);
  }

  // whisper profile to profile
  // to be replaced with direct websocket communication
  public function whisper(Request $request) {
    $data = $request->only(['type', 'profileIdSender', 'profileIdReceiver']);

    $validator = Validator::make($data, [
      'type' => 'required|string',
      'profileIdSender' => 'required|integer',
      'profileIdReceiver' => 'required|integer',
    ]);

    if ($validator->fails()) {
      return response()->json(['error' => $validator->errors()], 401);
    }

    dispatch(function () use ($data) {
      PusherMessages::broadcastWhisper($data['type'], $data['profileIdSender'],
        $data['profileIdReceiver'],
      );
    })->afterResponse();

    return response()->json(null, 200);
  }
}
