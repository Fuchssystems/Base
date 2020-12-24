<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChatmessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chatmessages', function (Blueprint $table) {
            $table->id();
            $table->string('profile_index_sender_receiver', 18);
            $table->index('profile_index_sender_receiver');
            $table->bigInteger('profile_id_sender');
            $table->bigInteger('profile_id_receiver');
            $table->index('profile_id_receiver');
            $table->text('messageText');
            $table->dateTime('send_at')->nullable(true);
            $table->boolean('read')->nullable(true);
            $table->dateTime('read_at')->nullable(true);

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
        Schema::dropIfExists('chatmessages');
    }
}
