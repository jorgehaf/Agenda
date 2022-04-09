<template>
  <div id="ContainerHome">
    <ModalNovoContato v-if="showModal" />
    <Header />
    <Agenda />
  </div>
</template>

<script>
import Header from "../../components/Header/Header.vue";
import Agenda from "../../components/Agenda/Agenda.vue";
import ModalNovoContato from "../../components/ModalNovoContato/ModalNovoContato.vue";

export default {
  components: { Header, Agenda, ModalNovoContato },
  data() {
    return {};
  },
  computed: {
    showModal() {
      return this.$store.getters.getShowModalNovoContato;
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
