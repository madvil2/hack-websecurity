<?php

namespace App\Providers;

use App\Auth\UserTokenGuard;
use Auth;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Auth::extend('user-token', function ($app, $name, array $config) {
            return new UserTokenGuard(Auth::createUserProvider($config['provider']), $app->request);
        });
    }
}
