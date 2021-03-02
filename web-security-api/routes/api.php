<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(['prefix' => 'v1', 'namespace' => 'Api', 'middleware' => ['bindings']], function () {

    /** AUTH **/
    Route::group(['prefix' => 'auth', 'namespace' => 'User'], function () {
        Route::post('generate-code', 'LoginController@generateCode');
        Route::post('login', 'LoginController@login');
        Route::post('activate', 'LoginController@activate');

        Route::group(['middleware' => 'auth:api-user'], function () {
            Route::get('profile', 'UserController@profile');
        });
    });

    Route::group(['prefix' => 'logs', 'middleware' => 'auth:api-user', 'namespace' => 'Logs'], function() {
        Route::get('', 'LogsController@getPaginationList');
        Route::post('', 'LogsController@addLog');
    });

    Route::group(['prefix' => 'transactions', 'middleware' => 'auth:api-user', 'namespace' => 'Transactions'], function() {
        Route::post('', 'TransactionsController@add');
        Route::get('', 'TransactionsController@getPaginationList');
    });

    Route::group(['prefix' => 'settings', 'middleware' => 'auth:api-user', 'namespace' => 'Settings'], function() {
        Route::post('', 'SettingsController@add');
        Route::get('', 'SettingsController@get');
    });
});
