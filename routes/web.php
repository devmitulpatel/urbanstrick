<?php

use App\Http\Controllers\FallbackController;
use App\Http\Controllers\SubscriberController;
use App\Http\Controllers\TestController;
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


Route::get('/test', function () {
    return Inertia::render('Front/LandingPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');
if((bool)envmix('site','up')){

   require implode(DIRECTORY_SEPARATOR,[__DIR__,'frontend.php']);
}else{
    Route::post('/subscriber',[SubscriberController::class,'store'])->name('subscriber');
    Route::get('/migrate',function (){
        $exitCode = Artisan::call('migrate:fresh', [
            '--force'=>true,'--seed'=>true
        ]);
        dd($exitCode);
    });
    Route::fallback([FallbackController::class,'comingSoon']);
}



//Route::get('test',[TestController::class,'index']);
//

require __DIR__.'/auth.php';
