<script setup>
import FrontEndLayout from '@/Layouts/FrontEnd.vue';
import { Head } from '@inertiajs/inertia-vue3';
import carousel from 'vue-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';
import '@/Lib/nivoslider'
import '@/Lib/nivo-slider.css';
import '@/Lib/preview.css';
import {onBeforeMount, onMounted, ref} from "vue";

onMounted(()=>{
    // $('.landing-slider').owlCarousel({
    //     items:1,
    //     center:true,
    //    // autoWidth:true,
    //     loop:true,
    //     URLhashListener:true,
    //     nav:false,
    //     slideBy:true,
    //     lazyLoad:true,
    //     autoplay:false,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         576: {
    //             items: 1
    //         },
    //         768: {
    //             items: 1
    //         },
    //         992: {
    //             items: 1
    //         },
    //         1200: {
    //             items: 1
    //         }
    //     },
    //     dots:false
    //
    // });
    $('#jquery-slider-demo').nivoSlider(
        {
            lazyLoad:true,
            autoplay:true,
            loop:true,
            effect: 'random',
            slices: 35,
            boxCols: 12,
            boxRows: 12,
            animSpeed: 500,
            pauseTime: 500,
            startSlide: 0,
            directionNav: true,
            controlNavThumbs: true,
            pauseOnHover: true,
            manualAdvance: true}
    );
    $('#ensign-nivoslider').nivoSlider({
        effect: 'random',
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 500,
        pauseTime: 5000,
        startSlide: 0,
        directionNav: true,
        controlNavThumbs: false,
        pauseOnHover: false,
        manualAdvance: true
    });
    $('#ensign-nivoslider-2').nivoSlider({
        effect: 'random',
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 500,
        pauseTime: 5000,
        startSlide: 0,
        directionNav: true,
        controlNavThumbs: false,
        pauseOnHover: true,
        manualAdvance: true
    });

});


const vfOptions=ref({
    autoplay: true
});
const vfImages=ref([ 'img/slider/bg_slider1.jpg', 'img/slider/bg_slider22.jpg' ]);
const vfTransitions=ref([ 'fade', 'cube', 'book', 'wave' ]);
const vfCaptions=ref(['Caption for image 1','Caption for image 2','Caption for image 3',]);

</script>

<template>
    <Head title="Dashboard" />
<FrontEndLayout>

    <div id="top"></div>
    <!-- mobile-menu-area end -->
    <section class="slider-main-area home-3 bg-gray">
        <div class="main-slider an-si">
            <div class="bend niceties preview-2">


                <div v-if="false" class="landing-slider owl-carousel">
                    <div class="col-12 t-cn Builder nivo-caption " style="min-height: 100vh;min-width: 100vw;">

                        <img src="img/slider/slider-1.jpg" alt="" title="#slider-direction-1"  />
                        <div style="float: right;display: block;position: relative;margin-top: -23%;margin-right: 2%;" class="slide-all2">
                            <!-- layer 1 -->
                            <div class="layer-1">
                                <h2 class="title5">new collection</h2>
                            </div>
                            <!-- layer 2 -->
                            <div class="layer-2">
                                <h2 class="title6">Men’s Fashion</h2>
                            </div>
                            <!-- layer 2 -->
                            <div class="layer-2">
                                <p class="title0">Save Up To 40% Off</p>
                            </div>
                            <!-- layer 3 -->
                            <div class="layer-3">
                                <a class="min1" href="#">Shop Now</a>
                            </div>
                        </div>

                    </div>
                    <div class="col-12 t-cn Builder nivo-caption" style="min-height: 100vh;min-width: 100vw;">
                        <img src="img/slider/slider-2.jpg" alt="" title="#slider-direction-1"  />
                        <div style="display: block;position: relative;margin-top: -23%;" class="slide-all slide2">
                            <!-- layer 1 -->
                            <div class="layer-1">
                                <h2 class="title5">new collection</h2>
                            </div>
                            <!-- layer 2 -->
                            <div class="layer-2">
                                <h2 class="title6">Women’s Fashion</h2>
                            </div>
                            <!-- layer 2 -->
                            <div class="layer-2">
                                <p class="title0">Save Up To 40% Off</p>
                            </div>
                            <!-- layer 3 -->
                            <div class="layer-3">
                                <a class="min1" href="#">Shop Now</a>
                            </div>
                        </div>

                    </div>
                    <div class="col-12 t-cn Builder nivo-caption" style="min-height: 100vh;min-width: 100vw;">
                        <img src="img/slider/slider-3.jpg" alt="" title="#slider-direction-1"  />
                        <div style="display: block;position: relative;margin-top: -23%;" class="slide-all slide2">
                            <!-- layer 1 -->
                            <div class="layer-1">
                                <h2 class="title5">new collection</h2>
                            </div>
                            <!-- layer 2 -->
                            <div class="layer-2">
                                <h2 class="title6">Women’s Fashion</h2>
                            </div>
                            <!-- layer 2 -->
                            <div class="layer-2">
                                <p class="title0">Save Up To 40% Off</p>
                            </div>
                            <!-- layer 3 -->
                            <div class="layer-3">
                                <a class="min1" href="#">Shop Now</a>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="slider-wrapper theme-default">
                <div id="jquery-slider-demo" class="nivoSlider">

                    <img title="#slide-title-1" src="img/slider/slider-1.jpg" alt="The slide 1" />

                    <img title="#slide-title-2" src="img/slider/slider-2.jpg" alt="The slide 2" />

                    <img title="#slide-title-3" src="img/slider/slider-3.jpg" alt="The slide 3" data-transition="slideInLeft" />


                </div>
                    <div id="slide-title-1" class="nivo-html-caption t-cn Builder">
                        <div class="t-cn Builder">
                        <div class="slide-all2">
                            <!-- layer 1 -->
                            <div class="layer-1">
                                <h2 class="title5">new collection</h2>
                            </div>
                            <!-- layer 2 -->
                            <div class="layer-2">
                                <h2 class="title6">Men’s Fashion</h2>
                            </div>
                            <!-- layer 2 -->
                            <div class="layer-2">
                                <p class="title0">Save Up To 40% Off</p>
                            </div>
                            <!-- layer 3 -->
                            <div class="layer-3">
                                <a class="min1" href="#">Shop Now</a>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div id="slide-title-2" class="nivo-html-caption t-cn Builder">
                        <div class="t-cn Builder">
                        <div class="slide-all slide2">
                            <!-- layer 1 -->
                            <div class="layer-1">
                                <h2 class="title5">new collection</h2>
                            </div>
                            <!-- layer 2 -->
                            <div class="layer-2">
                                <h2 class="title6">Women’s Fashion</h2>
                            </div>
                            <!-- layer 2 -->
                            <div class="layer-2">
                                <p class="title0">Save Up To 40% Off</p>
                            </div>
                            <!-- layer 3 -->
                            <div class="layer-3">
                                <a class="min1" href="#">Shop Now</a>
                            </div>
                        </div>

                        </div>

                    </div>
                    <div id="slide-title-3" class="nivo-html-caption">

                        <div class="t-cn Builder">

                            <div class="slide-all slide2">
                                <!-- layer 1 -->
                                <div class="layer-1">
                                    <h2 class="title5">new collection</h2>
                                </div>
                                <!-- layer 2 -->
                                <div class="layer-2">
                                    <h2 class="title6">Women’s Fashion</h2>
                                </div>
                                <!-- layer 2 -->
                                <div class="layer-2">
                                    <p class="title0">Save Up To 40% Off</p>
                                </div>
                                <!-- layer 3 -->
                                <div class="layer-3">
                                    <a class="min1" href="#">Shop Now</a>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>



                <span v-if="false">


                <div id="ensign-nivoslider-2 " class="slides" >

                    <div><img src="img/slider/bg_slider1.jpg" alt="" title="#slider-direction-1"  /></div>
                    <div><img src="img/slider/bg_slider22.jpg" alt="" title="#slider-direction-2"  /></div>

                </div>
                <div id="slider-direction-1" class="t-cn slider-direction Builder">
                    <div class="slide-all slide2">
                        <!-- layer 1 -->
                        <div class="layer-1">
                            <h2 class="title5">new collection</h2>
                        </div>
                        <!-- layer 2 -->
                        <div class="layer-2">
                            <h2 class="title6">Women’s Fashion</h2>
                        </div>
                        <!-- layer 2 -->
                        <div class="layer-2">
                            <p class="title0">Save Up To 40% Off</p>
                        </div>
                        <!-- layer 3 -->
                        <div class="layer-3">
                            <a class="min1" href="#">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div id="slider-direction-2" class="t-cn slider-direction Builder">
                    <div class="slide-all2">
                        <!-- layer 1 -->
                        <div class="layer-1">
                            <h2 class="title5">new collection</h2>
                        </div>
                        <!-- layer 2 -->
                        <div class="layer-2">
                            <h2 class="title6">Men’s Fashion</h2>
                        </div>
                        <!-- layer 2 -->
                        <div class="layer-2">
                            <p class="title0">Save Up To 40% Off</p>
                        </div>
                        <!-- layer 3 -->
                        <div class="layer-3">
                            <a class="min1" href="#">Shop Now</a>
                        </div>
                    </div>
                </div>

                </span>
            </div>
        </div>
    </section>
    <section class="design-area home-4">
        <div class="container">
            <div class="bottom-design res">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-12">
                        <div class="tb-info-box">
                            <div class="tb-image">
                                <img alt="" src="img/banner/t_1.png">
                            </div>
                            <div class="tb-content">
                                <h5>NEW DESIGN</h5>
                                <h3>SEND HER YOUR LOVE</h3>
                                <h6><a href="#">GET IT NOW</a></h6>
                            </div>
                        </div>
                        <div class="tb-info-box bt-no">
                            <div class="tb-content">
                                <h5>NEW DESIGN</h5>
                                <h3>SEND HER YOUR LOVE</h3>
                                <h6><a href="#">GET IT NOW</a></h6>
                            </div>
                            <div class="tb-image tb-right">
                                <img alt="" src="img/banner/t_2.png">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12">
                        <div class="ro-info-box-wrap tpl3 fs">
                            <div class="tb-image">
                                <img alt="" src="img/banner/t_3.png">
                            </div>
                            <div class="tb-content">
                                <div class="tb-content-inner">
                                    <h5>MEN’S FASHION</h5>
                                    <h3>MID SEASON SALE</h3>
                                    <h6>
                                        <a href="#">VIEW COLLECTION</a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="features-tab indicator-style2">
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="vc_tta-tab"><a href="#home" aria-controls="home" role="tab" data-bs-toggle="tab">BESTSELLER</a></li>
                            <li class="vc_tta-tab " role="presentation"><a class="active" href="#profile" aria-controls="profile" role="tab" data-bs-toggle="tab">NEW PRODUCTS</a></li>
                            <li class="vc_tta-tab" role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-bs-toggle="tab">MUST HAVE</a></li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content jump">
                            <div role="tabpanel" class="tab-pane" id="home">
                                <div class="features-curosel2 indicator-style2 owl-carousel">
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
                                    <div class="tb-product-item-inner tb2 pct-last">
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
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <img alt="" src="img/product/5.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Luxury Leather Bag</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount2 ana">$150.00</span>
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
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale two">Sale!</span>
                                        <img alt="" src="img/product/3.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Vintage Lambskin Shoe</a>
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
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale">Sale!</span>
                                        <img alt="" src="img/product/4.jpg">
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
                            </div>
                            <div role="tabpanel" class="tab-pane active" id="profile">
                                <div class="features-curosel2 indicator-style2 owl-carousel">
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale two">Sale!</span>
                                        <img alt="" src="img/product/10.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Vintage Lambskin Shoe</a>
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
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <img alt="" src="img/product/2.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Leather Shoe</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount2 ana">$220.00</span>
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
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale two">Sale!</span>
                                        <img alt="" src="img/product/8.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Vintage Shoulder Bag</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount2 ana">$99.00</span>
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
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <img alt="" src="img/product/7.jpg">
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
                                    <div class="tb-product-item-inner tb2 pct-last">
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
                                                        <span class="amount2 ana">$120.00</span>
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
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale two">Sale!</span>
                                        <img alt="" src="img/product/5.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Luxury Leather Bag</a>
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
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <img alt="" src="img/product/4.jpg">
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
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale">Sale!</span>
                                        <img alt="" src="img/product/3.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Vintage Lambskin Shoe</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount2 ana">$250.00</span>
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
                            </div>
                            <div role="tabpanel" class="tab-pane" id="messages">
                                <div class="features-curosel2 indicator-style2 owl-carousel">
                                    <div class="tb-product-item-inner tb2 pct-last">
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
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale two">Sale!</span>
                                        <img alt="" src="img/product/5.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Luxury Leather Bag</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount2 ana">$160.00</span>
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
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <img alt="" src="img/product/4.jpg">
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
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale">Sale!</span>
                                        <img alt="" src="img/product/3.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Vintage Lambskin Shoe</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount2 ana">$270.00</span>
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
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale two">Sale!</span>
                                        <img alt="" src="img/product/2.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Leather Shoe</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount2 ana">$120.00</span>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="client-area home-2 stripe-parallax-bg" data-parallax-speed="0.5">
        <div class="client-bg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-12 text-center">
                        <div class="client">
                            <div class="pro-text">
                                <h3>What's Client Say?</h3>
                                <img src="img/icon-img/underline-style-1.png" alt="">
                            </div>
                            <div class="client-all owl-carousel">
                                <div class="client-slider">
                                    <div class="sppb-testimonial-message">
                                        <p>““This theme is totally customizable, clean with all the options you could want. Don’t want full screen layout? With one word added to the code the entire site becomes a boxed version…. The customer support is absolutely unsurpassed. Every question is answered with more help than anyone could expect for the price. Can not recommend […]</p>
                                    </div>
                                    <div class="client-img">
                                        <img src="img/testimonial/item-11.png" alt="">
                                        <a href="#">
                                            <div class="ro-title">John Doe</div>
                                        </a>
                                        <span class="ro-company">Technical Support - Olker</span>
                                    </div>
                                </div>
                                <div class="client-slider">
                                    <div class="sppb-testimonial-message">
                                        <p>““This theme is totally customizable, clean with all the options you could want. Don’t want full screen layout? With one word added to the code the entire site becomes a boxed version…. The customer support is absolutely unsurpassed. Every question is answered with more help than anyone could expect for the price. Can not recommend […]</p>
                                    </div>
                                    <div class="client-img">
                                        <img src="img/testimonial/elizabett.jpg" alt="">
                                        <a href="#">
                                            <div class="ro-title">Elizabeth Smith</div>
                                        </a>
                                        <span class="ro-company">Agency - Olker</span>
                                    </div>
                                </div>
                                <div class="client-slider">
                                    <div class="sppb-testimonial-message">
                                        <p>““This theme is totally customizable, clean with all the options you could want. Don’t want full screen layout? With one word added to the code the entire site becomes a boxed version…. The customer support is absolutely unsurpassed. Every question is answered with more help than anyone could expect for the price. Can not recommend […]</p>
                                    </div>
                                    <div class="client-img">
                                        <img src="img/testimonial/user1.png" alt="">
                                        <a href="#">
                                            <div class="ro-title">John Doe</div>
                                        </a>
                                        <span class="ro-company">Technical Support - Olker</span>
                                    </div>
                                </div>
                                <div class="client-slider">
                                    <div class="sppb-testimonial-message">
                                        <p>““This theme is totally customizable, clean with all the options you could want. Don’t want full screen layout? With one word added to the code the entire site becomes a boxed version…. The customer support is absolutely unsurpassed. Every question is answered with more help than anyone could expect for the price. Can not recommend […]</p>
                                    </div>
                                    <div class="client-img">
                                        <img src="img/testimonial/user2.jpg" alt="">
                                        <a href="#">
                                            <div class="ro-title">Diana John</div>
                                        </a>
                                        <span class="ro-company">Director Business - Olker</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="specail-area home-3 hm-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="specail-top">
                        <h3>Specail</h3>
                        <div class="row">
                            <div class="col-lg-12  col-md-6">
                                <div class="tb-product-item">
                                    <div class="tb-image">
                                        <span class="new">New</span>
                                        <img src="img/product/5.jpg" alt="">
                                        <a class="la-icon" data-bs-toggle="modal" title="Quick View" href="#productModal">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                    </div>
                                    <div class="tb-content">
                                        <div class="tb-beg">
                                            <a href="#">Luxury Leather Bag</a>
                                        </div>
                                        <div class="tb-product-price font-noraure-3">
                                            <span class="amount2 ana">$170.00</span>
                                        </div>
                                        <div class="tb-product-btn">
                                            <a href="#">
                                                <i class="fa fa-shopping-cart"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fa fa-heart"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fa fa-retweet"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12  col-md-6">
                                <div class="tb-product-item">
                                    <div class="tb-image">
                                        <span class="new">New</span>
                                        <img src="img/product/9.jpg" alt="">
                                        <a class="la-icon" data-bs-toggle="modal" title="Quick View" href="#productModal">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                    </div>
                                    <div class="tb-content">
                                        <div class="tb-beg">
                                            <a href="#">Glasses</a>
                                        </div>
                                        <div class="tb-product-price font-noraure-3">
                                            <span class="amount2 ana">$79.00 - </span>
                                            <span class="amount2 ana">$100.00</span>
                                        </div>
                                        <div class="tb-product-btn">
                                            <a href="#">
                                                <i class="fa fa-shopping-cart"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fa fa-heart"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fa fa-retweet"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="specail-top">
                        <h3>Most View </h3>
                        <div class="row">
                            <div class="col-lg-12  col-md-6">
                                <div class="tb-product-item">
                                    <div class="tb-image">
                                        <span class="new">New</span>
                                        <img src="img/product/8.jpg" alt="">
                                        <a class="la-icon" data-bs-toggle="modal" title="Quick View" href="#productModal">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                    </div>
                                    <div class="tb-content">
                                        <div class="tb-beg">
                                            <a href="#">Vintage Shoulder Bag</a>
                                        </div>
                                        <div class="tb-product-price font-noraure-3">
                                            <span class="amount2 ana">$99.00</span>
                                        </div>
                                        <div class="tb-product-btn">
                                            <a href="#">
                                                <i class="fa fa-shopping-cart"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fa fa-heart"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fa fa-retweet"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12  col-md-6">
                                <div class="tb-product-item">
                                    <div class="tb-image">
                                        <span class="new">New</span>
                                        <img src="img/product/3.jpg" alt="">
                                        <a class="la-icon" data-bs-toggle="modal" title="Quick View" href="#productModal">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                    </div>
                                    <div class="tb-content">
                                        <div class="tb-beg">
                                            <a href="#">Vintage Lambskin Shoe</a>
                                        </div>
                                        <div class="tb-product-price font-noraure-3">
                                            <span class="amount2 ana">$270.00</span>
                                        </div>
                                        <div class="tb-product-btn">
                                            <a href="#">
                                                <i class="fa fa-shopping-cart"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fa fa-heart"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fa fa-retweet"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="specail-top">
                        <h3>Top Products </h3>
                        <div class="row">
                            <div class="col-lg-12  col-md-6">
                                <div class="tb-product-item">
                                    <div class="tb-image">
                                        <span class="new">New</span>
                                        <img src="img/product/6.jpg" alt="">
                                        <a class="la-icon" data-bs-toggle="modal" title="Quick View" href="#productModal">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                    </div>
                                    <div class="tb-content">
                                        <div class="tb-beg">
                                            <a href="#">Vintage Glasses</a>
                                        </div>
                                        <div class="tb-product-price font-noraure-3">
                                            <span class="amount2 ana">$120.00</span>
                                        </div>
                                        <div class="tb-product-btn">
                                            <a href="#">
                                                <i class="fa fa-shopping-cart"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fa fa-heart"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fa fa-retweet"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12  col-md-6">
                                <div class="tb-product-item">
                                    <div class="tb-image">
                                        <span class="new">New</span>
                                        <img src="img/product/10.jpg" alt="">
                                        <a class="la-icon" data-bs-toggle="modal" title="Quick View" href="#productModal">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                    </div>
                                    <div class="tb-content">
                                        <div class="tb-beg">
                                            <a href="#">Vintage Lambskin Shoe</a>
                                        </div>
                                        <div class="tb-product-price font-noraure-3">
                                            <span class="amount2 ana">$170.00</span>
                                        </div>
                                        <div class="tb-product-btn">
                                            <a href="#">
                                                <i class="fa fa-shopping-cart"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fa fa-heart"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fa fa-retweet"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="lastest-area">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="lastest-from res">
                        <h3>Lastest From Blogs</h3>
                    </div>
                </div>
            </div>
            <div class="slider-active-two indicator-style2 owl-carousel">
                <div class="tb-post-item">
                    <a href="#">
                        <div class="tb-thumb">
                            <img src="img/banner/l1.jpg" alt="">
                            <span class="tb-publish font-noraure-3">Dec / 11</span>
                        </div>
                    </a>
                    <div class="tb-content7">
                        <a href="#"><h4 class="tb-titlel">That most modern</h4></a>
                        <div class="tb-excerpt"> The summer holidays are wonderful. Dressing for them can be significantly less so: Packing{...} </div>
                    </div>
                </div>
                <div class="tb-post-item">
                    <a href="#">
                        <div class="tb-thumb">
                            <img src="img/banner/l2.jpg" alt="">
                            <span class="tb-publish font-noraure-3">Nov / 28</span>
                        </div>
                    </a>
                    <div class="tb-content7">
                        <a href="#"><h4 class="tb-titlel">Glance Into the Future of Androids</h4></a>
                        <div class="tb-excerpt"> The summer holidays are wonderful. Dressing for them can be significantly less so: Packing{...} </div>
                    </div>
                </div>
                <div class="tb-post-item">
                    <a href="#">
                        <div class="tb-thumb">
                            <img src="img/banner/l3.jpg" alt="">
                            <span class="tb-publish font-noraure-3">Dec / 11</span>
                        </div>
                    </a>
                    <div class="tb-content7">
                        <a href="#"><h4 class="tb-titlel">Nullam at tellus vehicula</h4></a>
                        <div class="tb-excerpt"> The summer holidays are wonderful. Dressing for them can be significantly less so: Packing{...} </div>
                    </div>
                </div>
                <div class="tb-post-item">
                    <a href="#">
                        <div class="tb-thumb">
                            <img src="img/banner/l4.jpg" alt="">
                            <span class="tb-publish font-noraure-3">Nov / 26</span>
                        </div>
                    </a>
                    <div class="tb-content7">
                        <a href="#"><h4 class="tb-titlel">Summer Classics in Positano</h4></a>
                        <div class="tb-excerpt"> The summer holidays are wonderful. Dressing for them can be significantly less so: Packing{...} </div>
                    </div>
                </div>
                <div class="tb-post-item">
                    <a href="#">
                        <div class="tb-thumb">
                            <img src="img/banner/l5.jpg" alt="">
                            <span class="tb-publish font-noraure-3">Nov / 16</span>
                        </div>
                    </a>
                    <div class="tb-content7">
                        <a href="#"><h4 class="tb-titlel">Photography Tips From Wai Su</h4></a>
                        <div class="tb-excerpt"> The summer holidays are wonderful. Dressing for them can be significantly less so: Packing{...} </div>
                    </div>
                </div>
                <div class="tb-post-item">
                    <a href="#">
                        <div class="tb-thumb">
                            <img src="img/banner/l1.jpg" alt="">
                            <span class="tb-publish font-noraure-3">Dec / 11</span>
                        </div>
                    </a>
                    <div class="tb-content7">
                        <a href="#"><h4 class="tb-titlel">Nullam at tellus vehicula</h4></a>
                        <div class="tb-excerpt"> The summer holidays are wonderful. Dressing for them can be significantly less so: Packing{...} </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="icon-slider-area">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="mates">
                        <img src="img/icon-slider/logo-05.png" alt="">
                    </div>
                    <div class="mates">
                        <img src="img/icon-slider/logo-03.png" alt="">
                    </div>
                    <div class="mates nm">
                        <img src="img/icon-slider/logo-02.png" alt="">
                    </div>
                    <div class="mates">
                        <img src="img/icon-slider/logo-01.png" alt="">
                    </div>
                    <div class="mates">
                        <img src="img/icon-slider/logo-04.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>

</FrontEndLayout>

</template>
