<?php

namespace App\Auth;

use App\Components\User\Models\UsersCookie;
use App\Components\User\Repositories\UserRepository;
use Illuminate\Auth\GuardHelpers;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\Auth\UserProvider;

/**
 * Class UserTokenGuard
 * @package App\Auth
 */
class UserTokenGuard implements Guard
{
    use GuardHelpers;

    /**
     * The request instance.
     *
     * @var \Illuminate\Http\Request
     */
    protected $request;

    /**
     * The name of the query string item from the request containing the API token.
     *
     * @var string
     */
    protected $inputKey;

    /**
     * The name of the token "column" in persistent storage.
     *
     * @var string
     */
    protected $storageKey;

    /**
     * Create a new authentication guard.
     *
     * @param  \Illuminate\Contracts\Auth\UserProvider $provider
     * @param  \Illuminate\Http\Request $request
     */
    public function __construct(UserProvider $provider, Request $request)
    {
        $this->request = $request;
        $this->provider = $provider;
        $this->inputKey = 'user-token';
        $this->storageKey = 'user-token';
    }

    /**
     * Get the currently authenticated user.
     *
     * @return \Illuminate\Contracts\Auth\Authenticatable|null
     * @throws \Exception
     */
    public function user()
    {
        // If we've already retrieved the user for the current request we can just
        // return it back immediately. We do not want to fetch the user data on
        // every call to this method because that would be tremendously slow.
        if (! is_null($this->user)) {
            return $this->user;
        }

        $user = null;
        $token = $this->getTokenForRequest();
        $fingerprint = $this->getFingerprintForRequest();
        if (! empty($token)) {
            $user = (new UserRepository())->findByTokenAndFingerPrint($token, $fingerprint);
        }
        if ($user && $user->is_active) {
            $this->user = $user;
        }

        return $this->user;
    }

    /**
     * Get the token for the current request.
     *
     * @return string
     */
    public function getTokenForRequest()
    {
        $token = null;
        $header = $this->request->header('User-Token');
        if (! empty($header)) {
            if (preg_match("!^([a-z0-9]{64})$!i", $header, $matches)) {
                $token = $matches[1];
            }
        } elseif ($this->request->get('user-token') !== null) {
            $token = $this->request->get('user-token');
        } elseif ($this->request->hasHeader('Authorization')) {
            if (preg_match("!^Bearer\s+([a-z0-9]{60,64})$!i", $this->request->header('Authorization'), $matches)) {
                $token = $matches[1];
            }
        } else {
            $token = \Crypt::decrypt($this->request->cookie(UsersCookie::COOKIE_NAME_USER_TOKEN));
        }

        return $token;
    }

    /**
     * @return bool|string
     */
    public function getFingerprintForRequest()
    {
        $fingerprint = $this->request->header('Fingerprint');
        if (! empty($fingerprint)) {
            return $fingerprint;
        }

        return false;
    }

    /**
     * Validate a user's credentials.
     *
     * @param  array  $credentials
     * @return bool
     */
    public function validate(array $credentials = [])
    {
        return true;
    }

    /**
     * Set the current request instance.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return $this
     */
    public function setRequest(Request $request)
    {
        $this->request = $request;

        return $this;
    }
}
