<?php

use Illuminate\Database\Seeder;

/**
 * Class UsersSeeder
 */
class UsersSeeder extends Seeder
{
    const USERS = [
        [
            'id' => '1',
            'email' => 'alexgavrilov939@gmail.com',
            'phone' => 79168168856,
            'last_name' => 'Gavrilov',
            'first_name' => 'Alex',
            'passport_serial' => 1234,
            'passport_number' => 123456
        ],
        [
            'id' => '2',
            'email' => 'irinadrovyannikova@gmail.com',
            'phone' => 79092177155,
            'last_name' => 'Droviannikova',
            'first_name' => 'Irina',
            'passport_serial' => 1234,
            'passport_number' => 123456
        ],
        [
            'id' => '3',
            'email' => 'mr.alhoev@gmail.com',
            'phone' => 79308547078,
            'last_name' => 'Alhoev',
            'first_name' => 'Rashid',
            'passport_serial' => 1234,
            'passport_number' => 123456
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
        DB::table('users')->delete();
        foreach(self::USERS as $user) {
            DB::table('users')->insert($user);
        }
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
