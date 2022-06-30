<?php

namespace App\Facades;

use App\Repositories\ProductRepository;
use Illuminate\Support\Facades\Facade;


/**
 * @method static hasCategory(string[] $array)
 * @method static createVariant($productModel, string $string, string $string1)
 */
class Product extends Facade implements FacadeInterface
{

    public static function getFacadeAccessor() { return ProductRepository::class; }

}
