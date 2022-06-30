<template>

        <section class="contact-img-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="con-text">
                            <h2 class="page-title">My Account</h2>

                            <small class="text-white">manage Profile, Orders, Addresses ,... </small>
                            <h2 class="page-title pt-2">

                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div v-if="!props.is_password_set" class="col-7 mx-auto py-5 my-5">
            <div class="card card-danger border-danger">
                <div class="card-body ">

                    <h6 class="text-black">Sorry,Your account is not yet active. <br>We have sent mail on <strong>{{props.auth.user.email}}</strong><br><br>
                    <small>Find "Click here to set password for your New UrbanStrick Account" & set first & last name and password to active your account</small>
                    </h6>

                    <h6 class="text-danger">Did not get any mail please drop a mail to <a :href="['mailto:',props.site['customer_care_email_1']]">{{props.site['customer_care_email_1']}}</a></h6>
                </div>

            </div>

        </div>



    <section v-if="props.is_password_set" class="collapse_area coll2">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-12">

                        <div class="check">

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


                                    <ul class="list-group mt-2 px-4">
                                        <li class="list-group-item text-muted text-sm">Quick action</li>
                                        <li class="list-group-item">Pending Orders</li>
                                        <li class="list-group-item"><InertiaLink :href="route('dashboard.orderList')">All Orders</InertiaLink></li>
                                        <li class="list-group-item">View UrbanStrick Rewards</li>
                                    </ul>

                                    <div class="d-flex justify-content-center align-items-center mt-2 px-4">
                                        <InertiaLink :href="route('logout')" method="post" as="div" class="btn btn-sm btn-block btn-danger w-full mt-2" >
                                                Log out
                                            </InertiaLink>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="">

                        </div>

                    </div>
                    <div class="col-md-8 col-sm-12">
                        <div class="check">
                            <h2>My Account </h2>
                        </div>
                        <div class="faq-accordion">
                            <div class="panel-group pas7" id="accordion2" role="tablist" aria-multiselectable="true">
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingOne">
                                        <h4 class="panel-title">
                                            <a class="collapsed method" role="button" data-bs-toggle="collapse" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Edit your account information <i class="fa fa-caret-down"></i></a>
                                        </h4>
                                    </div>
                                    <div id="collapseOne" class="panel-collapse collapse show" role="tabpanel" data-bs-parent="#accordion2" aria-labelledby="headingOne" aria-expanded="false" >
                                        <div class="easy2">
                                            <h2>My Account Information</h2>
                                            <form class="form-horizontal" @submit.prevent="userFormSaved">
                                                <fieldset>
                                                    <legend>Your Personal Details</legend>
                                                    <div class="form-group required">
                                                        <div class="row">
                                                            <label class="col-md-2 control-label">First Name </label>
                                                            <div class="col-md-10">
                                                                 <BreezeInput :class="{'is-invalid':hasError(userForm,'first_name')}" v-model="userForm.first_name" class="form-control" type="text" placeholder="First Name" />
                                                                <BootstrapInputError v-model="userForm.email" :form="userForm" name="first_name"></BootstrapInputError>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group required">
                                                        <div class="row">
                                                            <label class="col-md-2 control-label">Last Name</label>
                                                            <div class="col-md-10">
                                                                <BreezeInput :class="{'is-invalid':hasError(userForm,'last_name')}"  v-model="userForm.last_name"  class="form-control" type="text" placeholder="Last Name" />
                                                                <BootstrapInputError :form="userForm" name="last_name"></BootstrapInputError>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group required">
                                                        <div class="row">
                                                            <label class="col-md-2 control-label">E-Mail</label>
                                                            <div class="col-md-10">
                                                                <BreezeInput :class="{'is-invalid':hasError(userForm,'email')}"  v-model="userForm.email"  class="form-control" type="email" placeholder="E-Mail" />
                                                                <BootstrapInputError :form="userForm" name="email"></BootstrapInputError>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                                <div class="buttons clearfix">
                                                    <div class="pull-left" v-if="false">
                                                        <a class="btn btn-default ce5" href="#">Reset</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        <ClickableButton :form="userForm" text="save"></ClickableButton>


                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingTwo">
                                        <h4 class="panel-title">
                                            <a class="collapsed" role="button" data-bs-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Change your password   <i class="fa fa-caret-down"></i></a>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" class="panel-collapse collapse" data-bs-parent="#accordion2" role="tabpanel" aria-labelledby="headingTwo" aria-expanded="false" style="height: 0px;">
                                        <div class="easy2">
                                            <h2>Change Password</h2>
                                            <form class="form-horizontal" @submit.prevent="userFormSaved">
                                                <fieldset>
                                                    <legend>Your Password</legend>
                                                    <div class="form-group required">
                                                        <div class="row">
                                                            <label class="col-md-2 control-label">Password</label>
                                                            <div class="col-md-10">
                                                                <BreezeInput class="form-control" type="password" placeholder="password"></BreezeInput>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group required">
                                                        <div class="row">
                                                            <label class="col-md-2 control-label">Password Confirm</label>
                                                            <div class="col-md-10">
                                                                <BreezeInput class="form-control" type="password" placeholder="password confirm"></BreezeInput>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                                <div class="buttons clearfix">
                                                    <div v-if="false" class="pull-left">
                                                        <a class="btn btn-default ce5" href="#">Back</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        <ClickableButton :form="userForm" text="change password"></ClickableButton>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingThree">
                                        <h4 class="panel-title">
                                            <a class="collapsed" role="button" data-bs-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseTwo">Modify your address book entries   <i class="fa fa-caret-down"></i></a>
                                        </h4>
                                    </div>

                                    <div id="collapseThree" class="panel-collapse collapse" data-bs-parent="#accordion2" role="tabpanel" aria-labelledby="headingThree" aria-expanded="false" style="height: 0px;">
                                        <div class="easy2">

                                            <AddressSection></AddressSection>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingFour">
                                        <h4 class="panel-title">
                                            <a class="collapsed" role="button" data-bs-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseTwo">Modify your Wish list   <i class="fa fa-caret-down"></i></a>
                                        </h4>
                                    </div>

                                    <div id="collapseFour" class="panel-collapse collapse" data-bs-parent="#accordion2" role="tabpanel" aria-labelledby="headingThree" aria-expanded="false" style="height: 0px;">
                                        <div class="easy2">
                                            <div v-for="wish in props.wish.data">
                                                <div class="card my-2">
                                                    <div class="card-body">
                                                        <div class="d-flex justify-content-between">
                                                            <div>
                                                                <img :src="wish.product.thumbnail" class="img-wish">
                                                            </div>
                                                            <div class="d-flex w-full    justify-content-between">
                                                                <div class="pl-2">
                                                                    <InertiaLink :href="route('product_page',{name:wish.product.slug})">
                                                                    {{wish.product.name}}
                                                                    </InertiaLink>
                                                                </div>
                                                                <div class="d-flex justify-content-between">
                                                                    <div class="">
                                                                        <button v-on:click="addProduct(wish)" class="btn btn-black">Add to cart</button>
                                                                    </div>
                                                                    <div class="">
                                                                        <button v-on:click="removeFromWish(wish)" class="btn btn-danger"><i class="fa fa-times"></i></button>
                                                                    </div>


                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div v-if="props.wish.data.length<1">
                                                <InertiaLink :href="route('home')" class="btn btn-black" >
                                                    Add your desired product to wish cart
                                                </InertiaLink>
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
    <OptionAskModal :product="currentProduct" v-model:is-show="sizeModalOpen" v-model="currentSize"  ></OptionAskModal>
    <ProductModal :product="currentProduct" v-model:is-show="productModalOpen" @addProduct="addProduct" ></ProductModal>
    <ShareModal :product="currentProduct" v-model:is-show="shareModalOpen" ></ShareModal>



</template>
<script setup>
import ProductModal from '@/Components/ProductModal';
import ShareModal from "@/Components/ShareModal";
import OptionAskModal from "@/Components/OptionAskModal"

import {InertiaLink} from "@inertiajs/inertia-vue3";
import {ref} from "vue";
import {useForm} from "@inertiajs/inertia-vue3";
import {asset, createSuccessToast, createErrorToast, hasError, getError, routes} from "@/Lib/LaravelHelper";
import _ from "lodash";
import BootstrapInputError from "@/Components/BootstrapInputError";
import BreezeInput from "@/Components/Input";
import Button from "@/Components/Button";
import {Inertia} from "@inertiajs/inertia";
import AddressRow from "@/Components/AddressRow";
import ClickableButton from "@/Components/ClickableButton";
import AddressSection from "@/Components/AddressSection";
import AddAddressModal from "@/Components/AddAddressModal";
const props = defineProps({
    topProduct:Object,
    specialProduct:Object,
    mostView:Object,
    site:Object,
    auth:Object,
    canlogin:Boolean,
    is_password_set:Boolean,
    errors:Object,
    wish:[Array,Object]
})

const userForm =useForm({
    first_name:props.auth.user.first_name,
    last_name:props.auth.user.last_name,
    email:props.auth.user.email
})

const addressForm =useForm({
    line_1:'',
    line_2:'',
    line_3:'',
    pincode:'',
    city:'',
    state:'',
})

const currentSize=ref();
const currentProduct=ref();
const sizeModalOpen=ref(false);
const productModalOpen=ref(false);
const shareModalOpen=ref(false);
const passwordForm =useForm({
    password:'',
    password_confirmation:'',
})


const userFormSaved=()=>{
    let url = routes('user.dashboard.updateUser',{user:props.auth.user});
    userForm.post(url,{
        preserveState:true,
        preserveScroll:true,
      //  errorBag:'userError',
        onSuccess:(res)=> {

            createSuccessToast('User Information Updated successfully.')
        },
        onError:(error)=> {

            let hasErrorInForm= false;
            let form= userForm;
            if(
                hasError(form,'first_name') ||
                hasError(form,'last_name') ||
                hasError(form,'email')
            )hasErrorInForm=true;
            if(hasErrorInForm)createErrorToast('Opps.. Something went wrong.Please try again');


        }

    })
    console.log("save");
}
const addressSaved=()=>{
    let url = routes('user.dashboard.addAddress',{user:props.auth.user});
    addressForm.post(url,{
        preserveState:true,
        preserveScroll:true,
      //  errorBag:'userError',
        onSuccess:()=> {
            addAddressToggle()
            createSuccessToast('Address added successfully.')
        },
        onError:()=> {

            let hasErrorInForm= false;
            let form=addressForm;
            if(
                hasError(form,'line_1') ||
                hasError(form,'line_2') ||
                hasError(form,'line_3') ||
                hasError(form,'pincode') ||
                hasError(form,'city') ||
                hasError(form,'state')
            )hasErrorInForm=true;

            if(hasErrorInForm)createErrorToast('Opps.. Something went wrong.Please try again');


        }

    });
    console.log("save");
}

const isAddAddressOpened=ref(false);
const addAddressToggle=()=>{
    isAddAddressOpened.value=!isAddAddressOpened.value
}

const passwordFormSaved=()=>{
    console.log("password");
}
const isEditOn=ref(false);
const allAvatar=[
    asset('img/avatar/m1.png'),
    asset('img/avatar/m2.png'),
    asset('img/avatar/m3.png'),
    asset('img/avatar/m4.png'),
    asset('img/avatar/f1.png'),
    asset('img/avatar/f2.png'),
    asset('img/avatar/f3.png'),
    asset('img/avatar/f4.png'),
];

const getRandomAvatar=()=>{
    return _.sample(allAvatar);
}

const currentProductQt=ref(1);

const addProduct = (wish,fromModal=false) => {
    const product=wish.product;
    currentProduct.value=product;
    if(currentProductQt.value<0)currentProductQt.value=1;
    if(!fromModal){
        sizeModalOpen.value=true;
    }else {
        currentCart.add(product, currentProductQt.value,currentSize.value)
    }
}

const removeFromWish=(product)=>{
    currentProduct.value=product;
    Inertia.post(routes('wish.destroy',{wish:product.id,_query:{redirectTo:route().current()}}),{},{
        onSuccess:()=>{
            createSuccessToast('product removed from wish list');
        },
        preserveState:true,
        preserveScroll:true
    })
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
