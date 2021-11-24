<template>
  <div>
    <UserProfileLayout>
      <!-- title section-->
      <div class="w-full relative">
        <h1
          class="font-semibold text-xl md:text-4xl text-custom-darkblue inline"
        >
          Reports
        </h1>
        <router-link to="createreport">
          <button
            class="bg-custom-purple hover:bg-custom-lightblue md:w-44 md:h-12 h-10 w-40 uppercase font-semibold text-white absolute right-0"
          >
            <i class="ri-add-fill px-1 align-middle"></i> NEW Report
          </button>
        </router-link>
      </div>
      <!-- filter and search field -->
      <div class="w-full bg-white mt-14 p-5 ">
        <ul>
          <li class="text-custom-darkblue inline font-bold relative group">
            <p class="inline cursor-pointer py-5">
              My Reports
            </p>
          </li>
        </ul>
        <div class="float-right relative">
          <input
            class="border border-gray-400 w-44  md:w-80 h-10 -mt-8 float-right inline pr-4 pl-10"
            type="text"
            placeholder=" Search"
          />
          <span class="absolute left-3 bottom-1.5"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="search_icon" transform="translate(-16281 -3203)">
                <path
                  id="Path_3350"
                  data-name="Path 3350"
                  d="M15.5,14h-.79l-.28-.27a6.51,6.51,0,1,0-.7.7l.27.28v.79l5,4.99L20.49,19Zm-6,0A4.5,4.5,0,1,1,14,9.5,4.494,4.494,0,0,1,9.5,14Z"
                  transform="translate(16281 3203)"
                  fill="#5f68a6"
                />
                <rect
                  id="Rectangle_2746"
                  data-name="Rectangle 2746"
                  width="24"
                  height="24"
                  transform="translate(16281 3203)"
                  fill="none"
                />
              </g>
            </svg>
          </span>
        </div>
      </div>
      <!-- table start -->
      <div class="capitalize h-72 md:h-96 mt-10 overflow-auto w-full">
        <table class="w-full md:leading-extra-loose text-sm md:text-base">
          <thead class="border">
            <tr class="text-left">
              <th class="px-5">sr.</th>
              <th>type</th>
              <th>date</th>
              <th>status</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="text-custom-darkblue font-semibold ">
            <tr class="border hover:outline-blue group">
              <td class="px-5">01</td>
              <td>general meeing</td>
              <td>dec 15, 2020</td>
              <td>under review</td>
              <td>
                <p
                  @click="showEvent"
                  class="cursor-pointer text-custom-purple invisible group-hover:visible"
                >
                  view
                </p>
              </td>
            </tr>
            <tr class="border hover:outline-blue">
              <td class="px-5">02</td>
              <td>enterpreneurship conference</td>
              <td>dec 08, 2020</td>
              <td>approved</td>
              <td></td>
            </tr>
            <tr class="border hover:outline-blue">
              <td class="px-5">03</td>
              <td>coders meetup</td>
              <td>dec 01, 2020</td>
              <td>approved</td>
              <td></td>
            </tr>
            <tr class="border hover:outline-blue">
              <td class="px-5">04</td>
              <td>domestic problems debate</td>
              <td>nov 23,2020</td>
              <td>approved</td>
              <td></td>
            </tr>
            <tr class="border hover:outline-blue">
              <td class="px-5">04</td>
              <td>domestic problems debate</td>
              <td>nov 23,2020</td>
              <td>approved</td>
              <td></td>
            </tr>
            <tr class="border hover:outline-blue">
              <td class="px-5">04</td>
              <td>domestic problems debate</td>
              <td>nov 23,2020</td>
              <td>approved</td>
              <td></td>
            </tr>
            <tr class="border hover:outline-blue">
              <td class="px-5">04</td>
              <td>domestic problems debate</td>
              <td>nov 23,2020</td>
              <td>approved</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="w-full text-custom-darkblue font-semibold mt-10">
        <p class="inline">Total 4</p>
        <p class="float-right">
          Page <i class="ri-arrow-left-s-line align-middle text-xl"></i> 1 of 1
          <i class="ri-arrow-right-s-line align-middle text-xl"></i>
        </p>
      </div>
      <ReportsDetailModal v-model="showmodal" />
    </UserProfileLayout>
  </div>
</template>
<script>
import ReportsDetailModal from "../../../../global-components/modals/ReportsDetailModal";
import { $vfm } from "vue-final-modal";
export default {
  components: { ReportsDetailModal },

  data() {
    return {
      showmodal: false,
    };
  },
  methods: {
    showEvent() {
      $vfm.show("reportsDetailModal");
    },
  },
};
</script>
