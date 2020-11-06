<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Profile extends Model
{
  use SoftDeletes;

  protected $guarded = [];

  protected static function boot ()
  {
      parent::boot();
      
      self::deleting(function (Profile $profile) {
        if($profile->profileImage) $profile->profileImage->delete();
      });
  }

  public function profileImage()
  {
      return $this->hasOne('App\Models\File', 'id', 'profileImage_id');
  }

  public function profileImagesWithoutProfileImage()
  {
      return $this->hasMany('App\Models\File')->where('id', '!=', $this->profileImage_id)->orderBy('sort');
  }

  public function lastFileSortValue()
  {
      $lastSortValue = 0;
      $highestValueModel = $this->hasMany('App\Models\File')->where('id', '!=', $this->profileImage_id)->orderBy('sort', 'DESC')->first();
      if ($highestValueModel) $lastSortValue = $highestValueModel->sort;
      return $lastSortValue;
  }
}
