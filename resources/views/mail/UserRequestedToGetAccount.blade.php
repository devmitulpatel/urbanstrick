@extends('mail.layout')
@section('content')

    <p style="text-align: left;margin-top: 20px">
        Dear User,
        <br>
        <br>
        We successfully created your account.
        <br>
        <a href="{{$data['url_for_password_set']}}" target="_blank">Click here to set password for your New UrbanStrick Account </a>
    </p>
@endsection
