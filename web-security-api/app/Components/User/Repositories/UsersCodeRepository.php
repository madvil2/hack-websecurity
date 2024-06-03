<?php

namespace App\Components\User\Repositories;

use App\Components\User\Models\User;
use App\Components\User\Models\UsersCode;
use App\Components\User\Models\UsersToken;
use Illuminate\Database\Query\Expression;
use Illuminate\Support\Facades\Validator;

/**
 * Class UsersCodeRepository
 * @package App\Components\User\Repositories
 */
class UsersCodeRepository
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
        $model = new UsersCode();
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

    public function getLast()
    {

    }
}
