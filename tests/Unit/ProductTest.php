<?php

namespace Tests\Unit;

use App\Facades\Product;
use App\Models\Country;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProductTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_product_repository_features()
    {


        $data=[
            'name'=>' test 1',
            'price'=>120,
            'currency'=>1,
            'taxcode'=>'dsdsd'
        ];

        $product=Product::create($data);

        $id=$product->id;
        $data2=[
            'name'=>'Test 2',
            'price'=>122
        ];
        Product::update($product,$data2);

        $product=$product->newInstance()->find($id);
        $condition1=$product->name==$data2['name'];
        $condition2=$product->prices->first()->price==$data2['price'];
        $this->assertTrue($condition1 && $condition2);
    }

    public function test_product_repository_variant_features(){

        //$productRepo=
        $product=\App\Models\Product::first();
        $newProductVariant =clone $product;

        $product->setRow($product);

        $product->createVariant($newProductVariant);
        dd($product);

    }
}
