<?php

namespace App\Traits;

use App\Models\User;

trait HasUser
{

    public function user(){
        return $this->belongsTo(User::class,'user_id','id');
    }

    public function scopeForUser($query, $user){
       if(is_object($user) && get_class($user) == User::class)$user=$user->id;
        return $query->with(['user'])->where('user_id',$user)->latest()->get();
    }

}
