<?php

namespace App\Http\Middleware;

use App\Http\Resources\ProductResource;
use App\Http\Resources\UserInertiaResource;
use App\Http\Resources\WishedProductResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    private function getSharedData($request){

        $data=[
            'auth' => [
                'user' => (auth()->check())?UserInertiaResource::make($request->user())->toArray($request):[],
                'wished'=>(auth()->check())?WishedProductResource::collection(auth()->user()->hasWished):[],
        //        'cart'=>(auth()->check())?ProductResource::collection(User::getCurrentUserCart())->toArray($request):[]
            ],
            'site'=>[
                'customer_care_email_1'=>envmix('site','support-email_1'),
                'customer_care_number_1'=>envmix('site','support-number-1'),
                'address'=>envmix('site','display-address-1'),
                'social'=>[
                    'instagram'=>envmix('social','instagram'),
                    'facebook'=>envmix('social','facebook')
                ]
            ],

        ];

        return $data;

    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {

        return array_merge(parent::share($request),$this->getSharedData($request) );
    }

    public function rootView(Request $request)
    {

        if (Str::startsWith($request->route()->getPrefix(),'test/admin')) {
            return 'layout.BackRoot';
        }
        return 'layout.FrontRoot';

       // return parent::rootView($request);
    }
}
