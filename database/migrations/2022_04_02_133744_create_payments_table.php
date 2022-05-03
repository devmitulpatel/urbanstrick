<?php

use App\Enum\PaymentStatus;
use App\Models\Order;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

     public function __construct()
     {
            $this->table = 'payments';
     }
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->table, function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Order::class);

            $table->unsignedBigInteger('amount')->default(0);
            $table->unsignedBigInteger('fees')->default(0);
            $table->string('payment_ref_no')->nullable();
            $table->enum('status',enum(PaymentStatus::class))->default(PaymentStatus::Initiated->value);
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
        Schema::dropIfExists($this->table);
    }
};
