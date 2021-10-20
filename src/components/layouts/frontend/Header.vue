<template>
  <header
    class="grid grid-cols-12 gap-4   font-semibold py-2  px-4  lg:px-16  capitalize relative md:sticky md:top-0 z-50 "
    :class="headerClasses ? headerClasses : 'bg-white text-custom-darkblue'"
  >
    <!-- logo start -->
    <div class="col-span-12 md:col-span-1 text-2xl my-auto">
      <p>Webb.</p>
    </div>
    <!-- desktop menu start -->
    <div class="col-span-12 md:col-span-11 hidden md:block ">
      <ul class="text-right">
        <li class="inline  hover:text-custom-btnblue">
          <a class="p-1 md:p-5 inline-block" href="#">what's happning?</a>
        </li>
        <li class="inline  hover:text-custom-btnblue">
          <a href="#" class="p-1 md:p-5 inline-block">webb Community</a>
        </li>
        <!-- drop down menu start -->
        <li class="inline    relative group">
          <a href="#" class="hover:text-custom-btnblue p-5 inline-block">
            bookings <i class="ri-arrow-down-s-line text-center"></i>
          </a>
          <!-- dropdown items start -->
          <span
            class="z-50 text-sm absolute w-44 h-48 hidden group-hover:block rounded bg-white shadow-inner inset-0 top-10 text-left p-5 "
          >
            <ul>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:text-custom-btnblue text-custom-lightblue"
                  >dropdown item 1</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:text-custom-btnblue text-custom-lightblue"
                  >dropdown item 2</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:text-custom-btnblue text-custom-lightblue"
                  >dropdown item 3</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:text-custom-btnblue text-custom-lightblue"
                  >dropdown item 4</a
                >
              </li>
            </ul>
          </span>
          <!-- dropdown items end -->
        </li>
        <!-- dropdown menu end -->
        <li class="inline  hover:text-custom-btnblue tex-5xl p-1 md:p-5">
          <i class="ri-notification-line relative">
            <span
              class="w-2 h-2 bg-green-400 absolute rounded-full md:right-0 bottom-4"
            ></span>
          </i>
        </li>
        <li class="inline p-1 md:p-5 hover:text-custom-btnblue">
          <img
            class="inline w-11 h-11 rounded-full outline-solid"
            src="/assets/user.png"
            alt="user"
          />
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
  </header>
</template>
<script>
import MobileMenu from "./MobileMenu";
export default {
  props: ["headerClasses"],
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
