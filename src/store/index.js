import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cacheNames: ['list']
  },
  mutations: {
    subCacheNames(state, name) {
      console.log('subCacheNames name:', name);
      state.cacheNames.forEach((element, index) => {
        if (element === name) {
          state.cacheNames.splice(index, 1);
        }
      });
    },
    addCacheNames(state, name) {
      console.log('addCacheNames name:', name);
      state.cacheNames.push(name);
    }
  },
  actions: {},
  modules: {}
});
