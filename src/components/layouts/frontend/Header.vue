<template>
  <header
    class="grid grid-cols-12 gap-4   font-semibold py-2  px-4  lg:px-16  capitalize relative md:sticky md:top-0 z-50 "
    :class="
      darkHeader
        ? 'text-white bg-custom-darkblue'
        : 'bg-white text-custom-darkblue'
    "
  >
    <!-- logo start -->
    <div class="col-span-12 md:col-span-1 text-2xl my-auto">
      <!-- <a href="../../pages/frontend/home/HomePage.vue">Webb.</a> -->
      <router-link to="/">Webb.</router-link>
    </div>
    <!-- desktop menu start -->
    <div class="col-span-12 md:col-span-11 hidden md:block ">
      <ul class="text-right">
        <li class="inline  hover:text-custom-purple">
          <a class="p-1 md:p-5 inline-block" href="#">what's happning?</a>
        </li>
        <li class="inline  hover:text-custom-purple">
          <router-link to="webbcommunity" class="p-1 md:p-5 inline-block"
            >webb Community</router-link
          >
        </li>
        <!-- drop down menu start -->
        <li class="inline    relative group">
          <a href="#" class="hover:text-custom-purple p-5 inline-block">
            bookings
            <svg
              class="inline"
              :class="
                darkHeader
                  ? 'fill-current text-white'
                  : 'fill-current text-custom-darkblue'
              "
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
          </a>
          <!-- dropdown items start -->
          <span
            class="z-50 text-sm absolute w-44 h-48 hidden group-hover:block rounded bg-white shadow-inner inset-0 top-10 text-left p-5 "
          >
            <ul>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:text-custom-purple text-custom-lightblue"
                  >dropdown item 1</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:text-custom-purple text-custom-lightblue"
                  >dropdown item 2</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:text-custom-purple text-custom-lightblue"
                  >dropdown item 3</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:text-custom-purple text-custom-lightblue"
                  >dropdown item 4</a
                >
              </li>
            </ul>
          </span>
          <!-- dropdown items end -->
        </li>
        <!-- dropdown menu end -->
        <li class="inline relative hover:text-custom-purple tex-5xl p-1 md:p-5">
          <!-- bell icon svg -->
          <svg
            class="inline"
            :class="
              darkHeader
                ? 'fill-current text-white'
                : 'fill-current text-custom-darkblue'
            "
            id="notifications_icon_white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              id="Path_131"
              data-name="Path 131"
              d="M0,0H24V24H0Z"
              fill="none"
            />
            <path
              id="Path_132"
              data-name="Path 132"
              d="M12,22a2.006,2.006,0,0,0,2-2H10A2.006,2.006,0,0,0,12,22Zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4a1.5,1.5,0,0,0-3,0v.68C7.64,5.36,6,7.92,6,11v5L4,18v1H20V18Zm-2,1H8V11c0-2.48,1.51-4.5,4-4.5s4,2.02,4,4.5Z"
            />
          </svg>
          <span
            class="w-2 h-2 bg-green-400 absolute rounded-full top-4 left-9"
          ></span>

          <!-- <i class="ri-notification-line relative">
          </i> -->
        </li>
        <li class="inline p-1 md:p-5 hover:text-custom-purple">
          <router-link
            to="/login"
            class="text-white px-6 py-2 rounded border border-custom-darkblue"
            :class="
              darkHeader
                ? 'bg-custom-purple hover:bg-custom-darkblue hover:border-white'
                : 'bg-custom-darkblue hover:bg-custom-purple hover:border-custom-purple'
            "
            >Sign In</router-link
          >
          <!-- below buttom will be visible when user is loged in -->
          <router-link to="/myprofile" class="px-6">
            <img
              class="inline w-11 h-11 rounded-full outline-solid"
              src="/assets/user.png"
              alt="user"
            />
          </router-link>
        </li>
      </ul>
    </div>
    <!-- mobile menu start -->
    <MobileMenu v-if="isToggle" />
    <!-- navlinks items end -->

    <i
      class="ri-menu-line text-right col-span-12 p-2.5 top-0 right-0 text-2xl absolute block md:hidden"
      @click="isToggle = !isToggle"
    ></i>
    <router-view />
  </header>
</template>
<script>
import MobileMenu from "./MobileMenu";
export default {
  props: ["darkHeader"],
  components: {
    MobileMenu,
  },
  data() {
    return {
      isToggle: false,
    };
  },
};
</script>
