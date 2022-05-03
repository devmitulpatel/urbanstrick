<template>
    <section class="contact-img-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="con-text">


                            <div class="card shadow">
                                <div class="card-body">
                                    <h2 class="page-title  p-2 text-black" >
                                        <i class="fa fa-exclamation-triangle fa-2x text-danger mt-5 mb-3" aria-hidden="true"></i>
                                        <br>Opps.. No Page found <br>
                                        <small>Error 404</small>
                                    </h2>
                                </div>

                                <div class="card-footer">
                                    <InertiaLink class="btn btn-black" :href="backRoute" >Go Back</InertiaLink>
                                </div>

                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </section>

</template>

<script setup>
import {InertiaLink} from "@inertiajs/inertia-vue3";
import {onMounted, ref} from "vue";
import {routes} from "@/Lib/LaravelHelper";


const props=defineProps({
    site:Object,
    auth:Object,

});

const backRoute = ref(routes('home'));

onMounted(()=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if(urlParams.get('redirectTo')!=null)backRoute.value=urlParams.get('redirectTo');
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
