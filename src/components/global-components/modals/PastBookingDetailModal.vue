<template>
  <vue-final-modal
    name="PastBookingDetailModal"
    v-slot="{ close }"
    v-bind="$attrs"
    classes="flex justify-center items-center"
    content-class="w-full md:w-3/4 2xl:w-2/4 relative xl:h-4/5 mx-4 md:p-12 p-5 border rounded bg-white capitalize max-h-screen overflow-auto"
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
          20 Kids :: 50 Adults
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
        <p class="text-custom-lightblue">Total hours</p>
        <p class="text-custom-darkblue md:text-xl font-semibold py-2">
          3 hours
        </p>
      </div>
      <div class="col-span-6 ">
        <p class="text-custom-lightblue">total amount</p>
        <p class="text-custom-darkblue md:text-xl font-semibold py-2">
          £245
        </p>
      </div>
    </div>
    <div class="grid grid-cols-12 mt-2 border-b py-2 gap-x-5 md:gap-x-16">
      <p class="col-span-12 text-custom-lightblue">Domage images</p>
      <div class="col-span-6 md:col-span-4 border my-3">
        <img
          src="/assets/s-img1.png"
          alt="domage image"
          class="h-24 md:h-52 w-full"
        />
        <p class="text-sm underline py-2 text-center text-custom-darkblue">
          image001.jpeg
        </p>
      </div>
      <div class="col-span-6 md:col-span-4 border my-3">
        <img
          src="/assets/s-img2.png"
          alt="domage image"
          class="h-24 md:h-52 w-full"
        />
        <p class="text-sm underline py-2 text-center text-custom-darkblue">
          image002.jpeg
        </p>
      </div>
      <div class="col-span-4"></div>
      <div class="col-span-4"></div>
    </div>
    <div class="float-right mt-10 flex">
      <span class="p-3 mx-5 cursor-pointer"
        ><svg
          class="fill-current hover:text-red-600"
          id="delete_icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            id="Path_3347"
            data-name="Path 3347"
            d="M0,0H24V24H0Z"
            fill="none"
          />
          <path
            id="Path_3348"
            data-name="Path 3348"
            d="M6,19a2.006,2.006,0,0,0,2,2h8a2.006,2.006,0,0,0,2-2V7H6ZM8,9h8V19H8Zm7.5-5-1-1h-5l-1,1H5V6H19V4Z"
          /></svg
      ></span>

      <div class="relative">
        <select
          class=" border-custom-lightgray border h-12 font-semibold px-4 w-60 appearance-none"
        >
          <option value="More Actions">More Actions</option>
          <option value="Action 1">Ask Security Refund</option>
          <option value="Action 1">Download Invoice</option>
          <option value="Action 2">Email Invoice</option>
        </select>
        <span class="absolute top-3 right-7 pointer-events-none">
          <svg
            id="arrow_down_icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              id="Path_117"
              data-name="Path 117"
              d="M0,0H24V24H0Z"
              fill="none"
            />
            <path
              id="Path_118"
              data-name="Path 118"
              d="M7.41,8.59,12,13.17l4.59-4.58L18,10l-6,6L6,10Z"
              fill="#000539"
            />
          </svg>
        </span>
      </div>
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
