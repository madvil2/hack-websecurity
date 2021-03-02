<?php

namespace App\Components\User\Services;

use App\Components\User\Models\User;
use App\Components\User\Models\UsersCookie;
use App\Components\User\Models\UsersToken;
use App\Components\User\QueryBuilders\UserTokenQueryBuilder;
use App\Components\User\Repositories\UserRepository;
use App\Components\User\Repositories\UsersTokenRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

/**
 * Class UserService
 * @package App\Components\User\Services
 */
class UserService
{
    /**
     * @var UserRepository
     */
    private $users;

    /**
     * UserService constructor.
     * @param UserRepository $users
     */
    public function __construct(UserRepository $users)
    {
        $this->users = $users;
    }

    /**
     * @param $phone
     * @return null
     */
    public function generateCode($phone)
    {
        /**
         * @var $user User
         */
        $user = $this->users->findByPhone($phone);
        if (empty($user)) {
            return null;
        }
        $code = mt_rand(1111, 9999);
        $user->last_code_hash = Hash::make($code);
        $user->save();

        return $code;
    }

    /**
     * Login.
     * @param $phone
     * @param $code
     * @param $fingerprint
     * @return User|null
     */
    public function login($phone, $code, $fingerprint)
    {
        $user = $this->users->findByPhone($phone);
        if (empty($user)) {
            return null;
        }

        if (! Hash::check($code, $user->last_code_hash)) {
            return null;
        }
        $user->last_code_hash = null;
        $user->fingerprint = Hash::make($fingerprint);
        $user->is_active = true;
        $user->save();

        $this->refreshCookie($user);

        return $user;
    }

    /**
     * @param $token
     * @param $code
     * @return User|null
     * @throws \Exception
     */
    public function activateUser($token, $code, $fingerprint)
    {
        $user = $this->users->findByToken($token);
        if (empty($user)) {
            return null;
        }
        if ($user->is_active) {
            return $user;
        }
        if (! $user->last_code_hash) {
            return null;
        }
        if (! Hash::check($code, $user->last_code_hash)) {
            return null;
        }
        $user->last_code_hash = null;
        $user->fingerprint = Hash::make($fingerprint);
        $user->is_active = true;
        $user->save();

        return $user;
    }

    /**
     * Logout
     */
    public function logout()
    {
        UsersCookie::invalidateToken();
    }

    public function refreshCookie(User $user)
    {
        $token = $this->createToken($user);
        UsersCookie::setToken($token);
    }

    /**
     * Create a new user token.
     * @param User $user User
     * @param integer  $type Token Type
     * @param null $name Token Name
     * @return UsersToken
     */
    public function createToken(User $user, $type = UsersToken::TYPE_WEB, $name = null)
    {
        $tokenRepository = new UsersTokenRepository();
        $token = $tokenRepository->create($user, $type, $name);

        return $token;
    }

    /**
     * Delete a token by ID
     * @param User   $user  User
     * @param string $token Token
     * @return bool|null
     * @throws \Exception
     */
    public function deleteToken(User $user, $token)
    {
        $token = UsersToken::query()->where('token', $token)->first();
        if (empty($token) || $token->user_id !== $user->id) {
            return false;
        }

        return $token->delete();
    }

    /**
     * @param Request $request
     * @param integer     $accountId
     * @return UserTokenQueryBuilder
     */
    public function searchTokensForAccount(Request $request, int $accountId)
    {
        $query = new UserTokenQueryBuilder(new UsersToken(), $request, $accountId);

        return $query;
    }
}
