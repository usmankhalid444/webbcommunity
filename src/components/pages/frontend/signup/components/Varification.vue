<template>
  <Header headerClasses="text-white bg-custom-darkblue" />
  <div
    class="bg-custom-lightgreen md:fixed grid h-screen justify-items-center md:p-0 p-5 w-full"
  >
    <div class="  text-custom-darkblue mt-10">
      <h1 class="text-center font-semibold text-34px ">Enter OTP Code</h1>
      <div class="text-center text-custom-lightblue md:text-lg  my-5">
        <p class="py-2">
          You have received a 4 Digit Code at john_doe@gmail.com.
        </p>
        <p>Please enter the code below to verify your email.</p>
      </div>
      <!-- otp code fields -->
      <div class="md:px-11 mx-auto text-center w-563px py-10">
        <input
          type="text"
          class="border col-span-3 h-16 border-custom-lightgray w-14 mx-3 text-center text-3xl font-semibold text-custom-lightblue"
        />
        <input
          type="text"
          class="border col-span-3 h-16 border-custom-lightgray w-14 mx-3 text-center text-3xl font-semibold text-custom-lightblue"
        />
        <input
          type="text"
          class="border col-span-3 h-16 border-custom-lightgray w-14 mx-3 text-center text-3xl font-semibold text-custom-lightblue"
        />
        <input
          type="text"
          class="border col-span-3 h-16 border-custom-lightgray w-14 mx-3 text-center text-3xl font-semibold text-custom-lightblue"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../../../layouts/frontend/Header";
export default {
  components: {
    Header,
  },
};
</script>
<style></style>
