<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Profile;
use App\Models\Payment;
use App\Models\File;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
      if (false) {
          $user = new User;
          $user->name = "Admin";
          $user->email = "admin@devtest.com";
          $user->password = bcrypt('secret');
          $user->is_admin = true;
          $user->language = "de-de";
          $user->last_Token = '';
          $user->save();

          $profile = new Profile;
          $profile->user_id = $user->id;
          $profile->name = "Admin Profile";
          $profile->save();
          
          $user->active_profile_id = $profile->id;
          $user->save();
      }

      // remove all records before seeding
      DB::table('users')->truncate();
      DB::table('profiles')->truncate();
      DB::table('payments')->truncate();
      DB::table('files')->truncate();

      // get people names folders of image library
      $peopleImagesDirPath = resource_path('sample_profile_images');
      $peopleNamesArray = array_filter(scandir($peopleImagesDirPath), function ($entry) use ($peopleImagesDirPath) {
          return is_dir($peopleImagesDirPath . DIRECTORY_SEPARATOR . $entry)
                    && ($entry !== '.') && ($entry !== '..');
      });
      // $peopleNamesArray = array_slice($peopleNamesArray, 0, 5);
      $peopleNamesArray = array_slice($peopleNamesArray, 0, sizeof($peopleNamesArray));
      var_dump('size $peopleNamesArray: ' . sizeof($peopleNamesArray));
     
      $seededUsers = User::factory()
                        ->count(sizeof($peopleNamesArray))
                        ->has(Profile::factory()
                            ->count(1)
                            ->state(function (array $attributes, User $user) {
                                  var_dump('processing user id: ' . $user->id);
                                  return ['name' => $user->name];
                            })
                        )
                        ->has(Payment::factory()->count(3))
                        ->create()
                        ->each(function($user, $key) use ($peopleNamesArray, $peopleImagesDirPath) {
                            var_dump('$key: ' . $key);
                            var_dump('$peopleNamesArray[$key]: ' . $peopleNamesArray[$key]);

                            $profile = $user->profiles->first();
                            $profile->name = str_replace('_', ' ', $peopleNamesArray[$key]);

                            $user->active_profile_id = $profile->id;
                            $user->name = $profile->name;
                            $user->email = str_replace('_', '', $peopleNamesArray[$key]) . '@example.com';
                            $user->save();

                            // create image files for profile
                            $imageDirPath = $peopleImagesDirPath . DIRECTORY_SEPARATOR . $peopleNamesArray[$key];
                            $fileNamesArray = array_filter(scandir($imageDirPath), function ($entry) use ($imageDirPath) {
                              return is_file($imageDirPath . DIRECTORY_SEPARATOR . $entry)
                                        && ($entry !== '.') && ($entry !== '..');
                            });
                            $firstFileFlag = true;
                            $lastSortValue = 0;
                            foreach($fileNamesArray AS $fileName) {
                                $filePath = $imageDirPath . DIRECTORY_SEPARATOR . $fileName;

                                $file = new File();
                                $file->profile_id = $profile->id;
                                $file->isProfileImage = $firstFileFlag;
                                $file->sort = $file->isProfileImage ? 0 : $lastSortValue + 1;
                                $lastSortValue++;
                                $file->filenameWithoutExtension = pathinfo($filePath, PATHINFO_FILENAME);
                                $file->filenameExtension = pathinfo($filePath, PATHINFO_EXTENSION);
                                $file->filetype = 'image/jpeg';
                                $file->filecontent = 'data:' . $file->filetype . ';base64,' . base64_encode(file_get_contents($filePath));
                                $file->save();
                                
                                if ($file->isProfileImage) {
                                  $profile->profileImage_id = $file->id;
                                }
                                $firstFileFlag = false;
                            }
                            $profile->save();

                            $key++;
                        });
    }
}