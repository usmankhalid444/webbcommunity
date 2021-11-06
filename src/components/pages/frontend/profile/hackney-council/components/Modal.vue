<template>
  <div
    class="absolute bg-white capitalize h-auto left-0 md:left-52 lg:max-w-4xl md:p-12 md:w-2/3 p-5 shadow-2xl top-10 md:top-32 w-full z-50"
    v-if="show"
  >
    <div class="border-b pb-8">
      <p class="text-custom-lightblue font-medium inline-block">
        REF No. <span class="underline">NW55</span>
      </p>
      <p @click="show = false" class="float-right cursor-pointer">
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
      <div class="col-span-6 ">
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
      <div class="col-span-12 ">
        <p class="text-custom-lightblue">subject</p>
        <p class="text-custom-darkblue md:text-xl font-semibold py-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
          praesentium nesciunt maiores exercitationem sapiente nostrum .
        </p>
      </div>
    </div>
    <div class="grid grid-cols-12 mt-2 border-b py-2">
      <div class="col-span-12 ">
        <p class="text-custom-lightblue">decription</p>
        <p class="text-custom-darkblue md:text-xl font-semibold py-2 inline">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
          delectus suscipit odio impedit eos nostrum esse, commodi cum quod
          fugit minima ullam quos ex, tempora ut alias praesentium vero
          quibusdam.
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>
