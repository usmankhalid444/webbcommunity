<template>
  <div
    class="absolute bg-white capitalize h-auto left-52 lg:max-w-4xl md:h-4/6 md:p-12 md:w-2/3 p-5 shadow-2xl top-32 w-full z-50"
    v-if="show"
  >
    <span @click="show = false">
      <svg
        class="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
      >
        <g id="arrow_left_icon" transform="translate(24) rotate(90)">
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
            fill="#00033c"
          />
        </g>
      </svg>
    </span>

    <div class="py-4 w-9/12 text-center m-auto">
      <span class="text-center m-auto">
        <svg
          class="inline"
          id="help_icon"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
        >
          <path
            id="Path_184"
            data-name="Path 184"
            d="M0,0H24V24H0Z"
            fill="none"
          />
          <path
            id="Path_185"
            data-name="Path 185"
            d="M11,18h2V16H11ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20ZM12,6a4,4,0,0,0-4,4h2a2,2,0,0,1,4,0c0,2-3,1.75-3,5h2c0-2.25,3-2.5,3-5A4,4,0,0,0,12,6Z"
            fill="#00033c"
          />
        </svg>
      </span>
      <h2 class="text-34px font-semibold mt-5">
        Cancel Booking?
      </h2>
      <p class="text-custom-lightblue text-lg py-5">
        Are you sure to cancel this booking? You won’t be able to reverse your
        decision.
      </p>
      <div class="grid grid-cols-12 gap-x-2 md:gap-x-8 py-8">
        <div class="col-span-6">
          <div>
            <button
              class=" py-5 w-full font-semibold border-2 border-custom-darkblue"
            >
              YES! CANCEL IT
            </button>
          </div>
        </div>
        <div class="col-span-6">
          <div>
            <button
              class="bg-custom-purple text-white py-5 w-full font-semibold hover:bg-custom-lightblue"
            >
              DON’T CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      //   cancel: false,
    };
  },
};
</script>
