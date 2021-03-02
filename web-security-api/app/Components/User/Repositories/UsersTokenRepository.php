<?php

namespace App\Components\User\Repositories;

use App\Components\User\Models\User;
use App\Components\User\Models\UsersToken;
use Illuminate\Database\Query\Expression;
use Illuminate\Support\Facades\Validator;

/**
 * Class UsersTokenRepository
 * @package App\Components\User\Repositories
 */
class UsersTokenRepository
{
    /**
     * Create a new user token.
     * Return an UsersToken object or null if token has not created.
     * @param User $user
     * @param integer $type
     * @param null $name
     * @return UsersToken|null
     */
    public function create(User $user, $type = UsersToken::TYPE_WEB)
    {
        $model = new UsersToken();
        $model->setAttribute('user_id', $user->id);
        $model->setRandomToken();
        $model->setAttribute('created_at', new \DateTime());
        $model->setAttribute('updated_at', new \DateTime());
        $model->setAttribute('expire_at', (new \DateTime())->modify($type == UsersToken::TYPE_WEB ? '+1 month' : '+50 year'));
        $model->setAttribute('type', $type);

        if (!$model->save()) {
            return null;
        }

        return UsersToken::find($model->id);
    }

    /**
     * Delete expired tokens.
     * @return null
     * @throws \Exception
     */
    public function clear()
    {
        UsersToken::where('expire_at', '<', \DB::raw('now()'))->delete();
    }

    /**
     * Try to find an existing and not expired token.
     * If that token is not exist create new one.
     *
     * @param User $user
     * @return UsersToken|null
     */
    public function getOrCreate(User $user)
    {
        $token = UsersToken::where('user_id', $user->id)->first();
        if (!empty($token)) {
            return $token;
        }

        return $this->create($user);
    }

    /**
     * Find an user token by ID.
     * @param integer $id User ID
     * @return UsersToken|null
     */
    public function findById($id)
    {
        return UsersToken::find($id);
    }
}
