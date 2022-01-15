import Vue from 'vue'
import Vuex, { GetterTree, MutationTree, ActionTree } from 'vuex'
import data from '@/assets/data/data.json'

Vue.use(Vuex)

class State {
  mockData: Array<unknown> | null = null

  filteredCards: Array<unknown> | null = null
}

const actions = <ActionTree<State, any>>{
  fetchMockData(ctx) {
    ctx.commit('setMockData', data)
  }
}

const mutations = <MutationTree<State>>{
  setMockData(state, payload) {
    state.mockData = state.filteredCards = payload
  },
  setFilteredCards(state, payload) {
    state.filteredCards = payload
  },
  clearFilteredCards(state) {
    state.filteredCards = state.mockData
  }
}

const getters = <GetterTree<State, any>>{
  mockData: (state) => state.mockData,
  filteredCards: (state) => state.filteredCards
}

export default new Vuex.Store({
  state: new State(),
  mutations,
  actions,
  getters,
  modules: {}
})
