<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddAddressRequest;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\CreateAndBuyAccountRequest;
use App\Http\Requests\StoreOrderRequest;
use App\Models\Product;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CheckoutController extends Controller
{

    public function __construct(){
        $this->middleware('auth')->only(['proceedToPaymentForNewCustomer','checkout_proceed_to_payment_direct']);
    }
    public function index(Request $request){
        $data=[
            'cart'=>User::getCurrentUserCart()
        ];
//        if (auth()->check()){
//            return redirect()->route('checkout_proceed_to_payment_direct');
//        }
        return Inertia::render('Front/Checkout',$data);
    }

    public function composeAccountCreate(CreateAndBuyAccountRequest $request){

        return $request->persist();
    }

    public function proceedToPaymentDirect(Request $request){

        return $request->persist();
    }

    public function proceedToPayment(StoreOrderRequest $request){
        return $request->persist();
    }
    public function login(LoginRequest $request){
        $request->authenticate();
        $request->session()->regenerate();
        $data=[];
        return redirect()->route('checkout',$data);
    }

    public function addAddress(AddAddressRequest $request){
        return $request->persist(auth()->user(),'checkout');
    }

    public function proceedToPaymentForNewCustomer(Request $request){
        $userCart=auth()->user()->cart;
        $userAddress=auth()->user()->addresses->load(['address']);
        $itemsArray=$userCart->pluck('quantity','product_id')->toArray();
        $inCartProducts=Product::whereIn('id',array_keys($itemsArray))->get()->map(function ($ar){
            return product_map($ar);
        });
        $items=[];

        foreach ($inCartProducts as $product){
            $items['product']=$product->toArray();
            $items['qt']=$itemsArray[$product->id];
        }

        $items ='';
        $address ='';
        $request->mergeIfMissing(
            [
                'items'=>$items,
                'address'=>$address
            ]
        );



    }

}
