<?php

namespace App\Listeners;

use App\Events\NewAccountCreated;
use App\Mail\UserRequestedToGetAccount;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendActivationMail
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\NewAccountCreated  $event
     * @return void
     */
    public function handle(NewAccountCreated $event)
    {
        $user=$event->getUser();
        Mail::to($user->mail)->send(new UserRequestedToGetAccount($user));
    }
}
