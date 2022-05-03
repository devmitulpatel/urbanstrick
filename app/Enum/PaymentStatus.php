<?php

namespace App\Enum;

enum  PaymentStatus :int
{
    case Initiated = 1;
    case Attempted = 2;
    case Pending = 3;
    case Failed = 4;
}
