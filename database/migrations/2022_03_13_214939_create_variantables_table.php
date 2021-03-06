<?php

use App\Models\VariantType;
use App\Models\VariantTypeValue;
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
        Schema::create('variantables', function (Blueprint $table) {
            able_model_schema($table,'variant');
            $table->unsignedBigInteger('parent_id');
            $table->foreignIdFor(VariantType::class);
            $table->foreignIdFor(VariantTypeValue::class);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('variantables');
    }
};
