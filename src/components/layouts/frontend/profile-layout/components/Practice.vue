<template>
  <div>
    <!-- <VTailwindModal v-model="show"> </VTailwindModal> -->
  </div>
</template>
<script>
// import VTailwindModal from "./VTailwindModal";
// import { $vfm } from "vue-final-modal";
export default {
  // components: { VTailwindModal },
  data: () => ({
    show: false,
  }),
  methods: {
    showModal() {
      // $vfm.show("exampleModal", {
      //   test: "irfan",
      //   second: "ahmad",
      // });
    },
    confirm() {
      // some code...
      this.show = false;
    },
    cancel(close) {
      // some code...
      close();
    },
  },
};
</script>
