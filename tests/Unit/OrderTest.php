<?php

namespace Tests\Unit;



use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class OrderTest extends TestCase
{

    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_OrderTest_manage()
    {

        dd(Product::all());

        $order=[
            'items'=>[],
            'coupons'=>[],
            'address'=>[


            ],
        ];

dd($order);
        $this->assertTrue(true);
    }
}
