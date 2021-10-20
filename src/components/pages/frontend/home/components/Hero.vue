<template>
  <!-- main container -->
  <div
    class=" w-full text-white bg-hero-background bg-gray-500 bg-blend-multiply bg-cover px-4 py-10 md:py-48 md:px-28 lg:h-800p text-center md:text-left"
  >
    <!-- inner text -->
    <div class="w-full md:w-10/12">
      <h1 class="capitalize pb-11 font-semibold text-4xl md:text-8xl">
        webb estate hall
      </h1>
      <p class="text-lg md:text-2xl pb-11">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
        laboriosam eligendi ducimus assumenda quod, ad ex facere magnam dolorum
        voluptates, ipsa explicabo nesciunt.
      </p>
      <div class="text-center md:text-left">
        <BtnLg text="book hall" />
      </div>
      <!-- inner text end -->
    </div>
  </div>
  <!-- main container end -->
</template>
<script>
import BtnLg from "../../../../global-components/BtnLg";
export default {
  name: "hero",
  components: {
    BtnLg,
  },
};
</script>
<style></style>
