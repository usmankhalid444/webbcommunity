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
          REF No. <span class="underline">NW{{ news.id }}</span>
        </p>
        <p @click="close" class="float-right cursor-pointer">
          <i class="ri-close-line text-3xl"></i>
        </p>
        <h1
          class="text-2xl md:text-34px text-custom-darkblue py-3 mb-2 font-semibold"
        >
          {{ news.news_title }}
        </h1>
        <span
          class="text-custom-lightblue bg-custom-lightgreen inline px-4 py-1 mr-5"
          >{{ news.type }}</span
        >
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
          {{ news.location }}
        </p>
      </div>
      <div class="grid grid-cols-12 mt-2 border-b py-2">
        <div class="col-span-6 ">
          <p class="text-custom-lightblue">Published On</p>
          <p class="text-custom-darkblue md:text-xl font-semibold py-2">
            {{ news.published_on }}, {{ news.time }}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-12 mt-2 border-b py-2">
        <div class="col-span-12 ">
          <p class="text-custom-lightblue">Decription</p>
          <p
            class="text-custom-darkblue md:text-xl font-semibold py-2 inline tracking-wider"
          >
            {{ news.brief }}
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
            @change="editTab($event)"
            class=" border-custom-lightgray border h-12 font-semibold px-4 w-48"
          >
            <option value="More Actions">More Actions</option>
            <option value="Edit">Edit</option>
            <option value="Move to Drafts">Move to Drafts</option>
            <option value="Move to Trash">Move to Trash</option>
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
    </div>
  </vue-final-modal>
</template>
<script>
import { VueFinalModal } from "vue-final-modal";
export default {
  props: ["news"],
  components: {
    VueFinalModal,
  },
  inheritAttrs: false,
  emits: ["cancel", "confirm"],
  methods: {
    editTab(event) {
      if (event.target.value == "Edit") {
        return this.$router.push({ path: "/editnews" });
      }
    },
  },
};
</script>
