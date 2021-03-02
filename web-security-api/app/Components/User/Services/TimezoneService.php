<?php
namespace App\Components\User\Services;

use App\Components\Api\QueryBuilder\QueryBuilder;
use App\Components\User\Models\Timezone;
use App\Http\Request;

/**
 * Created by PhpStorm.
 * User: avshelestov
 * Date: 31/01/2017
 * Time: 17:33
 */

class TimezoneService
{
    /**
     * @var Timezone
     */
    private $model;

    /**
     * UserService constructor.
     * @param Timezone $model
     */
    public function __construct(Timezone $model)
    {
        $this->model = $model;
    }

    /**
     * Search Timezones
     * @param Request $request
     * @return QueryBuilder
     */
    public function search($request)
    {
        $query = new QueryBuilder($this->model, $request);
        return $query;
    }
}
