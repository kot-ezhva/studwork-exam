import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import routes from './routes';
import store from './store/index';

Vue.config.productionTip = false;

const router = new VueRouter({
    routes,
    linkExactActiveClass: '',
});

Vue.use(VueRouter);
Vue.use(VueResource);

const { VUE_APP_API_URI } = process.env;
Vue.http.options.root = VUE_APP_API_URI;

require('./scss/index.scss');

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
