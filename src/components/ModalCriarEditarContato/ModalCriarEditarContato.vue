<template>
  <div id="ContainerModal">
    <div id="groupForm">
      <div class="elementGroup" v-if="!contatoEdicao">Criar novo contato</div>
      <div class="elementGroup" v-if="contatoEdicao">Editar contato</div>
      <div class="elementGroup" id="groupInputs">
        <label>Nome</label>
        <input type="text" v-model="nome" />
        <label>E-mail</label>
        <input type="text" v-model="email" />
        <label>Telefone</label>
        <input type="text" v-model="telefone" />
      </div>
      <div class="elementGroup" id="groupButtons">
        <div @click="this.$store.dispatch('changeModalNovoContato', { show: false, contatoEdicao: {} })">Cancelar</div>
        <button :class="{ buttonActivated: formPreenchido, buttonDisabled: !formPreenchido }" :disabled="!formPreenchido" @click="salvarContato">Salvar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.$store.getters.getModalContato.contatoEdicao) {
      this.preecherEdicao(this.$store.getters.getModalContato.contatoEdicao);
    }
  },
  data() {
    return {
      nome: "",
      email: "",
      telefone: "",
      contatoEdicao: {},
    };
  },
  computed: {
    formPreenchido() {
      return this.nome !== "" || this.email !== "" || this.telefone !== "";
    },
  },
  methods: {
    preecherEdicao(contato) {
      this.contatoEdicao = contato;
      this.nome = contato.nome;
      this.email = contato.email;
      this.telefone = contato.telefone;
    },
    salvarContato() {
      if (!this.contatoEdicao.nome) {
        this.$store.dispatch("criarContato", {
          nome: this.nome,
          email: this.email,
          telefone: this.telefone,
        });
        this.$store.dispatch("changeModalNovoContato", { show: false, contatoEdicao: {} });
      } else {
        this.$store.dispatch("editarContato", {
          novoContato: {
            nome: this.nome,
            email: this.email,
            telefone: this.telefone,
          },
          contatoAntigo: this.contatoEdicao,
        });
        this.$store.dispatch("changeModalNovoContato", { show: false, contatoEdicao: {} });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 1007px) {
  @import "ModalCriarEditarContatoSmall.scss";
}
@media (min-width: 1008px) {
  @import "ModalCriarEditarContatoLarge.scss";
}
</style>
