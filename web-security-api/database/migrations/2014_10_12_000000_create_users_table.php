<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class CreateUsersTable
 */
class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->bigInteger('phone');
            $table->string('password')->nullable(true);
            $table->string('fingerprint')->nullable(true);
            $table->string('last_code_hash')->nullable(true);
            $table->string('last_name');
            $table->string('middle_name')->nullable(true);
            $table->string('first_name');
            $table->integer('passport_serial')->nullable(true);
            $table->integer('passport_number')->nullable(true);
            $table->tinyInteger('is_active')->default(true);
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('users_tokens', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('user_id')->unsigned();
            $table->string('token', 64)->unique();
            $table->unsignedTinyInteger('type')->default(0);
            $table->timestampTz('expire_at')->nullable();
            $table->timestampsTz();

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('users_tokens');
    }
}
