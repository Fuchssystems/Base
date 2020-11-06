<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('files', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('profile_id');
            $table->boolean('isProfileImage')->nullable();
            $table->unsignedInteger('sort')->nullable();
            $table->string('filenameWithoutExtension');
            $table->string('filenameExtension');
            $table->string('filetype');
            $table->timestamps();
            $table->softDeletes();
        });
        // https://stackoverflow.com/questions/20089652/mediumblob-in-laravel-database-schema
        DB::statement("ALTER TABLE files ADD filecontent LONGBLOB");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('files');
    }
}
