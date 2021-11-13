<template>
  <div class="bg-custom-lightgreen min-h-screen">
    <AdminHeader />
    <AdminProfileLayoutMobile :menu="menu" />
    <div
      class="bg-white h-screen hidden md:block text-custom-lightblue capitalize font-semibold border-r border-gray-300 w-72  fixed"
    >
      <ul class="border-b border-gray-300 w-full px-10 py-5">
        <li v-for="(item, i) in menu" :key="i" class="relative">
          <!-- dropdown menu main title -->
          <router-link
            v-if="item.dropdown.length === 0"
            class="py-3 hover:text-custom-darkblue block group cursor-pointer"
            :to="item.link"
            >{{ item.title }}</router-link
          >
          <button
            v-if="item.dropdown.length > 0"
            @click="showDropdown('dropdown-' + i)"
            class="py-3 hover:text-custom-darkblue block group cursor-pointer font-semibold w-full text-left"
          >
            {{ item.title }}
            <span class="absolute right-0 top-4">
              <!-- svg arrow down -->
              <svg
                v-if="current_submenu !== 'dropdown-' + i"
                class="fill-current"
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
              <!-- svg arrow up -->
              <svg
                v-if="current_submenu === 'dropdown-' + i"
                class="fill-current"
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
            </span>
          </button>
          <!-- dropdown sub menu start -->
          <div
            v-if="
              item.dropdown.length > 0 && current_submenu === 'dropdown-' + i
            "
            class="bg-custom-lightgreen p-4 border border-gray-300 mt-3"
          >
            <ul>
              <li
                v-for="(child, j) in item.dropdown"
                :key="j"
                class="hover:text-custom-darkblue py-2"
              >
                <router-link :to="child.link">{{ child.title }}</router-link>
              </li>
            </ul>
            <!-- dropdown sub menu end -->
          </div>
        </li>
      </ul>
      <ul class=" w-full px-10 py-2">
        <li>
          <a href="#" class="py-4 hover:text-custom-darkblue block">settings</a>
        </li>
        <li class="py-4">
          <a href="#" class="hover:text-custom-darkblue block">logout</a>
        </li>
      </ul>
    </div>
    <!-- user profile content goes here -->
    <div class="p-3 md:p-12 w-full md:w-auto md:ml-72 text-custom-darkblue">
      <div class="2xl:w-1100p">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import AdminHeader from "../AdminHeader";
import AdminProfileLayoutMobile from "./AdminProfileLayoutMobile";
export default {
  components: {
    AdminHeader,
    AdminProfileLayoutMobile,
  },
  data() {
    return {
      current_submenu: null,
      menu: [
        {
          title: "Dashboard",
          link: "myprofile",
          dropdown: [],
        },
        {
          title: "Bookings",
          // link: "abcd",
          dropdown: [
            {
              title: "Create New",
              link: "createbooking",
            },
            {
              title: "Manage",
              link: "managebookings",
            },
          ],
        },
        {
          title: "Webb community",
          // link: "abcd",
          dropdown: [
            {
              title: "Events",
              link: "events",
            },
            {
              title: "Hackney Council",
              link: "hackneycouncil",
            },
            {
              title: "Reports",
              link: "reports",
            },
          ],
        },
        {
          title: "Hiring Prices",
          link: "notifications",
          dropdown: [],
        },
        {
          title: "System Updates",
          link: "notifications",
          dropdown: [],
        },
        {
          title: "Announcements",
          link: "announcements",
          dropdown: [],
        },
        {
          title: "Users",
          link: "users",
          dropdown: [],
        },
        {
          title: "Subscribers",
          link: "notifications",
          dropdown: [],
        },
        {
          title: "Notifications",
          link: "notifications",
          dropdown: [],
        },
      ],
    };
  },
  methods: {
    showDropdown(submenu) {
      if (this.current_submenu === submenu) {
        this.current_submenu = null;
      } else {
        this.current_submenu = submenu;
      }
    },
  },
};
</script>
