<?php
namespace App\Http\Controllers\Api\User;

use App\Components\User\Models\User;
use App\Http\Controllers\Controller;
use App\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * @apiName Profile
     * @apiGroup User
     * @apiDescription Return a user profile.
     * @apiMethod GET
     * @apiUrl /v1/user
     *
     * @apiHeader string Authorization Authorization token.
     * @apiHeadersExample
     * Authorization: Bearer XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
     *
     * @apiResponse
     * {
     *      "status": 200,
     *      "data": {
     *          "id": 5,
     *          "login": "avshelestov22456",
     *          "first_name": null,
     *          "last_name": null,
     *          "email": "a25462@shelestov.com",
     *          "roles": [
     *              {
     *                  "role": 1
     *              }
     *          ]
     *      }
     *}
     *
     * @apiReturn integer id User ID
     * @apiReturn string login Login (username)
     * @apiReturn string first_name First name
     * @apiReturn string last_name Last name
     * @apiReturn string email Email
     * @apiReturn array roles Roles witch the user have.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function profile(Request $request)
    {
        /**
         * @var User $user
         */
        $user = $request->user();
        $response = $user->toArray();

        return new JsonResponse($response, 200);
    }
}
