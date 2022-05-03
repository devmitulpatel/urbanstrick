<template>
  <section class="contact-img-area" :style="{'background-image':'url('+asset('img/bg-img/contact-us-1.png')+')'}">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="con-text">
                            <h2 class="page-title">Contact</h2>
                            <p><InertiaLink :href="route('home')">Home</InertiaLink> | Contact</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="noru-contact">
            <div class="container">
                <form   @submit.prevent="submitContactForm" >
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="row">
                                <div class="all-contact">
                                    <div class="col-lg-12 col-md-12 col-12">
                                        <div class="di-na">
                                            <label class="l-contact">
                                                Name<em>*</em>
                                            </label>
                                            <input v-model="contactUsForm.name" class="form-control" type="text" required="" name="name">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-12">
                                        <div class="di-na">
                                            <label class="l-contact">
                                                Email <em>*</em>
                                            </label>
                                            <input v-model="contactUsForm.email" class="form-control" type="email" required="" name="email">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-12">
                                        <label class="l-contact">
                                            Subject <em>*</em>
                                        </label>
                                        <input v-model="contactUsForm.subject" class="form-control" type="text" required="" name="subject">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <label class="l-contact con-color">
                                Query  <em>*</em>
                            </label>
                            <textarea v-model="contactUsForm.query" class="form-control" required="" name="message"></textarea>
                        </div>
                        <div class="col-lg-12">
                            <div class="last-cart-con">
                                <input class="wpcf7 btn-black" type="submit" value="Send Message">
                            </div>
                        </div>
                    </div>
                </form>
                <p class="form-messege"></p>
                <div v-if="false" class="row">
                    <div class="col-md-12">
                        <div class="map-area">
                            <div class="contact-map">
                                <div id="hastech"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<script setup>
import {InertiaLink, useForm} from "@inertiajs/inertia-vue3";
import {onMounted} from "vue";
import {createSuccessToast, manageCart} from "@/Lib/LaravelHelper";


const props=defineProps({
    site:Object,
    auth:Object,

});
let contactUsFormData={
    name:'',
    email:'',
    subject:'',
    query:'',
};
const contactUsForm=useForm(contactUsFormData);
const submitContactForm=()=>{
    contactUsForm.post(route('contact_us'),{
        onSuccess:()=>{createSuccessToast('We have received your query, Our support team will connect you very soon.')
        contactUsForm.reset();
        },

        onError:()=>{createErrorToast('Sorry something went wrong please drop email on help@urbanstrick.com')},
        preserveScroll:true,
        preserveState:true

    });
}

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
