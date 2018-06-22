import imgurApi from '@/api/imgur-api';
import router from '@/view/router';

export const state = {
  images: [],
};

export const getters = {
  allImages: (currentState) => currentState.images,
};

export const mutations = {
  setImages(currentState, images) {
    currentState.images = images;
  },
};

export const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await imgurApi.fetchImages(token);
    commit('setImages', response.data.data);
  },
  async uploadImages({ rootState, commit }, images) {
    const { token } = rootState.auth;
    await imgurApi.uploadImages(images, token);
    router.push('/');
  },
};
