<template>
  <div id="ContainerTabela">
    <div id="tabela">
      <div id="headerTabela">
        <div id="contato">Contatos</div>
        <div id="email">Email</div>
        <div id="telefone">Telefone</div>
      </div>
      <div v-for="contato in contatos" :key="contato" id="bodyTabela">
        <div class="row">
          <div class="nome">{{ contato.nome }}</div>
          <div class="email">{{ contato.email }}</div>
          <div class="telefone">{{ contato.telefone }}</div>
          <div class="optionsContato">
            <img @click="editarContato(contato)" src="../../assets/Icons/ic-edit.svg" alt="Editar contato" />
            <img @click="excluirContato(contato)" src="../../assets/Icons/ic-delete.svg" alt="Deletar contato" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["contatos"],
  methods: {
    editarContato(contato) {
        this.$store.dispatch('changeModalNovoContato', { show: true, contatoEdicao: contato })
    },
    excluirContato(contato) {
        this.$store.dispatch('excluirContato', { show: true, contatoEdicao: contato })
    }
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 1007px) {
  @import "TabelaContatosSmall.scss";
}
@media (min-width: 1008px) {
  @import "TabelaContatosLarge.scss";
}
</style>
