<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable, SoftDeletes, HasApiTokens;

    protected $guarded = [];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
      'preferences' => 'array', // column type json
  ];

    protected static function boot ()
    {
        parent::boot();
        
        self::deleting(function (User $user) {
            foreach ($user->profiles as $profile) $profile->delete();
        });
    }

    public function profiles()
    {
      return $this->hasMany('App\Profile');
    }

    public function activeProfile()
    {
      return $this->hasOne('App\Profile', 'id', 'active_profile_id');
    }
}