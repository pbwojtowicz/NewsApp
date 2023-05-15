import Vue from 'vue';
import App from './App.vue';
import router from './router';
import News from './components/News.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import firebase from 'firebase/app';
import vuetify from './plugins/vuetify';



Vue.component("News", News);

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
    router,
    mode: 'hash',
    vuetify,
    render: h => h(App)
}).$mount('#app');

const firebaseConfig = {
    apiKey: 'AIzaSyBhtXyOlmBJgZkkcIddI1GnPYKKI3K0rVE',
    authDomain: 'newsfeedauth.firebaseapp.com',
    projectId: 'newsfeedauth',
    storageBucket: 'newsfeedauth.appspot.com',
    messagingSenderId: '677349428542',
    appId: '1:677349428542:web:dc201f0181a4960334306f',
    measurementId: 'G-KC9C49HM8P',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

