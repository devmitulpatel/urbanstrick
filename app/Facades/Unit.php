<?php

namespace App\Facades;

use App\Repositories\UnitRepository;
use Illuminate\Support\Facades\Facade;


class Unit extends Facade implements FacadeInterface
{

    public static function getFacadeAccessor()
    {
      return UnitRepository::class;
    }
}
