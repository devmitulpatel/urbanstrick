<?php

use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\CartableController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\FallbackController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RazorpayController;
use App\Http\Controllers\SubscriberController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\UserDashboardController;
use App\Http\Controllers\WishController;
use App\Mail\UserRequestedToGetAccount;
use App\Models\Pincode;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Http;
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


$controllers=[
    'dashboard'=>UserDashboardController::class,
    'payment'=>PaymentController::class,
    'order'=>OrderController::class
];



Route::post('/subscriber',[SubscriberController::class,'store'])->name('subscriber');


Route::prefix('test')->group(function () use ($controllers) {
    load_routes('front',$controllers);


    Route::get('/mail',function (){
        $user=\App\Models\User::find(1);
        return (new UserRequestedToGetAccount($user))->render();
    });
    Route::get('/logout',[AuthenticatedSessionController::class,'destroy']);
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
        Route::any('proceed-to-payment','proceedToPayment')->name('checkout_proceed_to_payment');
        Route::get('proceed-to-payment-direct','proceedToPaymentDirect')->name('checkout_proceed_to_payment_direct');
        //Route::get('proceed-to-payment','proceedToPaymentForNewCustomer')->name('checkout_proceed_to_payment_new_customer');
        Route::post('add-address','addAddress')->name('checkout_add_address');
    });

    require  __DIR__.'/admin.php';
    require __DIR__.'/auth.php';

    Route::fallback([LandingPageController::class,'notFound']);

});


Route::get('/pincode',function (){

    $base='https://api.data.gov.in/resource';
    $type='04cbe4b1-2f2b-4c39-a1d5-1c2e28bc0e32';
    $url=implode('/',[$base,$type]);
//    $query=[];
//
//    $querySet=[
//        'api-key'=>env('DATA_GOV_API_KEY'),
//        'pincode'=>'382007'
//    ];
//
//    foreach ($querySet as $k=>$v){
//        $query[]=implode('=',[$k,$v]);
//    }
//    $query=implode('&',$query);
//    $url=implode('/',[$base,$type.'?'.$query]);
//
    set_time_limit(0);
    $response = Http::withHeaders([
        'Accept'=>'application/json',
        'Content-Type'=>'application/json'
    ])->get($url, [
        'api-key'=>env('DATA_GOV_API_KEY'),
        'pincode'=>'382007',
        'limit'=>5000,
        'offset'=>150000
    ]);
    $data=$response->json();


    foreach ($data['records'] as $pincode){
        $foundPincode=\App\Models\Pincode::where('pincode',$pincode['pincode'])->count();
        if(
            ($pincode['districtname']!=null && strlen($pincode['districtname'])>0) &&
            ($pincode['statename']!=null && strlen($pincode['statename'])>0)
        ) {
            $foundPincode=\App\Models\Pincode::where('pincode',$pincode['pincode'])->count();
            if($foundPincode<1) {
                $newPincode = new \App\Models\Pincode();
                $newPincode->pincode = $pincode['pincode'];
                $newPincode->createCity(strtolower($pincode['districtname']), false);
                $newPincode->createState(strtolower($pincode['statename']), false);
                $newPincode->save();
            }
        }
    }
    dd($data);

});

Route::get('/pincode/{pincode}',function ($pincode){

    Pincode::with(['city','state'])->where('pincode','like',$pincode.'%')->get()->toArray();
    view('welcome');

});


Route::get('/',[FallbackController::class,'comingSoon'])->name('base');


