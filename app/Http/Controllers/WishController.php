<?php

namespace App\Http\Controllers;

use App\Models\Wish;
use App\Http\Requests\StoreWishRequest;
use App\Http\Requests\UpdateWishRequest;
use Illuminate\Http\Request;

class WishController extends Controller
{

    public function __construct(){
        $this->middleware('onlyCustomer');
    }
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
     * @param  \App\Http\Requests\StoreWishRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreWishRequest $request)
    {
        return $request->persist();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Wish  $wish
     * @return \Illuminate\Http\Response
     */
    public function show(Wish $wish)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Wish  $wish
     * @return \Illuminate\Http\Response
     */
    public function edit(Wish $wish)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateWishRequest  $request
     * @param  \App\Models\Wish  $wish
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateWishRequest $request, Wish $wish)
    {
        return $request->persist();
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Wish  $wish
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request,Wish $wish)
    {

        $wish->delete();
        $url=get_refer_url();
        return redirect($url);

    }
}
