<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_transactions', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('sender_card_id')->unsigned();
            $table->bigInteger('receiver_card_id')->unsigned();
            $table->float('sum');
            $table->timestamps();

            $table->foreign('sender_card_id')
                ->references('id')
                ->on('users_cards');

            $table->foreign('receiver_card_id')
                ->references('id')
                ->on('users_cards');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_transactions');
    }
}
