<?php

use App\Models\DynamicData;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dynamic_data', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
           // $table->longText('value');
           // $table->enum('type', DynamicData::$typeOfValueDisplay)->default(DynamicData::$defaultTypeOfValueDisplay);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dynamic_data');
    }
};
