require('./bootstrap');

import

{ createApp, h } from 'vue';
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
     manageCart,getUpperPrice,getDiscountPercentage
} from '@/Lib/LaravelHelper';
const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';
// import Toast from "vue-toastification";

// import the styling for the toast
import 'mosha-vue-toastify/dist/style.css';
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
          //  .use(createToast)
            .mixin({ methods: { route,asset,callLink,mailLink,createSuccessToast,createErrorToast,hasError,getError,manageCart,getUpperPrice,getDiscountPercentage } })


            .mount(el);
    },
//    components:{createToast}
});

InertiaProgress.init({ color: '#4B5563' });
