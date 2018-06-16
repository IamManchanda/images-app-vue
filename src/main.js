import Vue from 'vue';
import AppRoot from '@/view/app-root/index.vue';
import router from '@/view/router';
import store from '@/store/index';
import '@/registerServiceWorker';
import '@/design/styles.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(AppRoot),
}).$mount('#app');
