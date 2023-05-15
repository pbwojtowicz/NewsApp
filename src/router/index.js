import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import axios from 'vue-axios';
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

const routes = [
    {
        path: '',
        name: 'Home',
        component: Home,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
