<?php

namespace App\Repositories;

use App\Interfaces\RazorPay;
use App\Models\Order;

class PaymentRepository extends ModelRepositories
{

    public $defaultPaymentGateway=RazorPay::class;

    private $driver;

    public function create(array $data,Order $order)
    {
        $this->setRawData($data);
        $this->driver=new ($this->defaultPaymentGateway) () ;
        $this->driver->createOrder($this->getOrderData(),$order);
    }

    private function getOrderData(){
        return $this->getRawData();
    }

    public function update(mixed $model, array $data)
    {
        // TODO: Implement update() method.
    }

    public function delete(mixed $model)
    {
        // TODO: Implement delete() method.
    }
}
