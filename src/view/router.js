import Vue from 'vue';
import Router from 'vue-router';
import PageHome from './pages/home/index.vue';
import PageAuthHandler from './pages/auth-handler/index.vue';
import PageUpload from './pages/upload/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/oauth2/callback',
      name: 'PageAuthHandler',
      component: PageAuthHandler,
    },
    {
      path: '/',
      name: 'PageHome',
      component: PageHome,
    },
    {
      path: '/upload',
      name: 'PageUpload',
      component: PageUpload,
    },
  ],
});
