<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Profile;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
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
}