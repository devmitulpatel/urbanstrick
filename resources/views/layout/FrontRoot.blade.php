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
<!-- QUICKVIEW PRODUCT -->
<div id="quickview-wrapper">
    <!-- Modal -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-body">
                    <div class="modal-product">
                        <div class="product-images">
                            <div class="main-image images">
                                <img src="img/product/3.jpg" alt="">
                            </div>
                        </div><!-- .product-images -->

                        <div class="cras">
                            <div class="product-name">
                                <h1>UVintage Lambskin Shoe</h1>
                            </div>
                            <div class="tb-product-price font-noraure-3">
                                <span class="amount">$180.00</span>
                                <span class="amount2 ana">$170.00</span>
                            </div>
                            <div class="short-description">
                                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
                            </div>
                            <div class="add-to-box1">
                                <div class="add-to-box add-to-box2">
                                    <div class="add-to-cart">
                                        <div class="input-content">
                                            <label for="qty">Qty:<span> *</span></label>
                                            <input id="qty" class="input-text qty" type="text" name="qty" maxlength="12" value="1" title="Qty">
                                        </div>
                                        <div class="last-cart">
                                            <a class="last1" href="#">Add To Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="stock2"><p class="availability in-stock2"> Availability:Accessories, Men </p></div>
                        </div><!-- .product-info -->
                    </div><!-- .modal-product -->
                </div><!-- .modal-body -->
            </div><!-- .modal-content -->
        </div><!-- .modal-dialog -->
    </div>
    <!-- END Modal -->
</div>
<!-- END QUICKVIEW PRODUCT -->






@include('layout.Static.Front.js')
@include('layout.Static.Front.js')
</body>

<!-- Mirrored from template.hasthemes.com/noraure/noraure/index-4.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 14 Mar 2022 16:44:58 GMT -->
</html>
