<template>

        <section class="contact-img-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="con-text">
                            <h2 class="page-title">Verify & Proceed To Payment</h2>
                            <p><InertiaLink :href="route('home')">Home</InertiaLink> | Contact</p>
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
                                <h1>Please verify your items in cart</h1>
                            </div>
                            <div class="cart-form table-responsive">
                                <table id="shopping-cart-table" class="data-table cart-table">
                                    <tr>
                                        <th class="low1 text-left">Product</th>
                                        <th class="low1">Size</th>
                                        <th class="low7">Quantity</th>
                                        <th class="low7">Price</th>
                                        <th class="low7">Total</th>
                                    </tr>
                                    <tr v-for="product in manageCart().get()">
                                        <td class="sop-cart an-shop-cart">
                                            <a href="#"><img class="primary-image" style="max-height: 45px;max-width: 45px;" alt="" :src="product.product.thumbnail"></a>
                                            <a href="#">{{ product.product.name }}</a>
                                        </td>
                                        <td class="sop-cart an-sh">
                                            <div class="d-flex justify-content-center">
                                                <div class="quantity">
                                                    {{ product.size.toUpperCase() }}
                                                </div>
                                            </div>

                                        </td>
                                        <td class="sop-cart an-sh">
                                            <div class="d-flex justify-content-center">
                                                <div class="quantity ray">
                                                    {{ product.qt }}
                                                </div>
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
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="second-all-class">
                    <div class="row">
                        <div class="col-12">
                            <div class="sub-total">
                                <table>
                                    <tbody>
                                    <tr class="cart-subtotal">
                                        <th class="pr-2">Subtotal:<span class="amount">{{ manageCart().getTotal() }}</span></th>
                                    </tr>
                                    <tr class="cart-subtotal">
                                        <th class="pr-2">GST 5% :<span class="amount">{{ [manageCart().getCurrency(),manageCart().getTotalRaw()*0.05].join(' ') }}</span></th>

                                    </tr>
                                    <tr class="cart-subtotal">
                                        <th class="pr-2">Payment Processing Fees  :<span class="amount">{{ [manageCart().getCurrency(),manageCart().getTotalRaw()*0.02].join(' ') }}</span></th>

                                    </tr>
                                    <tr class="order-total">
                                        <th class="pr-2">Total:<strong>
                                            <span class="amount">{{[ manageCart().getCurrency(),manageCart().getTotalRaw()+(manageCart().getTotalRaw()*0.05) +(manageCart().getTotalRaw()*0.02) ].join(' ') }}</span>
                                        </strong></th>

                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="wc-proceed-to-checkout d-flex justify-content-center">

                                <div v-on:click="payNow" v-if="manageCart().get().length>0" class="wc-forward mx-4 wc-forward-cart btn btn-black btn-block" >Pay Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<script setup>
import {InertiaLink, useForm} from "@inertiajs/inertia-vue3";
import { ref} from "vue";
import {createSuccessToast, manageCart} from "@/Lib/LaravelHelper";
 require('@/Lib/checkout');

const props=defineProps({
    site:Object,
    auth:Object,
    api:Object,
    order: Object

});
const paymentForm=useForm({
    'payment_id':'',
    'order_id':''
})

const orderPaid = ref(false);
const paymentSuccess=(response)=>{

    paymentForm.payment_id=response.razorpay_payment_id;
    paymentForm.order_id=response.razorpay_order_id;
    let options={
        preserveState:true,
        preserveScroll:true,
        onSuccess:()=>{
            orderPaid.value=true;
            manageCart().doEmpty();
            createSuccessToast('We received your payment, You will shortly receive confirmation mail.')
        },
        onError:()=>{
            createErrorToast('Opps.. something went wrong');
        }
    };
    paymentForm.post(route('payment.store'),options);

}

const makeRazorPayOption=()=>{
    return {
        "key_id": props.api.razorpay.key, // Enter the Key ID generated from the Dashboard
        "key_secret": props.api.razorpay.secret, // Enter the Key ID generated from the Dashboard
        "amount": (props.order.data.total_amount*props.order.data.total_tax)*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "UrbanStrick",
        "description": "Selling clothing is not our specialty but Happiness is ...",
        "image": "https://www.urbanstrick.com/img/logo/payment_logo.png",
        "order_id": props.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
        paymentSuccess(response)
    },
        "prefill": {
        "name": [props.auth.user.first_name,props.auth.user.last_name].join(' ') ,
            "email": props.auth.user.email,
            "contact": "9999999999"
    },
        "notes": {
        "address": props.site.addressx
    },
        "theme": {
        "color": "#070807"
    }
    };
};

const payNow=()=>{

    const options = makeRazorPayOption();

    console.log(options);

    const rzp1 = new Razorpay(options);
    rzp1.open();
}



const cart=ref(manageCart().get());

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
