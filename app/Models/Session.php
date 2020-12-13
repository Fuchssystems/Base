<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Session extends Model
{
  protected $guarded = [];

  protected static function boot ()
  {
      parent::boot();
      
      self::deleting(function (Session $session) {
        $session->watchedProfiles()->delete();
      });
  }

  public function profile()
  {
      return $this->hasOne('App\Models\Profile', 'id', 'profile_id');
  }

  public function watchedProfiles()
  {
    return $this->hasMany('App\Models\Session_watched_profiles');
  }
}
