<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ProfilesAddAdressCoordinates extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('profiles', function (Blueprint $table) {
        $table->decimal('latitude', 10, 7)->nullable(true);
        $table->decimal('longitude', 10, 7)->nullable(true);
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
        $table->dropColumn('latitude');
        $table->dropColumn('longitude');
      });
    }
}
