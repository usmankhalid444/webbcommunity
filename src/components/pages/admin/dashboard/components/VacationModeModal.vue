<template>
  <vue-final-modal
    name="vacationModeModal"
    v-slot="{ close }"
    v-bind="$attrs"
    classes="flex justify-center items-center"
    content-class="w-full md:w-3/5 xl:w-2/4 2xl:w-2/6 relative max-h-full mx-4 md:p-12 p-5 border rounded bg-white capitalize"
  >
    <div>
      <h3 class="text-custom-darkblue text-34px font-semibold inline">
        Vacation Mode
      </h3>
      <p @click="close" class="float-right cursor-pointer">
        <i class="ri-close-line text-3xl"></i>
      </p>
    </div>
    <div class="my-8">
      <p class="font-semibold">Returning Date</p>
      <input
        class="w-full border-custom-lightgray border h-16 my-4 font-semibold px-8"
        type="datetime-local"
        value="21 Dec 2020, 02:00 PM"
      />
      <button
        @click="close"
        class="bg-custom-purple hover:bg-custom-lightblue w-full text-white py-5 font-semibold mt-10"
      >
        ACTIVATE VACATION MODE
      </button>
    </div>
  </vue-final-modal>
</template>
<script>
import { VueFinalModal } from "vue-final-modal";
export default {
  components: {
    VueFinalModal,
  },
  inheritAttrs: false,
  emits: ["cancel", "confirm"],

  methods: {
    beforeOpen(event) {
      console.log(event.ref.params);
    },
  },
};
</script>
