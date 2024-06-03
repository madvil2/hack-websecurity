<?php

namespace App\Exceptions;

use App\Http\JsonResponse;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\RedirectResponse;
use Illuminate\Session\TokenMismatchException;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;
use Illuminate\Http\Request;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        AuthenticationException::class,
        AuthorizationException::class,
        HttpException::class,
        ModelNotFoundException::class,
        TokenMismatchException::class,
        ValidationException::class,
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Throwable  $exception
     * @return void
     *
     * @throws \Throwable
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $exception)
    {
        $code = Response::HTTP_INTERNAL_SERVER_ERROR;
        $messages = [$exception->getMessage()];

        if ($exception instanceof ModelNotFoundException || $exception instanceof NotFoundHttpException) {
            $code = Response::HTTP_NOT_FOUND;
        } elseif ($exception instanceof MethodNotAllowedHttpException) {
            $code = Response::HTTP_METHOD_NOT_ALLOWED;
        } elseif ($exception instanceof ValidationException) {
            $code = Response::HTTP_BAD_REQUEST;
            $messages = $exception->validator->errors();
        } elseif ($exception instanceof FingerPrintException) {
            $code = Response::HTTP_PRECONDITION_FAILED;
        } elseif ($exception instanceof AuthenticationException) {
            $code = Response::HTTP_FORBIDDEN;
        } elseif ($exception instanceof HttpException) {
            $code = $exception->getStatusCode();
        }

        if ($code == 0) {
            $code = Response::HTTP_BAD_REQUEST;
        }

        $errorData = [
            'status' => $code,
            'errors' => $messages
        ];

        return response()->json($errorData, $code);
    }

    /**
     * Convert an authentication exception into an unauthenticated response.
     *
     * @param  Request $request
     * @param AuthenticationException   $exception
     * @return JsonResponse|RedirectResponse|\Illuminate\Http\Response
     */
    protected function unauthenticated($request, AuthenticationException $exception)
    {
        return response()->json(['error' => 'Unauthenticated.666'], $code = Response::HTTP_UNAUTHORIZED);
    }
}
