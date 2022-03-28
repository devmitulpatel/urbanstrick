<template>
    <FrontEndLayout :site="props.site" :auth="props.auth">

        <section class="contact-img-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="con-text">
                            <h2 class="page-title">{{ props.product.data.name }}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="single-product-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-xl-9 col-md-12 col-12">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="tab-zoom">
                                    <!-- Tab panes -->
                                    <div class="tab-content">
                                        <div id="image1" class="tab-pane fade show active">
                                            <div class="s_big">
                                                <a href="img/product/t1.jpg" class="demo4"><img :src="product.data.url" alt=""></a>
                                            </div>
                                        </div>
                                        <div id="image2" class="tab-pane fade">
                                            <div class="s_big">
                                                <a href="img/product/z1.jpg" class="demo4"><img :src="product.data.url" alt=""></a>
                                            </div>
                                        </div>
                                        <div id="image3" class="tab-pane fade">
                                            <div class="s_big">
                                                <a href="img/product/z2.jpg" class="demo4"><img src="img/product/1.jpg" alt=""></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="thumnail-image fix">
                                        <ul class="tab-menu nav">
                                            <li><a class="active" data-bs-toggle="tab" href="#image1"><img alt="" src="img/product/9.jpg"></a></li>
                                            <li><a data-bs-toggle="tab" href="#image2"><img alt="" src="img/product/2.jpg" ></a></li>
                                            <li class="zoom-mrgn-none"><a data-bs-toggle="tab" href="#image3"><img alt="" src="img/product/1.jpg"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="entry-summary">
                                    <div class="entry-title">Glasses</div>
                                    <div class="tb-product-wrap-price-rating">
                                        <div class="tb-product-price font-noraure-3 nurore">
                                            <span class="amount2 ana">$79.00 - </span>
                                            <span class="amount2 ana">$100.00</span>
                                        </div>
                                        <div class="stock">
                                            Avaiability:
                                            <span> in stock</span>
                                        </div>
                                    </div>
                                    <div class="description">
                                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
                                    </div>
                                    <form action="#" class="woocommerce-shipping-calculator">
                                        <p class="form-row form-row-wide">
                                            <label>
                                                Color
                                                <span class="required">*</span>
                                            </label>
                                            <select class="email s-email s-wid">
                                                <option>Choose an option</option>
                                                <option>Black</option>
                                            </select>
                                        </p>
                                        <p class="form-row form-row-wide">
                                            <label>
                                                Brand
                                                <span class="required">*</span>
                                            </label>
                                            <select class="email s-email s-wid">
                                                <option>Choose an option</option>
                                                <option>Nike</option>
                                                <option>Religion</option>
                                                <option>Diesel</option>
                                                <option>Monki</option>
                                            </select>
                                        </p>
                                    </form>
                                    <div class="single-price">
                                        <div>
                                            <p class="single-price-top">Price:</p>
                                        </div>
                                        <div class="ro-quantity clearfix">
                                            <label>
                                                Qty:
                                                <span class="s-color"> *</span>
                                            </label>
                                            <div class="quantity">
                                                <div class="cart-plus-minus">
                                                    <input type="text" value="0" name="qtybutton" class="cart-plus-minus-box">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="add-two-single">
                                            <div class="last-cart l-mrgn ns">
                                                <a class="las4" href="#">Add To Cart</a>
                                            </div>
                                            <div class="tb-product-btn shp">
                                                <a href="#">
                                                    <i class="fa fa-eye"></i>
                                                </a>
                                                <a href="#">
                                                    <i class="fa fa-heart"></i>
                                                </a>
                                                <a href="#">
                                                    <i class="fa fa-retweet"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="capture-pn">
                                            <img src="img/icon-img/capture.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-sin">
                            <!-- Nav tabs -->
                            <ul class="nav" role="tablist">
                                <li>
                                    <a class="active" href="#home" data-bs-toggle="tab">Description</a>
                                </li>
                                <li>
                                    <a href="#profile" data-bs-toggle="tab">Additional Information</a>
                                </li>
                                <li>
                                    <a href="#messages" data-bs-toggle="tab">Reviews (0)</a>
                                </li>
                                <li>
                                    <a href="#tag" data-bs-toggle="tab"> TAGS</a>
                                </li>
                                <li>
                                    <a href="#video" data-bs-toggle="tab"> Video</a>
                                </li>
                            </ul>
                            <!-- Tab panes -->
                            <div class="tab-content">
                                <div class="tab-pane active sin-ha" id="home">
                                    <h2>Product Description</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div class="tab-pane sin-ha" id="profile">
                                    <h2>Additional Information</h2>
                                    <table class="shop_attributes">
                                        <tbody>
                                        <tr class="">
                                            <th>Color</th>
                                            <td>
                                                <p>Black, Orange</p>
                                            </td>
                                        </tr>
                                        <tr class="alt">
                                            <th>Brand</th>
                                            <td>
                                                <p>Nike, Religion, Diesel, Monki</p>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="tab-pane sin-ha" id="messages">
                                    <h2>Reviews</h2>
                                    <p class="woocommerce-nore">There are no reviews yet.</p>
                                    <h2>Be the first to review “Glasses” </h2>
                                    <form action="#">
                                        <div class="sin-form2">
                                            <p class="woocommerce-nore2">Your Rating</p>
                                            <span>
                                                <a href="#"><i class="fa fa-star-o"></i></a>
                                                <a href="#"><i class="fa fa-star-o"></i></a>
                                                <a href="#"><i class="fa fa-star-o"></i></a>
                                                <a href="#"><i class="fa fa-star-o"></i></a>
                                                <a href="#"><i class="fa fa-star-o"></i></a>
                                            </span>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <label class="l-contact">
                                                    Your Review
                                                    <em>*</em>
                                                </label>
                                                <textarea class="form-control" name="message" required=""></textarea>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="di-na">
                                                    <label class="l-contact">
                                                        Name
                                                        <em>*</em>
                                                    </label>
                                                    <input class="form-control" type="text" name="name" required="">
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="di-na">
                                                    <label class="l-contact">
                                                        Email
                                                        <em>*</em>
                                                    </label>
                                                    <input class="form-control" type="email" name="name" required="">
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="last-cart-con s-icon2">
                                                    <input class="wpcf7" type="submit" value="Submit">
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="tab-pane" id="tag">
                                    <span class="tagged_as">
                                        Tag:
                                        <a rel="tag" href="#">Featured</a>
                                    </span>
                                </div>
                                <div class="tab-pane" id="video">
                                    <div class="post-format-area">
                                        <div class="blog_video ratio ratio-16x9">
                                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/87Fx45Bwy-E?list=PLFii9RzqhPhGIXp9ouuse2pVqIOTI0VrM"  allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-12 col-12">
                        <div class="top-shop-sidebar an-shop">
                            <h3 class="wg-title">UpSell Products</h3>
                            <ul>
                                <li class="b-none">
                                    <div class="tb-recent-thumbb">
                                        <a href="#">
                                            <img class="attachment" src="img/product/p1.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="tb-recentb">
                                        <div class="tb-beg">
                                            <a href="#">Lambskin Shoe</a>
                                        </div>
                                        <div class="tb-product-price font-noraure-3">
                                            <span class="amount">$180.00</span>
                                            <span class="amount2 ana">$170.00</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="b-none">
                                    <div class="tb-recent-thumbb">
                                        <a href="#">
                                            <img class="attachment" src="img/product/p2.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="tb-recentb">
                                        <div class="tb-beg">
                                            <a href="#">Luxury Leather Bag</a>
                                        </div>
                                        <div class="tb-product-price font-noraure-3">
                                            <span class="amount2 ana">$170.00</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="b-none agn">
                                    <div class="tb-recent-thumbb">
                                        <a href="#">
                                            <img class="attachment" src="img/product/p3.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="tb-recentb">
                                        <div class="tb-beg">
                                            <a href="#">Vintage Glasses</a>
                                        </div>
                                        <div class="tb-product-price font-noraure-3">
                                            <span class="amount2 ana">$170.00</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="ro-info-box-wrap tpl3 st">
                            <div class="tb-image">
                                <img alt="" src="img/product/a1.jpg">
                            </div>
                            <div class="tb-content">
                                <div class="tb-content-inner an-inner">
                                    <h5>WOMEN'S FASHION</h5>
                                    <h3>MID SEASON SALE</h3>
                                    <h6>
                                        <a href="#">SHOP NOW</a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="single-pro-area7">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="last-line">
                            <h3 class="wg-title">Related Products</h3>
                        </div>
                    </div>
                </div>
                <div class="non7">
                    <div class="row">
                        <!-- single-product start -->
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="tb-product-item-inner tb2 pct-last">
                                <img alt="" src="img/product/1.jpg">
                                <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                <div class="tb-content">
                                    <div class="tb-it">
                                        <div class="tb-beg">
                                            <a href="#">Leather Bag</a>
                                        </div>
                                        <div class="tb-product-wrap-price-rating">
                                            <div class="tb-product-price font-noraure-3">
                                                <span class="amount">$180.00</span>
                                                <span class="amount2 ana">$170.00</span>
                                            </div>
                                        </div>
                                        <div class="last-cart l-mrgn">
                                            <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                            <a class="las4" href="#">Add To Cart</a>
                                            <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- single-product end -->
                        <!-- single-product start -->
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="tb-product-item-inner tb2 pct-last">
                                <span class="onsale two">Sale!</span>
                                <img alt="" src="img/product/9.jpg">
                                <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                <div class="tb-content">
                                    <div class="tb-it">
                                        <div class="tb-beg">
                                            <a href="#">Glasses</a>
                                        </div>
                                        <div class="tb-product-wrap-price-rating">
                                            <div class="tb-product-price font-noraure-3">
                                                <span class="amount2 ana">$79.00 - </span>
                                                <span class="amount2 ana">$100.00</span>
                                            </div>
                                        </div>
                                        <div class="last-cart l-mrgn">
                                            <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                            <a class="las4" href="#">Add To Cart</a>
                                            <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- single-product end -->
                        <!-- single-product start -->
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="tb-product-item-inner tb2 pct-last">
                                <span class="onsale">Sale!</span>
                                <img alt="" src="img/product/7.jpg">
                                <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                <div class="tb-content">
                                    <div class="tb-it">
                                        <div class="tb-beg">
                                            <a href="#">Skin Shoulder Bag</a>
                                        </div>
                                        <div class="tb-product-wrap-price-rating">
                                            <div class="tb-product-price font-noraure-3">
                                                <span class="amount2 ana">$170.00</span>
                                            </div>
                                        </div>
                                        <div class="last-cart l-mrgn">
                                            <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                            <a class="las4" href="#">Add To Cart</a>
                                            <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- single-product end -->
                        <!-- single-product start -->
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="tb-product-item-inner tb2 pct-last res res2">
                                <span class="onsale">Sale!</span>
                                <img alt="" src="img/product/6.jpg">
                                <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                <div class="tb-content">
                                    <div class="tb-it">
                                        <div class="tb-beg">
                                            <a href="#">Vintage Glasses</a>
                                        </div>
                                        <div class="tb-product-wrap-price-rating">
                                            <div class="tb-product-price font-noraure-3">
                                                <span class="amount2 ana">$199.00</span>
                                            </div>
                                        </div>
                                        <div class="last-cart l-mrgn">
                                            <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                            <a class="las4" href="#">Add To Cart</a>
                                            <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- single-product end -->
                    </div>
                </div>
            </div>
        </section>
    </FrontEndLayout>
</template>

<script setup>
import {InertiaLink} from "@inertiajs/inertia-vue3";
import FrontEndLayout from '@/Layouts/FrontEnd'
import {manageCart} from "@/Lib/LaravelHelper";
const props=defineProps({
    site:Object,
    auth:Object,
    product:Array,
});
const currentCart=manageCart();
const addProduct = (product) => {
    currentCart.add(product,1)
}
</script>

<style scoped>

</style>
