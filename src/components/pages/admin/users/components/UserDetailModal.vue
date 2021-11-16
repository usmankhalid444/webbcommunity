<template>
  <vue-final-modal
    name="UserDetailModal"
    v-slot="{ close }"
    v-bind="$attrs"
    classes="flex justify-center items-center overflow-scroll"
    content-class="w-full md:w-3/4 xl:w-2/4 relative max-h-full mx-4 md:p-12 p-5 border rounded bg-white"
  >
    <div>
      <div class="relative">
        <img :src="userData.avatar" alt="userimage" class="h-32 w-32 " />
        <div class="absolute left-36 top-0">
          <p class="py-1 text-custom-lightblue">User ID UR0{{ userData.id }}</p>
          <p class="pb-2 text-custom-darkblue text-2xl md:text-34px my-2 ">
            {{ userData.name }}
          </p>
          <p
            class="py-1 px-3 inline bg-custom-lightgreen text-custom-lightblue"
          >
            {{ userData.status }}
          </p>
        </div>
        <span
          class="float-right absolute top-0 right-0 cursor-pointer"
          @click="close"
          ><svg
            id="close_icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              id="Path_104"
              data-name="Path 104"
              d="M0,0H24V24H0Z"
              fill="none"
            />
            <path
              id="Path_105"
              data-name="Path 105"
              d="M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z"
              fill="#00033c"
            />
          </svg>
        </span>
      </div>
      <div
        class="border-t border-b grid grid-cols-12 mt-10 py-2 text-custom-darkblue"
      >
        <div class="col-span-12 md:col-span-6">
          <p class="text-custom-lightblue">Email</p>
          <p class="text-md xl:text-xl font-semibold py-3">
            {{ userData.email }}
          </p>
        </div>
        <div class="col-span-12 md:col-span-6">
          <p class="text-custom-lightblue">Phone Number</p>
          <p class="text-md xl:text-xl font-semibold py-3">
            {{ userData.contact_no }}
          </p>
        </div>
      </div>
      <!-- documents section -->
      <div class="text-custom-darkblue grid grid-cols-12 gap-5">
        <p class="text-custom-lightblue col-span-12 pt-8">
          Residential Documents
        </p>
        <div
          class="col-span-6 md:col-span-4 border relative"
          v-for="(document, i) in userData.documents"
          :key="i"
        >
          <a :href="document.path">
            <img
              src="/assets/pdficon.png"
              alt="pdficon"
              class="w-full object-cover"
            />
          </a>
          <p class="p-2 text-center  text-sm underline">
            {{ document.title }}.pdf
          </p>
          <div class="group">
            <span class="absolute top-2 right-0 cursor-pointer">
              <svg
                class="w-10 h-6 fill-current text-white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                />
              </svg>
            </span>
            <!--  -->
            <span
              class="hidden group-hover:block absolute top-8 right-3 bg-custom-lightgreen px-5 py-2 rounded font-semibold shadow border border-custom-lightgray"
              ><p class="py-1 cursor-pointer hover:text-custom-purple">
                Replace
              </p>
              <p class="py-1 cursor-pointer hover:text-custom-purple">Delete</p>
            </span>
          </div>
        </div>
      </div>
      <!-- documents section end -->
      <div class="float-right mt-10 flex">
        <div class="mr-3 md:mr-10 mb-3">
          <button
            class="border-custom-lightgray border h-12 font-semibold px-4 w-44 hover:bg-custom-lightblue hover:text-white"
          >
            MARK VERIFIED
          </button>
        </div>
        <div class="relative">
          <select
            class=" border-custom-lightgray border h-12 font-semibold px-4 w-48"
          >
            <option value="More Actions">MORE ACTIONS</option>
            <option value="Block User">Block User</option>
            <option value="Action 2">Action 2</option>
          </select>
          <span class="absolute top-3 right-5 pointer-events-none">
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
  props: ["userData"],
  components: {
    VueFinalModal,
  },
  inheritAttrs: false,
  emits: ["cancel", "confirm"],
};
</script>
