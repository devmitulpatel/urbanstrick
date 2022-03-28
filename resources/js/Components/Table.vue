<template>

    <table v-if="false" class="table-auto hover:table-fixed">
        <thead>
        <tr>
            <th>Name</th>
            <th>Photo</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="product in props.data.data">
            <td>{{ product.name }}</td>
            <td><img :src="product.url" style="max-height: 40px"> </td>
            <td>{{ product.currency }} {{ product.price }}</td>
        </tr>

        </tbody>
    </table>
    <div class="sm:px-3 w-full">
        <div class="bg-white py-2 px-4 md:px-8 xl:px-10">
            <div class="sm:flex items-center justify-between">
                <div v-if="false" class="flex items-center">
                    <a class="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800" href=" javascript:void(0)">
                        <div class="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                            <p>All</p>
                        </div>
                    </a>
                    <a class="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8" href="javascript:void(0)">
                        <div class="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                            <p>Done</p>
                        </div>
                    </a>
                    <a class="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8" href="javascript:void(0)">
                        <div class="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                            <p>Pending</p>
                        </div>
                    </a>
                </div>
                <InertiaLink v-for="btn in props.button" :href="btn.url" class="cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                    <p class="text-sm font-medium leading-none text-white">{{ btn.label }}</p>
                </InertiaLink>
                <div class="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600  cursor-pointer rounded">
                    <p>Sort By:</p>
                    <select aria-label="select" class="focus:text-indigo-600 focus:outline-none bg-transparent ml-1">
                        <option class="text-sm text-indigo-800">Latest</option>
                        <option class="text-sm text-indigo-800">Oldest</option>
                        <option class="text-sm text-indigo-800">Latest</option>
                    </select>
                </div>

            </div>
            <div class="mt-7 overflow-x-auto">
                <table class="w-full whitespace-nowrap">

                    <tbody v-for="product in props.data.data">
                    <tr  tabindex="0" class="focus:outline-none h-16 border border-gray-100 rounded">
                        <td>
                            <div class="ml-5">
                                <div class="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                    <input placeholder="checkbox" type="checkbox" class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                    <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                        <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                            <path d="M5 12l5 5l10 -10"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="">
                            <div class="flex items-center pl-5">
                                <p class="text-base font-medium leading-none text-gray-700 mr-2">{{ product.name }}</p>

                            </div>
                        </td>
                        <td class="pl-5">
                            <div class="flex items-center">
                              <img :src="product.thumbnail" style="max-height: 30px">
                            </div>
                        </td>
                        <td class="pl-5">
                            <div class="flex items-center">

                                <p class="text-sm leading-none text-gray-600 ml-2">
                                    {{[product.currency,product.price].join(' ')}}
                                </p>
                            </div>
                        </td>
                        <td class="pl-4">
                            <button class="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                        </td>
                        <td>
                            <div class="relative px-5 pt-2">
                                <button class="focus:ring-2 rounded-md focus:outline-none" onclick="dropdownFunction(this)" role="button" aria-label="option">
                                    <svg class="dropbtn" onclick="dropdownFunction(this)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                                <div class="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden">
                                    <div tabindex="0" class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                        <p>Edit</p>
                                    </div>
                                    <div tabindex="0" class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                        <p>Delete</p>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="h-3"></tr>
                    </tbody>


                </table>
            </div>
        </div>
    </div>


    <Pagination :data="props.data.meta"></Pagination>
</template>

<script setup>
import Pagination from "@/Components/Pagination";
import NavLink from "@/Components/NavLink";
import { Link } from '@inertiajs/inertia-vue3';
const props=defineProps({
    data:Object,
    button:Array
})
</script>

<style scoped>

</style>
