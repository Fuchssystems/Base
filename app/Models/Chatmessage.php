<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Chatmessage extends Model
{
  protected $guarded = [];

  public static function make_profile_index_sender_receiver ($firstProfileId, $secondProfileId)
  {
    if ($firstProfileId < $secondProfileId) {
      return sprintf('%09d', $firstProfileId) . sprintf('%09d', $secondProfileId);
    } else {
      return sprintf('%09d', $secondProfileId) . sprintf('%09d', $firstProfileId);
    }
  }  
}
