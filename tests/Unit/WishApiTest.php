<?php

namespace Tests\Unit;


use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Models\User;
use App\Models\Wish;
use Illuminate\Foundation\Testing\Concerns\InteractsWithSession;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class WishApiTest extends TestCase
{

    use RefreshDatabase;
    use InteractsWithSession;
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_WishApiTest_manage()
    {

        $user = User::first();
        $productData=Product::first();


        $this
            ->post(route('wish.store'),['product_id'=>$productData->id,'redirectTo'=>'home'])
            ->assertRedirect(route('login',['redirectTo'=>route('wish.store')]));
//        $this->post(route('wish.destroy'),['product_id'=>$productData->id,'redirectTo'=>'home'])
//            ->assertStatus(302);

        auth()->loginUsingId($user->id);
        $this->actingAs($user);

        $this->post(route('wish.store'),['product_id'=>$productData->id,'redirectTo'=>'home'])
            ->assertStatus(302);

        $wish=Wish::first();
        $this->actingAs($user);
        $this->post(route('wish.destroy',['wish'=>$wish]),['product_id'=>$productData->id,'redirectTo'=>'home'])
            ->assertStatus(302)
        ;

        $this->assertTrue(true);
    }


    private function checkCustomerLoggedIn(){

    }
}
