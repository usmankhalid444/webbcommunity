<template>
  <vue-final-modal
    name="UserDetailModal"
    v-slot="{ close }"
    v-bind="$attrs"
    classes="flex justify-center items-center overflow-scroll"
    content-class="w-full md:w-3/4 xl:w-2/4 relative max-h-full mx-4 md:p-12 p-5 border rounded bg-white overflow-auto"
  >
    <div>
      <span @click="close" class="float-right cursor-pointer">
        <i class="ri-close-line text-3xl"></i>
      </span>
      <div>
        <h1
          class="text-2xl md:text-34px text-custom-darkblue pt-3 font-semibold leading-12"
        >
          Select Users
        </h1>
      </div>
      <!-- filter and search field -->
      <div
        class="w-full bg-custom-lightgreen border-gray-300 border mt-5 p-5 relative"
      >
        <ul>
          <li class="inline font-bold  ">
            <p
              @click="currentTab = 'residents'"
              class="inline cursor-pointer pr-5 py-5  "
              :class="
                currentTab == 'residents'
                  ? 'text-custom-darkblue'
                  : 'text-custom-lightgray'
              "
            >
              Residents
            </p>
          </li>
          <li class="inline  font-bold">
            <p
              @click="currentTab = 'outsiders'"
              class="inline cursor-pointer px-5 py-5"
              :class="
                currentTab == 'outsiders'
                  ? 'text-custom-darkblue'
                  : 'text-custom-lightgray'
              "
            >
              Outsiders
            </p>
          </li>
        </ul>
        <div class="lg:float-right relative">
          <input
            class="border border-gray-400 w-44  lg:w-80 h-10 lg:-mt-8 lg:float-right inline pr-4 pl-10 mt-5"
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

      <Residents
        v-if="currentTab === 'residents'"
        :resident_users="resident_users"
        :selected_residents="selected_residents"
        @on_selected_residents="getSelectResidents"
      />
      <Outsiders
        v-if="currentTab === 'outsiders'"
        :none_resident_users="none_resident_users"
        :selected_none_residents="selected_none_residents"
        @on_selected_none_residents="getSelectNoneResidents"
      />
      <div class="w-full text-custom-darkblue font-semibold mt-10">
        <p class="inline">
          {{
            selected_residents.length + selected_none_residents.length
          }}
          Selected ({{ selected_residents.length }} Residents,
          {{ selected_none_residents.length }} Outsiders)
        </p>
      </div>
      <button
        class="bg-custom-purple hover:bg-custom-lightblue w-72 mt-5 md:w-96 py-4 uppercase font-semibold text-white"
      >
        MAKE ANNOUNCEMENT
      </button>
    </div>
  </vue-final-modal>
</template>
<script>
import Residents from "./Residents";
import Outsiders from "./Outsiders";
import { VueFinalModal } from "vue-final-modal";
export default {
  components: {
    VueFinalModal,
    Residents,
    Outsiders,
  },
  data() {
    return {
      currentTab: "residents",
      resident_users: [
        {
          id: 1,
          name: "John Andrews",
          avatar: "/assets/user.png",
          joined_date: "Dec 15, 2020",
          status: "Non-Verified Resident",
        },
        {
          id: 2,
          name: "Stephen Baker",
          avatar: "/assets/user2.png",
          joined_date: "Dec 15, 2020",
          status: "Verified Resident",
        },
        {
          id: 3,
          name: "Keith Birkett",

          avatar: "/assets/user.png",
          joined_date: "Dec 15, 2020",
          status: "Non-Verified Resident",
        },
        {
          id: 4,
          name: "John Andrews",
          avatar: "/assets/user.png",
          joined_date: "Dec 15, 2020",
          status: "Non-Verified Resident",
        },
        {
          id: 5,
          name: "Stephen Baker",
          avatar: "/assets/user2.png",
          joined_date: "Dec 15, 2020",
          status: "Verified Resident",
        },
        {
          id: 6,
          name: "Keith Birkett",
          avatar: "/assets/user.png",
          joined_date: "Dec 15, 2020",
          status: "Non-Verified Resident",
        },
      ],
      selected_residents: [],
      none_resident_users: [
        {
          id: 1,
          name: "Stephen Baker",
          avatar: "/assets/user2.png",
          joined_date: "Dec 15, 2020",
          status: "Verified Resident",
        },
        {
          id: 2,
          name: "John Andrews",
          avatar: "/assets/user.png",
          joined_date: "Dec 15, 2020",
          status: "Non-Verified Resident",
        },
        {
          id: 3,
          name: "Keith Birkett",
          avatar: "/assets/user.png",
          joined_date: "Dec 15, 2020",
          status: "Non-Verified Resident",
        },
        {
          id: 4,
          name: "John Andrews",
          avatar: "/assets/user.png",
          joined_date: "Dec 15, 2020",
          status: "Non-Verified Resident",
        },
        {
          id: 5,
          name: "Stephen Baker",
          avatar: "/assets/user2.png",
          joined_date: "Dec 15, 2020",
          status: "Verified Resident",
        },
        {
          id: 6,
          name: "Keith Birkett",
          avatar: "/assets/user.png",
          joined_date: "Dec 15, 2020",
          status: "Non-Verified Resident",
        },
      ],
      selected_none_residents: [],
    };
  },
  methods: {
    getSelectResidents(value) {
      this.selected_residents = value;
    },
    getSelectNoneResidents(value) {
      this.selected_none_residents = value;
    },
  },
  inheritAttrs: false,
  emits: ["cancel", "confirm"],
};
</script>
