<script setup>
import BreezeButton from '@/Components/Button.vue';
import {createToast} from 'mosha-vue-toastify';
import BreezeInput from '@/Components/Input.vue';
import BreezeLabel from '@/Components/Label.vue';
import BreezeValidationErrors from '@/Components/ValidationErrors.vue';
import { Head, Link, useForm,InertiaLink } from '@inertiajs/inertia-vue3';
import FrontEnd from "@/Layouts/FrontEnd";
import _ from "lodash";
import {onMounted, ref} from "vue";
import {createErrorToast, createSuccessToast} from "@/Lib/LaravelHelper";

// const hasError=(form,name)=>{
//     return form.errors.hasOwnProperty(name)
// }
//
// const getError=(form,name)=>{
//     return form.errors[name]
// }

const props=defineProps({
    site:Object,
    auth:Object,
    errors:Object,
    user:Object
})

const isAbleToCreatePassword=props.user?.hasOwnProperty('id');
const form = useForm({
    first_name: '',
    last_name: '',
    password: '',
    password_confirmation: '',
    terms: false,
    email:''
});

// if (isAbleToCreatePassword){
//     const form = useForm({
//         name: '',
//         password: '',
//         password_confirmation: '',
//         terms: false,
//     });
//
// }else{
//     const form = useForm({
//         email: '',
//
//     });
//
//
// }


const isPasswordSetted=ref(false);

const bg =[
   'img/slider/bg_slider1.jpg',
   'img/slider/bg_slider22.jpg',

];

onMounted(()=>{
})

const getBg = () => {
  return _.sample(bg);
}
const submit = () => {


    let url = (isAbleToCreatePassword)?route('createUserPassword',{user:props.user.id}):route('register');

    form.post(url, {
        preserveScroll:true,
        preserveState:true,
        onFinish: () => {
            form.reset('password', 'password_confirmation')

        },
        onSuccess:()=>{
            if(isAbleToCreatePassword)isPasswordSetted.value=true;
            createSuccessToast('Your account is created successfully.');
        },
        onError:()=>{
            createErrorToast('Opps.. Something went wrong.Please try again');
        }

    });
};

const getSubmitText=()=>{
    return (isAbleToCreatePassword)?'Create Your Account':'Register'
}

</script>
<script>
import FrontEndLayout from '@/Layouts/FrontEnd.vue';

export default {
    // Using the shorthand
    layout: FrontEndLayout,


}
</script>
<template>
        <Head title="Register" />
        <section class="contact-img-area" :style="{'background-image':'url('+asset(getBg())+')'}">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 mx-auto text-center">
                        <div class="con-text">
                            <h2 class="page-title">Register <hr> Get UrbanStrick Reward Membership</h2>
                            <small>to manage your purchase, checkouts, rewards & many more interesting things . . .</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="login-area">
            <div class="container">
                <div class="row">

                    <div class="col-lg-7 mx-auto">
                        <div v-if="props.user==null || !props.user['is_password_set']" class="tb-login-form res">
                            <h5 class="tb-title" v-if="!isAbleToCreatePassword">Create a new account</h5>
                            <h5 class="tb-title" v-else >Set Password</h5>
                            <p v-if="!isAbleToCreatePassword">Hello, Welcome your to account</p>
                            <p v-else class="text-success">Your email ( {{props.user.email}}) is verified successfully.</p>
                            <form @submit.prevent="submit">


                                <div class="checkout-coupon top log a-an" v-if="!isAbleToCreatePassword">
                                    <label class="l-contact">
                                        Email Address
                                        <em>*</em>
                                    </label>
                                    <BreezeInput :class="{'is-invalid':hasError(form,'email')}" type="email" v-model="form.email" required autocomplete="username" />
                                    <div v-if="hasError(form,'email')" class="invalid-feedback">
                                        {{getError(form,'email')}}
                                    </div>
                                </div>

                                <span v-else>
                                       <p class="checkout-coupon top log a-an" >
                                    <label class="l-contact">
                                        First Name
                                        <em>*</em>
                                    </label>
                                    <BreezeInput type="text" v-model="form.first_name" required autocomplete="username" />
                                </p>
                                    <p class="checkout-coupon top log a-an" >
                                    <label class="l-contact">
                                        Last Name
                                        <em>*</em>
                                    </label>
                                    <BreezeInput type="text" v-model="form.last_name" required autocomplete="username" />
                                </p>
                                       <p class="checkout-coupon top log a-an" >
                                    <label class="l-contact">
                                        Password
                                        <em>*</em>
                                    </label>
                                    <BreezeInput type="password" v-model="form.password" required autocomplete="username" />
                                </p>
                                       <p class="checkout-coupon top log a-an" >
                                    <label class="l-contact">
                                        Confirm Password
                                        <em>*</em>
                                    </label>
                                    <BreezeInput type="password" v-model="form.password_confirmation" required autocomplete="username" />
                                </p>
                                </span>

                                <p class="login-submit5">

                                    <BreezeButton value="geRegister" class="btn button-info  btn-black" type="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" >
                                        {{getSubmitText()}}
                                </BreezeButton>
                                    <span class="px-3">
                                        - or -
                                    </span>
                                    <button :href="route('login',{email:form.email})"  class="btn button-info btn-black">Continue</button>

                                </p>
                            </form>
                        </div>


                        <div v-else class="tb-login-form res">
                            <h5 class="tb-title text-danger"  >Opps Link is expired. Please Contact our Support team.</h5>
                        </div>
                    </div>

                    <div class="col-lg-4 mx-auto">
                        <div class="tb-info-login ">

                            <h5 class="tb-title4">
                                SignUp today and you'll be able to:</h5>
                            <ul>
                                <li>Become life time meber of UrbanStrick Club.</li>
                                <li>Speed your way through the checkout.</li>
                                <li>Track your orders easily.</li>
                                <li>Keep a record of all your purchases.</li>
                                <li>Earn Rewards.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>
