<template>
  <FrontendMain :darkHeder="false">
    <div
      class="bg-custom-lightgreen  grid md:py-40 justify-items-center md:p-0 p-5 w-full"
    >
      <div class="md:w-563px  text-custom-darkblue text-center">
        <svg
          class="block m-auto"
          id="check_circle_icon"
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
        >
          <path
            id="Path_121"
            data-name="Path 121"
            d="M0,0H24V24H0Z"
            fill="none"
          />
          <path
            id="Path_122"
            data-name="Path 122"
            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM10,17,5,12l1.41-1.41L10,14.17l7.59-7.59L19,8Z"
            fill="#00033c"
          />
        </svg>

        <!-- <i
          class="ri-check-double-line text-5xl rounded-full border-2 hover:text-custom-darkblue p-1 text-custom-purple"
        ></i> -->
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
