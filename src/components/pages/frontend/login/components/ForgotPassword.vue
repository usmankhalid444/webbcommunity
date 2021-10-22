<template>
  <Header headerClasses="text-white bg-custom-darkblue" />
  <div
    class="bg-custom-lightgreen md:fixed grid h-screen justify-items-center md:p-0 p-5 w-full "
  >
    <div class="md:w-563px  text-custom-darkblue mt-52">
      <!-- heading -->
      <h1 class="text-center font-semibold text-34px ">Forgot Password</h1>

      <!-- email -->
      <input
        type="text"
        placeholder="Email"
        class="block h-16 border border-custom-lightgray w-full px-5 placeholder-custom-lightgray my-10 font-semibold "
      />

      <!-- recovery link button -->
      <router-link to=""
        ><button
          class="bg-custom-btnblue hover:bg-custom-lightblue font-semibold text-white w-full h-16 mb-8"
        >
          GET RECOVERY LINK
        </button></router-link
      >
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
