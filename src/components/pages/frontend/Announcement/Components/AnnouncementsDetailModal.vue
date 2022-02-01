<template>
  <vue-final-modal
    name="UserDetailModal"
    v-slot="{ close }"
    v-bind="$attrs"
    classes="flex justify-center items-center overflow-scroll"
    content-class="w-full overflow-auto md:w-3/4 xl:w-2/4 relative max-h-full mx-4 md:p-12 p-5 border rounded bg-white"
  >
    <div>
      <div class="border-b pb-8">
        <p class="text-custom-lightblue font-medium inline-block">
          REF No. <span class="underline">NW{{ announcements.id }}</span>
        </p>
        <p @click="close" class="float-right cursor-pointer">
          <i class="ri-close-line text-3xl"></i>
        </p>
        <h1
          class="text-2xl md:text-34px text-custom-darkblue pt-3 font-semibold leading-12"
        >
          {{ announcements.subject }}
        </h1>
      </div>
      <div class="grid grid-cols-12 border-b py-2">
        <div class="col-span-6 ">
          <p class="text-custom-lightblue">Shared with</p>
          <p
            class="md:text-xl font-semibold py-2 text-custom-purple underline tracking-wide"
          >
            {{ announcements.shared_with }}
          </p>
        </div>
        <div class="col-span-6 ">
          <p class="text-custom-lightblue">Date and Time</p>
          <p class="text-custom-darkblue md:text-xl font-semibold py-2">
            {{ announcements.date }}, {{ announcements.time }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-12 mt-2 border-b py-2">
        <div class="col-span-12 ">
          <p class="text-custom-lightblue">Brief</p>
          <p
            class="text-custom-darkblue md:text-xl font-semibold py-2 inline tracking-wide"
          >
            {{ announcements.brief }}
          </p>
        </div>
      </div>
    </div>
  </vue-final-modal>
</template>
<script>
import { VueFinalModal } from "vue-final-modal";
export default {
  props: ["announcements"],
  components: {
    VueFinalModal,
  },
  inheritAttrs: false,
  emits: ["cancel", "confirm"],
};
</script>
