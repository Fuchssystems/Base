<?php

namespace App\ownFunctionClasses;


use App\Models\Profile;
use App\Models\Session;
use App\Models\Session_watched_profiles;
use App\Events\MessageToProfile;
use Illuminate\Support\Carbon;

class PusherMessages
{
    // schedule deleteTimedOutSessions to be called by Console\Kernel.php
    public function __invoke()
    {
      self::deleteTimedOutSessions();
    }

    public static function deleteTimedOutSessions() {
      var_dump('deleteTimedOutSessions');
      // delete Session_watchedProfiles not logged more than 3 minutes
      // scheduled
      $dateTimeOutdated = Carbon::now()->subSeconds(120)->toDateTimeString();
      $sessionsToDelete = Session::where('last_online', '<', $dateTimeOutdated)->get();
      $count = $sessionsToDelete->count(); // debugging only
      $sessionsToDelete->each(function ($session) {
        var_dump('Session Id:' . $session->id);
        // check if last_online in profile is older or equal (means does not have other sessions)
        if ($session->profile->last_online <= $session->last_online) {
          var_dump('$session->profile_id: ' . $session->profile_id);
          $observedBySessionWatchedProfiles = Session_watched_profiles::where('profile_id_observed', $session->profile_id)->get();
          $count = $observedBySessionWatchedProfiles->count(); // debugging only
          var_dump('$observedBySessionWatchedProfiles->count(): ' . $count);
          $observedBySessionWatchedProfiles->each(function ($sessionWatchedProfile) {
            $watchingProfileId = $sessionWatchedProfile->profile_id_watcher;
            $watchingProfile = Profile::find($watchingProfileId);
            if ($watchingProfile) {
              var_dump('watching Profile ID: ' . $watchingProfile->id . ', online: ' . $watchingProfile->online);
              if ($watchingProfile->online) {
                $message = (object) [
                  'type' => 'onlineStatus',
                  'profileId' => $sessionWatchedProfile->profile_id_observed,
                  'online' => false,
                ];
                broadcast(new MessageToProfile($watchingProfileId, $message));
              }
            }
          });
        }
        $session->delete();
      });
    }

    public static function broadcastOnlineStatus ($senderProfileId, $onlineStatus) {
        // broadcast online status to all watched profiles of passed session
        $lastOnline = Carbon::now()->toDateTimeString();
        $watchedFromProfiles = Session_watched_profiles::where('profile_id_observed', '=', $senderProfileId);
        $watchedFromProfiles->each(function ($watchedProfile)
          use ($senderProfileId, $onlineStatus, $lastOnline) {
            $message = (object) [
              'type' => 'onlineStatus',
              'profileId' => $senderProfileId,
              'online' => $onlineStatus,
              'last_online' => $lastOnline,
            ];
            broadcast(new MessageToProfile($watchedProfile->profile_id_watcher, $message));
        });
    }

    // broadcast new chatmessage to online receiver
   public static function broadcastNewChatmessage ($profileIdSender, $profileIdReceiver,
    $chatmessage, $unreadMessageCounter) {
      $receiverProfile = Profile::find($profileIdReceiver);
      if ($receiverProfile) {
        if ($receiverProfile->online) {
          $message = (object) [
            'type' => 'newChatmessage',
            'profileId' => $profileIdSender,
            'chatmessage' => $chatmessage,
            'unreadMessagecounter' => $unreadMessageCounter,
          ];
          broadcast(new MessageToProfile($profileIdReceiver, $message));
        }
      }
   }

    // whisper message to online receiver
    // to be replace by direct peer communication
    public static function broadcastWhisper ($type, $profileIdSender, $profileIdReceiver) {
      $message = (object) [
        'type' => $type,
        'profileId' => $profileIdSender,
      ];
      broadcast(new MessageToProfile($profileIdReceiver, $message));
    }
}
