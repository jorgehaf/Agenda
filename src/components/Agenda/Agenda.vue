<template>
  <div>
    <div id="ContainerAgenda">
      <img id="ImageBook" src="../../assets/Images/Book.svg" alt="Imagem de um livro" />
      <div id="mensagem">Nenhum contato foi criado ainda.</div>
      <button @click="this.$store.dispatch('changeModalNovoContato', true)" id="buttonCriarContato"><img src="../../assets/Icons/ic-plus.svg" /> Criar contato</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
