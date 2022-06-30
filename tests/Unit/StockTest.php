<?php

namespace Tests\Unit;

use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;


class StockTest extends TestCase
{

    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_StockTest_manage()
    {

        $products=Product::all();
        foreach ($products as $product){
            $n=10000;
            foreach (range(0,$n) as $k){
                $product->addStock(1);
            }
            $this->printToConsole(implode(' ',['Number Inward entry',$n,'added to table Interconvertible']));
            $this->assertTrue($product->getStock()==$n+2);
            $this->printToConsole(implode(' ',['Stock Check Successfully  tested']));
            foreach (range(0,$n) as $k){
                $product->removeStock(1);
            }
            $this->printToConsole(implode(' ',['Number Outward entry',$n,'added to table Interconvertible']));
            $product->refresh();
            $this->printToConsole(implode(' ',['current:',$product->getStock()]));
            $this->assertTrue($product->getStock()==1);
            $this->printToConsole(implode(' ',['Stock Check Successfully  tested']));
            $product->removeStock(2);
            $product->refresh();
            $this->assertTrue($product->getRequiredStock()==1);
            $this->printToConsole(implode(' ',['Require Stock Check Successfully  tested']));
        }


        $this->assertTrue(true);
    }
}
