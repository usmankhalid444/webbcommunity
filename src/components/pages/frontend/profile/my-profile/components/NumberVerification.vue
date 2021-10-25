<template>
  <FrontendMain :darkHeder="false">
    <div
      class="bg-custom-lightgreen  grid  justify-items-center md:p-0 p-5 w-full md:py-20"
    >
      <div class="  text-custom-darkblue mt-10">
        <h1 class="text-center font-semibold text-34px ">Enter OTP Code</h1>
        <div class="text-center text-custom-lightblue md:text-lg  my-5">
          <p class="py-2">
            You have received a 4 Digit Code at ++44 700 900077.
          </p>
          <p>Please enter the code below to verify your Contact Number.</p>
        </div>
        <!-- otp code fields -->
        <div class="md:px-11 mx-auto text-center py-5">
          <input
            type="text"
            maxlength="1"
            class="border col-span-3 h-16 border-custom-lightgray w-14 mx-3 text-center text-3xl font-semibold text-custom-lightblue"
          />
          <input
            maxlength="1"
            type="text"
            class="border col-span-3 h-16 border-custom-lightgray w-14 mx-3 text-center text-3xl font-semibold text-custom-lightblue"
          />
          <input
            maxlength="1"
            type="text"
            class="border col-span-3 h-16 border-custom-lightgray w-14 mx-3 text-center text-3xl font-semibold text-custom-lightblue"
          />
          <input
            maxlength="1"
            type="text"
            class="border col-span-3 h-16 border-custom-lightgray w-14 mx-3 text-center text-3xl font-semibold text-custom-lightblue"
          />
        </div>
        <!-- not receave resend section -->
        <div class="md:text-lg text-center text-custom-darkblue">
          <p class="inline">Not received?</p>
          <a href="#" class="underline hover:text-custom-purple mx-3">Resend</a>
        </div>
        <router-link to="verified"
          ><button
            class="bg-custom-purple hover:bg-custom-lightblue font-semibold text-white w-full h-16 my-12"
          >
            VERIFY NUMBER
          </button></router-link
        >
      </div>
    </div>
  </FrontendMain>
</template>
<script>
export default {
  components: {},
};
</script>
<style></style>
