<?php

namespace App\Components\User\Models;

use App\Components\AbstractModel;

/**
 * @property integer $id ID
 * @property integer $user_id User ID
 * @property string $token Token
 * @property string $created_at Create date and time
 * @property string $updated_at Last update date and time
 * @property string $expire_at Expiration date and time
 * @property integer $type Type (0 - web, 1 - api)
 * @property string $name Name
 * @property User $user
 */
class UsersToken extends AbstractModel
{
    const TYPE_WEB = 0;
    const TYPE_API = 1;

    /**
     * @var array
     */
    protected $fillable = ['user_id', 'token', 'created_at', 'updated_at', 'expire_at', 'name', 'type'];

    /**
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
        'expire_at',
    ];

    /**
     * @var bool
     */
    public $timestamps = true;

    /**
     * @var array
     */
    public $visible = ['token', 'expire_at', 'name'];

    /**
     * Validation rules
     * @var array
     */
    public $rules = [
        'user_id' => 'required|numeric',
        'token' => 'required|string|min:64:max:64',
        'created_at' => 'required|date',
        'updated_at' => 'required|date',
        'expire_at' => 'required|date',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\Components\User\Models\User');
    }

    /**
     * Set a random token.
     * @return void
     */
    public function setRandomToken()
    {
        $alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        $pass = array(); //remember to declare $pass as an array
        $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
        for ($i = 0; $i < 64; $i++) {
            $n = rand(0, $alphaLength);
            $pass[] = $alphabet[$n];
        }

        $this->token = implode($pass);
    }
}
