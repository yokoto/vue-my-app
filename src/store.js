import Vue from 'vue';
import Vuex from 'vuex';
// プラグインとして登録
Vue.use(Vuex);

// ストアを作成
const store = new Vuex.Store({
  state: {
    message: '初期メッセージ',
  },
  getters: {
    // messageを使用するゲッター
    message(state) { return state.message; },
  },
  mutations: {
    // メッセージを変更するミューテーション
    setMessage(state, payload) {
      state.message = payload.message;
    },
  },
  actions: {
    // メッセージの更新処理
    doUpdate({ commit }, message) {
      commit('setMessage', { message });
    },
  },
});
export default store;
