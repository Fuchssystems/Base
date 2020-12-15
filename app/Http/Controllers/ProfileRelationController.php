<?php

namespace App\Http\Controllers;

use App\Models\ProfileRelation;

use Illuminate\Http\Request;
use Validator;

class ProfileRelationController extends Controller
{
  public function update(Request $request)
  {
      $fields = $request->input('fields');

      $fields_profileRelation = [];
      if (isset($fields['profileRelation'])) $fields_profileRelation = $fields['profileRelation'];
      $validator = Validator::make($fields_user, [
        'profile_id' => 'required|integer',
        'related_profile_id' => 'required|integer',
        'is_contact' => 'sometimes|boolean',
      ]);
      if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 401);
      }

      $index = ProfileRelation::make_index_profile_and_related($fields_profileRelation['profile_id'], $fields_profileRelation['related_profile_id']);
      $profileRelation = ProfileRelation::where('index_profile_and_related', $index)->first();
      if ($profileRelation) {
        if (isset($fields_profileRelation['is_contact'])) $profileRelation->is_contact = $fields_profileRelation['is_contact'];
        $profileRelation->save();
      }

      $status= 200;

      return response()->json([
        'status' => $status,
      ]);
    }
}
