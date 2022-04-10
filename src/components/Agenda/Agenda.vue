<template>
  <div>
    <div id="ContainerAgenda" v-if="!contatos[0]">
      <img id="ImageBook" src="../../assets/Images/Book.svg" alt="Imagem de um livro" />
      <div id="mensagem">Nenhum contato foi criado ainda.</div>
      <button @click="this.$store.dispatch('changeModalNovoContato', { show: true, contatoEdicao: {} })" id="buttonCriarContato"><img src="../../assets/Icons/ic-plus.svg" /> Criar contato</button>
    </div>
    <div v-if="contatos[0]">
      <TabelaContatos :contatos="contatos" />
    </div>
  </div>
</template>

<script>
import TabelaContatos from "../TabelaContatos/TabelaContatos.vue";
export default {
  components: { TabelaContatos },
  computed: {
    contatos() {
      let contatos = [];
      this.$store.getters.getContatos.forEach((el) => {
        contatos.push({
          nome: el.nome,
          email: el.email,
          telefone: el.telefone,
        });
      });
      return contatos;
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 1007px) {
  @import "AgendaSmall.scss";
}
@media (min-width: 1008px) {
  @import "AgendaLarge.scss";
}
</style>
