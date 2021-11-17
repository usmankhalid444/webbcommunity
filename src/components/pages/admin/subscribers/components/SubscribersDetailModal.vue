<template>
  <vue-final-modal
    name="UserDetailModal"
    v-slot="{ close }"
    v-bind="$attrs"
    classes="flex justify-center items-center overflow-scroll"
    content-class="w-full md:w-3/4 xl:w-2/4 relative max-h-full mx-4 md:p-12 p-5 border rounded bg-white"
  >
    <div>
      <p @click="close" class="float-right cursor-pointer">
        <i class="ri-close-line text-3xl"></i>
      </p>
      <div class="w-full m-auto grid place-items-center">
        <span>
          <svg
            id="help_icon"
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
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
      </div>
      <div class="w-full text-center">
        <h3 class="text-34px font-semibold text-custom-darkblue my-4">
          Remove Subscriber?
        </h3>
        <p class="text-custom-lightgray text-lg">
          Are you sure to remove this subscriber? You won’t be able to reverse
          your decision.
        </p>
      </div>
      <div class="text-center mt-8">
        <button
          class="mt-4 mx-5 border-2 font-semibold border-custom-darkblue md:py-4 md:px-14 p-4 hover:bg-custom-lightblue hover:text-white hover:border-transparent"
        >
          YES! REMOVE IT
        </button>
        <button
          class="mt-4 mx-5 text-white bg-custom-purple hover:bg-custom-lightblue md:py-4 md:px-14 p-4 font-semibold"
        >
          DON’T REMOVE
        </button>
      </div>
    </div>
  </vue-final-modal>
</template>
<script>
import { VueFinalModal } from "vue-final-modal";
export default {
  //   props: ["announcements"],
  components: {
    VueFinalModal,
  },
  inheritAttrs: false,
  emits: ["cancel", "confirm"],
};
</script>
