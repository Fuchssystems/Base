<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UserAddVerified extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('users', function (Blueprint $table) {
        // field verified defaut true, with feature FEATURE_EMAIL_VERIFICATION set to false on registration
        $table->boolean('verified')->nullable(true)->default(true)->after('guest');
        $table->dateTime('date_verified')->nullable(true)->after('verified');
      });

      // set all existing users to verified = true with current date
      $today = date('Y-m-d H:i:s');
      DB::table('users')
        ->update([
          'verified' => 1,
          'date_verified' => $today
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('users', function($table) {
        $table->dropColumn('verified');
        $table->dropColumn('date_verified');
      });
    }
}
