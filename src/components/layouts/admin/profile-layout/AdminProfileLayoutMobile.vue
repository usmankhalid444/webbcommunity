<template>
  <!-- profile layout for mobile -->
  <div class="p-3 bg-custom-lightgreen md:hidden " @click="close = !close">
    <svg
      class=" fill-current text-custom-lightblue"
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="25px"
      height="25px"
    >
      <path
        d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
      />
    </svg>
  </div>
  <div
    class="bg-white transition-all duration-1000 ease-in-out capitalize absolute top-0 left-0 font-semibold h-screen shadow-2xl text-custom-lightblue w-56 z-10 pt-16"
    :class="close ? 'shadow-none -left-56 ' : 'left-0'"
  >
    <div class="float-right border rounded-full mx-4  border-red-500">
      <svg
        class="bg-custom-lightgreen rounded-full fill-current text-red-400 "
        @click="close = !close"
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
        />
      </svg>
    </div>
    <!-- class="border-b border-gray-300 w-full px-5 mt-5" -->
    <ul class="border-b border-gray-300 w-full px-5 mt-5">
      <li v-for="(item, i) in menu" :key="i" class="relative">
        <!-- dropdown menu main title -->
        <router-link
          v-if="item.dropdown.length === 0"
          class="py-4 hover:text-custom-darkblue block group cursor-pointer"
          :to="item.link"
          >{{ item.title }}</router-link
        >
        <button
          v-if="item.dropdown.length > 0"
          @click="showDropdown('dropdown-' + i)"
          class="py-4 hover:text-custom-darkblue block group cursor-pointer font-semibold w-full text-left"
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
          v-if="item.dropdown.length > 0 && current_submenu === 'dropdown-' + i"
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
  props: ["menu"],
  components: {},
  data() {
    return {
      current_submenu: null,
      mobileMenu: true,
      close: true,
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
