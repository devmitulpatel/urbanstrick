<?php

namespace App\Providers;



use App\Repositories\OrderRepository;
use App\Repositories\PaymentRepository;
use App\Repositories\ProductRepository;

use App\Repositories\UnitRepository;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Intervention\Image\Image;
use Intervention\Image\ImageManager;
use Plank\Mediable\Facades\ImageManipulator;
use Plank\Mediable\ImageManipulation;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(ProductRepository::class, function($app)
        {
            return new ProductRepository; // Name of your class, be sure to include the namespace if you are using one.
        });
        $this->app->singleton(UnitRepository::class, function($app)
        {
            return new UnitRepository; // Name of your class, be sure to include the namespace if you are using one.
        });
        $this->app->singleton(OrderRepository::class, function($app)
        {
            return new OrderRepository; // Name of your class, be sure to include the namespace if you are using one.
        });
        $this->app->singleton(PaymentRepository::class, function($app)
        {
            return new PaymentRepository; // Name of your class, be sure to include the namespace if you are using one.
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //Inertia::setRootView('app2');
        Schema::defaultStringLength(191);
        $this->app->bind(
            ImageManager::class,
            function() {
                return new ImageManager(['driver' => 'gd']);
            }
        );
        ImageManipulator::defineVariant(
            'thumbnail',
            ImageManipulation::make(function (Image $image) {
                $image->fit(32, 32);
            })
        );
        ImageManipulator::defineVariant(
            'thumb',
            ImageManipulation::make(function (Image $image) {
                $image->fit(263, 263);
            })
        );

        \URL::forceScheme('https');
    }
}
