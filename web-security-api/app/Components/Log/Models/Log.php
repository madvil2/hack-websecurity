<?php

namespace App\Components\Log\Models;

use App\Components\AbstractModel;

/**
 * Class Log
 * @package App\Components\User\Models
 */
class Log extends AbstractModel
{
    /**
     * @var array
     */
    protected $guarded = ['id'];

    /**
     * @var array
     */
    public $hidden = ['id'];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = true;

    protected $casts = [
        'request_log' => 'json'
    ];
}
