import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import Vuelidate from "vuelidate";
import LunarFullCalendar from "vue-lunar-full-calendar";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.component('loading-overlay', Loading)
Vue.use(LunarFullCalendar);

Vue.use(Vuelidate);
Vue.config.productionTip = false
Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)

Vue.use(Vuetify);
new Vue({
    el: '#app',
    router,
    store,
    icons,
    template: '<App/>',
    components: {
        App
    }
})