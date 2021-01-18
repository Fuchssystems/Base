<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCallsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calls', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('profile_id_caller');
            $table->bigInteger('profile_id_receiver');
            $table->bigInteger('session_id_receiver')->nullable();
            $table->string('profile_name_receiver', 20);
            $table->string('status', 20);
            $table->bigInteger('last_log_id')->nullable();
            
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
        Schema::dropIfExists('calls');
    }
}
