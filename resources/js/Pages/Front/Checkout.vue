<script setup>
import {InertiaLink, useForm} from "@inertiajs/inertia-vue3";
import { ref,watch } from 'vue'
import {msHelper, routes,createSuccessToast,createErrorToast,manageCart} from "@/Lib/LaravelHelper";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/solid'
import BootstrapInputError from "@/Components/BootstrapInputError";
import TextLoading from "@/Components/TextLoading";

const  loggedInUser=ref(msHelper().auth().user());
const hadAccount=ref(null);


const hasSelected=ref(false);
const loadingBtn=ref(false);
const toggleTab=(force=null)=>{
    hadAccount.value=force;
    if (!hasSelected.value) {
        hasSelected.value = true;
    }
    return;
}

const signInForm=useForm({
    email:'',
    password:''
})
watch(signInForm,  (newVal,oldVal)=>{
    if(newVal.email.length>0 && !msHelper().validator().isEmail(newVal.email)){
        signInForm.setError("email",msHelper().validator().getErrorMessage('email'));
    }
    console.log('-->',msHelper().validator().getErrorMessage('email'));
} )
const signUpForm=useForm({
    first_name:'',
    last_name:'',
    address_line_1:'',
    address_line_2:'',
    address_line_3:'',
    city:'',
    pincode:'',
    state:'',
    email:'',
    contact_no:'',

});




const signIn = ()=>{

    let url= routes('checkout_login');
    signInForm.post(url,{
        onSuccess:()=>{
            createSuccessToast('Your are successfully signed in.');
            window.location.reload();
        },
        onError:()=>{
            createErrorToast('Opps something went wrong.')
        }
    });

}

const selectedAddress=ref({});

const isSelectedAddress = (address) => {

    return selectedAddress.value.id==address.id
}
const selectAddress=(address)=>{
    selectedAddress.value=address;
}

const orderForm=useForm({
    'items':msHelper().collection().pluckOnly(manageCart().get(),['id','qt','size','price']),
    'address':selectedAddress.value,
    'coupons':[]
});

const proceedToPaymentNCreateOrder=()=>{
    orderForm.address=selectedAddress.value;
    orderForm.post(routes('checkout_proceed_to_payment'),{
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

const createAccountNPlaceOrder=()=>{

    let url = routes('checkout_account_create');
    signUpForm.post(url,{
        preserveScroll:true,
        preserveState:true,
        onSuccess:()=>{
            createSuccessToast('Order is created');
            signUpForm.reset();
            window.location.reload();
            orderForm.reset();
        },
        onError:()=>{
            createErrorToast('Oopps.. something went wrong');
            orderForm.reset();
        }
    });

}

</script>

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
        <div class="container" >

            <div class="row my-5" v-if="manageCart().isEmpty()">

                <div class="col-6 mx-auto">
                    <div class="card my-5">
                        <div class="card-body text-center">
                            <h3>There are no items in your cart</h3>
                            <InertiaLink class="btn btn-primary btn-black" :href="route('home')" >Shop Now & Add Exclusive Items to cart</InertiaLink>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row py-4" v-else>

                <div class="col-12 col-lg-8 mx-auto" v-if="msHelper().auth().check()">


                    <div class="d-flex justify-content-between bg-white  py-4 " v-if="!hasSelected">
                        <div >
                            <h5 class="m-0 mb-3 us-text-headline" style="line-height: 35px">Please select address for delivery</h5>
                        </div>

                        <div>
                            <button v-on:click="proceedToPaymentNCreateOrder" v-if="selectedAddress.hasOwnProperty('id')" type="button" class="btn btn-black">Proceed to Payment <i class="fa fa-forward" aria-hidden="true"></i></button>
                        </div>
                    </div>


                    <div class="row">

                        <div class="col-12 col-mg-4 col-lg-4 pb-2" v-for="address in msHelper().auth().user().addresses"  >
                            <div class="card card-default cursor-pointer" :class="{'selected':isSelectedAddress(address)}"  v-on:click.prevent="selectAddress(address)">
                                <div  class="card-header">
                                    {{ address.name }}
                                    <span v-if="address.name==null || address.name.length<1">No Name</span>

                                </div>
                                <div class="card-body">
                                    <p>
                                        <span v-if="address.line_1.length>0">{{ address.line_1 }},</span><br>
                                        <span v-if="address.line_2.length>0">{{ address.line_2 }},</span><br>
                                        <span v-if="address.line_3.length>0">{{ address.line_3 }},</span><br>
                                        <span v-if="address.city.name.length>0">{{ address.city.name}},</span><br>
                                        <span v-if="address.state.name.length>0">{{ address.state.name}} - {{ address.pincode}}</span>
                                    </p>
                                </div>
                                <div class="card-footer">
                                    <div class="btn btn-primary btn-black w-full" v-on:click.prevent="selectAddress(address)">
                                        <span v-if="isSelectedAddress(address)">  <i class="fa pl-2" :class="{
                                        'fa-check-square-o':isSelectedAddress(address),
                                        'fa-square-o':!isSelectedAddress(address)
                                    }" aria-hidden="true"></i>
                                            Selected Address</span>
                                        <span v-else>  <i class="fa pl-2" :class="{
                                        'fa-check-square-o':isSelectedAddress(address),
                                        'fa-square-o':!isSelectedAddress(address)
                                    }" aria-hidden="true"></i> Select this Address </span>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <div class="col-12 col-lg-8 mx-auto" v-else>

                    <div class="d-flex justify-content-between bg-white flex-column  py-4  mb-4" v-if="!hasSelected">
                        <div >
                            <h5 class="m-0 mb-3 us-text-headline" style="line-height: 35px">Do you have<img :src="asset('img/logo/logo_text.png')">Account ?</h5>
                        </div>

                        <div>

                            <div class="btn-group w-full" role="group" aria-label="Basic example">
                                <button v-on:click="toggleTab(true)" type="button" class="btn btn-outline-black" :class="{'btn-black':hadAccount}" >Yes</button>
                                <button v-on:click="toggleTab()" type="button" class="btn btn-outline-black" :class="{'btn-black':hadAccount===false}" >No</button>
                            </div>
                        </div>


                    </div>

                    <div v-if="hasSelected">
                        <div v-if="hadAccount">

                            <div class="d-flex justify-content-between">
                                <form class="w-full" v-on:submit.prevent="signIn()">
                                <div class="card w-full">
                                    <div class="card-header">
                                        <h4 class="m-0 us-text-headline">Please Sign in to your<img :src="asset('img/logo/logo_text.png')" >Account</h4>
                                    </div>

                                    <div class="card-body">

                                            <div class="form-group row">
                                                <label for="loginEmail" class="col-sm-2 col-form-label">Email</label>
                                                <div class="col-sm-10">
                                                    <input v-model="signInForm.email" :class="{'is-invalid':hasError(signInForm,'email')}" type="text"  class="form-control " id="loginEmail" placeholder="Enter Email here">
                                                    <BootstrapInputError  :form="signInForm" name="email"></BootstrapInputError>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="loginPassword" class="col-sm-2 col-form-label">Password</label>
                                                <div class="col-sm-10">
                                                    <input v-model="signInForm.password" type="password" class="form-control" id="loginPassword" >
                                                    <BootstrapInputError  :form="signInForm" name="email"></BootstrapInputError>
                                                </div>
                                            </div>

                                    </div>

                                    <div class="card-footer d-flex justify-content-between">
                                        <button type="button" v-on:click="toggleTab()" class="btn btn-black btn-sm w-full"><i class="fa fa-backward" aria-hidden="true"></i> Dont have<img :src="asset('img/logo/urban_text_white.png')">Account, Create here</button>
                                        <button type="submit"  class="btn btn-black btn-sm w-full">
                                            <TextLoading :form="signInForm">
                                            Sign in to<img :src="asset('img/logo/urban_text_white.png')">Account <i class="fa fa-forward" aria-hidden="true"></i>
                                            </TextLoading>
                                        </button>

                                    </div>

                                </div>
                                </form>
                            </div>



                        </div>

                        <div v-else>

                            <div class="d-flex justify-content-between">
                                <div class="card w-full">
                                    <form v-on:submit.prevent="createAccountNPlaceOrder()">

                                    <div class="card-header">
                                        <h4 class="m-0 us-text-headline">Please Create<img :src="asset('img/logo/logo_text.png')">Account</h4>
                                    </div>

                                    <div class="card-body">


                                            <div class="form-group row">
                                                <label for="firstName" class="col-sm-2 col-form-label">First Name</label>
                                                <div class="col-sm-10">
                                                    <input v-model="signUpForm.first_name" type="text"  class="form-control " id="firstName" placeholder="Enter your First name here">
                                                    <BootstrapInputError :form="signUpForm" name="first_name"></BootstrapInputError>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="lastName" class="col-sm-2 col-form-label">Last Name</label>
                                                <div class="col-sm-10">
                                                    <input v-model="signUpForm.last_name" type="text"  class="form-control " id="lastName" placeholder="Enter Your Last name here">
                                                    <BootstrapInputError :form="signUpForm" name="last_name"></BootstrapInputError>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="email" class="col-sm-2 col-form-label">Email</label>
                                                <div class="col-sm-10">
                                                    <input v-model="signUpForm.email" type="text"  class="form-control " id="email" placeholder="Enter Your Email here">
                                                    <BootstrapInputError :form="signUpForm" name="email"></BootstrapInputError>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="contactNo" class="col-sm-2 col-form-label">Contact No.</label>
                                                <div class="col-sm-10">
                                                    <input v-model="signUpForm.contact_no" type="text"  class="form-control " id="contactNo" placeholder="Enter Your Contact No. here">
                                                    <BootstrapInputError :form="signUpForm" name="contact_no"></BootstrapInputError>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="addressLine1" class="col-sm-2 col-form-label">Plot no/Bloc No/ Building</label>
                                                <div class="col-sm-10">
                                                    <input v-model="signUpForm.address_line_1" type="text"  class="form-control " id="addressLine1" placeholder="Enter Plot no/Bloc No/ Building here">
                                                    <BootstrapInputError :form="signUpForm" name="address_line_1"></BootstrapInputError>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="addressLine2" class="col-sm-2 col-form-label">Landmark</label>
                                                <div class="col-sm-10">
                                                    <input v-model="signUpForm.address_line_2" type="text"  class="form-control " id="addressLine2" placeholder="Enter Landmark here">
                                                    <BootstrapInputError :form="signUpForm" name="address_line_2"></BootstrapInputError>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="addressLine3" class="col-sm-2 col-form-label">Area/Road</label>
                                                <div class="col-sm-10">
                                                    <input v-model="signUpForm.address_line_3" type="text"  class="form-control " id="addressLine3" placeholder="Enter Area/Road here">
                                                    <BootstrapInputError :form="signUpForm" name="address_line_3"></BootstrapInputError>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="pincode" class="col-sm-2 col-form-label">Pincode</label>
                                                <div class="col-sm-10">
                                                    <input v-model="signUpForm.pincode" type="text"  class="form-control " id="pincode" placeholder="Enter Pincode here">
                                                    <BootstrapInputError :form="signUpForm" name="pincode"></BootstrapInputError>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="city" class="col-sm-2 col-form-label">City</label>
                                                <div class="col-sm-10">
                                                    <input v-model="signUpForm.city" type="text"  class="form-control " id="city" placeholder="Enter City here">
                                                    <BootstrapInputError :form="signUpForm" name="city"></BootstrapInputError>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="state" class="col-sm-2 col-form-label">State</label>
                                                <div class="col-sm-10">
                                                    <input v-model="signUpForm.state" type="text"  class="form-control " id="state" placeholder="Enter State here">
                                                    <BootstrapInputError :form="signUpForm" name="state"></BootstrapInputError>
                                                </div>
                                            </div>

                                    </div>

                                    <div class="card-footer d-flex justify-content-between">
                                        <button type="button" v-on:click="toggleTab(true)" class="btn btn-black"><i class="fa fa-backward" aria-hidden="true"></i> Already Have<img :src="asset('img/logo/urban_text_white.png')">Account, Sign in here</button>
                                        <button type="submit" class="btn btn-black">
                                            <TextLoading :form="signUpForm">
                                                    Create<img :src="asset('img/logo/urban_text_white.png')">Account <i class="fa fa-forward" aria-hidden="true"></i>
                                            </TextLoading>



                                        </button>
                                    </div>
                                    </form>
                                </div>
                            </div>



                        </div>


                    </div>



                </div>


            </div>
        </div>
    </section>
</template>
<script>
import FrontEndLayout from '@/Layouts/FrontEnd.vue';

export default {
    // Using the shorthand
    layout: FrontEndLayout,


}
</script>

<style scoped>

</style>
