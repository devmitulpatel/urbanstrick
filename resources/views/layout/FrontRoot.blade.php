<!doctype html>
<html class="no-js" lang="en">

<!-- Mirrored from template.hasthemes.com/noraure/noraure/index-4.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 14 Mar 2022 16:44:58 GMT -->
<head>

    @include('layout.Static.Front.meta')
    @include('layout.Static.Front.css')
    <!-- modernizr css -->

</head>
<body>
<!--[if lt IE 8]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->

<!-- Add your site or application content here -->
@include('layout.Static.Front.header')
@inertia
@routes
@include('layout.Static.Front.footer')
<!-- start scrollUp
============================================ -->
<div id="toTop">
    <i class="fa fa-chevron-up"></i>
</div>







@include('layout.Static.Front.js')
</body>

<!-- Mirrored from template.hasthemes.com/noraure/noraure/index-4.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 14 Mar 2022 16:44:58 GMT -->
</html>
