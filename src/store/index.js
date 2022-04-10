import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    modalContato: {
      show: false,
      contatoEdicao: {},
    },
    contatos: [],
    filtroContatos: ""
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
    },
    salvarFiltro(state, payload) {
      state.filtroContatos = payload;
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
    },
    salvarFiltro({
      commit
    }, payload) {
      commit('salvarFiltro', payload)
    }
  },
  getters: {
    getModalContato(state) {
      return state.modalContato;
    },
    getContatos(state) {
      if (state.filtroContatos === "") {
        return state.contatos;
      } else {
        let novosContatos = state.contatos.filter(
          (el) => (el.nome && el.nome.toUpperCase().includes(state.filtroContatos)) ||
          (el.email && el.email.toUpperCase().includes(state.filtroContatos)) ||
          (el.telefone && el.telefone.toUpperCase().includes(state.filtroContatos))
        )
        return novosContatos[0] ? novosContatos : [{}]
      }
    }
  }
})