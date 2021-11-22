<template>
  <div>
    <AdminProfileLayout>
      <!-- title section-->
      <div class="w-full relative">
        <h1
          class="font-semibold text-xl md:text-4xl text-custom-darkblue inline"
        >
          Events
        </h1>
        <router-link to="admincreateevent">
          <button
            class="bg-custom-purple hover:bg-custom-lightblue w-64 md:h-12 h-10 uppercase font-semibold text-white absolute right-0 -top-12 md:-top-0"
          >
            <i class="ri-add-fill px-1 align-middle"></i> CREATE Event
          </button>
        </router-link>
      </div>
      <!-- filter and search field -->
      <div class="w-full bg-white mt-10 p-5 relative">
        <ul>
          <li class="inline font-bold  ">
            <p
              @click="currentTab = 'allEvents'"
              class="inline cursor-pointer pr-5 py-5  "
              :class="
                currentTab == 'allEvents'
                  ? 'text-custom-darkblue'
                  : 'text-custom-lightgray'
              "
            >
              All
            </p>
          </li>
          <li class="inline  font-bold">
            <p
              @click="currentTab = 'myEvents'"
              class="inline cursor-pointer px-5 py-5"
              :class="
                currentTab == 'myEvents'
                  ? 'text-custom-darkblue'
                  : 'text-custom-lightgray'
              "
            >
              My Events
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
      <AllEvents v-if="currentTab === 'allEvents'" />
      <MyEvents v-if="currentTab === 'myEvents'" />
    </AdminProfileLayout>
  </div>
</template>
<script>
import AllEvents from "./components/AllEvents";
import MyEvents from "./components/MyEvents";
export default {
  components: { AllEvents, MyEvents },
  data() {
    return {
      currentTab: "allEvents",
    };
  },
};
</script>
