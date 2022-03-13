<?php

namespace App\Providers;



use App\Repositories\ProductRepository;

use App\Repositories\UnitRepository;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //


        $this->app->singleton(ProductRepository::class, function($app)
        {
            return new ProductRepository; // Name of your class, be sure to include the namespace if you are using one.
        });
        $this->app->singleton(UnitRepository::class, function($app)
        {
            return new UnitRepository; // Name of your class, be sure to include the namespace if you are using one.
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        Schema::defaultStringLength(191);
    }
}
