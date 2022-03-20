<script setup>
import BreezeButton from '@/Components/Button.vue';

import BreezeInput from '@/Components/Input.vue';
import BreezeLabel from '@/Components/Label.vue';
import BreezeValidationErrors from '@/Components/ValidationErrors.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import FrontEnd from "@/Layouts/FrontEnd";
import _ from "lodash";

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
});

const bg =[
   'img/slider/bg_slider1.jpg',
   'img/slider/bg_slider22.jpg',

];

const getBg = () => {
  return _.sample(bg);
}
const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <FrontEnd>
        <Head title="Register" />

        <section class="contact-img-area" :style="{'background-image':'url('+getBg()+')'}">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="con-text">
                            <h2 class="page-title">Login Or Register</h2>
                            <p><a href="#">Home</a> | Login Or Register</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="login-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="tb-login-form ">
                            <h5 class="tb-title">Login</h5>
                            <p>Hello, Welcome your to account</p>
                            <div class="tb-social-login">
                                <a class="tb-facebook-login" href="#">
                                    <i class="fa fa-facebook"></i>
                                    Sign In With Facebook
                                </a>
                                <a class="tb-twitter-login res" href="#">
                                    <i class="fa fa-twitter"></i>
                                    Sign In With Twitter
                                </a>
                            </div>
                            <form action="#">
                                <p class="checkout-coupon top log a-an">
                                    <label class="l-contact">
                                        Email Address
                                        <em>*</em>
                                    </label>
                                    <input type="email">
                                </p>
                                <p class="checkout-coupon top-down log a-an">
                                    <label class="l-contact">
                                        Password
                                        <em>*</em>
                                    </label>
                                    <input type="password">
                                </p>
                                <div class="forgot-password1">
                                    <label class="inline2">
                                        <input type="checkbox" name="rememberme7">
                                        Remember me! <em>*</em>
                                    </label>
                                    <a class="forgot-password" href="#">Forgot Your password?</a>
                                </div>
                                <p class="login-submit5">
                                    <input class="button-primary" type="submit" value="login">
                                </p>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="tb-login-form res">
                            <h5 class="tb-title">Create a new account</h5>
                            <p>Hello, Welcome your to account</p>
                            <form action="#">
                                <p class="checkout-coupon top log a-an">
                                    <label class="l-contact">
                                        Email Address
                                        <em>*</em>
                                    </label>
                                    <input type="email">
                                </p>
                                <p class="login-submit5">
                                    <input value="SignUp" class="button-primary" type="submit">
                                </p>
                            </form>
                            <div class="tb-info-login ">
                                <h5 class="tb-title4">SignUp today and you'll be able to:</h5>
                                <ul>
                                    <li>Speed your way through the checkout.</li>
                                    <li>Track your orders easily.</li>
                                    <li>Keep a record of all your purchases.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <BreezeValidationErrors class="mb-4" />

        <form v-if="false" @submit.prevent="submit">
            <div>
                <BreezeLabel for="name" value="Name" />
                <BreezeInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus autocomplete="name" />
            </div>

            <div class="mt-4">
                <BreezeLabel for="email" value="Email" />
                <BreezeInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autocomplete="username" />
            </div>

            <div class="mt-4">
                <BreezeLabel for="password" value="Password" />
                <BreezeInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" required autocomplete="new-password" />
            </div>

            <div class="mt-4">
                <BreezeLabel for="password_confirmation" value="Confirm Password" />
                <BreezeInput id="password_confirmation" type="password" class="mt-1 block w-full" v-model="form.password_confirmation" required autocomplete="new-password" />
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link :href="route('login')" class="underline text-sm text-gray-600 hover:text-gray-900">
                    Already registered?
                </Link>

                <BreezeButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Register
                </BreezeButton>
            </div>
        </form>
    </FrontEnd>
</template>
