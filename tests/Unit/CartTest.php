<?php

namespace Tests\Unit;

use App\Models\Cartable;
use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;


class CartTest extends TestCase
{



    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_CartTest_manage()
    {
        $user=User::first();
        $data=Product::all()->take(4);

        //dd($user->syncCart($data));
        $this->assertTrue(true);
    }
}
