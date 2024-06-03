<?php

namespace App\Http\Controllers\Api\Settings;

use App\Components\Settings\Models\Settings;
use App\Http\Controllers\Controller;
use App\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Class LoginController
 * @package App\Http\Controllers\Api\User
 */
class SettingsController extends Controller
{
    /**
     * @var Request
     */
    protected $request;

    /**
     * LoginController constructor.
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     *
     */
    public function add()
    {
        $this->validate($this->request, [
            'hash_bundle' => 'string',
        ]);

        $hashBundle = $this->request->input('hash_bundle');

        $model = Settings::query()->first();
        if (! $model) {
            $model = new Settings();
        }
        $model->hash_bundle = $hashBundle;
        $model->save();

        return new JsonResponse($model, 200);
    }

    /**
     *
     */
    public function get()
    {
        $model = Settings::query()->first();
        return new JsonResponse($model, 200);
    }
}