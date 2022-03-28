<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Hash;

class UserRequestedToGetAccount extends Mailable
{
    use Queueable, SerializesModels;

    private User $user;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user=$user;
        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        $data =[
            'user'=>$this->user,
            'url_for_password_set'=>route('createUserPassword',['user'=>$this->user->id]),
            'able_to_create_password'=>$this->user->password==null
        ];
        return $this->view('mail.UserRequestedToGetAccount')->to($this->user->email)->with(compact(['data']));
    }
}
