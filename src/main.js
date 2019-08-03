import Vue from 'vue';
import App from './App';
import store from './store';

Vue.config.productionTip = false;

/* eslint-disable */
new Vue({
  el: '#app',
  store, // storeをローカルに登録
  render: h => h(App),
});
