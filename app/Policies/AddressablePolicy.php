<?php

namespace App\Policies;

use App\Models\Addressable;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class AddressablePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Addressable  $addressable
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Addressable $addressable)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Addressable  $addressable
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Addressable $addressable)
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Addressable  $addressable
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, Addressable $addressable)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Addressable  $addressable
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Addressable $addressable)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Addressable  $addressable
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Addressable $addressable)
    {
        //
    }
}
