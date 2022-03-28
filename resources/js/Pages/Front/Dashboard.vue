<template>
    <Head title="UrbanStrick | India's Best Fashion Store | Authentic Style | Premium Quality | Truly Indian" />
    <div id="top"></div>
    <FrontEndLayout :site="props.site" :auth="auth" :errors="props.errors">

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

                    <h7 class="text-danger">Did not get any mail please drop a mail to <a :href="['mailto:',props.site['customer_care_email_1']]">{{props.site['customer_care_email_1']}}</a></h7>
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
                                        <li class="list-group-item">All Orders</li>
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
                                                        <button type="submit" value="Save" class="btn btn-primary ce5">
                                                            <div style="max-height: 15px;max-width: 15px;" v-if="userForm.processing" class="spinner-border" role="status"></div>
                                                            <div v-else  role="status">Save</div>
                                                        </button>
                                                        <input v-if="false" class="btn btn-primary ce5" type="submit" value="Save">

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
                                                        <input class="btn btn-primary ce5" type="submit" value="Save">
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
                                            <form class="form-horizontal" @submit.prevent="addressSaved" v-if="isAddAddressOpened">
                                                <fieldset>
                                                    <legend>Add new Address</legend>
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
                                                <div class="buttons clearfix">

                                                    <div class="pull-right">
                                                        <button type="submit" value="Save" class="btn btn-primary ce5">
                                                            <div style="max-height: 15px;max-width: 15px;" v-if="addressForm.processing" class="spinner-border" role="status"></div>
                                                            <div v-else  role="status">Add address</div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                            <h2>Address Book Entries</h2>
                                            <table class="table table-bordered table-hover">
                                                <tr v-for="(address,key) in props.auth.user.addresses">
                                                    <td class="text-left" style="text-align: left">
                                                        {{key+1}}
                                                    </td>
                                                    <td class="text-left" style="text-align: left">
                                                        {{address.address.line_1}},
                                                        <br>
                                                        {{address.address.line_2}},
                                                        <br>
                                                        {{address.address.line_3}},
                                                        <br>
                                                        {{[address.address.city.name,[address.address.state.name,address.address.pincode].join('-')].join()}}
                                                    </td>
                                                    <td class="text-right" >
                                                        <a class="btn btn-info g6" href="#">Make it primary</a>
                                                    </td>
                                                </tr>
                                            </table>
                                            <div class="buttons clearfix">

                                                <div class="pull-right">
                                                    <div class="btn btn-primary ce5" v-on:click="addAddressToggle">

                                                        <div style="max-height: 15px;max-width: 15px;" v-if="addressForm.processing" class="spinner-border" role="status"></div>
                                                        <div v-else  role="status">Add New Address</div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a class="collap" href="wishlist.html">Modify your wish list   <i class="fa fa-caret-down"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </FrontEndLayout>

</template>
<script setup>
import FrontEndLayout from '@/Layouts/FrontEnd.vue';
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import BreezeInput from "@/Components/Input";
import {InertiaLink} from "@inertiajs/inertia-vue3";
import {ref} from "vue";
import {useForm} from "@inertiajs/inertia-vue3";
import {asset, createSuccessToast,createErrorToast,hasError,getError} from "@/Lib/LaravelHelper";
import _ from "lodash";
import BootstrapInputError from "@/Components/BootstrapInputError";

const props = defineProps({
    topProduct:Object,
    specialProduct:Object,
    mostView:Object,
    site:Object,
    auth:Object,
    canlogin:Boolean,
    is_password_set:Boolean,
    errors:Object
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


const passwordForm =useForm({
    password:'',
    password_confirmation:'',
})


const userFormSaved=()=>{
    let url = route('user.dashboard.updateUser',{user:props.auth.user});
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
    let url = route('user.dashboard.addAddress',{user:props.auth.user});
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

    })
    console.log("save");
}

const isAddAddressOpened=ref(false);
const addAddressToggle=()=>{
    isAddAddressOpened.value=(isAddAddressOpened.value)?false:true
}

const paswwordFormSaved=()=>{
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
</script>

<style scoped>

</style>
