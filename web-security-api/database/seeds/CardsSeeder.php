<?php

use Illuminate\Database\Seeder;

/**
 * Class CardsSeeder
 */
class CardsSeeder extends Seeder
{
    const CARDS = [
        [
            'user_id' => 1,
            'type' => 'debit',
            'balance' => 54719,
            'number' => 1234432145677654,
            'cvv' => 999
        ],
        [
            'user_id' => 1,
            'type' => 'credit',
            'balance' => 42100,
            'number' => 0000111122223333,
            'cvv' => 878
        ],
        [
            'user_id' => 2,
            'type' => 'debit',
            'balance' => 10483,
            'number' => 1111222211112222,
            'cvv' => 567
        ],
        [
            'user_id' => 2,
            'type' => 'credit',
            'balance' => 322,
            'number' => 3333444433334444,
            'cvv' => 765
        ],
        [
            'user_id' => 3,
            'type' => 'debit',
            'balance' => 666,
            'number' => 4444555544445555,
            'cvv' => 321
        ],
        [
            'user_id' => 3,
            'type' => 'credit',
            'balance' => 759,
            'number' => 5555666655556666,
            'cvv' => 123
        ],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('users_cards')->delete();
        foreach(self::CARDS as $card) {
            DB::table('users_cards')->insert($card);
        }
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
