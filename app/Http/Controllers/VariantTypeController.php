<?php

namespace App\Http\Controllers;

use App\Models\VariantType;
use App\Http\Requests\StoreVariantTypeRequest;
use App\Http\Requests\UpdateVariantTypeRequest;

class VariantTypeController extends Controller
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
     * @param  \App\Http\Requests\StoreVariantTypeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreVariantTypeRequest $request)
    {
        return $request->persist();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\VariantType  $variantType
     * @return \Illuminate\Http\Response
     */
    public function show(VariantType $variantType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\VariantType  $variantType
     * @return \Illuminate\Http\Response
     */
    public function edit(VariantType $variantType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateVariantTypeRequest  $request
     * @param  \App\Models\VariantType  $variantType
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateVariantTypeRequest $request, VariantType $variantType)
    {
        return $request->persist();
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\VariantType  $variantType
     * @return \Illuminate\Http\Response
     */
    public function destroy(VariantType $variantType)
    {
        //
    }
}
