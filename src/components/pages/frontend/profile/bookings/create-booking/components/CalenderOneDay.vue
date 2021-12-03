<template>
  <Header darkHeader="true" />
  <button @click="showModal(item)">open modal</button>
  <ModalsContainer />
</template>
<script>
import Header from "../../../../../../layouts/frontend/header/Header";
import { $vfm, ModalsContainer } from "vue-final-modal";
import OneDayModal from "./OneDayModal.vue";
export default {
  components: {
    Header,
    ModalsContainer,
  },
  methods: {
    showModal(user) {
      $vfm.show({
        component: OneDayModal,
        bind: {
          userData: user,
        },
      });
    },
  },
};
</script>
<style></style>
