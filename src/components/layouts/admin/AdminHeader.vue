<template>
  <header
    class="grid grid-cols-12 gap-4 text-white bg-custom-darkblue font-semibold py-2 md:py-4  px-4  lg:px-16  capitalize relative md:sticky md:top-0 z-50"
  >
    <!-- logo start -->
    <div class="col-span-1 text-2xl my-auto">
      <!-- <a href="../../pages/frontend/home/HomePage.vue">Webb.</a> -->
      <router-link to="/">Webb.</router-link>
    </div>
    <!-- desktop menu start -->
    <div class="col-span-11">
      <ul class="text-right">
        <router-link to="adminnotifications">
          <li
            class="inline relative hover:text-custom-purple tex-5xl p-1 md:p-5"
          >
            <!-- bell icon svg -->
            <svg
              class="inline fill-current text-white"
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
              class="w-2 h-2 bg-green-400 absolute rounded-full top-0 left-5 md:top-4 md:left-9"
            ></span>
          </li>
        </router-link>

        <li class="inline p-1 md:p-5">
          <router-link to="/myprofile" class="px-4">
            <img
              class="inline w-11 h-11 rounded-full outline-solid"
              src="/assets/user.png"
              alt="user"
            />
          </router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </header>
</template>
<script>
export default {};
</script>
