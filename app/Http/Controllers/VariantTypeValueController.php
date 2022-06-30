<?php

namespace App\Http\Controllers;

use App\Models\VariantTypeValue;
use App\Http\Requests\StoreVariantTypeValueRequest;
use App\Http\Requests\UpdateVariantTypeValueRequest;

class VariantTypeValueController extends Controller
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
     * @param  \App\Http\Requests\StoreVariantTypeValueRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreVariantTypeValueRequest $request)
    {
        return $request->persist();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\VariantTypeValue  $variantTypeValue
     * @return \Illuminate\Http\Response
     */
    public function show(VariantTypeValue $variantTypeValue)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\VariantTypeValue  $variantTypeValue
     * @return \Illuminate\Http\Response
     */
    public function edit(VariantTypeValue $variantTypeValue)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateVariantTypeValueRequest  $request
     * @param  \App\Models\VariantTypeValue  $variantTypeValue
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateVariantTypeValueRequest $request, VariantTypeValue $variantTypeValue)
    {
        return $request->persist();
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\VariantTypeValue  $variantTypeValue
     * @return \Illuminate\Http\Response
     */
    public function destroy(VariantTypeValue $variantTypeValue)
    {
        //
    }
}
