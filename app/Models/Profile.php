<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;
// use App\lib\GoogleAPI;
use Faker\Factory;
use Auth;
use App\lib\Coordinates;

class Profile extends Model
{
  use HasFactory, SoftDeletes;

  protected $appends = ['ageYears', 'distance'];
  protected $guarded = [];

  protected static function boot ()
  {
      parent::boot();
      
      self::deleting(function (Profile $profile) {
        $profile->sessions()->delete();
        if($profile->profileImage) {
          $profile->profileImage->delete();
        }
        $profile->profileImagesWithoutProfileImage()->delete();
        $profile->profileRelations()->delete();
      });
  }

  public function getAgeYearsAttribute()
  {
      return Carbon::parse($this->birthday)->age;
  }

  public function getDistanceAttribute()
  {
      $authorizedUser = Auth::user(); // on register no user authorized
      if (is_null($authorizedUser)) {
        return null;
      }
      $activeUserProfile = $authorizedUser->activeProfile;
      $activeLatitude = $activeUserProfile->latitude;
      $activeLongitude = $activeUserProfile->longitude;
      if ($activeLatitude && $activeLongitude
      && $this->latitude && $this->longitude) {
        return Coordinates::haversineGreatCircleDistance(
          $activeLatitude, $activeLongitude, $this->latitude, $this->longitude);
      }
      return null;
  }

  public function getOnlineAttribute()
  {
    if (!$this->attributes['online']) {
      return false;
    }
    return ($this->attributes['last_online'] >= Carbon::now()->subSeconds(150)->toDateTimeString());
  }

  public function profileImage()
  {
      return $this->hasOne('App\Models\File', 'id', 'profileImage_id');
  }

  public function profileImagesWithoutProfileImage()
  {
      return $this->hasMany('App\Models\File')->where('id', '!=', $this->profileImage_id)->orderBy('sort');
  }

  public function profileRelations()
  {
      return $this->hasMany('App\Models\ProfileRelation');
  }

  public function profileRelationsByOthers()
  {
      return $this->hasMany('App\Models\ProfileRelation', 'related_profile_id');
  }

  public function lastFileSortValue()
  {
      $lastSortValue = 0;
      $highestValueModel = $this->hasMany('App\Models\File')->where('id', '!=', $this->profileImage_id)->orderBy('sort', 'DESC')->first();
      if ($highestValueModel) $lastSortValue = $highestValueModel->sort;
      return $lastSortValue;
  }

  public function setLongitudeAttribute($address)
  {
    $faker = Factory::create('de_DE');
    // latitude longitude within range of germany
    $this->attributes['latitude'] = $faker->latitude(47.27, 55.05);
    $this->attributes['longitude'] = $faker->longitude(15.03, 5.87);

    // google API code
    // $latitudeLongitude = GoogleAPI::getLongitudeLatidudeFromAdress($address);
    // $this->attributes['latitude'] = strtolower($latitudeLongitude->latitude);
    // $this->attributes['longitude'] = strtolower($latitudeLongitude->longitude);
  }

  public function sessions()
  {
    return $this->hasMany('App\Models\Session');
  }
}
