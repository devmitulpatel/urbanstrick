
require('./bootstrap');
import route from "ziggy-js";
import {Ziggy} from "@/ziggy";


import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import {
    callLink,
    asset,
    mailLink,
    createSuccessToast,
    createErrorToast,
    hasError,
    getError,
     manageCart,getUpperPrice,getDiscountPercentage,msHelper
} from '@/Lib/LaravelHelper';
const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';
// import Toast from "vue-toastification";
import VueUniversalModal from 'vue-universal-modal';
import FrontEndLayout from '@/Layouts/FrontEnd';
// import the styling for the toast
import 'mosha-vue-toastify/dist/style.css';
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => {
        const page = await require(`./Pages/${name}.vue`);
        page.layout = page.layout || FrontEndLayout;
        return page;
    },
    render:({ el, app}) => h(app, {
    initialPage: JSON.parse(el.dataset.page),
}),
    setup({ el, app, props, plugin }) {

        return createApp({ render: () => h(app, props) })
            .use(plugin)

            .use(VueUniversalModal, {
            teleportTarget: '#modals'
                })
            //.use(ZiggyVue,Ziggy)
            .mixin({ methods: {
                    route:(name, params, absolute, config = Ziggy) => route(name, params, absolute, config),
                   // route:(name, params, absolute, config = Ziggy) => route(name, params, absolute, config),
                    asset,callLink,mailLink,createSuccessToast,createErrorToast,hasError,getError,manageCart,getUpperPrice,getDiscountPercentage,msHelper } })
            .mount(el);
    },
//    components:{createToast}
});

InertiaProgress.init({ color: '#4B5563' ,includeCSS: true,});
