import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.mixin({
  computed: {
    cacheNames() {
      return this.$store.state.cacheNames;
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
