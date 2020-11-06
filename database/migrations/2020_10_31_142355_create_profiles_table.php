<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
          $table->bigIncrements('id');
          $table->unsignedInteger('user_id');
          $table->string('name')->nullable(true);
          $table->string('country_code_iso_3166_alpha_2')->nullable(true);
          $table->string('areacode')->nullable(true);
          $table->string('city')->nullable(true);
          $table->unsignedInteger('profileImage_id')->nullable(true);
          
          $table->timestamps();
          $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
}
