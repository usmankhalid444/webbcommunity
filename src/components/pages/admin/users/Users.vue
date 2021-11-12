<template>
  <div>
    <AdminProfileLayout>
      <!-- title -->
      <div class="w-full">
        <h1
          class="font-semibold text-xl md:text-4xl text-custom-darkblue inline"
        >
          Users
        </h1>
      </div>
      <!-- filter and search field -->
      <div class="w-full bg-white mt-10 p-5 relative">
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
          <li
            class="inline font-bold"
            :class="
              currentTab == 'blocked'
                ? 'text-custom-darkblue'
                : 'text-custom-lightgray'
            "
          >
            <p
              @click="currentTab = 'blocked'"
              class="inline cursor-pointer px-5 py-5"
            >
              Blocked
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
      <Residents v-if="currentTab === 'residents'" />
      <Outsiders v-if="currentTab === 'outsiders'" />
      <Blocked v-if="currentTab === 'blocked'" />
    </AdminProfileLayout>
  </div>
</template>
<script>
import Residents from "./components/Residents";
import Outsiders from "./components/Outsiders";
import Blocked from "./components/Blocked";
export default {
  components: { Residents, Outsiders, Blocked },
  data() {
    return {
      currentTab: "residents",
    };
  },
};
</script>
