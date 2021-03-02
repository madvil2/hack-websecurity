<?php

namespace App\Components\User\Models;

use App\Components\AbstractModel;

/**
 * @property integer $id ID
 * @property string $country_code Country Code
 * @property string $timezone Time zone name
 * @property float $gmt_offset_winter GMT offset 1. Jan 2018
 * @property float $gmt_offset_summer DST offset 1. Jul 2018
 * @property float $gmt_offset_raw rawOffset (independant of DST)
 */
class Timezone extends AbstractModel
{
    /**
     * @var array
     */
    protected $fillable = ['country_code', 'timezone', 'gmt_offset_winter', 'gmt_offset_summer', 'gmt_offset_raw'];

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
}
