<template>
  <div
    class="col-span-12 md:col-span-11 md:hidden transition-all duration-500 "
  >
    <ul class="text-left">
      <li class="block  hover:text-custom-purple border-b border-gray-200">
        <a class="p-2 inline-block" href="#">what's happning?</a>
      </li>
      <li class="block  hover:text-custom-purple border-b border-gray-200">
        <a href="#" class="p-2 inline-block">webb Community</a>
      </li>
      <!-- drop down menu start -->
      <li class="block relative group border-b border-gray-200">
        <a href="#" class="hover:text-custom-purple p-2 inline-block">
          bookings <i class="ri-arrow-down-s-line text-center"></i>
        </a>
        <!-- dropdown items start -->
        <span
          class="z-50 text-sm absolute w-44 h-48 hidden group-hover:block rounded bg-white shadow-inner inset-0 top-10 text-left p-5 "
        >
          <ul>
            <li class="mb-4">
              <a href="#" class="hover:text-custom-purple">dropdown item 1</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:text-custom-purple">dropdown item 2</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:text-custom-purple">dropdown item 3</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:text-custom-purple">dropdown item 4</a>
            </li>
          </ul>
        </span>
        <!-- dropdown items end -->
      </li>
      <!-- dropdown menu end -->
    </ul>
  </div>
</template>
<script>
export default {};
</script>
