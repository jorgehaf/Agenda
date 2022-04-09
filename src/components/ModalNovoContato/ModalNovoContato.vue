<template>
  <div id="ContainerModal">
    <div id="groupForm">
      <div>Criar novo contato</div>
      <div>
        <label>Nome</label>
        <input type="text" />
        <label>E-mail</label>
        <input type="text" />
        <label>Telefone</label>
        <input type="text" />
      </div>
      <div>
        <button>Cancelar</button>
        <button>Salvar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media (max-width: 1007px) {
  @import "ModalNovoContatoSmall.scss";
}
@media (min-width: 1008px) {
  @import "ModalNovoContatoLarge.scss";
}
</style>
