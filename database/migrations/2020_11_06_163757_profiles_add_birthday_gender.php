<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ProfilesAddBirthdayGender extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('profiles', function (Blueprint $table) {
        $table->date('birthday')->nullable(true);
        $table->string('gender_male_female_diverse_null',7)->nullable(true);
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
     Schema::table('profiles', function($table) {
        $table->dropColumn('birthday');
        $table->dropColumn('gender_male_female_diverse_null');
      });
    }
}
