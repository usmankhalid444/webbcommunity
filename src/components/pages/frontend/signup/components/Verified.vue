<template>
  <FrontendMain :darkHeder="false">
    <div
      class="bg-custom-lightgreen  grid md:py-40 justify-items-center md:p-0 p-5 w-full"
    >
      <div class="md:w-563px  text-custom-darkblue text-center">
        <i
          class="ri-check-double-line text-5xl rounded-full border-2 hover:text-custom-darkblue p-1 text-custom-purple"
        ></i>
        <p class="font-semibold text-34px my-5">Email Verified</p>
        <router-link to="login"
          ><button
            class="bg-custom-purple hover:bg-custom-lightblue font-semibold text-white w-full h-16 my-10"
          >
            CONTINUE
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
