<template>
  <div>
    <AdminProfileLayout>
      <!-- title section-->
      <div class="w-full relative">
        <h1
          class="font-semibold text-xl md:text-4xl text-custom-darkblue inline"
        >
          Bookings
        </h1>
        <router-link to="admincreateevent">
          <button
            class="bg-custom-purple hover:bg-custom-lightblue w-64 md:h-12 h-10 uppercase font-semibold text-white absolute right-0 -top-12 md:-top-0"
          >
            <i class="ri-add-fill px-1 align-middle"></i> New Booking
          </button>
        </router-link>
      </div>
      <!-- filter and search field -->
      <div
        class="w-full bg-white mt-10 p-5 relative overflow-auto xl:overflow-visible"
      >
        <ul class="inline">
          <li class="inline font-bold">
            <p
              @click="currentTab = 'confirmed'"
              class="inline-block xl:inline cursor-pointer pr-5 my-2 md:py-5  "
              :class="
                currentTab == 'confirmed'
                  ? 'text-custom-darkblue'
                  : 'text-custom-lightgray'
              "
            >
              Confirmed
            </p>
          </li>
          <li class="inline  font-bold">
            <p
              @click="currentTab = 'reserved'"
              class="inline-block xl:inline cursor-pointer px-5 my-2 md:py-5"
              :class="
                currentTab == 'reserved'
                  ? 'text-custom-darkblue'
                  : 'text-custom-lightgray'
              "
            >
              Reserved
            </p>
          </li>
          <li class="inline  font-bold">
            <p
              @click="currentTab = 'requested'"
              class="inline-block xl:inline cursor-pointer px-5 my-2 md:py-5"
              :class="
                currentTab == 'requested'
                  ? 'text-custom-darkblue'
                  : 'text-custom-lightgray'
              "
            >
              Requested
            </p>
          </li>
          <li class="inline  font-bold">
            <p
              @click="currentTab = 'completed'"
              class="inline-block xl:inline cursor-pointer px-5 my-2 md:py-5"
              :class="
                currentTab == 'completed'
                  ? 'text-custom-darkblue'
                  : 'text-custom-lightgray'
              "
            >
              Completed
            </p>
          </li>
          <li class="inline  font-bold">
            <p
              @click="currentTab = 'declined'"
              class="inline-block xl:inline cursor-pointer px-5 my-2 md:py-5"
              :class="
                currentTab == 'declined'
                  ? 'text-custom-darkblue'
                  : 'text-custom-lightgray'
              "
            >
              Declined
            </p>
          </li>
        </ul>
        <span class="float-right relative">
          <input
            class="border border-gray-400 md:w-44  lg:w-80 h-10 pr-4 pl-10 md:-mt-2 mt-4"
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
        </span>
      </div>
      <Confirmed v-if="currentTab === 'confirmed'" />
      <Reserved v-if="currentTab === 'reserved'" />
      <Requested v-if="currentTab === 'requested'" />
      <Completed v-if="currentTab === 'completed'" />
      <Declined v-if="currentTab === 'declined'" />
    </AdminProfileLayout>
  </div>
</template>
<script>
import Confirmed from "./components/Confirmed";
import Reserved from "./components/Reserved";
import Requested from "./components/Requested";
import Completed from "./components/Completed";
import Declined from "./components/Declined";
export default {
  components: { Confirmed, Reserved, Requested, Completed, Declined },
  data() {
    return {
      currentTab: "confirmed",
    };
  },
};
</script>
