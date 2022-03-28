<?php

namespace App\Facades;

use App\Repositories\ProductRepository;
use Illuminate\Support\Facades\Facade;


/**
 * @method static hasCategory(string[] $array)
 */
class Product extends Facade implements FacadeInterface
{

    public static function getFacadeAccessor() { return ProductRepository::class; }

}
