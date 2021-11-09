<template>
  <vue-final-modal
    name="ongoingBookingDetailModal"
    v-slot="{ close }"
    v-bind="$attrs"
    classes="flex justify-center items-center"
    content-class="w-full md:w-3/4 xl:w-2/4 relative max-h-full mx-4 md:p-12 p-5 border rounded bg-white capitalize z-50"
  >
    <div class="border-b pb-8">
      <p class="text-custom-lightblue font-medium inline-block">
        REF No. <span class="underline">WC01</span>
      </p>
      <p @click="close" class="float-right cursor-pointer">
        <i class="ri-close-line text-3xl"></i>
      </p>
      <h1
        class="text-2xl md:text-34px text-custom-darkblue py-3.5 font-semibold"
      >
        wedding Cermony
      </h1>
      <p class="inline text-custom-lightblue">under review</p>
      <p class="text-custom-lightblue inline px-12">Webb community hall</p>
    </div>
    <div class="grid grid-cols-12 mt-2 border-b py-2">
      <div class="col-span-6 ">
        <p class="text-custom-lightblue">duration</p>
        <p class="text-custom-darkblue md:text-xl font-semibold py-2">
          1 day event
        </p>
      </div>
      <div class="col-span-6 ">
        <p class="text-custom-lightblue">guest no.</p>
        <p class="text-custom-darkblue md:text-xl font-semibold py-2">
          80-100
        </p>
      </div>
    </div>
    <div class="grid grid-cols-12 mt-2 border-b py-2">
      <div class="col-span-6 ">
        <p class="text-custom-lightblue">start</p>
        <p class="text-custom-darkblue md:text-xl font-semibold py-2">
          15 dec 2020, 01:00 PM
        </p>
      </div>
      <div class="col-span-6 ">
        <p class="text-custom-lightblue">end</p>
        <p class="text-custom-darkblue md:text-xl font-semibold py-2">
          15 dec 2020, 04:00 PM
        </p>
      </div>
    </div>
    <div class="grid grid-cols-12 mt-2 border-b py-2">
      <div class="col-span-6 ">
        <p class="text-custom-lightblue">total cost</p>
        <p class="text-custom-darkblue md:text-xl font-semibold py-2 inline">
          £45 inc. tax
        </p>
        <p class="inline px-5 text-custom-lightgray md:text-xl">(£15 /hour)</p>
      </div>
    </div>
    <div class="float-right mt-10">
      <button>
        <i
          class="ri-delete-bin-7-line md:text-xl p-5 align-middle mr-5 hover:text-red-600"
        ></i>
      </button>
      <router-link to="rechedulebooking">
        <button
          class="border-2 border-gray-300 px-6 py-2 font-semibold text-lg hover:bg-custom-purple hover:border-custom-purple hover:text-white transition"
        >
          RECHEDULE
        </button>
      </router-link>
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
