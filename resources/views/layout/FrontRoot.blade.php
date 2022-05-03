<!doctype html>
<html class="no-js" lang="en">
<head>
@include('layout.Static.Front.meta')
@include('layout.Static.Front.css')
@inertiaHead
</head>
<body>
<!--[if lt IE 8]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->

<!-- Add your site or application content here -->
@include('layout.Static.Front.header')
@inertia


@include('layout.Static.Front.footer')
<!-- start scrollUp
============================================ -->

<div id="toTop">
    <i class="fa fa-chevron-up"></i>
</div>







@include('layout.Static.Front.js')

</body>

</html>
