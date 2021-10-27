<template>
  <div
    class="bg-white hidden capitalize fixed font-semibold h-screen shadow-2xl text-custom-lightblue w-56 z-10 pt-16"
  >
    <ul class="border-b border-gray-300 w-full px-5 ">
      <div class="float-right">close</div>
      <li>
        <router-link
          class="py-4 hover:text-custom-darkblue block"
          to="myprofile"
          >my profile</router-link
        >
      </li>
      <li class=" relative">
        <!-- dropdown menu -->
        <p
          class="py-4 hover:text-custom-darkblue block group"
          :class="
            bookingsDropdown
              ? 'fill-current text-custom-darkblue'
              : 'fill-current text-custom-lightblue'
          "
          @click="bookingsDropdown = !bookingsDropdown"
        >
          bookings
          <span class="absolute right-0">
            <svg
              v-if="bookingsDropdown"
              :class="
                bookingsDropdown
                  ? 'fill-current text-custom-darkblue'
                  : 'fill-current text-custom-lightblue group-hover:text-custom-darkblue'
              "
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="arrow_up_icon" transform="translate(0 24) rotate(-90)">
                <path
                  id="Path_3402"
                  data-name="Path 3402"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <path
                  id="Path_3403"
                  data-name="Path 3403"
                  d="M13.172,12,8.222,7.05,9.636,5.636,16,12,9.636,18.364,8.222,16.95Z"
                />
              </g>
            </svg>
            <svg
              v-if="!bookingsDropdown"
              class="inline"
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
        </p>
        <!-- dropdown items start -->
        <div
          class="bg-custom-lightgreen p-4 border border-gray-300 mt-3"
          v-if="bookingsDropdown"
        >
          <ul>
            <li class="hover:text-custom-darkblue py-2">
              <a href="#">Creat New</a>
            </li>
            <li class="hover:text-custom-darkblue py-2">
              <a href="#">Manage</a>
            </li>
          </ul>
        </div>
      </li>
      <li class=" relative">
        <!-- dropdown menu -->
        <a
          href="#"
          class="py-4 hover:text-custom-darkblue block group"
          :class="
            webbcommunityDropdown
              ? 'fill-current text-custom-darkblue'
              : 'fill-current text-custom-lightblue'
          "
          @click="webbcommunityDropdown = !webbcommunityDropdown"
          >Webb community
          <span class="absolute right-0">
            <svg
              v-if="webbcommunityDropdown"
              :class="
                webbcommunityDropdown
                  ? 'fill-current text-custom-darkblue'
                  : 'fill-current text-custom-lightblue group-hover:text-custom-darkblue'
              "
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="arrow_up_icon" transform="translate(0 24) rotate(-90)">
                <path
                  id="Path_3402"
                  data-name="Path 3402"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <path
                  id="Path_3403"
                  data-name="Path 3403"
                  d="M13.172,12,8.222,7.05,9.636,5.636,16,12,9.636,18.364,8.222,16.95Z"
                />
              </g>
            </svg>
            <svg
              v-if="!webbcommunityDropdown"
              class="inline"
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
        </a>
        <!-- dropdown items start -->
        <div
          class="bg-custom-lightgreen p-4 border border-gray-300 mt-3"
          v-if="webbcommunityDropdown"
        >
          <ul>
            <li class="hover:text-custom-darkblue py-2">
              <router-link to="events">
                events
              </router-link>
            </li>
            <li class="hover:text-custom-darkblue py-2">
              <router-link to="hackneycouncil">
                hackney concil
              </router-link>
            </li>
            <li class="hover:text-custom-darkblue py-2">
              <router-link to="reports">reports</router-link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a href="#" class="py-4 hover:text-custom-darkblue block"
          >notifications</a
        >
      </li>
    </ul>
    <ul class=" w-full px-5 pt-2">
      <li>
        <a href="#" class="py-4 hover:text-custom-darkblue block">settings</a>
      </li>
      <li class="py-4">
        <a href="#" class="hover:text-custom-darkblue block">logout</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      mobileMenu: true,
      bookingsDropdown: false,
      webbcommunityDropdown: false,
    };
  },
};
</script>
