<template>
  <div id="ContainerHeader">
    <img id="logoUbook" src="../../assets/Images/Ubook-logo.svg" alt="Logo Ubook" />
    <div id="groupInput">
      <input id="inputSearch" type="text" placeholder="Buscar..." />
      <img src="../../assets/Icons/ic-search.svg" alt="Icone de pesquisa" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media (max-width: 1007px) {
  @import "HeaderSmall.scss";
}
@media (min-width: 1008px) {
  @import "HeaderLarge.scss";
}
</style>
