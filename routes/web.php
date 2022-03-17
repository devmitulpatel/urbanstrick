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

    $getUrl=function ($map){

        $map->setAttribute('url',$map->media->first()->getUrl());

        return$map;};
    $topProduct=\App\Models\Product::with(['media'])->whereIn('id',[1,2])->get()->map($getUrl);
    $specialProduct=\App\Models\Product::with(['media'])->whereIn('id',[3,4])->get()->map($getUrl);
    $mostView=\App\Models\Product::with(['media'])->whereIn('id',[5,6])->get()->map($getUrl);
    return Inertia::render('Front/LandingPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'topProduct'=>$topProduct,
        'specialProduct'=>$specialProduct,
        'mostView'=>$mostView,
    ]);
})->name('home');


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
Route::fallback([FallbackController::class,'comingSoon']);


//Route::get('test',[TestController::class,'index']);
//

require __DIR__.'/auth.php';
