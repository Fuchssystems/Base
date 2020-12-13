<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSessionWatchedProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('session_watched_profiles', function (Blueprint $table) {
            $table->id();
            $table->string('session_id', 100);
            $table->index('session_id');
            $table->bigInteger('profile_id_watcher');
            $table->bigInteger('profile_id_observed');
            $table->index('profile_id_observed');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('session_watched_profiles');
    }
}
