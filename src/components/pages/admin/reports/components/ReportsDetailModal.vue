<template>
  <vue-final-modal
    name="UserDetailModal"
    v-slot="{ close }"
    v-bind="$attrs"
    classes="flex justify-center items-center overflow-scroll"
    content-class="w-full md:w-3/4 xl:w-2/4 relative max-h-full mx-4 md:p-12 p-5 border rounded bg-white"
  >
    <div>
      <div class="border-b pb-8">
        <p class="text-custom-lightblue font-medium inline-block">
          REF No. <span class="underline">NW{{ reports.id }}</span>
        </p>
        <p @click="close" class="float-right cursor-pointer">
          <i class="ri-close-line text-3xl"></i>
        </p>
        <h1
          class="text-2xl md:text-34px text-custom-darkblue pt-3 font-semibold leading-12"
        >
          {{ reports.enquiry }}
        </h1>
        <div class="mt-4">
          <p
            class="text-custom-lightblue bg-custom-lightgreen inline px-4 py-1"
          >
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
            {{ reports.location }}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-12 border-b py-2">
        <div class="col-span-6 ">
          <p class="text-custom-lightblue">Source</p>
          <p
            class="md:text-xl font-semibold py-2 text-custom-purple underline tracking-wide"
          >
            {{ reports.submitted_by }}
          </p>
        </div>
        <div class="col-span-6 ">
          <p class="text-custom-lightblue">Date and Time</p>
          <p class="text-custom-darkblue md:text-xl font-semibold py-2">
            {{ reports.date }}, {{ reports.time }}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-12 border-b py-2">
        <div class="col-span-6 ">
          <p class="text-custom-lightblue">Email</p>
          <p class="text-custom-darkblue md:text-xl font-semibold py-2">
            {{ reports.email }}
          </p>
        </div>
        <div class="col-span-6 ">
          <p class="text-custom-lightblue">Phone Number</p>
          <p class="text-custom-darkblue md:text-xl font-semibold py-2">
            {{ reports.contact_no }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-12 mt-2 border-b py-2">
        <div class="col-span-12 ">
          <p class="text-custom-lightblue">Report Description</p>
          <p
            class="text-custom-darkblue md:text-xl font-semibold py-2 inline tracking-wide"
          >
            {{ reports.description }}
          </p>
        </div>
      </div>
    </div>
  </vue-final-modal>
</template>
<script>
import { VueFinalModal } from "vue-final-modal";
export default {
  props: ["reports"],
  components: {
    VueFinalModal,
  },
  inheritAttrs: false,
  emits: ["cancel", "confirm"],
};
</script>
