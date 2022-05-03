<?php

namespace App\Http\Controllers;

use App\Http\Requests\CheckoutCartRequest;
use App\Models\Cartable;
use App\Http\Requests\StoreCartableRequest;
use App\Http\Requests\UpdateCartableRequest;
use Inertia\Inertia;

class CartableController extends Controller
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
     * @param  \App\Http\Requests\StoreCartableRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCartableRequest $request)
    {
        return $request->persist();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cartable  $cartable
     * @return \Illuminate\Http\Response
     */
    public function show(Cartable $cartable)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cartable  $cartable
     * @return \Illuminate\Http\Response
     */
    public function edit(Cartable $cartable)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCartableRequest  $request
     * @param  \App\Models\Cartable  $cartable
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCartableRequest $request, Cartable $cartable)
    {
        return $request->persist();
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cartable  $cartable
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cartable $cartable)
    {
        //
    }


}
