<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProfileRelation extends Model
{
  protected $guarded = [];

  public static function make_index_profile_and_related($profileId, $relatedProfileId)
  {
      return sprintf('%09d', $profileId) . sprintf('%09d', $relatedProfileId);
  }  }
