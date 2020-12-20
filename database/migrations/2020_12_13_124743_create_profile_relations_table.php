<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfileRelationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profile_relations', function (Blueprint $table) {
          $table->id();
          $table->bigInteger('profile_id');
          $table->index('profile_id');
          $table->bigInteger('related_profile_id');
          $table->index('related_profile_id');
          $table->string('index_profile_and_related', 18);
          $table->index('index_profile_and_related');
          $table->boolean('has_unread_messages');
          $table->integer('unread_messages_counter');
          $table->boolean('is_contact');

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
        Schema::dropIfExists('profile_relations');
    }
}
