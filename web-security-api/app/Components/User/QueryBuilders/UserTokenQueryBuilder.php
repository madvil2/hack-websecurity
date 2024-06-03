<?php
namespace App\Components\User\QueryBuilders;

use App\Components\Api\QueryBuilder\QueryBuilder;
use App\Components\User\Models\UsersToken;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class UserTokenQueryBuilder extends QueryBuilder
{
    protected $excludedParameters = ['user_id', 'type'];

    public function __construct(Model $model, Request $request, int $userId)
    {
        parent::__construct($model, $request);

        $this->query->where('user_id', $userId);
        $this->query->where('type', UsersToken::TYPE_API);
    }
}
