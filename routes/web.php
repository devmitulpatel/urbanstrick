<?php

use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\CartableController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\FallbackController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RazorpayController;
use App\Http\Controllers\SubscriberController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\UserDashboardController;
use App\Http\Controllers\WishController;
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
    Route::get('404', [LandingPageController::class,'error404'])->name('error_404');
    Route::get('shopping-cart', [LandingPageController::class,'cart'])->name('cart');
    Route::get('cloths/{type:slug}', [LandingPageController::class,'productList'])->name('product_list');
    Route::get('cloths/tshirt/{name}', [LandingPageController::class,'productPage'])->name('product_page');
    Route::get('privacy-policy', [LandingPageController::class,'privacyPolicy'])->name('privacy_policy');
    Route::get('about-us', [LandingPageController::class,'aboutUs'])->name('about-us');
    Route::get('contact-us', [LandingPageController::class,'contactUs'])->name('contact_us');
    Route::post('contact-us', [ContactUsController::class,'store']);
    Route::post('wish/store', [WishController::class,'store'])->name('wish.store');
    Route::post('wish/destroy/{wish}', [WishController::class,'destroy'])->name('wish.destroy');


    Route::get('razorpay', [RazorpayController::class, 'razorpay'])->name('razorpay');
    Route::post('razorpaypayment', [RazorpayController::class, 'payment'])->name('payment');

    Route::get('create-account/{user}',[LandingPageController::class,'createAccount'])->name('createUserPassword');
    Route::post('create-account/{user}',[LandingPageController::class,'setAccountPassword']);

    Route::post('update-cart',[CartableController::class,'store'])->name('update_cart');

    Route::controller(CheckoutController::class)->prefix('checkout')->group(function (){
        Route::get('/','index')->name('checkout');
        Route::post('create-account','composeAccountCreate')->name('checkout_account_create');
        Route::post('login','login')->name('checkout_login');
        Route::post('proceed-to-payment','proceedToPayment')->name('checkout_proceed_to_payment');
        Route::get('proceed-to-payment','proceedToPaymentForNewCustomer')->name('checkout_proceed_to_payment_new_customer');
        Route::post('add-address','addAddress')->name('checkout_add_address');
    });

    Route::controller(PaymentController::class)->prefix('payment')->as('payment.')->group(function (){
        Route::post('store','store')->name('store');
    });


    Route::controller(UserDashboardController::class)->prefix('dashboard')->as('user.dashboard.')->group(function (){
        Route::get('/','index')->name('home');
        Route::post('update/{user}','updateUserData')->name('updateUser');
        Route::post('add/address/{user}','addAddress')->name('addAddress');
    });

    Route::prefix('admin/dashboard')->as('admin.dashboard.')->group(function(){
        Route::controller(AdminDashboardController::class)->group(function (){
            Route::get('/','index')->name('home');
            Route::get('product','product')->name('product');
            Route::get('order','order')->name('order');
            Route::get('stock','index')->name('stock');
        });

        Route::controller(ProductController::class)->prefix('product')->as('product.')->group(function (){
            Route::get('create','create')->name('create');
        });

    });

    require __DIR__.'/auth.php';

    Route::fallback([LandingPageController::class,'notFound']);

});

Route::get('/',[FallbackController::class,'comingSoon'])->name('base');

Route::get('/loginas/{id?}',function ($id=1){auth()->loginUsingId($id);});

//require __DIR__.'/auth.php';
