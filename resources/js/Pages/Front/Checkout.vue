<template>

        <section class="contact-img-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="con-text">
                            <h2 class="page-title">Checkout</h2>
                            <p><InertiaLink :href="route('home')">Home</InertiaLink> | Checkout</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="shopping-cart-area s-cart-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-12">
                        <div class="s-cart-all">
                            <div class="page-title">
                                <h1 v-if="!msHelper().auth().check()">Please login or sign up & select delivery Address</h1>
                                <h1 v-if="msHelper().auth().check()">Please select Delivery Address</h1>
                            </div>
                        </div>
                    </div>
                    <div class="" v-if="!msHelper().auth().check()">

                        <div class="col row border p-2">
                            <div v-on:click.prevent="changeTab('quickbuy')"
                                 :class="{'active':isActiveTab('quickbuy')}"
                                 class="col-12 col-md-5 col-lg-5 text-center  cursor-pointer py-2 tab-nav-btn">
                                <h5
                                    style="margin-bottom: 0"
                                    :class="{
                                    'text-shadow-white':isActiveTab('quickbuy')
                                    }"
                                >
                                    <i
                                        :class="{
                                    'fa-square-o':!isActiveTab('quickbuy'),
                                    'fa-check-square-o':isActiveTab('quickbuy')
                                    }"
                                        class="fa pl-4 " aria-hidden="true"></i>
                                    Don't have account ?
                                </h5>

                            </div>
                            <div class="col-12 col-md-2 col-lg-2 text-center pt-2 tab-nav-btn-or">
                                - or -
                            </div>
                            <div v-on:click.prevent="changeTab('login')"
                                 :class="{'active':isActiveTab('login')}"
                                 class="col-12 col-md-5 col-lg-5 text-center cursor-pointer py-2  tab-nav-btn">
                                <h5
                                    style="margin-bottom: 0"
                                    :class="{
                                    'text-shadow-white':isActiveTab('login')
                                    }"
                                >
                                    <i  :class="{
                                    'fa-square-o':!isActiveTab('login'),
                                    'fa-check-square-o':isActiveTab('login')
                                    }" class="fa pl-4 " aria-hidden="true"></i>
                                    Already have account
                                </h5>

                            </div>
                        </div>

                        <div v-if="isActiveTab('quickbuy')" class="col-12">
                            <form class="my-3" v-on:submit.prevent="submitQuickBuyForm">
                                <h6>Create Quick new account for quick buy</h6>

                                <fieldset class="border p-3 mb-3">
                                    <legend><small>Personal Details:</small></legend>
                                    <div class="form-group required">
                                        <div class="row">
                                            <label class="col-md-3 control-label">First Name</label>
                                            <div class="col-md-9">
                                                <BreezeInput :class="{'is-invalid':hasError(quickButForm,'first_name')}" v-model="quickButForm.first_name" class="form-control" type="text" placeholder="Enter your First Name"></BreezeInput>
                                                <BootstrapInputError  :form="quickButForm" name="first_name"></BootstrapInputError>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group required">
                                        <div class="row">
                                            <label class="col-md-3 control-label">Last Name</label>
                                            <div class="col-md-9">
                                                <BreezeInput :class="{'is-invalid':hasError(quickButForm,'last_name')}" v-model="quickButForm.last_name" class="form-control" type="text" placeholder="Enter your Last Name"></BreezeInput>
                                                <BootstrapInputError  :form="quickButForm" name="last_name"></BootstrapInputError>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group required">
                                        <div class="row">
                                            <label class="col-md-3 control-label">Email</label>
                                            <div class="col-md-9">
                                                <BreezeInput :class="{'is-invalid':hasError(quickButForm,'email')}" v-model="quickButForm.email" class="form-control" type="text" placeholder="Enter your Email"></BreezeInput>
                                                <BootstrapInputError  :form="quickButForm" name="email"></BootstrapInputError>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset  class="border p-3 ">
                                    <legend><small>Delivery Details:</small></legend>
                                    <div class="form-group required">
                                        <div class="row">
                                            <label class="col-md-3 control-label">Plot no/Bloc No/ Building Name</label>
                                            <div class="col-md-9">
                                                <BreezeInput :class="{'is-invalid':hasError(quickButForm,'line_1')}" v-model="quickButForm.line_1" class="form-control" type="text" placeholder="Address line 1"></BreezeInput>
                                                <BootstrapInputError  :form="quickButForm" name="line_1"></BootstrapInputError>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group required">
                                        <div class="row">
                                            <label class="col-md-3 control-label">Landmark</label>
                                            <div class="col-md-9">
                                                <BreezeInput :class="{'is-invalid':hasError(quickButForm,'line_2')}" v-model="quickButForm.line_2" class="form-control" type="text" placeholder="Address line 2"></BreezeInput>
                                                <BootstrapInputError  :form="quickButForm" name="line_2"></BootstrapInputError>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group required">
                                        <div class="row">
                                            <label class="col-md-3 control-label">Area/Road Name</label>
                                            <div class="col-md-9">
                                                <BreezeInput :class="{'is-invalid':hasError(quickButForm,'line_3')}" v-model="quickButForm.line_3" class="form-control" type="text" placeholder="Address line 3"></BreezeInput>
                                                <BootstrapInputError  :form="quickButForm" name="line_3"></BootstrapInputError>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group required">
                                        <div class="row">
                                            <label class="col-md-3 control-label">Pincode</label>
                                            <div class="col-md-9">
                                                <BreezeInput :class="{'is-invalid':hasError(quickButForm,'pincode')}" v-model="quickButForm.pincode" class="form-control" type="text" placeholder="Pincode"></BreezeInput>
                                                <BootstrapInputError  :form="quickButForm" name="pincode"></BootstrapInputError>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group required">
                                        <div class="row">
                                            <label class="col-md-3 control-label">City</label>
                                            <div class="col-md-9">
                                                <BreezeInput :class="{'is-invalid':hasError(quickButForm,'city')}" v-model="quickButForm.city" class="form-control" type="text" placeholder="City"></BreezeInput>
                                                <BootstrapInputError  :form="quickButForm" name="city"></BootstrapInputError>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group required">
                                        <div class="row">
                                            <label class="col-md-3 control-label">State</label>
                                            <div class="col-md-9">
                                                <BreezeInput :class="{'is-invalid':hasError(quickButForm,'state')}" v-model="quickButForm.state" class="form-control" type="text" placeholder="State"></BreezeInput>
                                                <BootstrapInputError  :form="quickButForm" name="state"></BootstrapInputError>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <div class="text-center my-4">
                                    <button type="submit" value="Save" class="btn btn-primary btn-lg ce5 btn-block w-full">
                                        <div v-if="quickButForm.processing" class="spinner-border loading" role="status"></div>
                                        <div v-else  role="status">Create account & Proceed to payment</div>
                                    </button>
                                </div>


                            </form>
                        </div>

                        <div  class="col-12" v-if="isActiveTab('login')" >
                            <form class="my-3" v-on:submit.prevent="submitLoginForm">
                                <h6>Please login in to your account</h6>
                                <fieldset  class="border p-3 ">
                                    <div class="form-group required">
                                        <div class="row">
                                            <label class="col-md-3 control-label">Email</label>
                                            <div class="col-md-9">
                                                <BreezeInput :class="{'is-invalid':hasError(loginForm,'email')}" v-model="loginForm.email" class="form-control" type="text" placeholder="Enter email"></BreezeInput>
                                                <BootstrapInputError  :form="loginForm" name="email"></BootstrapInputError>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group required">
                                        <div class="row">
                                            <label class="col-md-3 control-label">Password</label>
                                            <div class="col-md-9">
                                                <BreezeInput :class="{'is-invalid':hasError(loginForm,'password')}" v-model="loginForm.password" class="form-control" type="password" placeholder="password"></BreezeInput>
                                                <BootstrapInputError  :form="loginForm" name="password"></BootstrapInputError>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <div class="text-center my-4">
                                    <button type="submit" value="Save" class="btn btn-primary btn-lg ce5 btn-block w-full">
                                        <div v-if="loginForm.processing" class="spinner-border loading" role="status"></div>
                                        <div v-else  role="status">Login & Proceed to payment</div>
                                    </button>
                                </div>

                            </form>
                        </div>

                    </div>
                    <div class="row pb-2" v-else>

                        <div class="col-12 col-mg-4 col-lg-4 pb-2" v-for="address in auth.user.addresses"  >
                            <div class="card card-default" :class="{'border-info':isSelectedAddress(address)}">
                                <div class="card-header"
                                :class="{'text-info':isSelectedAddress(address)}"
                                >
                                    <i class="fa pl-2" :class="{
                                        'fa-check-square-o':isSelectedAddress(address),
                                        'fa-square-o':!isSelectedAddress(address)
                                    }" aria-hidden="true"></i>
                                    {{ address.address.name }}
                                    <span v-if="address.address.name==null || address.address.name.length<1">No Name</span>

                                </div>
                                <div class="card-body">
                                    <p>
                                        <span v-if="address.address.line_1.length>0">{{ address.address.line_1 }},</span><br>
                                        <span v-if="address.address.line_2.length>0">{{ address.address.line_2 }},</span><br>
                                        <span v-if="address.address.line_3.length>0">{{ address.address.line_3 }},</span><br>
                                        <span v-if="address.address.city.name.length>0">{{ address.address.city.name}},</span><br>
                                        <span v-if="address.address.state.name.length>0">{{ address.address.state.name}} - {{ address.address.pincode}}</span>
                                    </p>
                                </div>
                                <div class="card-footer">
                                    <div class="btn btn-primary btn-black btn-block" v-on:click.prevent="selectAddress(address)">
                                        <span v-if="isSelectedAddress(address)">Selected Address</span>
                                        <span v-else>Select this Address </span>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div v-on:click="proceedToPaymentNCreateOrder" v-if="selectedAddress!=null && selectedAddress.hasOwnProperty('id')"  class="btn btn-primary btn-black btn-block">
                            Proceed to payment
                        </div>

                        <div class="col-12">
                            - or -
                        </div>

                        <div class="col-12">
                            <form class="my-3" v-on:submit.prevent="submitAddressForm">
                                <h6 v-if="auth.user.addresses.length<1">You dont have any address added yet, Please add address for delivery</h6>
                                <h6 v-else>Add new address for delivery</h6>
                                <fieldset  class="border p-3 ">
                                    <legend><small>Delivery Details:</small></legend>
                                    <div class="form-group required">
                                        <div class="row">
                                            <label class="col-md-3 control-label">Plot no/Bloc No/ Building Name</label>
                                            <div class="col-md-9">
                                                <BreezeInput :class="{'is-invalid':hasError(addressForm,'line_1')}" v-model="addressForm.line_1" class="form-control" type="text" placeholder="Address line 1"></BreezeInput>
                                                <BootstrapInputError  :form="addressForm" name="line_1"></BootstrapInputError>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group required">
                                        <div class="row">
                                            <label class="col-md-3 control-label">Landmark</label>
                                            <div class="col-md-9">
                                                <BreezeInput :class="{'is-invalid':hasError(addressForm,'line_2')}" v-model="addressForm.line_2" class="form-control" type="text" placeholder="Address line 2"></BreezeInput>
                                                <BootstrapInputError  :form="addressForm" name="line_2"></BootstrapInputError>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group required">
                                        <div class="row">
                                            <label class="col-md-3 control-label">Area/Road Name</label>
                                            <div class="col-md-9">
                                                <BreezeInput :class="{'is-invalid':hasError(addressForm,'line_3')}" v-model="addressForm.line_3" class="form-control" type="text" placeholder="Address line 3"></BreezeInput>
                                                <BootstrapInputError  :form="addressForm" name="line_3"></BootstrapInputError>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group required">
                                        <div class="row">
                                            <label class="col-md-3 control-label">Pincode</label>
                                            <div class="col-md-9">
                                                <BreezeInput :class="{'is-invalid':hasError(addressForm,'pincode')}" v-model="addressForm.pincode" class="form-control" type="text" placeholder="Pincode"></BreezeInput>
                                                <BootstrapInputError  :form="addressForm" name="pincode"></BootstrapInputError>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group required">
                                        <div class="row">
                                            <label class="col-md-3 control-label">City</label>
                                            <div class="col-md-9">
                                                <BreezeInput :class="{'is-invalid':hasError(addressForm,'city')}" v-model="addressForm.city" class="form-control" type="text" placeholder="City"></BreezeInput>
                                                <BootstrapInputError  :form="addressForm" name="city"></BootstrapInputError>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group required">
                                        <div class="row">
                                            <label class="col-md-3 control-label">State</label>
                                            <div class="col-md-9">
                                                <BreezeInput :class="{'is-invalid':hasError(addressForm,'state')}" v-model="addressForm.state" class="form-control" type="text" placeholder="State"></BreezeInput>
                                                <BootstrapInputError  :form="addressForm" name="state"></BootstrapInputError>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <div class="text-center my-4">
                                    <button type="submit" value="Save" class="btn btn-primary btn-lg ce5 btn-block w-full">
                                        <div v-if="addressForm.processing" class="spinner-border loading" role="status"></div>
                                        <div v-else  role="status">Add address</div>
                                    </button>
                                </div>


                            </form>
                        </div>



                    </div>

                </div>
            </div>
        </section>


</template>

<script setup>

import {store} from "@/FrontEndStore";
import {InertiaLink, useForm} from "@inertiajs/inertia-vue3";
import {ref} from "vue";
import BootstrapInputError from "@/Components/BootstrapInputError";
import BreezeInput from "@/Components/Input";
import {createErrorToast, createSuccessToast, manageCart,msHelper} from "@/Lib/LaravelHelper";
const props=defineProps({
    site:Object,
    auth:Object,
    errors:Object

});
const selectedAddress=ref({});
const currentCart=store.getCart();
const selectAddress=(address)=>{
    selectedAddress.value=address;
}
const isSelectedAddress = (address) => {

  return selectedAddress.value.id==address.id
}

const activeTab=ref('quickbuy')

const isActiveTab=(tabname)=>{
    return activeTab.value==tabname;
}
const changeTab=(tabname)=>{
    activeTab.value=tabname;
}

const quickButForm=useForm('quickBuyForm',{
    first_name:'',
    last_name:'',
    email:'',
    line_1:'',
    line_2:'',
    line_3:'',
    city:'',
    state:'',
    pincode:'',


});
const addressForm=useForm('addressForm',{
    line_1:'',
    line_2:'',
    line_3:'',
    city:'',
    state:'',
    pincode:'',
});
const loginForm=useForm('loginForm',{
    email:'',
    password:'',
});

const submitQuickBuyForm=()=>{
    let url=route('checkout_account_create');
    quickButForm.post(url,{
        preserveScroll:true,
        preserveState:true,
        onSuccess:()=>{
            createSuccessToast('Your account has been created.');
            createSuccessToast('to active your account please check you email');
            quickButForm.reset();

        },
        onError:()=>{
            createErrorToast('Oopps.. something went wrong')
        }
    })
}
const submitAddressForm=()=>{
    let url=route('checkout_add_address');
    addressForm.post(url,{
        preserveScroll:true,
        preserveState:true,
        onSuccess:()=>{
            createSuccessToast('Address has been added to your account');
            addressForm.reset();
        },
        onError:()=>{
            createErrorToast('Oopps.. something went wrong')
        }
    })
}
const submitLoginForm=()=>{
    let url=route('checkout_login');
    loginForm.post(url,{
        preserveScroll:true,
        preserveState:true,
        onSuccess:()=>{
            createSuccessToast('You have logged in to your account');
            loginForm.reset();
        },
        onError:()=>{
            createErrorToast('Oopps.. something went wrong')
            loginForm.reset('password')
        }
    })
}


const orderForm=useForm({
    'items':manageCart().get(),
    'address':selectedAddress.value
});
const proceedToPaymentNCreateOrder=()=>{
    orderForm.address=selectedAddress.value;
    orderForm.post(route('checkout_proceed_to_payment'),{
        preserveScroll:true,
        preserveState:true,
        onSuccess:()=>{
            createSuccessToast('Order is created');
            orderForm.reset();
        },
        onError:()=>{
            createErrorToast('Oopps.. something went wrong');
            orderForm.reset();
        }
    });


}

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
