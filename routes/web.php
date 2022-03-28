<?php

use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\FallbackController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SubscriberController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\UserDashboardController;
use App\Mail\UserRequestedToGetAccount;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




//Route::get('/account',)

Route::post('/subscriber',[SubscriberController::class,'store'])->name('subscriber');
Route::get('/migrate',function (){
    $exitCode = Artisan::call('migrate:fresh', [
        '--force'=>true,'--seed'=>true
    ]);
    dd($exitCode);
});
Route::get('/storage_link',function (){
    $exitCode = Artisan::call('storage:link');
    dd($exitCode);
});
//Route::fallback([FallbackController::class,'comingSoon']);


//Route::get('test',[TestController::class,'index']);
//



Route::prefix('test')->group(function (){

    Route::get('/mail',function (){
        $user=\App\Models\User::find(1);
        return (new UserRequestedToGetAccount($user))->render();
    });
    Route::get('/', [LandingPageController::class,'index'])->name('home');
    Route::get('/404', [LandingPageController::class,'error404'])->name('error_404');
    Route::get('/shopping-cart', [LandingPageController::class,'cart'])->name('cart');
    Route::get('/cloths/{type}', [LandingPageController::class,'productList'])->name('product_list');
    Route::get('/cloths/tshirt/{name}', [LandingPageController::class,'productPage'])->name('product_page');
    Route::get('privacy-policy', [LandingPageController::class,'privacyPolicy'])->name('privacy_policy');

    Route::get('create-account/{user}',[LandingPageController::class,'createAccount'])->name('createUserPassword');
    Route::post('create-account/{user}',[LandingPageController::class,'setAccountPassword']);

    Route::controller(UserDashboardController::class)->prefix('dashboard')->as('user.dashboard.')->group(function (){
        Route::get('/','index')->name('home');
        Route::post('/update/{user}','updateUserData')->name('updateUser');
        Route::post('/add/address/{user}','addAddress')->name('addAddress');
    });

    Route::prefix('admin/dashboard')->as('admin.dashboard.')->group(function(){

        Route::controller(AdminDashboardController::class)->group(function (){
            Route::get('/','index')->name('home');
            Route::get('/product','product')->name('product');
            Route::get('/order','index')->name('order');
            Route::get('/stock','index')->name('stock');
        });

        Route::controller(ProductController::class)->prefix('product')->as('product.')->group(function (){
            Route::get('create','create')->name('create');
        });

    });

    require __DIR__.'/auth.php';

    Route::fallback([LandingPageController::class,'notFound']);

});

Route::get('/',[FallbackController::class,'comingSoon'])->name('base');


//require __DIR__.'/auth.php';
