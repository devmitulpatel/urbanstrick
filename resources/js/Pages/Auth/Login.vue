<script setup>
import BreezeButton from '@/Components/Button.vue';
import BreezeCheckbox from '@/Components/Checkbox.vue';
import FrontEndLayout from '@/Layouts/FrontEnd.vue';
import BreezeInput from '@/Components/Input.vue';
import BreezeLabel from '@/Components/Label.vue';
import BreezeValidationErrors from '@/Components/ValidationErrors.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import _ from "lodash";
import {asset} from "@/Lib/LaravelHelper";


const props=defineProps({
    canResetPassword: Boolean,
    status: String,
    site:Object,
    auth:Object
});

const form = useForm({
    email: '',
    password: '',
    remember: false
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
        onSuccess:() => window.location.reload()
    });
};
const formUrl=route('user.dashboard.home');
const bg =[
    'img/slider/bg_slider1.jpg',
    'img/slider/bg_slider22.jpg',

];

const getBg = () => {
    return _.sample(bg);
}
</script>

<template>
    <FrontEndLayout :site="props.site" :auth="auth">
        <Head title="Register" />

        <section class="contact-img-area" :style="{'background-image':'url('+asset(getBg())+')'}">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="con-text">
                            <h2 class="page-title">Login to your account</h2>
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
                        <div class="tb-login-form ">
                            <h5 class="tb-title text-center" v-if="false">Login</h5>
                            <p>Hello, Welcome your to account</p>
                            <div class="tb-social-login" v-if="false">
                                <a class="tb-facebook-login" href="#">
                                    <i class="fa fa-facebook"></i>
                                    Sign In With Facebook
                                </a>
                                <a class="tb-twitter-login res" href="#">
                                    <i class="fa fa-twitter"></i>
                                    Sign In With Twitter
                                </a>
                            </div>
                            <form  @submit.prevent="submit">
                                <p class="checkout-coupon top log a-an">
                                    <label class="l-contact">
                                        Email Address
                                        <em>*</em>
                                    </label>
                                    <BreezeInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autocomplete="username" />
                                </p>
                                <p class="checkout-coupon top-down log a-an">
                                    <label class="l-contact">
                                        Password
                                        <em>*</em>
                                    </label>
                                    <BreezeInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" required autocomplete="new-password" />
                                </p>
                                <div class="forgot-password1">
                                    <label class="inline2">
                                        <input type="checkbox" name="rememberme7">
                                        Remember me! <em>*</em>
                                    </label>
                                    <a class="forgot-password" href="#">Forgot Your password?</a>
                                </div>
                                <p class="login-submit5">
                                    <input class="button-primary btn-block" type="submit" value="login">
                                </p>
                            </form>
                        </div>
                    </div>
        <BreezeValidationErrors class="mb-4" />
                </div>
            </div>
        </div>
        <div v-if="status && false" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>
        <form v-if="false" @submit.prevent="submit">
            <div>
                <BreezeLabel for="email" value="Email" />
                <BreezeInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus autocomplete="username" />
            </div>

            <div class="mt-4">
                <BreezeLabel for="password" value="Password" />
                <BreezeInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" required autocomplete="current-password" />
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <BreezeCheckbox name="remember" v-model:checked="form.remember" />
                    <span class="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link v-if="canResetPassword" :href="route('password.request')" class="underline text-sm text-gray-600 hover:text-gray-900">
                    Forgot your password?
                </Link>

                <BreezeButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Log in
                </BreezeButton>
            </div>
        </form>
    </FrontEndLayout>
</template>
