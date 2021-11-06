<template>
  <div>
    <v-tailwind-modal v-model="show" @confirm="confirm" @cancel="cancel">
      <template v-slot:title>Hello, vue-final-modal</template>
      <template v-slot:params>
        <h1>usman</h1>
      </template>
      <p>
        modal component.
      </p>
    </v-tailwind-modal>

    <button @click="show = true">Open modal</button>
    <button @click="showModal">custom button</button>
  </div>
</template>
<script>
import VTailwindModal from "./VTailwindModal";
import { $vfm } from "vue-final-modal";
export default {
  components: { VTailwindModal },
  data: () => ({
    show: false,
  }),
  methods: {
    showModal() {
      $vfm.show("exampleModal", {
        test: "irfan",
        second: "ahmad",
      });
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
