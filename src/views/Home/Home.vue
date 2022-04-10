<template>
  <div id="ContainerHome">
    <ModalCriarEditarContato v-if="showModal" />
    <Header />
    <Agenda />
  </div>
</template>

<script>
import Header from "../../components/Header/Header.vue";
import Agenda from "../../components/Agenda/Agenda.vue";
import ModalCriarEditarContato from "../../components/ModalCriarEditarContato/ModalCriarEditarContato.vue";

export default {
  components: { Header, Agenda, ModalCriarEditarContato },
  computed: {
    showModal() {
      return this.$store.getters.getModalContato.show;
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 1007px) {
  @import "HomeSmall.scss";
}
@media (min-width: 1008px) {
  @import "HomeLarge.scss";
}
</style>
