<template>
    <FrontEndLayout :site="props.site" :auth="props.auth">

        <section class="contact-img-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="con-text">
                            <h2 class="page-title">{{ props.currentCategory.name }}</h2>
                            <p><InertiaLink :href="route('home')">Home</InertiaLink> | {{ props.currentCategory.name }}</p>
                            <p>shop good quality, decent looking, {{ props.currentCategory.name }} clothings </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="shop-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-xl-3 col-md-12">
                        <div class="all-shop-sidebar">
                            <div class="top-shop-sidebar">
                                <h3 class="wg-title">SHOP BY</h3>
                            </div>
                            <div class="shop-one">
                                <h3 class="wg-title2">Categories</h3>
                                <ul class="product-categories">
                                    <li class="cat-item">
                                        <a href="#">Accessories</a>
                                        <span class="count">(10)</span>
                                    </li>
                                    <li class="cat-item">
                                        <a href="#">Jewelry</a>
                                        <span class="count">(8)</span>
                                    </li>
                                    <li class="cat-item current-cat">
                                        <a href="#">Men</a>
                                        <span class="count">(5)</span>
                                    </li>
                                    <li class="cat-item">
                                        <a href="#">Watches</a>
                                        <span class="count">(6)</span>
                                    </li>
                                    <li class="cat-item">
                                        <a href="#">Women</a>
                                        <span class="count">(10)</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="shop-one">
                                <h3 class="wg-title2">Our Brand</h3>
                                <ul class="product-categories">
                                    <li class="cat-item">
                                        <a href="#">Nike</a>
                                        <span class="count">(1)</span>
                                    </li>
                                    <li class="cat-item">
                                        <a href="#">Religion</a>
                                        <span class="count">(1)</span>
                                    </li>
                                    <li class="cat-item-10">
                                        <a href="#">Diesel</a>
                                        <span class="count">(1)</span>
                                    </li>
                                    <li class="cat-item">
                                        <a href="#">Monki</a>
                                        <span class="count">(1)</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="shop-one">
                                <h3 class="wg-title2">Choose Price</h3>
                                <div class="widget shop-filter">
                                    <div class="info_widget">
                                        <div class="price_filter">
                                            <div id="slider-range"></div>
                                            <div id="amount">
                                                <input type="text" name="first_price" class="first_price" />
                                                <input type="text" name="last_price" class="last_price"/>
                                                <button class="button-shop" type="submit"><i class="fa fa-search search-icon"></i></button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="shop-one">
                                <h3 class="wg-title2">Choose Color</h3>
                                <ul class="product-categories">
                                    <li class="cat-item cat-item-11">
                                        <a href="#">Black</a>
                                        <span class="count">(1)</span>
                                    </li>
                                    <li class="cat-item cat-item-8">
                                        <a href="#">Orange</a>
                                        <span class="count">(1)</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="top-shop-sidebar sim">
                                <h3 class="wg-title">Compare Products</h3>
                                <ul class="products-list">
                                    <li class="cat-item cat-item-11">No products to compare</li>
                                </ul>
                                <a class="clear-all" href="#">Clear all</a>
                                <a class="blog8" href="#">Compare</a>
                            </div>
                            <div class="top-shop-sidebar sim2">
                                <h3 class="wg-title">Community Pool</h3>
                            </div>
                            <div class="shop-one">
                                <ul class="product-categories">
                                    <li class="cat-item cat-item-11">
                                        <a href="#">Black</a>
                                        <span class="count">(1)</span>
                                    </li>
                                    <li class="cat-item cat-item-8">
                                        <a href="#">Orange</a>
                                        <span class="count">(1)</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="top-shop-sidebar an-shop">
                                <h3 class="wg-title">BEST SELLER</h3>
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
                                    <img src="img/product/a1.jpg" alt="">
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
                    <div class="col-lg-8 col-xl-9 col-md-12">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-12">
                                <div class="features-tab">
                                    <!-- Nav tabs -->
                                    <div class="shop-all-tab">
                                        <div class="two-part">
                                            <ul class="nav tabs" role="tablist">
                                                <li class="vali">View as:</li>
                                                <li role="presentation"><a href="#tab-view" class="active" aria-controls="home" role="tab" data-bs-toggle="tab"><i class="fa fa-th-large"></i></a></li>
                                                <li role="presentation"><a href="#list-view" aria-controls="profile" role="tab" data-bs-toggle="tab"><i class="fa fa-align-justify"></i></a></li>
                                            </ul>
                                            <div class="sort-by">
                                                <div class="shop6">
                                                    <label>Sort By :</label>
                                                    <select>
                                                        <option value="">Default sorting</option>
                                                        <option value="">Sort by popularity</option>
                                                        <option value="">Sort by average rating</option>
                                                        <option value="">Sort by newness</option>
                                                        <option value="">Sort by price: low to high</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shop5">
                                            <label>Show :</label>
                                            <select>
                                                <option value="">12</option>
                                                <option value="">24</option>
                                                <option value="">36</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!-- Tab panes -->
                                    <div class="tab-content">
                                        <div role="tabpanel" class="tab-pane active" id="tab-view">
                                            <div class="shop-tab">
                                                <div class="row">
                                                    <!-- single-product start -->
                                                    <div v-for="product in props.productList.data" class="col-lg-6 col-xl-4 col-md-6">
                                                        <div class="tb-product-item-inner tb2 pct-last">
                                                            <span class="onsale two">Sale!</span>
                                                            <img alt="" :src="product.thumbnail">
                                                            <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                                            <div class="tb-content">
                                                                <div class="tb-it">
                                                                    <div class="tb-beg">
                                                                        <InertiaLink :href="route('product_page',{name:product.slug})">{{ product.name }}</InertiaLink>
                                                                    </div>
                                                                    <div class="tb-product-wrap-price-rating">
                                                                        <div class="tb-product-price font-noraure-3">
                                                                            <span class="amount text-danger">{{ [product.currency,getUpperPrice(product.price)].join(' ') }}</span>
                                                                            <span class="amount2 ana text-success">{{ [product.currency,product.price].join(' ') }}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="last-cart l-mrgn">
                                                                        <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                                                        <a v-on:click.prevent="addProduct(product)" class="las4">Add To Cart</a>
                                                                        <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div role="tabpanel" class="tab-pane" id="list-view">
                                            <div v-for="product in props.productList.data" class="li-item">
                                                <div class="row">
                                                    <div class="col-lg-4 col-md-4">
                                                        <div class="tb-product-item-inner tb2 pct-last">
                                                            <span class="onsale two">Sale!</span>
                                                            <img alt="" :src="product.thumbnail">
                                                            <a class="la-icon ts"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-8 col-md-8">
                                                        <div class="f-fix">
                                                            <div class="tb-beg">
                                                                <a href="#">{{ product.name }}</a>
                                                            </div>
                                                            <div class="tb-product-wrap-price-rating">
                                                                <div class="tb-product-price font-noraure-3">
                                                                    <span class="amount text-danger">{{ [product.currency,getUpperPrice(product.price)].join(' ') }}</span>
                                                                    <span class="amount2 ana text-success">{{ [product.currency,product.price].join(' ') }}</span>

                                                                </div>
                                                            </div>
                                                            <p class="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo  </p>
                                                            <div class="last-cart l-mrgn ns">
                                                                <a class="las4" v-on:click.prevent="addProduct(product)">Add To Cart</a>
                                                            </div>
                                                            <div class="tb-product-btn">
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
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="shop-all-tab-nor">
                                        <div class="two-part">
                                            <ul class="nav tabs" role="tablist">
                                                <li role="presentation"><a href="#home" aria-controls="home" role="tab" data-bs-toggle="tab"><i class="fa fa-th-large"></i></a></li>
                                                <li role="presentation"><a class="active" href="#profile" aria-controls="profile" role="tab" data-bs-toggle="tab"><i class="fa fa-align-justify"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
    productList:Array,
    currentCategory:Object
});
const currentCart=manageCart();
const addProduct = (product) => {
    currentCart.add(product,1)
}
</script>

<style scoped>

</style>
