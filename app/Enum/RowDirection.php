<?php

namespace App\Enum;

enum  RowDirection :string
{
    case In = '+';
    case Out = '-';
    case InInverse = '-';
    case OutInverse = '+';

}
