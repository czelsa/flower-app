import Vue from 'vue';
import App from '@/App.vue';
import store from '@/store/index';
import router from '@/router';
import { i18n } from '@/utils/txt.utils';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
