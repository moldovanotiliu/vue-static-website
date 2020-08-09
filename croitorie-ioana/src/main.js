/*!

 =========================================================
 * Vue Now UI Kit - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-kit
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from 'vue';
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import App from './App.vue';



import BootstrapVue from 'bootstrap-vue'

import 'bootstrap'; 



Vue.config.productionTip = false;

Vue.use(BootstrapVue)
Vue.use(NowUiKit);
const VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
