import Vue from 'vue'
import App from './App.vue'
import router from './router';
import News from './components/News.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.component(News);

Vue.use(VueAxios, axios);
//Vue.loadScript("../assets/JS/jquery.js")
Vue.config.productionTip = false

new Vue({
  router,
  mode: 'hash',
  render: h => h(App),
}).$mount('#app')
