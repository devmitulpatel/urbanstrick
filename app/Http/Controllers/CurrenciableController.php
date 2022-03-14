<?php

namespace App\Http\Controllers;

use App\Models\Currenciable;
use App\Http\Requests\StoreCurrenciableRequest;
use App\Http\Requests\UpdateCurrenciableRequest;

class CurrenciableController extends Controller
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
     * @param  \App\Http\Requests\StoreCurrenciableRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCurrenciableRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Currenciable  $currenciable
     * @return \Illuminate\Http\Response
     */
    public function show(Currenciable $currenciable)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Currenciable  $currenciable
     * @return \Illuminate\Http\Response
     */
    public function edit(Currenciable $currenciable)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCurrenciableRequest  $request
     * @param  \App\Models\Currenciable  $currenciable
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCurrenciableRequest $request, Currenciable $currenciable)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Currenciable  $currenciable
     * @return \Illuminate\Http\Response
     */
    public function destroy(Currenciable $currenciable)
    {
        //
    }
}
