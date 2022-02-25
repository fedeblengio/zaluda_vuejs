import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import FlashMessage from "@smartweb/vue-flash-message";



import ErrorComponent from './components/ErrorComponent.vue';
import HomeComponent from './components/ErrorComponent.vue';

Vue.config.productionTip = false

Vue.use(FlashMessage);
Vue.use(VueRouter);
Vue.use(Vuelidate);

//acá declaramos todas nuestras rutas de navegación
const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: HomeComponent },
    { path: '*', name: 'error404', component: ErrorComponent }
    
];


const router = new VueRouter({ routes, mode: 'history' });

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')