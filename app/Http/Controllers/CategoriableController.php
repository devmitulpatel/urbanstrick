<?php

namespace App\Http\Controllers;

use App\Models\Categoriable;
use App\Http\Requests\StoreCategoriableRequest;
use App\Http\Requests\UpdateCategoriableRequest;

class CategoriableController extends Controller
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
     * @param  \App\Http\Requests\StoreCategoriableRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCategoriableRequest $request)
    {
        return $request->persist();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Categoriable  $categoriable
     * @return \Illuminate\Http\Response
     */
    public function show(Categoriable $categoriable)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Categoriable  $categoriable
     * @return \Illuminate\Http\Response
     */
    public function edit(Categoriable $categoriable)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCategoriableRequest  $request
     * @param  \App\Models\Categoriable  $categoriable
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCategoriableRequest $request, Categoriable $categoriable)
    {
        return $request->persist();
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Categoriable  $categoriable
     * @return \Illuminate\Http\Response
     */
    public function destroy(Categoriable $categoriable)
    {
        //
    }
}
