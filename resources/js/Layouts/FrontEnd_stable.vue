<script setup>
import {onMounted, ref, onUpdated, onBeforeMount} from 'vue';
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
import {msHelper} from '@/Lib/LaravelHelper';
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
onBeforeMount(()=>{

})
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
                                <li v-if="true"><InertiaLink :href="route('product_list',{type:'unisex'})">Unisex <i class="fa fa-angle-down"></i></InertiaLink>
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
                                <li><InertiaLink :href="route('contact_us')">Contact</InertiaLink></li>
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

                                                <InertiaLink :href="route('user.dashboard.home')" method="get" as="div" class="btn btn-sm btn-block btn-info w-full mt-2 pull-right" >
                                                    My account
                                                </InertiaLink>

                                                <InertiaLink :href="route('logout')" method="post" as="div" class="btn btn-sm btn-block btn-danger w-full mt-2 pull-left" >
                                                    Log out
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
                                            <div v-if="currentCart.getItemNo()==0" class="cat"  style="margin:0 10px">
                                                <div class="cat_two text-center" style="display: contents;">
                                                    <h3 >
                                                  No Item added yet
                                                    </h3>

                                                        <InertiaLink :href="route('home')"  class="btn btn-primary btn-black">
                                                    Shop now
                                                </InertiaLink>

                                                </div>

                                            </div>

                                        </div>
                                        <div class="wish-item">
                                            <div class="cat_bottom">
                                                <p class="total" v-if="currentCart.getItemNo()>0">
                                                    <strong>Subtotal:</strong>
                                                    <span class="amount">{{ currentCart.getTotal() }}</span>
                                                </p>
                                                <p class="buttons px-2">
                                                    <InertiaLink class="button wc-forward" :href="route('cart')">View Cart</InertiaLink>
                                                    <InertiaLink :href="route('checkout')" v-if="currentCart.getItemNo()>0" class="button checkout wc-forward" href="#">Checkout</InertiaLink>
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
                                    <li v-if="false"><a href="#">Returns</a></li>
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
                                    <li v-if="false"><a href="#">Manufacturers</a></li>
                                    <li><a href="#">New products</a></li>
                                    <li v-if="false"><a href="#">Suppliers</a></li>
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

                                    <li><InertiaLink :href="route('contact_us')">Help & Contact</InertiaLink></li>
                                    <li v-if="false"><a href="#">Shipping & taxes</a></li>
                                    <li v-if="false"><a href="#">Returns policy</a></li>
                                    <li v-if="false"><a href="#">Careens</a></li>
                                    <li v-if="false"><a href="#">Affiliates</a></li>
                                    <li v-if="false"><a href="#">Legal Notice</a></li>
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
                                    <span class="py-2" style="display: block;">
                                        Follow <img :src="asset('img/logo/urban_text_white.png')" style="padding: 0 2px;margin-top:-2px;max-height: 10px;"> <strong class="text-white">India</strong> on social media
                                    </span>

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
                    <div class="col-lg-4 col-md-4 col-12">
                        <div class="footer-address">
                            <address>
                                Copyright © {{msHelper().getYear()}}
                                <a :href="route('home')" class="px-2"><img :src="asset('img/logo/logo.png')" style="max-height: 20px;"></a>
                                All Rights Reserved
                            </address>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-8 col-12">
                        <div class="foot-icon">
                            <ul v-if="false">
                                <li><a href="#"><img :src="asset('img/icon-img/payment-1.jpg')" alt=""></a></li>
                                <li><a href="#"><img :src="asset('img/icon-img/payment-2.jpg')" alt=""></a></li>
                                <li><a href="#"><img :src="asset('img/icon-img/payment-3.jpg')" alt=""></a></li>
                                <li><a href="#"><img :src="asset('img/icon-img/payment-4.jpg')" alt=""></a></li>
                            </ul>
                            <ul class="payment-icons list--inline site-footer__icon-list">
                                <li class="payment-icon">
                                <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" height="24" width="38" role="img" aria-labelledby="pi-airtel_money"><title id="pi-airtel_money">Airtel Money</title><g fill-rule="evenodd" fill="none"><path fill="#EDEDED" d="M34.5 24h-31C1.6 24 0 22.4 0 20.5v-17C0 1.6 1.6 0 3.5 0h31C36.4 0 38 1.6 38 3.5v17c0 1.9-1.6 3.5-3.5 3.5z"></path><path fill="#fff" d="M3.5 1C2.1 1 1 2.1 1 3.5v17C1 21.9 2.1 23 3.5 23h31c1.4 0 2.5-1.1 2.5-2.5v-17C37 2.1 35.9 1 34.5 1h-31z"></path><path fill="#EB2227" d="M22.3 3c.6.1 1.2.2 1.7.3 2.2.4 3.9 2 4.5 4.1.3 1.6.1 3.3-.7 4.7-.9 1.8-2.1 3.3-3.7 4.5-2.1 1.8-4.6 3.2-7.3 4.1-.6.2-1.3.3-1.9.3-1.1.1-2.1-.7-2.2-1.8v-.5c.2-2.1 1.7-3.8 3.8-4.4.5 0 1 0 1.4.2.5.2.8.8.6 1.4-.1.2-.2.3-.3.4-.4.4-.8.8-1.2 1.1s-.7.6-1 1c-.2.2-.3.4-.4.6-.2.4 0 .6.4.6.2 0 .4 0 .6-.1 3.5-1.3 6.3-3.7 8.1-6.9.3-.5.4-1 .4-1.6.1-1.7-1-2.7-2.6-2.2-1.2.4-2.5.9-3.6 1.5-1.2.6-2.4 1.4-3.6 2-.9.5-1.9.8-3 .9-.5.1-1 0-1.4-.1-1-.1-1.8-1.1-1.6-2.3 0-.1 0-.2.1-.3.5-1.4 1.4-2.7 2.6-3.5 2.3-1.8 5-3.1 7.9-3.7.5-.1 1.1-.2 1.6-.3h.8z"></path></g></svg>
                            </li>
                                <li class="payment-icon">
                                <svg class="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-amazon"><title id="pi-amazon">Amazon</title><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" fill-rule="nonzero" opacity=".07"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF" fill-rule="nonzero"></path><path d="M25.26 16.23c-1.697 1.48-4.157 2.27-6.275 2.27-2.97 0-5.644-1.3-7.666-3.463-.16-.17-.018-.402.173-.27 2.183 1.504 4.882 2.408 7.67 2.408 1.88 0 3.95-.46 5.85-1.416.288-.145.53.222.248.47v.001zm.706-.957c-.216-.328-1.434-.155-1.98-.078-.167.024-.193-.148-.043-.27.97-.81 2.562-.576 2.748-.305.187.272-.047 2.16-.96 3.063-.14.138-.272.064-.21-.12.205-.604.664-1.96.446-2.29h-.001z" fill="#F90" fill-rule="nonzero"></path><path d="M21.814 15.291c-.574-.498-.676-.73-.993-1.205-.947 1.012-1.618 1.315-2.85 1.315-1.453 0-2.587-.938-2.587-2.818 0-1.467.762-2.467 1.844-2.955.94-.433 2.25-.51 3.25-.628v-.235c0-.43.033-.94-.208-1.31-.212-.333-.616-.47-.97-.47-.66 0-1.25.353-1.392 1.085-.03.163-.144.323-.3.33l-1.677-.187c-.14-.033-.296-.153-.257-.38.386-2.125 2.223-2.766 3.867-2.766.84 0 1.94.234 2.604.9.842.82.762 1.918.762 3.11v2.818c0 .847.335 1.22.65 1.676.113.164.138.36-.003.482-.353.308-.98.88-1.326 1.2a.367.367 0 0 1-.414.038zm-1.659-2.533c.34-.626.323-1.214.323-1.918v-.392c-1.25 0-2.57.28-2.57 1.82 0 .782.386 1.31 1.05 1.31.487 0 .922-.312 1.197-.82z" fill="#221F1F"></path></svg>

                            </li><li class="payment-icon">
                                <svg class="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-american_express"><title id="pi-american_express">American Express</title><g fill="none"><path fill="#000" d="M35,0 L3,0 C1.3,0 0,1.3 0,3 L0,21 C0,22.7 1.4,24 3,24 L35,24 C36.7,24 38,22.7 38,21 L38,3 C38,1.3 36.6,0 35,0 Z" opacity=".07"></path><path fill="#006FCF" d="M35,1 C36.1,1 37,1.9 37,3 L37,21 C37,22.1 36.1,23 35,23 L3,23 C1.9,23 1,22.1 1,21 L1,3 C1,1.9 1.9,1 3,1 L35,1"></path><path fill="#FFF" d="M8.971,10.268 L9.745,12.144 L8.203,12.144 L8.971,10.268 Z M25.046,10.346 L22.069,10.346 L22.069,11.173 L24.998,11.173 L24.998,12.412 L22.075,12.412 L22.075,13.334 L25.052,13.334 L25.052,14.073 L27.129,11.828 L25.052,9.488 L25.046,10.346 L25.046,10.346 Z M10.983,8.006 L14.978,8.006 L15.865,9.941 L16.687,8 L27.057,8 L28.135,9.19 L29.25,8 L34.013,8 L30.494,11.852 L33.977,15.68 L29.143,15.68 L28.065,14.49 L26.94,15.68 L10.03,15.68 L9.536,14.49 L8.406,14.49 L7.911,15.68 L4,15.68 L7.286,8 L10.716,8 L10.983,8.006 Z M19.646,9.084 L17.407,9.084 L15.907,12.62 L14.282,9.084 L12.06,9.084 L12.06,13.894 L10,9.084 L8.007,9.084 L5.625,14.596 L7.18,14.596 L7.674,13.406 L10.27,13.406 L10.764,14.596 L13.484,14.596 L13.484,10.661 L15.235,14.602 L16.425,14.602 L18.165,10.673 L18.165,14.603 L19.623,14.603 L19.647,9.083 L19.646,9.084 Z M28.986,11.852 L31.517,9.084 L29.695,9.084 L28.094,10.81 L26.546,9.084 L20.652,9.084 L20.652,14.602 L26.462,14.602 L28.076,12.864 L29.624,14.602 L31.499,14.602 L28.987,11.852 L28.986,11.852 Z"></path></g></svg>

                            </li><li class="payment-icon">
                                <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-diners_club"><title id="pi-diners_club">Diners Club</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z" fill="#3086C8"></path></svg>
                            </li><li class="payment-icon">
                                <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" height="24" width="38" role="img" aria-labelledby="pi-freecharge"><title id="pi-freecharge">Freecharge</title><g fill-rule="evenodd" fill="none"><path fill="#EDEDED" d="M34.5 24h-31C1.6 24 0 22.4 0 20.5v-17C0 1.6 1.6 0 3.5 0h31C36.4 0 38 1.6 38 3.5v17c0 1.9-1.6 3.5-3.5 3.5z"></path><path fill="#fff" d="M3.5 1C2.1 1 1 2.1 1 3.5v17C1 21.9 2.1 23 3.5 23h31c1.4 0 2.5-1.1 2.5-2.5v-17C37 2.1 35.9 1 34.5 1h-31z"></path><circle cy="12" cx="19" r="9" fill="#E2704D"></circle><path fill="#fff" d="M16.6 11.7l.1-1.4s.7.1.9-.1c.4-.3.4-.9.5-1.2.3-1.4 2-2.2 3.8-1.7l-.2 1.4s-.1-.1-.4-.1c-1.1-.1-1.6.2-1.7 1.7h1.5l-.2 1-2.4 2.4h1.4c-1.2 1.3-2.8 2.9-3.8 3.8l1.3-2.6h-1.1c1-1.9 1-2 1.7-3.3"></path></g></svg>
                            </li><li class="payment-icon">
                                <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-maestro"><title id="pi-maestro">Maestro</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#00A2E5" cx="23" cy="12" r="7"></circle><path fill="#7375CF" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path></svg>
                            </li><li class="payment-icon">
                                <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#F79E1B" cx="23" cy="12" r="7"></circle><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path></svg>
                            </li><li class="payment-icon">
                                <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="38" height="24" role="img" aria-labelledby="pi-mobikwik"><title id="pi-mobikwik">MobiKwik</title><rect x=".5" y=".5" width="37" height="23" rx="3" ry="3" fill="#fff" stroke="#000" stroke-opacity=".07"></rect><path d="M31.15 8.52a3.33 3.33 0 0 0-1 .1c-.25.05-.49.17-.75.23a5.29 5.29 0 0 1-.65.07c.07-1 .12-2 .2-3a1 1 0 0 0-.87-1.15 7.37 7.37 0 0 0-1.07 0v-.41a.75.75 0 0 0-.94-.82l-.7.11-7 1.17v7.08a3.94 3.94 0 0 1-.2.91c-.08.31-.17.63-.26 1a.16.16 0 0 0 0 .14l3.75-7.33A1.07 1.07 0 0 1 22.91 6a1.06 1.06 0 0 1 .84 1.07v9.7a1.09 1.09 0 0 1-2.17 0v-5h-.08l-2.92 5.6q-.17.33-.36.63a1.09 1.09 0 0 1-1.21.45 1 1 0 0 1-.75-1V8.84h-.13l-5.42 10.29a1.12 1.12 0 1 1-2-1c.62-1.13 1.21-2.24 1.79-3.34l4.92-9.47-6.32 1a1.42 1.42 0 0 0-1.1.94v13.08A1 1 0 0 0 9 21h15.29a1.12 1.12 0 0 0 1.2-.92l.06-.23h1.1a.81.81 0 0 0 .75-.39 2.05 2.05 0 0 0 .27-.67c.08-.44.11-.9.16-1.35q.26-2.42.51-4.85a.19.19 0 0 1 .19-.2c.26 0 .5-.09.75-.14a4.5 4.5 0 0 0 1.86-.75A2 2 0 0 0 32 9.7a1.08 1.08 0 0 0-.85-1.18zm-3.37-2.6c-.1.67-.14 1.36-.21 2-.12 1.18-.23 2.36-.35 3.55L26.86 15q-.16 1.5-.33 3a.63.63 0 0 1-.87.53L27 4.78a6 6 0 0 1 .55.45.75.75 0 0 1 .23.68zm2.47 5a.86.86 0 0 1-.84-.92.85.85 0 0 1 .85-.85.86.86 0 0 1-.01 1.73zm.56-.92a.55.55 0 0 1-.54.54.54.54 0 1 1 .54-.54z" fill="#26bcbc"></path><path d="M18 13.89zm-8.64 6a1.12 1.12 0 0 1-.57-1.74c.54-1.15 1.13-2.26 1.71-3.36l5.75-11.05a1.12 1.12 0 0 1 1.44-.61 1.13 1.13 0 0 0-1.49.57l-5.91 11.16c-.6 1.14-1.2 2.26-1.78 3.39a1.13 1.13 0 0 0 1.43 1.63 1.11 1.11 0 0 1-.62 0zM21.71 6.57A1.06 1.06 0 0 1 22.79 6a1.07 1.07 0 0 0-1.15.55c-.81 1.57-2.11 4.22-2.92 5.88zm1 11.28a1.09 1.09 0 0 1-1.09-1.09v-5h-.12.06v5.07a1.1 1.1 0 0 0 2.2 0v-.1a1.09 1.09 0 0 1-1.1 1.12zM23.73 7a1 1 0 0 1 0 .11V7zM17 18.44a1 1 0 0 1-.75-1v-8.6h-.12v8.7a1.06 1.06 0 0 0 .79 1 1.1 1.1 0 0 0 1.08-.3 1.09 1.09 0 0 1-1 .2z" fill="#00aaa8"></path></svg>
                            </li><li class="payment-icon">
                                <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" height="24" width="38" role="img" aria-labelledby="pi-ola_money"><title id="pi-ola_money">Ola Money</title><g fill-rule="evenodd" fill="none"><path fill="#EDEDED" d="M34.5 24h-31C1.6 24 0 22.4 0 20.5v-17C0 1.6 1.6 0 3.5 0h31C36.4 0 38 1.6 38 3.5v17c0 1.9-1.6 3.5-3.5 3.5z"></path><path fill="#fff" d="M3.5 1C2.1 1 1 2.1 1 3.5v17C1 21.9 2.1 23 3.5 23h31c1.4 0 2.5-1.1 2.5-2.5v-17C37 2.1 35.9 1 34.5 1h-31z"></path><ellipse rx="8.8" ry="9" cy="12" cx="19" fill="#378F43"></ellipse><path fill="#8BC249" d="M19.1 8.8L17 15.4h-2.2l2.1-6.6zm4.1 0l-2.1 6.5h-2.3l2.1-6.6z"></path><path fill="#fff" d="M12.7 8.8l2.1 6.6H17l-2-6.6h-2.3zm4.2 0l2.1 6.6h2.3l-2.1-6.6h-2.3zm4.1 0l2.1 6.6h2.3l-2.1-6.6H21z"></path></g></svg>
                            </li><li class="payment-icon">
                                <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="38" height="24" role="img" aria-labelledby="pi-paytm"><title id="pi-paytm">Paytm</title><rect x=".5" y=".5" width="37" height="23" rx="3" ry="3" fill="#fff" stroke="#000" stroke-opacity=".07"></rect><path d="M14.17 13.32v2.6a.87.87 0 0 1-.74.91h-2.7a1.83 1.83 0 0 1-2-1.9 14.66 14.66 0 0 1 .06-2.08 1.81 1.81 0 0 1 1.69-1.54h1.19a.31.31 0 0 0 .34-.41.33.33 0 0 0-.23-.41H10c-.38 0-.46-.08-.46-.47V8.91a.3.3 0 0 1 .25-.35h2.39a1.87 1.87 0 0 1 1.92 2.1c.08.91.07 1.79.07 2.66zm-3.32 1.34a.34.34 0 0 0 .31.36h.61a.33.33 0 0 0 .36-.35v-1.13c0-.3-.16-.36-.72-.36s-.53.1-.56.37v1.11zm9.58-2.73v2.81a2 2 0 0 1-1.85 2.15h-2.45c-.34 0-.42-.07-.42-.42v-1.26a.3.3 0 0 1 .29-.35h2a.32.32 0 0 0 .36-.34.33.33 0 0 0-.31-.35h-1a1.94 1.94 0 0 1-2-1.86V9a.32.32 0 0 1 .26-.37h1.34c.34 0 .42.1.42.45v2.6c0 .45.1.54.55.54h.05c.62 0 .67-.05.67-.66V9a.36.36 0 0 1 .45-.5H20a.36.36 0 0 1 .42.42c.01 1.08.01 2.02.01 3.01zM4.57 14.48v1.94c0 .46-.06.51-.52.51H2.87a.3.3 0 0 1-.36-.36V9a.28.28 0 0 1 .22-.32H6.2a1.66 1.66 0 0 1 1.62 1.61 17.62 17.62 0 0 1 0 2.49 1.74 1.74 0 0 1-1.73 1.74H4.57zm0-2.08h.86a.32.32 0 0 0 .32-.31V11a.32.32 0 0 0-.28-.35h-.88v1.74z" fill="#22346c"></path><path d="M28.94 9a2.2 2.2 0 0 1 2.86.1 7.28 7.28 0 0 1 1.15-.51 2.08 2.08 0 0 1 2.56 2v5.83c0 .36-.09.45-.45.45h-1.15a.35.35 0 0 1-.42-.42v-5.24a.6.6 0 0 0-.79-.64.55.55 0 0 0-.49.58v5.4a.31.31 0 0 1-.25.36h-1.43a.3.3 0 0 1-.35-.31v-5.43a.48.48 0 0 0-.29-.55 1.38 1.38 0 0 0-.71 0 .48.48 0 0 0-.26.53v5.21c0 .48-.06.55-.56.55h-1c-.36 0-.42-.08-.42-.44V9c0-.42.06-.47.46-.47h1.09a.42.42 0 0 1 .45.47zm-5.43 1.64h-.77a.33.33 0 0 1-.41-.4V9a.31.31 0 0 1 .25-.36h.1a2 2 0 0 0 1.74-1 2 2 0 0 1 .58-.57c.24-.16.42 0 .44.27v1.27h.7a.36.36 0 0 1 .42.42v1.22a.35.35 0 0 1-.42.42h-.66v5.83c0 .42-.07.48-.47.49h-1.09a.34.34 0 0 1-.42-.42c.01-1.87.01-5.78.01-5.92z" fill="#24b8eb"></path></svg>
                            </li><li class="payment-icon">
                                <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="38" height="24" role="img" aria-labelledby="pi-payzapp"><title id="pi-payzapp">PayZapp</title><rect x=".5" y=".5" width="37" height="23" rx="3" ry="3" fill="#fff" stroke="#000" stroke-opacity=".07"></rect><path d="M18.3 4.92H12v6.37h2.45V7.4h3.85V4.92zm1.4 0V7.4h3.86v3.89H26V4.92h-6.3zm3.85 7.78v3.9H19.7v2.47H26v-6.36h-2.45zm-9.1 3.9v-3.89H12v6.36h6.3V16.6h-3.85z" fill="#ed232a"></path><path d="M16.91 9.88h4.19v4.24H17z" fill="#004c8f"></path></svg>
                            </li><li class="payment-icon">
                                <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-rupay"><title id="pi-rupay">RuPay</title><g fill="none" fill-rule="evenodd"><rect stroke-opacity=".07" stroke="#000" fill="#FFF" x=".5" y=".5" width="37" height="23" rx="3"></rect><path fill="#097A44" d="M32 15.77l2-7.41 2 3.82z"></path><path fill="#F46F20" d="M30.76 15.79l2-7.4 2 3.82z"></path><path d="M20.67 8.2a2 2 0 0 0-1.56-.56h-3l-1.95 6.81h1.75l.66-2.31h1.23a3.4 3.4 0 0 0 1.9-.5 2.93 2.93 0 0 0 1.12-1.72 1.77 1.77 0 0 0-.15-1.72zm-3.21.94h1.12a.76.76 0 0 1 .55.15c.11.11.07.35 0 .53a1.08 1.08 0 0 1-.4.62 1.21 1.21 0 0 1-.7.2H17l.46-1.5zM9.14 9a1.64 1.64 0 0 0-.2-.61 1.3 1.3 0 0 0-.58-.53 2.75 2.75 0 0 0-1.08-.18H4l-2 6.75h1.73l.72-2.52H5.7c.47 0 .58.1.6.13.02.03.09.15 0 .65l-.16.6a3.35 3.35 0 0 0-.11.59v.55h1.79l.12-.43-.11-.08s-.07-.05-.06-.2c.027-.19.07-.377.13-.56l.1-.42a2.14 2.14 0 0 0 .1-1.11.88.88 0 0 0-.26-.41 2 2 0 0 0 .68-.54 2.79 2.79 0 0 0 .53-1c.07-.22.101-.45.09-.68zm-1.86.83a.84.84 0 0 1-.5.6 1.79 1.79 0 0 1-.64.09H4.86l.38-1.33h1.43a1.1 1.1 0 0 1 .53.09c.05 0 .21.07.08.5v.05zm4.9 2.17a2.11 2.11 0 0 1-.3.67 1 1 0 0 1-.87.43c-.34 0-.36-.14-.38-.2a1.24 1.24 0 0 1 .07-.52l.89-3.11H9.9l-.86 3a3 3 0 0 0-.15 1.32c.08.42.4.91 1.41.91.247.004.493-.03.73-.1a2.51 2.51 0 0 0 .6-.29l-.08.3h1.62l1.47-5.13H13L12.18 12zm12.93 1.1l.63-2.18c.24-.83-.07-1.21-.37-1.39A2.75 2.75 0 0 0 24 9.2a2.87 2.87 0 0 0-2 .68 2.75 2.75 0 0 0-.69 1.1l-.09.26h1.61v-.11a1.15 1.15 0 0 1 .25-.37.84.84 0 0 1 .56-.17.89.89 0 0 1 .46.08v.18c0 .06 0 .15-.25.23a2.13 2.13 0 0 1-.48.1l-.44.05a4 4 0 0 0-1.25.32c-.57.271-.99.78-1.15 1.39a1.25 1.25 0 0 0 .17 1.22c.289.307.7.468 1.12.44a2.43 2.43 0 0 0 1.07-.25l.4-.23v.33H25l.13-.48-.13-.07a.61.61 0 0 1 0-.22c0-.25.07-.43.11-.58zm-2.92-.1a.62.62 0 0 1 .34-.4 2.17 2.17 0 0 1 .57-.15l.29-.05.3-.07v.07a1.24 1.24 0 0 1-.51.75 1.44 1.44 0 0 1-.72.21.34.34 0 0 1-.25-.08.55.55 0 0 1-.02-.28zm7.91-3.68l-1.69 3v-3h-1.8l.39 5.13-.12.19a.8.8 0 0 1-.23.25.64.64 0 0 1-.24.08h-.68l-.39 1.37h.83a2 2 0 0 0 1.29-.34 9.55 9.55 0 0 0 1.27-1.71l3.17-5-1.8.03z" fill="#302F82"></path></g></svg>
                            </li><li class="payment-icon">
                                <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"></path></svg>
                            </li></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
