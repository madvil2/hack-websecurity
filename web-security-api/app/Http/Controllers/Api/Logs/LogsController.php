<?php
namespace App\Http\Controllers\Api\Logs;

use App\Components\Log\Models\Log;
use App\Components\User\Models\User;
use App\Http\Controllers\Controller;
use App\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Class LogsController
 * @package App\Http\Controllers\Api\Logs
 */
class LogsController extends Controller
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
     * @param Request $request
     * @return JsonResponse
     */
    public function getPaginationList(Request $request)
    {
        $list = Log::query()->limit(20)->orderByDesc('id')->get();
        return new JsonResponse($list, 200);
    }

    /**
     * @return JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function addLog()
    {
        $this->validate($this->request, [
            'user-agent' => 'required|string',
            'log' => 'required|string',
        ]);

        $userAgent = $this->request->input('user-agent');
        $log = $this->request->input('log');
        $fingerprint = $this->request->header('Fingerprint');
        $ip = $this->request->ip();

        $model = new Log();
        $model->user_id = auth()->user()->id;
        $model->user_agent = $userAgent;
        $model->request_log = $log;
        $model->fingerprint = $fingerprint;
        $model->ip = $ip;
        $model->save();

        return new JsonResponse($model, 201);
    }
}
