<script setup>
import {onMounted, ref,onUpdated} from 'vue';
import BreezeApplicationLogo from '@/Components/ApplicationLogo.vue';
import BreezeDropdown from '@/Components/Dropdown.vue';
import BreezeDropdownLink from '@/Components/DropdownLink.vue';
import BreezeNavLink from '@/Components/NavLink.vue';
import BreezeResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link,InertiaLink } from '@inertiajs/inertia-vue3';
import 'animate.css';
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import _ from "lodash";
import {asset, getLocalData, hasLocalData, manageCart, setLocalData} from "@/Lib/LaravelHelper";
const showingNavigationDropdown = ref(false);
import {store} from '@/FrontEndStore';
const isLogoAnimate=ref(false);
const getCart = () => {
    currentCart.get();
}
const cart=ref([]);

const isbuttons =[];

const props = defineProps({
    site:Object,
    auth:Object,
    errors:Object,
    canlogin:Boolean,
    cart:Array
});
const cartLocalKey='cart';
const removeProduct = (product) => {
    currentCart.remove(product,null,cart);
}
onUpdated(()=>{

   // cart.value=props.cart;
});
onMounted(()=>{
    if(!hasLocalData(cartLocalKey))setLocalData(cartLocalKey,[]);
    cart.value=currentCart.get();
    setInterval(()=>{
        isLogoAnimate.value=(isLogoAnimate.value)?false:true;
    },25000)
    var stickyTop = $('.header-menu').offset().top;
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > stickyTop) {
            $('.header-menu').addClass('stick');
            // $('.dynamic-logo-big').addClass('d-none');
            // $('.dynamic-logo-small').removeClass('d-none');

        } else {
            $('.header-menu').removeClass('stick');
            // $('.dynamic-logo-small').addClass('d-none');
            // $('.dynamic-logo-big').removeClass('d-none');;
        }
    });

    $('.top-shop-title').on('click', function(e){
        e.preventDefault();
        $('.wish-cart').toggleClass('active');
    });
    $('.top-user-title').on('click', function(e){
        e.preventDefault();
        $('.user-popup').toggleClass('active');
    });
});
const currentCart = manageCart();
const allAvatar=[
    asset('img/avatar/m1.png'),
    // asset('img/avatar/m2.png'),
    // asset('img/avatar/m3.png'),
    // asset('img/avatar/m4.png'),
    // asset('img/avatar/f1.png'),
    // asset('img/avatar/f2.png'),
    // asset('img/avatar/f3.png'),
    // asset('img/avatar/f4.png'),
];

const getRandomAvatar=()=>{
    return _.sample(allAvatar);
}
</script>

<template>
    <header class="header-area home-2 home-5">
        <div class="header-menu header-menu-2">
            <div class="header-wrapper">
                <div class="logo-stiky">
                    <InertiaLink :href="route('home')">
                        <img :class="{'animate__animated':isLogoAnimate}" class=" animate__tada animate__infinite animate__slower" style="max-height: 50px" :src="asset('img/logo/logo.png')" alt="">
                    </InertiaLink>
                </div>
                <div class="menu-cart">
                    <div class="muti_menu">
                        <nav>
                            <ul>
                                <li v-if="false"><a class="fast active" href="index.html">home <i class="fa fa-angle-down"></i></a>
                                    <div class="rayed ru">
                                        <div class="tas menu-last2">
                                            <a href="index-2.html">Homepage 02</a>
                                            <a href="index-3.html">Homepage 03</a>
                                            <a href="index-4.html">Homepage 04</a>
                                            <a href="index-5.html">Homepage 05</a>
                                            <a href="index-6.html">Homepage 06</a>
                                        </div>
                                    </div>
                                </li>
                                <li v-if="false" ><a href="#">Shop <i class="fa fa-angle-down"></i></a></li>
                                <li v-if="true" ><InertiaLink :href="route('product_list',{type:'women'})">Women <i class="fa fa-angle-down"></i></InertiaLink>
                                    <div v-if="false" class="mega-menu menu-minus">
                                        <div class="tas1">
                                            <div class="tas">
                                                <h3 class="hedding-border">
                                                    <a href="#">Clothings</a>
                                                </h3>
                                                <a href="#">Dresses</a>
                                                <a href="#">Tops</a>
                                                <a href="#">Outerwear</a>
                                            </div>
                                            <div class="tas">
                                                <h3 class="hedding-border">
                                                    <a href="#">Jewelry</a>
                                                </h3>
                                                <a href="#">Necklaces</a>
                                                <a href="#">Earrings</a>
                                                <a href="#">Rings</a>
                                            </div>
                                            <div class="tas">
                                                <h3 class="hedding-border">
                                                    <a href="#">Shoes</a>
                                                </h3>
                                                <a href="#">Sneakers</a>
                                                <a href="#">Flats</a>
                                                <a href="#">Boots</a>
                                            </div>
                                        </div>
                                        <div class="tas2">
                                            <div class=" menu-img ist">
                                                <a  href="#"><img alt="" src="img/banner/bg_menu1.jpg"></a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li v-if="true"><InertiaLink :href="route('product_list',{type:'men'})">Men <i class="fa fa-angle-down"></i></InertiaLink>
                                    <div v-if="false" class="mega-menu menu-minus">
                                        <div class="tas1 tas3">
                                            <div class="tas">
                                                <h3 class="hedding-border">
                                                    <a href="#">Clothing</a>
                                                </h3>
                                                <a href="#">Shirts</a>
                                                <a href="#">Tops</a>
                                                <a href="#">Fashion Scarves</a>
                                            </div>
                                            <div class="tas">
                                                <h3 class="hedding-border">
                                                    <a href="#">Shoes</a>
                                                </h3>
                                                <a href="#">Sneakers</a>
                                                <a href="#">Casual</a>
                                                <a href="#">Boots</a>
                                            </div>
                                            <div class="tas">
                                                <h3 class="hedding-border">
                                                    <a href="#">Bags</a>
                                                </h3>
                                                <a href="#">Work</a>
                                                <a href="#">Weekend</a>
                                                <a href="#">Backpacks</a>
                                            </div>
                                            <div class="tas">
                                                <h3 class="hedding-border">
                                                    <a href="#">Accessories</a>
                                                </h3>
                                                <a href="#">Sunglasses</a>
                                                <a href="#">Watches</a>
                                                <a href="#">Jewelry</a>
                                            </div>
                                            <div class="tas">
                                                <h3 class="hedding-border">
                                                    <a href="#">Sale</a>
                                                </h3>
                                                <a href="#">Tops</a>
                                                <a href="#">Bottoms</a>
                                                <a href="#">Denim</a>
                                            </div>
                                            <div class="tas mrgn-none">
                                                <h3 class="hedding-border">
                                                    <a href="#">Features</a>
                                                </h3>
                                                <a href="#">Holiday Party</a>
                                                <a href="#">The Carry On</a>
                                                <a href="#">Holiday Travel</a>
                                            </div>
                                        </div>
                                        <div class="tas4">
                                            <div class="menu-img im3">
                                                <a  href="#"><img alt="" :src="asset('img/banner/bg_menu2.jpg')"></a>
                                            </div>
                                            <div class="menu-img im3">
                                                <a  href="#"><img alt="" :src="asset('img/banner/bg_menu3.jpg')"></a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li v-if="false"><a href="shop.html">Jewelry</a></li>
                                <li v-if="false"><a class="fast" href="index.html">Pages <i class="fa fa-angle-down"></i></a>
                                    <div class="rayed ru">
                                        <div class="tas menu-last2">
                                            <a href="blog.html">Blog</a>
                                            <a href="blog-details.html">Blog Details</a>
                                            <a href="checkout.html">checkout</a>
                                            <a href="contact.html">Contacts</a>
                                            <a href="login.html">Login</a>
                                            <a href="my-account.html">My Account</a>
                                            <a href="shop.html">shop</a>
                                            <a href="shop-list.html">shop List</a>
                                            <a href="single-product.html">single-product</a>
                                            <a href="shopping-cart.html">shopping-cart</a>
                                            <a href="wishlist.html">wishlist</a>
                                            <a href="coming-soon.html">coming soon</a>
                                        </div>
                                    </div>
                                </li>
                                <li v-if="false"><a href="blog.html">Watches</a></li>
                                <li v-if="false"><a href="blog.html">Blog</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="contact.html">About US</a></li>
                                <li v-show="auth.user==null"><InertiaLink :href="route('login')">Login</InertiaLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="menu-sidebar-container">
                        <div class="tb-menu-sidebar floatleft">
                            <div class="search-item">
                                <a class="icon_search" href="#">
                                    <i class="fa fa-search search-icon"></i>
                                </a>
                                <div class="widget_searchform_content">
                                    <form action="#">
                                        <input type="text" placeholder="Search" name="s" value="">
                                        <input type="submit" value="Search">
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div v-show="false" class="tb-menu-canvas-wrap floatleft">
                            <div class="header-menu-item-icon">
                                <a href="#">
                                    <i class="fa fa-bars"></i>
                                </a>
                            </div>
                            <div class="widget_searchform">
                                <h3 class="wg-title">
                                    <span>ACCOUNT</span>
                                </h3>
                                <div class="widget">
                                    <ul>
                                        <li>
                                            <a href="#"><i class="fa fa-user"></i> My Account</a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa fa-heart"></i>My Wishlist</a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa fa-shopping-cart"></i> My Cart</a>
                                        </li>
                                        <li>
                                            <a class="tb-login" href="#"><i class="fa fa-usd"></i>  Check Out</a>
                                        </li>
                                        <li>
                                            <a class="tb-login" href="#"><i class="fa fa-unlock-alt"></i>  Login</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div class="top-cart-wrapper wrap floatleft" v-if="props.auth.user!=null">
                            <div class="top-shop-contain">
                                <div class="block-shop">
                                    <div class="top-user-title " style="box-sizing: border-box;">
                                        <a href="#">
                                            <i class="fa fa-user text-white"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="user-popup margin" >
                                    <div class="card py-4">
                                        <div class="upper" v-if="false"> <img src="https://i.imgur.com/Qtrsrk5.jpg" class="img-fluid"> </div>
                                        <div class="user text-center ">
                                            <div class="profile">
                                                <img :src="getRandomAvatar()" class="rounded-circle" width="80">
                                            </div>
                                        </div>
                                        <div class="mt-3 text-center">
                                            <h4 class="mb-0">{{ [props.auth.user.first_name,props.auth.user.last_name].join(' ') }}</h4>
                                            <span v-if="false" class="text-muted d-block mb-2">Los Angles</span>

                                            <div class="d-flex justify-content-between align-items-center mt-2 px-4">
                                                <InertiaLink :href="route('logout')" method="post" as="div" class="btn btn-sm btn-block btn-danger w-full mt-2 pull-left" >
                                                    Log out
                                                </InertiaLink>
                                                <InertiaLink :href="route('user.dashboard.home')" method="get" as="div" class="btn btn-sm btn-block btn-info w-full mt-2 pull-right" >
                                                    My account
                                                </InertiaLink>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="top-cart-wrapper wrap floatleft">
                            <div class="top-shop-contain">
                                <div class="block-shop">
                                    <div class="top-shop-title">
                                        <a href="#">
                                            <i class="fa fa-shopping-cart"></i>
                                            <span class="count co1">{{ currentCart.getItemNo() }}</span>
                                        </a>
                                    </div>
                                    <div class="wish-cart margin pr-2">
                                        <div class="wish-item" style="max-height: 50vh;overflow-y: auto;position: relative;">

                                            <div class="cat" v-for="itemList in store.cart" style="margin:0 10px">
                                                <a class="image" href="#"><img :src="itemList.product.url" alt=""></a>
                                                <div class="cat_two">
                                                    <p >
                                                        <a href="#" >{{ itemList.product.name }}</a>
                                                    </p>
                                                    <p>
                                                        <small><span class="agn">{{ itemList.qt }} </span>x <span>{{[itemList.product.currency,itemList.product.price].join('')}}</span> =   </small><span>{{ [itemList.product.currency,itemList.product.price*itemList.qt].join('') }}</span>


                                                    </p>
                                                </div>
                                                <div class="cat_icon ">
                                                    <a class="remove " href="#" v-on:click="removeProduct(itemList.product) ">×</a>
                                                </div>
                                            </div>
                                            <div v-if="false" class="cat">
                                                <a class="image" href="#"><img src="img/product/c2.jpg" alt=""></a>
                                                <div class="cat_two">
                                                    <p>
                                                        <a href="#">luxury-leather-bag</a>
                                                    </p>
                                                    <p><span class="agn">1</span> x <span>$99.00</span></p>
                                                </div>
                                                <div class="cat_icon">
                                                    <a class="remove" href="#">×</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="wish-item">
                                            <div class="cat_bottom">
                                                <p class="total">
                                                    <strong>Subtotal:</strong>
                                                    <span class="amount">{{ currentCart.getTotal() }}</span>
                                                </p>
                                                <p class="buttons">
                                                    <InertiaLink class="button wc-forward" :href="route('cart')">View Cart</InertiaLink>
                                                    <a class="button checkout wc-forward" href="#">Checkout</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="mobile-menu">
                            <nav id="dropdown">
                                <ul class="main-menu">
                                    <li>
                                        <a href="index.html">Home</a>
                                        <ul class="menu-up">
                                            <li><a href="index-2.html">Homepage 02</a></li>
                                            <li><a href="index-3.html">Homepage 03</a></li>
                                            <li><a href="index-4.html">Homepage 04</a></li>
                                            <li><a href="index-5.html">Homepage 05</a></li>
                                            <li><a href="index-6.html">Homepage 06</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="shop.html">Women</a>
                                        <ul class="main-menu2">
                                            <li>
                                                <a href="#">Clothings</a>
                                                <ul class="main-menu3">
                                                    <li><a>Dresses</a></li>
                                                    <li><a>Tops</a></li>
                                                    <li><a>Outerwear</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Jewelry</a>
                                                <ul class="main-menu3">
                                                    <li><a>Necklaces</a></li>
                                                    <li><a>Earrings</a></li>
                                                    <li><a>Rings</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Shoes</a>
                                                <ul class="main-menu3">
                                                    <li><a>Sneakers</a></li>
                                                    <li><a>Flats</a></li>
                                                    <li><a>Boots</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img alt="" src="img/banner/bg_menu1.jpg">
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="shop.html">Men</a>
                                        <ul class="main-menu2">
                                            <li>
                                                <a href="#">Clothing</a>
                                                <ul class="main-menu3">
                                                    <li><a>Shirts</a></li>
                                                    <li><a>Tops</a></li>
                                                    <li><a>Outerwear</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Shoes</a>
                                                <ul class="main-menu3">
                                                    <li><a>Sneakers</a></li>
                                                    <li><a>Casual</a></li>
                                                    <li><a>Boots</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Bags</a>
                                                <ul class="main-menu3">
                                                    <li><a>Work</a></li>
                                                    <li><a>Weekend</a></li>
                                                    <li><a>Backpacks</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Accessories</a>
                                                <ul class="main-menu3">
                                                    <li><a>Sunglasses</a></li>
                                                    <li><a>Watches</a></li>
                                                    <li><a>Jewelry</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Sale</a>
                                                <ul class="main-menu3">
                                                    <li><a>Tops</a></li>
                                                    <li><a>Bottoms</a></li>
                                                    <li><a>Denim</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Features</a>
                                                <ul class="main-menu3">
                                                    <li><a>Holiday Party</a></li>
                                                    <li><a>The Carry On</a></li>
                                                    <li><a>Holiday Travel</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img alt="" src="img/banner/bg_menu2.jpg">
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img alt="" src="img/banner/bg_menu3.jpg">
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="shop.html">Jewelry</a></li>
                                    <li>
                                        <a href="#">Pages</a>
                                        <ul>
                                            <li>
                                                <a href="blog.html">Blog</a>
                                                <a href="blog-details.html">Blog Details</a>
                                                <a href="checkout.html">checkout</a>
                                                <a href="contact.html">Contacts</a>
                                                <a href="login.html">Login</a>
                                                <a href="my-account.html">My Account</a>
                                                <a href="shop.html">shop</a>
                                                <a href="shop-list.html">shop List</a>
                                                <a href="single-product.html">single-product</a>
                                                <a href="shopping-cart.html">shopping-cart</a>
                                                <a href="wishlist.html">wishlist</a>
                                                <a href="coming-soon.html">Coming soon</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="shop.html">Watches</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div>

        <!-- Page Content -->
            <main>
                <slot />
            </main>


        </div>
    <footer class="footer-area">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div class="first-footer rspn">
                            <h3 class="wg-title">Contact Us</h3>
                            <div class="textwidget">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i class="fa fa-map-marker" style="top:-3px"></i>
                                            <span>{{ props.site.address }}</span>
                                        </a>
                                    </li>
                                    <hr>
                                    <li>
                                        <a :href="mailLink(props.site['customer_care_email_1'])">
                                            <i class="fa fa-envelope" style="top:-3px"></i>
                                            <span>{{ props.site['customer_care_email_1'] }}</span>
                                        </a>
                                    </li>
                                    <hr>
                                    <li>
                                        <a :href="callLink(props.site['customer_care_number_1'])">
                                            <i class="fa fa-phone" style="top:-3px"></i>
                                            <span>{{ props.site['customer_care_number_1']}}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-4 col-sm-3 col-12">
                        <div class="first-footer rspn">
                            <h3 class="wg-title">Information</h3>
                            <div class="textwidget">
                                <ul class="f-none">
                                    <li><responsive-nav-link :href="route((props.auth.user==null)?'register':'user.dashboard.home')">{{(props.auth.user==null)?'Register':'My account'}}</responsive-nav-link ></li>
                                    <li><a href="#">Order history</a></li>
                                    <li><a href="#">Wish List</a></li>
                                    <li><a href="#">Returns</a></li>
                                    <li><responsive-nav-link :href="route('privacy_policy')">Privacy Policy</responsive-nav-link></li>
                                    <li><a href="#">Site Map</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-4 col-sm-3 col-12">
                        <div class="first-footer rspn">
                            <h3 class="wg-title">Our Offers</h3>
                            <div class="textwidget">
                                <ul class="f-none">
                                    <li><a href="#">New collection</a></li>
                                    <li><a href="#">Best sellers</a></li>
                                    <li><a href="#">Manufacturers</a></li>
                                    <li><a href="#">New products</a></li>
                                    <li><a href="#">Suppliers</a></li>
                                    <li><a href="#">Delivery & returns</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
                        <div class="first-footer res-mrg-top-md rspn">
                            <h3 class="wg-title">Our Policy</h3>
                            <div class="textwidget">
                                <ul class="f-none">
                                    <li><a href="#">Help & Contact</a></li>
                                    <li><a href="#">Shipping & taxes</a></li>
                                    <li><a href="#">Returns policy</a></li>
                                    <li><a href="#">Careens</a></li>
                                    <li><a href="#">Affiliates</a></li>
                                    <li><a href="#">Legal Notice</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div class="last-footer res-mrg-top-md">
                            <h3 class="wg-title">Get Newsletters</h3>
                            <div class="newsletter">
                                <form action="#">
                                    <p><input class="newsletter-email" type="email" placeholder="Email" required=""></p>
                                    <p><input class="newsletter-submit" type="submit" value="Subscribe"></p>
                                </form>
                            </div>
                            <div class="widget_text">
                                <h3 class="wg-title">Connect Us</h3>
                                <div class="textwid">
                                    <ul class="socials">
                                        <li><a :href="props.site.social.instagram"><i class="fa fa-instagram"></i></a></li>
                                        <li><a :href="props.site.social.facebook"><i class="fa fa-facebook"></i></a></li>
                                        <li v-if="false"><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li v-if="false"><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                        <li v-if="false"><a href="#"><i class="fa fa-rss"></i></a></li>
                                        <li v-if="false"><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-12">
                        <div class="footer-address">
                            <address>
                                Copyright ©
                                <a :href="route('home')"><img :src="asset('img/logo/logo.png')" style="max-height: 20px;"></a>
                                All Rights Reserved
                            </address>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                        <div class="foot-icon">
                            <ul>
                                <li><a href="#"><img :src="asset('img/icon-img/payment-1.jpg')" alt=""></a></li>
                                <li><a href="#"><img :src="asset('img/icon-img/payment-2.jpg')" alt=""></a></li>
                                <li><a href="#"><img :src="asset('img/icon-img/payment-3.jpg')" alt=""></a></li>
                                <li><a href="#"><img :src="asset('img/icon-img/payment-4.jpg')" alt=""></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
