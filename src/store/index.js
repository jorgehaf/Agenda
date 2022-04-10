import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    modalContato: {
      show: false,
      contatoEdicao: {},
    },
    contatos: []
  },
  mutations: {
    changeModalNovoContato(state, payload) {
      state.modalContato.show = payload.show;
      state.modalContato.contatoEdicao = payload.contatoEdicao;
    },
    criarContato(state, payload) {
      state.contatos.push({
        nome: payload.nome,
        email: payload.email,
        telefone: payload.telefone
      })
    },
    editarContato(state, payload) {
      let index = state.contatos.findIndex((el) => el.nome === payload.contatoAntigo.nome)

      state.contatos[index].nome = payload.novoContato.nome
      state.contatos[index].email = payload.novoContato.email
      state.contatos[index].telefone = payload.novoContato.telefone
    },
    excluirContato(state, payload) {
      let index = state.contatos.findIndex((el) => el.nome === payload.nome)
      state.contatos.splice(index, 1)
    }
  },
  actions: {
    changeModalNovoContato({
      commit
    }, payload) {
      commit("changeModalNovoContato", payload)
    },
    criarContato({
      commit
    }, payload) {
      commit("criarContato", payload)
    },
    editarContato({
      commit
    }, payload) {
      commit("editarContato", payload)
    },
    excluirContato({
      commit
    }, payload) {
      commit('excluirContato', payload)
    }
  },
  getters: {
    getModalContato(state) {
      return state.modalContato;
    },
    getContatos(state) {
      return state.contatos;
    }
  }
})