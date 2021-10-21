<template>
  <div
    class="h-screen hidden md:block text-custom-lightblue capitalize font-semibold border-r border-gray-300 w-72  fixed"
  >
    <ul class="border-b border-gray-300 w-full px-10 py-5">
      <li class=" py-4">
        <a href="#" class="hover:text-custom-darkblue block">my profile </a>
      </li>
      <li class="py-4 relative">
        <a href="#" class="hover:text-custom-darkblue block"
          >bookings
          <span class="absolute right-0"
            ><i class="ri-arrow-down-s-line text-2xl"></i
          ></span>
        </a>
      </li>
      <li class="py-4 relative">
        <!-- dropdown menu -->
        <a href="#" class="hover:text-custom-darkblue block"
          >Webb community
          <span class="absolute right-0"
            ><i class="ri-arrow-up-s-line text-2xl"></i
          ></span>
          <!-- dropdown items start -->
          <div class="bg-custom-lightgreen p-4 border border-gray-300 mt-3">
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
        </a>
      </li>
      <li class="py-4">
        <a href="#" class="hover:text-custom-darkblue block">notifications</a>
      </li>
    </ul>
    <ul class=" w-full px-10 py-2">
      <li class="py-4">
        <a href="#" class="hover:text-custom-darkblue block">settings</a>
      </li>
      <li class="py-4">
        <a href="#" class="hover:text-custom-darkblue block">logout</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
