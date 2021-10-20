<template>
  <div class="bg-custom-lightgreen p-5 lg:p-40 mb-16">
    <!-- news letter title  -->
    <h1
      class="text-custom-darkblue text-center text-3xl md:text-6xl font-semibold capitalize mb-14"
    >
      subscribe NewsLetter
    </h1>
    <div class="grid justify-self-center justify-items-center ">
      <!-- input field for email -->
      <input
        class="w-80 md:w-96 h-14 p-5  border-custom-lightblue border border-opacity-20 mb-8"
        type="text"
        placeholder="Your Email Goes Here"
      />
      <!-- subscribe button  -->

      <BtnLg text="sign me up" />
    </div>
  </div>
</template>
<script>
import BtnLg from "../../../../global-components/BtnLg";
export default {
  components: {
    BtnLg,
  },
};
</script>
<style></style>
