<template>
  <div id="ContainerHeader">
    <img id="logoUbook" src="../../assets/Images/Ubook-logo.svg" alt="Logo Ubook" />
    <button v-if="contatos[0]" id="buttonCriarContato" @click="this.$store.dispatch('changeModalNovoContato', { show: true, contatoEdicao: {} })">
      <img src="../../assets/Icons/ic-plus.svg" /> Criar Contato
    </button>
    <div id="groupInput">
      <input id="inputSearch" type="text" placeholder="Buscar..." @keyup="salvarFiltro($event.target.value)" />
      <img src="../../assets/Icons/ic-search.svg" alt="Icone de pesquisa" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    contatos() {
      return this.$store.getters.getContatos;
    },
  },
  methods: {
    salvarFiltro(valor) {
      this.$store.dispatch("salvarFiltro", valor);
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 1007px) {
  @import "HeaderSmall.scss";
}
@media (min-width: 1008px) {
  @import "HeaderLarge.scss";
}
</style>
