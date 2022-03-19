<?php

namespace App\Http\Controllers;

use App\Models\Addressable;
use App\Http\Requests\StoreAddressableRequest;
use App\Http\Requests\UpdateAddressableRequest;

class AddressableController extends Controller
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
     * @param  \App\Http\Requests\StoreAddressableRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAddressableRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Addressable  $addressable
     * @return \Illuminate\Http\Response
     */
    public function show(Addressable $addressable)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Addressable  $addressable
     * @return \Illuminate\Http\Response
     */
    public function edit(Addressable $addressable)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateAddressableRequest  $request
     * @param  \App\Models\Addressable  $addressable
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAddressableRequest $request, Addressable $addressable)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Addressable  $addressable
     * @return \Illuminate\Http\Response
     */
    public function destroy(Addressable $addressable)
    {
        //
    }
}
