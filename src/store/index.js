import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cacheNames: ['list']
  },
  mutations: {
    setCacheNames(state, name) {
      console.log('setCacheNames name:', name);
      state.cacheNames.forEach((element, index) => {
        if (element === name) {
          state.cacheNames.splice(index, 1);
        }
      });
    }
  },
  actions: {},
  modules: {}
});
