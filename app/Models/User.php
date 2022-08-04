<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Contracts\Translation\HasLocalePreference;

class User extends Authenticatable implements HasLocalePreference
{
    use HasFactory, Notifiable, SoftDeletes, HasApiTokens;

    protected $guarded = [];

    protected $hidden = [
      'password',
      'remember_token',
      'security_question_key',
      'answer_security_question',
      'wrong_answers_counter_security_question',
      'last_date_wrong_answer_security_question',
    ];

    public function preferredLocale()
    {
        return substr($this->language, 0, 2);
    }

    protected $casts = [
      'preferences' => 'array', // column type json
  ];

    protected static function boot ()
    {
        parent::boot();
        
        self::deleting(function (User $user) {
            foreach ($user->profiles as $profile) $profile->delete();
            foreach ($user->verification_emails as $verification_email) $verification_email->delete();
        });
    }

    public function profiles()
    {
      return $this->hasMany('App\Models\Profile');
    }

    public function profilesWithUnreadMessagesCount()
    {
      return $this->hasMany('App\Models\Profile')->with('unreadMessages');
    }

    public function activeProfile()
    {
      return $this->hasOne('App\Models\Profile', 'id', 'active_profile_id');
    }

    public function payments()
    {
      return $this->hasMany('App\Models\Payment')->whereIn('transaction_status', ['COMPLETED'])->orderBy('received_at_dateTime', 'DESC');
    }

    public function verification_emails()
    {
      return $this->hasMany('App\Models\Verification_email');
    }
}