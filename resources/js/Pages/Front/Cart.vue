<template>
    <section class="contact-img-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="con-text">
                            <h2 class="page-title">Shopping Cart</h2>
                            <p><InertiaLink href="route('home')">Home</InertiaLink> | Shopping Cart</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="shopping-cart-area s-cart-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-12">
                        <div class="s-cart-all">
                            <div class="page-title">
                                <h1>Your selected Items in shopping cart on UrbanStrick </h1>
                            </div>
                            <div class="cart-form table-responsive">
                                <table id="shopping-cart-table" class="data-table cart-table">
                                    <tr>
                                        <th class="low1">Product</th>
                                        <th class="low1">Size</th>
                                        <th class="low7">Quantity</th>
                                        <th class="low7">Price</th>
                                        <th class="low7">Total</th>
                                    </tr>
                                    <tr v-for="product in currentCart.get()">
                                        <td class="sop-cart an-shop-cart">
                                            <a href="#"><img class="primary-image" style="max-height: 45px;max-width: 45px;" alt="" :src="product.product.thumbnail"></a>
                                            <a href="#">{{ product.product.name }}</a>
                                        </td>
                                        <td class="sop-cart an-shop-cart text-center">
                                            {{ product.size.toUpperCase() }}
                                        </td>
                                        <td class="sop-cart an-sh">
                                            <div class="d-flex">
                                                <div class="quantity ray">

                                                    <input class="input-text qty text" type="number" title="Qty" v-model="product.qt" min="0" step="1">
                                                </div>


                                                <a v-on:click.prevent="currentCart.add(product.product,1,product.size)" class="remove btn-success" href="#" style="width: 25px;height: 25px">
                                                    <span class="fa fa-plus" style="line-height: 25px;" ></span>
                                                </a>
                                                <a v-on:click.prevent="currentCart.remove(product.product,1,product.size)" class="remove btn-warning" href="#" style="width: 25px;height: 25px">
                                                    <span class="fa fa-minus" style="line-height: 25px;" ></span>
                                                </a>
                                                <a v-on:click.prevent="currentCart.remove(product.product)" class="remove btn-danger" href="#" style="width: 25px;height: 25px">
                                                    <span class="fa fa-trash" style="line-height: 25px;" ></span>
                                                </a>
                                            </div>

                                        </td>
                                        <td class="sop-cart">
                                            <div class="tb-product-price font-noraure-3">
                                                <span class="amount">{{ [product.product.currency,product.product.price].join(' ') }}</span>
                                            </div>
                                        </td>
                                        <td class="cen">
                                            <span class="amount">{{ [product.product.currency,product.product.price*product.qt].join(' ') }}</span>
                                        </td>
                                    </tr>
                                    <tr v-if="currentCart.get().length==0">
                                        <th colspan="5">
                                            <h3>There are no items in your cart</h3>
                                            <InertiaLink class="btn btn-primary btn-black" :href="route('home')" >Shop Now & Add Exclusive Items to cart</InertiaLink>
                                        </th>
                                    </tr>
                                </table>
                            </div>
                            <div class="last-check1" v-if="false">
                                <div class="yith-wcwl-share yit">
                                    <p class="checkout-coupon an-cop">
                                        <input type="submit" value="Update Cart">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="second-all-class">
                    <div class="row">
                        <div class="col-lg-7 col-md-12 col-12">
                            <div class="tb-tab-container2">
                                <ul class="nav etabs" role="tablist">
                                    <li v-if="false" role="presentation" class="vc_tta-tab"><a  href="#home" aria-controls="home" role="tab" data-bs-toggle="tab">Estimate Shipping & Taxe</a></li>
                                    <li class="vc_tta-tab " role="presentation"><a class="active" href="#profile" aria-controls="profile" role="tab" data-bs-toggle="tab">Use Coupon Code</a></li>
                                </ul>
                                <div class="tab-content another-cen">
                                    <div v-if="false" role="tabpanel" class="tab-pane" id="home">
                                        <div class="top-shopping4">
                                            <p class="shop9">Shipping Local Pickup (Free)</p>
                                            <p class="down-shop">Enter your destination to get a shipping estimate</p>
                                        </div>
                                        <form action="#" class="woocommerce-shipping-calculator">
                                            <p class="form-row form-row-wide">
                                                <label>
                                                    Country
                                                    <span class="required">*</span>
                                                </label>
                                                <select class="email s-email s-wid">
                                                    <option>Bangladesh</option>
                                                    <option>Albania</option>
                                                    <option>Åland Islands</option>
                                                    <option>Afghanistan</option>
                                                    <option>Belgium</option>
                                                </select>
                                            </p>
                                            <p class="form-row form-row-wide">
                                                <label>
                                                    District
                                                    <span class="required">*</span>
                                                </label>
                                                <select class="email s-email s-wid">
                                                    <option>mymensingh</option>
                                                    <option>dhaka</option>
                                                    <option>khulna</option>
                                                    <option>kumillah</option>
                                                    <option>chadpur</option>
                                                </select>
                                            </p>
                                            <p class="form-row form-row-wide">
                                                <label>
                                                    Post Code
                                                    <span class="required">*</span>
                                                </label>
                                                <input class="form-control" type="text" name="name" required="" placeholder="1234567">
                                            </p>
                                            <p class="checkout-coupon two">
                                                <input type="submit" value="Get Quotes">
                                            </p>
                                        </form>
                                    </div>
                                    <div role="tabpanel" class="tab-pane active" id="profile">
                                        <div class="2nd-copun-code">
                                            <form action="#">
                                                <p class="form-row form-row-wide">
                                                    <label>
                                                        Coupon:
                                                        <span class="required">*</span>
                                                    </label>
                                                    <input class="form-control again" type="text" name="name" required="" placeholder="Coupon code">
                                                </p>
                                                <p class="checkout-coupon full">
                                                    <input type="submit" value="Apply Coupon">
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-12 col-12">
                            <div class="sub-total">
                                <table>
                                    <tbody>
                                    <tr class="cart-subtotal">
                                        <th>Subtotal:</th>
                                        <td>
                                            <span class="amount">{{ currentCart.getTotal() }}</span>
                                        </td>
                                    </tr>
                                    <tr class="cart-subtotal">
                                        <th>GST 5% :</th>
                                        <td>
                                            <span class="amount">{{ [currentCart.getCurrency(),currentCart.getTotalRaw()*0.05].join(' ') }}</span>
                                        </td>
                                    </tr>
                                    <tr class="order-total">
                                        <th>Total:</th>
                                        <td>
                                            <strong>
                                                <span class="amount">{{[ currentCart.getCurrency(),currentCart.getTotalRaw()+(currentCart.getTotalRaw()*0.05)].join(' ') }}</span>
                                            </strong>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="wc-proceed-to-checkout">
                                <p class="return-to-shop">
                                    <InertiaLink  class="button wc-backward" :href="route('home')">Continue Shopping</InertiaLink>
                                </p>
                                <InertiaLink v-if="currentCart.get().length>0" class="wc-forward wc-forward-cart" :href="route('checkout')">Confirm Order</InertiaLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
import {InertiaLink} from "@inertiajs/inertia-vue3";
import {onMounted} from "vue";
import {manageCart} from "@/Lib/LaravelHelper";


const props=defineProps({
    site:Object,
    auth:Object,

});


const currentCart=manageCart();
const getCart = currentCart.get();

onMounted(()=>{
    //console.log(getCart);
})

</script>
<script>
import FrontEndLayout from '@/Layouts/FrontEnd.vue';

export default {
    // Using the shorthand
    layout: FrontEndLayout,


}
</script>
<style scoped>

</style>
