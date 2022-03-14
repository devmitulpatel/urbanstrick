<?php

namespace App\Http\Controllers;

use App\Models\Countriable;
use App\Http\Requests\StoreCountriableRequest;
use App\Http\Requests\UpdateCountriableRequest;

class CountriableController extends Controller
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
     * @param  \App\Http\Requests\StoreCountriableRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCountriableRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Countriable  $countriable
     * @return \Illuminate\Http\Response
     */
    public function show(Countriable $countriable)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Countriable  $countriable
     * @return \Illuminate\Http\Response
     */
    public function edit(Countriable $countriable)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCountriableRequest  $request
     * @param  \App\Models\Countriable  $countriable
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCountriableRequest $request, Countriable $countriable)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Countriable  $countriable
     * @return \Illuminate\Http\Response
     */
    public function destroy(Countriable $countriable)
    {
        //
    }
}
