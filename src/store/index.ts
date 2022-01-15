// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// });
import Vue from 'vue';
import Vuex, { GetterTree, MutationTree, ActionTree } from 'vuex';
import data from '@/assets/data/data.json';

Vue.use(Vuex);

class State {
    mockData: Array<unknown> | null = null;
}

const actions = <ActionTree<State, any>>{
  fetchMockData(ctx) {
    ctx.commit('setMockData', data);
  }
};

const mutations = <MutationTree<State>>{
  setMockData(state, payload) {
    state.mockData = payload;
  }
};

const getters = <GetterTree<State, any>>{
  mockData: (state) => state.mockData
};

export default new Vuex.Store({
  state: new State(),
  mutations,
  actions,
  getters,
  modules: {}
});
