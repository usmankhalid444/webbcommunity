<template>
  <vue-final-modal
    name="EventModal"
    v-slot="{ close }"
    v-bind="$attrs"
    classes="flex justify-center items-center"
    content-class="w-full md:w-3/4 xl:w-2/4 relative max-h-full mx-4 md:p-12 p-5 border rounded bg-white capitalize"
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
      <div class="mt-2">
        <p class="inline text-custom-lightblue bg-custom-lightgreen p-1 mr-5 ">
          under review
        </p>
        <p class="text-custom-lightblue bg-custom-lightgreen inline p-1">
          <svg
            class="inline fill-current text-custom-lightblue pb-1"
            id="location_icon"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              id="Path_129"
              data-name="Path 129"
              d="M0,0H24V24H0Z"
              fill="none"
            />
            <path
              id="Path_130"
              data-name="Path 130"
              d="M12,2A7,7,0,0,0,5,9c0,5.25,7,13,7,13s7-7.75,7-13A7,7,0,0,0,12,2ZM7,9A5,5,0,0,1,17,9c0,2.88-2.88,7.19-5,9.88C9.92,16.21,7,11.85,7,9Z"
              fill="#00033c"
            />
            <circle
              id="Ellipse_44"
              data-name="Ellipse 44"
              cx="2.5"
              cy="2.5"
              r="2.5"
              transform="translate(9.5 6.5)"
            />
          </svg>
          Webb community hall
        </p>
      </div>
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
        <p class="inline px-5 text-custom-lightgray md:text-xl">
          (£15 /hour)
        </p>
      </div>
    </div>
    <div class="float-right mt-10">
      <button>
        <i
          class="ri-delete-bin-7-line md:text-xl p-5 align-middle mr-5 hover:text-red-600"
        ></i>
      </button>
      <button
        class="border-2 border-gray-300 px-6 py-2 font-semibold text-lg hover:bg-custom-purple hover:text-white hover:border-custom-purple transition"
      >
        RECHEDULE
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
