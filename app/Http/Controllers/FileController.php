<?php

namespace App\Http\Controllers;

use App\Models\File;
use App\Models\Profile;
use Validator;
use Illuminate\Http\Request;

class FileController extends Controller
{
  public function addPicture(Request $request)
  {
      $validator = Validator::make($request->all(), [
        'profileId' => 'required',
        'fileIsProfileImage' => 'sometimes|boolean',
        'filename' => 'required',
        'filetype' => 'required',
        'filecontent' => 'required'
      ]);
      if ($validator->fails()) {
          return response()->json(['error' => $validator->errors()], 401);
      }

      $lastSortValue = 0;
      $profile = Profile::find($request->profileId);
      if ($profile) {
        $lastSortValue = $profile->lastFileSortValue();
      }
      if(!$lastSortValue) $lastSortValue = 0;

      $file = new File();
      $file->profile_id = $request->profileId;
      $file->isProfileImage = !!$request->fileIsProfileImage;
      $file->sort = $file->isProfileImage ? 0 : $lastSortValue + 1;
      $file->filenameWithoutExtension = pathinfo($request->filename, PATHINFO_FILENAME);
      $file->filenameExtension = pathinfo($request->filename, PATHINFO_EXTENSION);
      $file->filetype = $request->filetype;
      $file->filecontent = $request->filecontent;
      $file->save();

      $profile = null;
      if ($request->fileIsProfileImage) {
        $profile = Profile::find($file->profile_id);
        if ($profile) {
          // delete old profile image file
          if ($profile->profileImage_id) File::destroy($profile->profileImage_id);

          $profile->profileImage_id = $file->id;
          $profile->save();
        }
      }

      return response()->json([
        'file' => $file,
        'profile' => $profile,
      ]);
  }

  // get all image files for a profile, except active profile image
  public function getAllProfileFiles(Request $request)
  {
      $validator = Validator::make($request->all(), [
        'profileId' => 'required',
      ]);
      if ($validator->fails()) {
          return response()->json(['error' => $validator->errors()], 401);
      }

      $files = [];
      $profile = Profile::find($request->profileId);
      if ($profile) {
        $files = $profile->profileImagesWithoutProfileImage;
      }

      return response()->json([
        'files' => $files,
      ]);
  }

  public function loadFile(Request $request)
  {
      $validator = Validator::make($request->all(), [
        'fileId' => 'required',
      ]);
      if ($validator->fails()) {
          return response()->json(['error' => $validator->errors()], 401);
      }

      return response()->json([
        'file' => File::find($request->fileId),
      ]);
  }
  
  // delete 1 one file
  public function deleteFile(Request $request)
  {
      $validator = Validator::make($request->all(), [
        'fileId' => 'required',
      ]);
      if ($validator->fails()) {
          return response()->json(['error' => $validator->errors()], 401);
      }

      $file = File::find($request->fileId);
      $profile = null;
      if ($file) {
        // update profile method if file to delete is active profile image
        if($file->profile_id) {
          $profile = Profile::find($file->profile_id);
          if($profile) {
            if ($profile->profileImage_id === $file->id) {
              $profile->profileImage_id = null;
              $profile->save();
            }
          }
        }
        $file->delete();
      };

      return response()->json([
        'profile' => $profile,
      ]);
  }

  // delete array of file ids
  // assumption that no file is main profile image (profile->profileImage_id)
  public function deleteFiles(Request $request)
  {
      $validator = Validator::make($request->all(), [
        'arrayFileIds' => 'required|array|min:1',
        'arrayFileIds.*' => 'required|integer|distinct',
      ]);
      if ($validator->fails()) {
          return response()->json(['error' => $validator->errors()], 401);
      }

      $arrayFileIds = $request->arrayFileIds;
      $counterRecordsFileDeleted = count($arrayFileIds);
      File::destroy($arrayFileIds);

      return response()->json([
        'counterRecordsFileDeleted' => $counterRecordsFileDeleted,
      ]);
  }

  public function changeFileSortOrder(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'fileId' => 'required|integer',
      'newSortValue' => 'required|integer',
      'oldSortValue' => 'required|integer',
    ]);
    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 401);
    }

    $fileRequest = File::find($request->fileId);
    if ($fileRequest) {
      $profile = Profile::find($fileRequest->profile_id);
      if ($profile) {
        $requestNewSortValue = $request->newSortValue;
        $requestOldSortValue = $request->oldSortValue;
        $sortValueToSet = 0;
        $profile->profileImagesWithoutProfileImage->each(function($file, $i)
          use ($request, $requestNewSortValue, $requestOldSortValue, $sortValueToSet) {
            if($file->id == $request->fileId) {
              $sortValueToSet = $requestNewSortValue;
            } else if ($requestNewSortValue < $requestOldSortValue) { // sort order value lowered
              $sortValueToSet = ($i < $requestNewSortValue || $i > $requestOldSortValue) ? $i : ($i + 1);
            } else { // sort order value increased
              $sortValueToSet = ($i > $requestNewSortValue || $i < $requestOldSortValue) ? $i : ($i - 1);
            }
            if ($file->sort !== $sortValueToSet) {
              $file->sort = $sortValueToSet;
              $file->save();
            }
          });
      }
    };

    $response = 'Change sort order success';
    $status = 200;
    return response()->json($response, $status);
  }
  
}
