import { createStore } from 'vuex'
import dataMovie from '../static/movie-data.json'

export default createStore({
  state: {
    data: dataMovie,
    selected: {}
  },
  mutations: {
    UPDATE_SELECTED(state, payload) {
      state.selected = payload
    }
  },
  actions: {
    addSelected({ commit }, payload) {
      commit('UPDATE_SELECTED', payload)
    }
  },
  getters: {
    getSelected(state) {
      return state.selected
    },
    getData(state) {
      return state.data[0]
    }
  }
})
