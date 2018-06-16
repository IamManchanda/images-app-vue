import imgurApi from '@/api/imgur-api';

export const state = {
  token: null,
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
  finalizelogin() {
  },
  logout({ commit }) {
    commit('setToken', null);
  },
};
