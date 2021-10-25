<template>
  <div
    class="h-screen hidden md:block text-custom-lightblue capitalize font-semibold border-r border-gray-300 w-72  fixed"
  >
    <ul class="border-b border-gray-300 w-full px-10 py-5">
      <li>
        <a href="#" class="py-4 hover:text-custom-darkblue block"
          >my profile
        </a>
      </li>
      <li class=" relative">
        <!-- dropdown menu -->
        <a
          href="#"
          class="py-4 hover:text-custom-darkblue block"
          @click="bookingsDropdown = !bookingsDropdown"
          >bookings
          <span class="absolute right-0"
            ><i
              class="ri-arrow-down-s-line text-2xl"
              v-if="bookingsDropdown"
            ></i>
            <i class="ri-arrow-up-s-line text-2xl" v-if="!bookingsDropdown"></i>
          </span>
        </a>
        <!-- dropdown items start -->
        <div
          class="bg-custom-lightgreen p-4 border border-gray-300 mt-3"
          v-if="bookingsDropdown"
        >
          <ul>
            <li class="hover:text-custom-darkblue py-2">
              <a href="#">events</a>
            </li>
            <li class="hover:text-custom-darkblue py-2">
              <a href="#">hackney concil</a>
            </li>
            <li class="hover:text-custom-darkblue py-2">
              <a href="#">reports</a>
            </li>
          </ul>
        </div>
      </li>
      <li class=" relative">
        <!-- dropdown menu -->
        <a
          href="#"
          class="py-4 hover:text-custom-darkblue block"
          @click="webbcommunityDropdown = !webbcommunityDropdown"
          >Webb community
          <span class="absolute right-0"
            ><i
              class="ri-arrow-down-s-line text-2xl"
              v-if="webbcommunityDropdown"
            ></i>
            <i
              class="ri-arrow-up-s-line text-2xl"
              v-if="!webbcommunityDropdown"
            ></i
          ></span>
        </a>
        <!-- dropdown items start -->
        <div
          class="bg-custom-lightgreen p-4 border border-gray-300 mt-3"
          v-if="webbcommunityDropdown"
        >
          <ul>
            <li class="hover:text-custom-darkblue py-2">
              <a href="#">events</a>
            </li>
            <li class="hover:text-custom-darkblue py-2">
              <a href="#">hackney concil</a>
            </li>
            <li class="hover:text-custom-darkblue py-2">
              <a href="#">reports</a>
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
    <ul class=" w-full px-10 py-2">
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
  data() {
    return {
      bookingsDropdown: false,
      webbcommunityDropdown: false,
    };
  },
};
</script>
