import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    showModalNovoContato: false
  },
  mutations: {
    changeModalNovoContato(state, boolean) {
      state.showModalNovoContato = boolean
    }
  },
  actions: {
    changeModalNovoContato({
      commit
    }, boolean) {
      commit("changeModalNovoContato", boolean)
    }
  },
  getters: {
    getShowModalNovoContato(state) {
      return state.showModalNovoContato;
    }
  },
  modules: {

  }
})