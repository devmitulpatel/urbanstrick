<?php

namespace App\Http\Controllers;

use App\Models\Priceable;
use App\Http\Requests\StorePriceableRequest;
use App\Http\Requests\UpdatePriceableRequest;

class PriceableController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePriceableRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePriceableRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Priceable  $priceable
     * @return \Illuminate\Http\Response
     */
    public function show(Priceable $priceable)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Priceable  $priceable
     * @return \Illuminate\Http\Response
     */
    public function edit(Priceable $priceable)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePriceableRequest  $request
     * @param  \App\Models\Priceable  $priceable
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePriceableRequest $request, Priceable $priceable)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Priceable  $priceable
     * @return \Illuminate\Http\Response
     */
    public function destroy(Priceable $priceable)
    {
        //
    }
}
