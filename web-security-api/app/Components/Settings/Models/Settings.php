<?php

namespace App\Components\Settings\Models;

use App\Components\AbstractModel;

/**
 * Class Settings
 * @package App\Components\Log\Models
 */
class Settings extends AbstractModel
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
    public $timestamps = false;

    protected $attributes = [
        'hash_bundle' => null
    ];

}
