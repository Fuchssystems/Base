<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UserAddResetPassword extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('users', function (Blueprint $table) {
        $table->string('security_question_key', 50)->nullable(true)->after('date_verified');
        $table->string('answer_security_question')->nullable(true)->after('security_question_key');
        $table->unsignedInteger('wrong_answers_counter_security_question')->nullable(true)->default(0)->after('answer_security_question');
        $table->dateTime('last_date_wrong_answer_security_question')->nullable(true)->after('wrong_answers_counter_security_question');
        $table->boolean('is_temporary_password')->nullable(true)->default(false)->after('password');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('users', function($table) {
        $table->dropColumn('security_question_key');
        $table->dropColumn('answer_security_question');
        $table->dropColumn('wrong_answers_counter_security_question');
        $table->dropColumn('last_date_wrong_answer_security_question');
        $table->dropColumn('is_temporary_password');
      });
    }
}
