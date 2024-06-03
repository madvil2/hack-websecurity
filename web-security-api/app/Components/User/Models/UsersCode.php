<?php

namespace App\Components\User\Models;

use App\Components\AbstractModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class UsersCode
 * @package App\Components\User\Models
 */
class UsersCode extends AbstractModel
{
    protected $table = 'users_codes';

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
    ];

    /**
     * @var bool
     */
    public $timestamps = true;

    /**
     * @return BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
