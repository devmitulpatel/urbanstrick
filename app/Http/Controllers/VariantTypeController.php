<?php

namespace App\Http\Controllers;

use App\Models\variantType;
use App\Http\Requests\StorevariantTypeRequest;
use App\Http\Requests\UpdatevariantTypeRequest;

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
     * @param  \App\Http\Requests\StorevariantTypeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorevariantTypeRequest $request)
    {
        return $request->persist();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\variantType  $variantType
     * @return \Illuminate\Http\Response
     */
    public function show(variantType $variantType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\variantType  $variantType
     * @return \Illuminate\Http\Response
     */
    public function edit(variantType $variantType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatevariantTypeRequest  $request
     * @param  \App\Models\variantType  $variantType
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatevariantTypeRequest $request, variantType $variantType)
    {
        return $request->persist();
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\variantType  $variantType
     * @return \Illuminate\Http\Response
     */
    public function destroy(variantType $variantType)
    {
        //
    }
}
