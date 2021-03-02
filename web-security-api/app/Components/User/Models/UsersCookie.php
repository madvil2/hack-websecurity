<?php
namespace App\Components\User\Models;

use Illuminate\Support\Facades\Cookie;

class UsersCookie
{
    const COOKIE_NAME_USER_TOKEN = 'token';
    const COOKIE_SESSION_NAME = 'session';

    /**
     * Set an user token.
     * @param UsersToken $token
     */
    public static function setToken(UsersToken $token)
    {
        $cookie = Cookie::make(self::COOKIE_NAME_USER_TOKEN, $token->token, 60 * 24 * 30, '/', config('app.cookie_domain'), config('app.cookie_secure'), true, false);
        Cookie::queue($cookie);
    }

    /**
     * Returns a token
     * @return string
     */
    public static function getToken()
    {
        return Cookie::get(self::COOKIE_NAME_USER_TOKEN);
    }

    /**
     * Invalidate a token
     */
    public static function invalidateToken()
    {
        $cookie = Cookie::forget(self::COOKIE_NAME_USER_TOKEN, '/', config('app.cookie_domain'));
        Cookie::queue($cookie);
    }
}
