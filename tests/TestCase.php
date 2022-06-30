<?php

namespace Tests;

use Illuminate\Foundation\Testing\LazilyRefreshDatabase;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication,LazilyRefreshDatabase;
    protected $seed = true;

    public function printToConsole($text){
        fwrite(STDERR, print_r(implode(' ',[$text,'\r\n']), TRUE));
    }
}
