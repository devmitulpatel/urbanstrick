<template>
    <Head title="Dashboard : Product" />

    <BreezeAuthenticatedLayout :auth="props.auth" :site="props.site" >
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Products
            </h2>
        </template>

        <div class="py-5">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-3 bg-white border-b border-gray-200">
                        <BreezeTable :button="button" :data="props.product_data"></BreezeTable>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>

<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import BreezeTable from '@/Components/Table.vue';
import { Head } from '@inertiajs/inertia-vue3';
const props = defineProps({
    auth:Object,
    site:Object,
    product_data:Object

})
const button=[
    {
    label:'Add Product',
        url:route('admin.dashboard.product.create')
    }
    ];
</script>

<style scoped>

</style>
