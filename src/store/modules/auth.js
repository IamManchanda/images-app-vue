import qs from 'qs';
import router from '@/view/router';
import imgurApi from '@/api/imgur-api';

export const state = {
  token: window.localStorage.getItem('imgur_token'),
};
export const getters = {
  isLoggedIn: (currentState) => !!currentState.token,
};
export const mutations = {
  setToken(currentState, updatedTokenValue) {
    currentState.token = updatedTokenValue;
  },
};
export const actions = {
  login() {
    imgurApi.login();
  },
  finalizelogin({ commit }, hash) {
    const query = qs.parse(hash.replace('#', ''));
    commit('setToken', query.access_token);
    window.localStorage.setItem('imgur_token', query.access_token);
    router.push('/');
  },
  logout({ commit }) {
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token');
  },
};
