<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProfileRelation extends Model
{
  protected $guarded = [];
  protected $appends = ['relation_unread_messages_count'];

  public static function make_index_profile_and_related($profileId, $relatedProfileId)
  {
      return sprintf('%09d', $profileId) . sprintf('%09d', $relatedProfileId);
  }

  public function getRelationUnreadMessagesCountAttribute() {
    return self::relationUnreadMessages();
  }

  public function relationUnreadMessages()
  {
    $index = Chatmessage::make_profile_index_sender_receiver($this->profile_id, $this->related_profile_id);
    return Chatmessage::where('profile_index_sender_receiver', $index)
      ->where('profile_id_receiver', '=', $this->profile_id)
      ->where('read', '=', 0)->count();
  }
}
