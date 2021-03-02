<?php

namespace App\Components\User\Models;

use App\Components\AbstractModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class UsersCode
 * @package App\Components\User\Models
 */
class UsersCards extends AbstractModel
{
    protected $table = 'users_cards';

    /**
     * @var array
     */
    protected $guarded = ['id'];

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
