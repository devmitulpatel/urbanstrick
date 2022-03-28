<template>
    <FrontEndLayout :site="props.site" :auth="props.auth">
        <section class="contact-img-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="con-text">
                            <h2 class="page-title">
                                <i class="fa fa-exclamation-triangle fa-2x text-danger" aria-hidden="true"></i>
                                <br>Opps.. No Page found <br>
                                <small>Error 404</small>
                            </h2>
                            <p><InertiaLink class="btn btn-black" :href="route('home')">Back to Home</InertiaLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </FrontEndLayout>
</template>

<script setup>
import {InertiaLink} from "@inertiajs/inertia-vue3";
import {onMounted} from "vue";
import FrontEndLayout from '@/Layouts/FrontEnd'
import {manageCart} from "@/Lib/LaravelHelper";
import {store} from "@/FrontEndStore";

const props=defineProps({
    site:Object,
    auth:Object,

});



onMounted(()=>{
    //console.log(getCart);
})

</script>

<style scoped>

</style>
