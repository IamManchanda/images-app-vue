import Vue from 'vue';
import Vuex from 'vuex';
import * as auth from './modules/auth';
import * as images from './modules/images';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { auth, images },
});
