<?php

namespace App\Http\Controllers;

use App\Models\Inventoriable;
use App\Http\Requests\StoreInventoriableRequest;
use App\Http\Requests\UpdateInventoriableRequest;

class InventoriableController extends Controller
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
     * @param  \App\Http\Requests\StoreInventoriableRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreInventoriableRequest $request)
    {
        return $request->persist();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Inventoriable  $inventoriable
     * @return \Illuminate\Http\Response
     */
    public function show(Inventoriable $inventoriable)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Inventoriable  $inventoriable
     * @return \Illuminate\Http\Response
     */
    public function edit(Inventoriable $inventoriable)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateInventoriableRequest  $request
     * @param  \App\Models\Inventoriable  $inventoriable
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateInventoriableRequest $request, Inventoriable $inventoriable)
    {
        return $request->persist();
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Inventoriable  $inventoriable
     * @return \Illuminate\Http\Response
     */
    public function destroy(Inventoriable $inventoriable)
    {
        //
    }
}
