<?php

namespace App\Components\User\Repositories;

use App\Components\User\Models\User;
use App\Components\User\Models\UsersToken;
use App\Components\User\Services\UserService;

/**
 * Class UserRepository
 * @package App\Components\User\Repositories
 */
class UserRepository
{
    /**
     * Find an user by ID.
     * @param integer $id User ID
     * @return User|null
     */
    public function findById($id)
    {
        return User::find($id);
    }

    /**
     * Find an user by a token.
     * @param string $token
     * @return User|null
     * @throws \Exception
     */
    public function findByToken($token)
    {
        /**
         * Find the token.
         */
        $token = UsersToken::query()->where(['token' => $token])->first();
        if (empty($token)) {
            return null;
        }

        /**
         * Check if the token do not expire.
         */
        if (new \DateTime($token->expire_at) < new \DateTime()) {
            $token->delete();
            return null;
        }

        return User::find($token->user_id);
    }

    /**
     * Find an user by a token.
     * @param string $token
     * @param $fingerprint
     * @return User|null
     * @throws \Exception
     */
    public function findByTokenAndFingerPrint($token, $fingerprint)
    {
        /**
         * Find the token.
         */
        $token = UsersToken::query()->where(['token' => $token])->first();
        if (empty($token)) {
            return null;
        }

        /**
         * Check if the token do not expire.
         */
        if (new \DateTime($token->expire_at) < new \DateTime()) {
            $token->delete();
            return null;
        }

        $user = User::find($token->user_id);
        if (empty($user)) {
            return null;
        }

        if (! \Hash::check($fingerprint, $user->fingerprint)) {
            $user->is_active = false;
            $user->last_code_hash = \Hash::make(1234);
            $user->save();

            return null;
        }

        return $user;
    }

    /**
     * Find user by an email.
     * @param string $email Email
     * @return User|null
     */
    public function findByEmail($email)
    {
        $user = User::where(['email' => $email])->first();
        if (empty($user)) {
            return null;
        }

        return $user;
    }

    /**
     * Find user by an email.
     * @param $phone
     * @return User|null
     */
    public function findByPhone($phone)
    {
        $user = User::query()->where(['phone' => $phone])->first();
        if (empty($user)) {
            return null;
        }

        return $user;
    }

    /**
     * Find user by an email and a password.
     * @param string $email Email
     * @param string $password Password hash
     * @return User|null
     */
    public function findByEmailAndPassword($email, $password)
    {
        $user = User::where(['email' => $email, 'password' => $password])->first();
        if (empty($user)) {
            return null;
        }

        return $user;
    }
}
