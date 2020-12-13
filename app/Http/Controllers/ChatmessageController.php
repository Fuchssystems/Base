<?php

namespace App\Http\Controllers;

use App\Models\Chatmessage;
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
          $profileRelation->has_unread_messages = false;
          $profileRelation->unread_messages_counter = 0;
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
          $profileRelation->has_unread_messages = false;
          $profileRelation->unread_messages_counter = 0;
        }
        $profileRelation->has_unread_messages = true;
        $profileRelation->unread_messages_counter++;
        $profileRelation->save();

        dispatch(function () use ($data, $chatmessage, $profileRelation) {
          PusherMessages::broadcastNewChatmessage($data['profileIdSender'], $data['profileIdReceiver'],
            $chatmessage, $profileRelation->unread_messages_counter
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
    // update profile unread messages counter
    $now = Carbon::now()->toDateTimeString();
    $index = ProfileRelation::make_index_profile_and_related($data['profileIdSender'], $data['profileIdReceiver']);
    $profileRelation = ProfileRelation::where('index_profile_and_related', $index)->first();
    $updateProfileRelation = false;
    if ($profileRelation) {
      foreach($chatmessages as $chatmessage) {
        if (!$chatmessage->read) {
          $chatmessage->read = true;
          $chatmessage->read_at = $now;
          $chatmessage->save();

          $profileRelation->unread_messages_counter--;
          if ($profileRelation->unread_messages_counter <= 0) {
            $profileRelation->has_unread_messages = false;
          }
          $updateProfileRelation = true;
        }
      };
      if ($updateProfileRelation) {
        $profileRelation->save();
      }
    }

    return response()->json([
      'chatmessages' => $chatmessages,
      'profileRelation' => $profileRelation,
    ]);
 }     
}
