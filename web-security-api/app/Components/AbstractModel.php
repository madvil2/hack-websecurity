<?php

namespace App\Components;

use App\Components\Api\QueryBuilder\Exceptions\BadRequestException;
use Illuminate\Database\Eloquent\Model;

/**
 * Class AbstractModel
 * @package App\Components
 * @method static find($id)
 */
abstract class AbstractModel extends Model
{
    public $aliases;

    /**
     * @var array Visible default columns api
     */
    public $defaultColumns = [];

    /**
     * @var array
     */
    public $hiddenColumns = [];

    /**
     * @param $attributes
     * @return $this
     */
    public function makeDefaultColumns($attributes)
    {
        $this->defaultColumns = array_merge($this->defaultColumns, (array) $attributes);

        return $this;
    }

    /**
     * @param $attributes
     * @return $this
     */
    public function makeHiddenColumns($attributes)
    {
        $this->hiddenColumns = array_merge($this->hiddenColumns, (array) $attributes);

        return $this;
    }

    /**
     * @return array
     */
    public function toArray()
    {
        if (!empty($this->defaultColumns)) {
            $this->makeVisible($this->defaultColumns);
        }
        if (!empty($this->hiddenColumns)) {
            $this->makeHidden($this->hiddenColumns);
        }

        return parent::toArray();
    }

    /**
     * Routes binding
     * Rewrites default routes binding function for Eloquent models, add acoount_id if exists in fields
     *
     * @param mixed $value
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Model|object|null
     * @throws BadRequestException
     */
    /*public function resolveRouteBinding($value)
    {
        if (in_array('account_id', $this->fillable) || in_array('account_id', $this->hidden)) {
            $authUser = auth()->user();
            if (!$authUser) {
                throw new BadRequestException(null, 403);
            }

            return $this->where([$this->getRouteKeyName() => $value, 'account_id' => $authUser->account_id])->first() ?? abort(404);
        } else {
            return parent::resolveRouteBinding($value);
        }
    }*/
}
