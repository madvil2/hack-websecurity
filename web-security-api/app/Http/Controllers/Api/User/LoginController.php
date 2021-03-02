<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Components\User\Models\UsersToken;
use App\Components\User\Repositories\UserRepository;
use App\Components\User\Services\UserService;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

/**
 * Class LoginController
 * @package App\Http\Controllers\Api\User
 */
class LoginController extends Controller
{
    /**
     * @var UserService
     */
    protected $userService;

    /**
     * @var Request
     */
    protected $request;

    /**
     * LoginController constructor.
     * @param Request $request
     * @param UserService $userService
     */
    public function __construct(Request $request, UserService $userService)
    {
        $this->userService = $userService;
        $this->request = $request;
    }

    public function login()
    {
        $this->validate($this->request, [
            'phone' => 'required',
            'code' => 'required|min:3|max:64',
            'fingerprint' => 'required',
        ]);

        $phone = $this->request->input('phone');
        $code = $this->request->input('code');
        $fingerprint = $this->request->input('fingerprint');

        /**
         * @var @userService UserService
         */
        $userService = new UserService(new UserRepository());
        $user = $userService->login($phone, $code, $fingerprint);

        if ($user === null) {
            throw new BadRequestHttpException('The phone and/or the code are incorrect!');
        }

        /**
         * Retrive a new user token.
         * @var UsersToken $token
         */
        $token = $userService->createToken($user);

        $response = $user->toArray();
        $response['token'] = $token->toArray();

        return new JsonResponse($token->toArray(), 201);
    }

    /**
     * @throws \Illuminate\Validation\ValidationException
     * @throws \Exception
     */
    public function activate()
    {
        $this->validate($this->request, [
            'code' => 'required|min:3|max:10',
            'fingerprint' => 'required|string',
            'token' => 'required|string'
        ]);
        $code = $this->request->input('code');
        $token = $this->request->input('token');
        $fingerprint = $this->request->input('fingerprint');

        /**
         * @var @userService UserService
         */
        $userService = new UserService(new UserRepository());
        $user = $userService->activateUser($token, $code, $fingerprint);
        if ($user === null) {
            throw new BadRequestHttpException('The token and/or the code are incorrect!');
        }

        /**
         * Retrive a new user token.
         * @var UsersToken $token
         */
        $token = $userService->createToken($user);

        $response = $user->toArray();
        $response['token'] = $token->toArray();

        return new JsonResponse($response, 200);
    }

    /**
     * @return JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function generateCode()
    {
        $this->validate($this->request, [
            'phone' => 'required|regex:/\+\d{11}/',
        ]);
        $phone = $this->request->input('phone');
        $preparedPhone = (int)ltrim($phone, '+');
        /**
         * @var @userService UserService
         */
        $userService = new UserService(new UserRepository());
        $code = $userService->generateCode($preparedPhone);

        return new JsonResponse(['code' => $code], 201);
    }
}
