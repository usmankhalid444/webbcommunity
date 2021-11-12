<template>
  <vue-final-modal
    name="reportsDetailModal"
    v-slot="{ close }"
    v-bind="$attrs"
    classes="flex justify-center items-center"
    content-class="w-full md:w-3/4 xl:w-2/4 relative max-h-full mx-4 md:p-12 p-5 border rounded bg-white capitalize overflow-auto z-50"
  >
    <div class="border-b pb-8">
      <p class="text-custom-lightblue font-medium inline-block">
        REF No. <span class="underline">NW55</span>
      </p>
      <p @click="close" class="float-right cursor-pointer">
        <i class="ri-close-line text-3xl"></i>
      </p>
      <h1
        class="text-2xl md:text-34px text-custom-darkblue py-3 mb-2 font-semibold"
      >
        Bulky Waste Collection
      </h1>
      <p class="text-custom-lightblue bg-custom-lightgreen inline px-4 py-1">
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
    <div class="grid grid-cols-12 mt-2 border-b py-2">
      <div class="col-span-6">
        <p class="text-custom-lightblue">source</p>
        <p class="text-custom-darkblue md:text-xl font-semibold py-2">
          john andrews (YOU)
        </p>
      </div>
      <div class="col-span-6 ">
        <p class="text-custom-lightblue">date and time</p>
        <p class="text-custom-darkblue md:text-xl font-semibold py-2">
          15 dec 2020, 04:00 PM
        </p>
      </div>
    </div>
    <div class="grid grid-cols-12 mt-2 border-b py-2">
      <div class="col-span-12 md:col-span-6 ">
        <p class="text-custom-lightblue">email</p>
        <p class="text-custom-darkblue md:text-xl font-semibold py-2">
          john_andrews@gmail.com
        </p>
      </div>
      <div class="col-span-6 ">
        <p class="text-custom-lightblue">phone number</p>
        <p class="text-custom-darkblue md:text-xl font-semibold py-2">
          +44 7700 900077
        </p>
      </div>
    </div>
    <div class="grid grid-cols-12 mt-2 border-b py-2">
      <div class="col-span-12 ">
        <p class="text-custom-lightblue">decription</p>
        <p
          class="text-custom-darkblue md:text-xl font-semibold py-2 inline tracking-wider"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
          delectus suscipit odio impedit eos nostrum esse, commodi cum quod
          fugit minima ullam quos ex, tempora ut alias praesentium vero
          quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolorum praesentium fugit quos deserunt odio, sint alias fugiat
          necessitatibus amet libero sapiente voluptas? Odio facere, consequatur
          placeat est adipisci hic autem!Lorem Ipsum Dolor Sit Amet, Consectetur
          Adipisicing Elit. Illum Delectus Suscipit Odio Impedit Eos Nostrum
          Esse, Commodi Cum Quod Fugit Minima Ullam Quos Ex, Tempora Ut Alias
          Praesentium Vero Quibusdam. Lorem Ipsum Dolor Sit Amet Consectetur
          Adipisicing Elit. Dolorum Praesentium Fugit Quos Deserunt Odio, Sint
          Alias Fugiat Necessitatibus Amet Libero Sapiente Voluptas? Odio
          Facere, Consequatur Placeat Est Adipisci Hic Autem!Lorem Ipsum Dolor
          Sit Amet, Consectetur Adipisicing Elit. Illum Delectus Suscipit Odio
          Impedit Eos Nostrum Esse, Commodi Cum Quod Fugit Minima Ullam Quos Ex,
          Tempora Ut Alias Praesentium Vero Quibusdam. Lorem Ipsum Dolor Sit
          Amet Consectetur Adipisicing Elit. Dolorum Praesentium Fugit Quos
          Deserunt Odio, Sint Alias Fugiat Necessitatibus Amet Libero Sapiente
          Voluptas? Odio Facere, Consequatur Placeat Est Adipisci Hic
          Autem!Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Illum
          Delectus Suscipit Odio Impedit Eos Nostrum Esse, Commodi Cum Quod
          Fugit Minima Ullam Quos Ex, Tempora Ut Alias Praesentium Vero
          Quibusdam. Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
          Dolorum Praesentium Fugit Quos Deserunt Odio, Sint Alias Fugiat
          Necessitatibus Amet Libero Sapiente Voluptas? Odio Facere, Consequatur
          Placeat Est Adipisci Hic Autem!Lorem Ipsum Dolor Sit Amet, Consectetur
          Adipisicing Elit. Illum Delectus Suscipit Odio Impedit Eos Nostrum
          Esse, Commodi Cum Quod Fugit Minima Ullam Quos Ex, Tempora Ut Alias
          Praesentium Vero Quibusdam. Lorem Ipsum Dolor Sit Amet Consectetur
          Adipisicing Elit. Dolorum Praesentium Fugit Quos Deserunt Odio, Sint
          Alias Fugiat Necessitatibus Amet Libero Sapiente Voluptas? Odio
          Facere, Consequatur Placeat Est Adipisci Hic Autem!Lorem Ipsum Dolor
          Sit Amet, Consectetur Adipisicing Elit. Illum Delectus Suscipit Odio
          Impedit Eos Nostrum Esse, Commodi Cum Quod Fugit Minima Ullam Quos Ex,
          Tempora Ut Alias Praesentium Vero Quibusdam. Lorem Ipsum Dolor Sit
          Amet Consectetur Adipisicing Elit. Dolorum Praesentium Fugit Quos
          Deserunt Odio, Sint Alias Fugiat Necessitatibus Amet Libero Sapiente
          Voluptas? Odio Facere, Consequatur Placeat Est Adipisci Hic
          Autem!Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Illum
          Delectus Suscipit Odio Impedit Eos Nostrum Esse, Commodi Cum Quod
          Fugit Minima Ullam Quos Ex, Tempora Ut Alias Praesentium Vero
          Quibusdam. Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
          Dolorum Praesentium Fugit Quos Deserunt Odio, Sint Alias Fugiat
          Necessitatibus Amet Libero Sapiente Voluptas? Odio Facere, Consequatur
          Placeat Est Adipisci Hic Autem!
        </p>
      </div>
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
          class=" border-custom-lightgray border h-12 font-semibold px-4 w-48 appearance-none"
        >
          <option value="More Actions">More Actions</option>
          <option value="Action 1">Action 1</option>
          <option value="Action 2">Action 2</option>
        </select>
        <span class="absolute top-3 right-7 pointer-events-none">
          <svg
            class="fill-current hover:text-red-600"
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
