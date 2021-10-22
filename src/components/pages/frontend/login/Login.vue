<template>
  <Header headerClasses="text-white bg-custom-darkblue" />
  <div
    class="bg-custom-lightgreen md:fixed grid h-screen justify-items-center md:p-0 p-5 w-full"
  >
    <div class="w-full md:w-563px  text-custom-darkblue md:mt-10">
      <!-- heading -->
      <h1 class="text-center font-semibold text-34px ">Login</h1>

      <!-- email -->
      <input
        type="text"
        placeholder="Email"
        class="block h-16 border border-custom-lightgray w-full px-5 placeholder-custom-lightgray my-8 font-semibold"
      />
      <!-- password -->
      <div class="relative">
        <input
          :type="showpassword ? 'text' : 'password'"
          placeholder="Password"
          class="block h-16 border border-custom-lightgray w-full px-5  placeholder-custom-lightgray my-5 font-semibold"
        />
        <i
          class="ri-eye-line text-xl absolute top-4 right-4 text-custom-lightgray cursor-pointer "
          @click="showpassword = !showpassword"
          v-if="showpassword"
        ></i>
        <i
          class="ri-eye-close-line text-xl absolute top-4 right-4 text-custom-lightgray cursor-pointer"
          @click="showpassword = !showpassword"
          v-if="!showpassword"
        ></i>
      </div>
      <div class="font-semibold pb-5">
        <router-link to="forgotpassword" class="underline float-right"
          >Forgot password?
        </router-link>
      </div>
      <div
        class="font-semibold my-8 bg-white py-6 border border-custom-lightgray relative px-5"
      >
        <input type="checkbox" class="mr-3 ml-1 h-8 w-8 cursor-pointer" />
        <p class="inline absolute top-8">I’m not a robot</p>
        <i class="ri-question-line float-right text-xl align-middle"></i>
      </div>
      <!-- register account button -->
      <router-link to=""
        ><button
          class="bg-custom-purple hover:bg-custom-lightblue font-semibold text-white w-full h-16 mb-8"
        >
          LOGIN ACCOUNT
        </button></router-link
      >

      <!-- if already have account then login -->
      <div class="font-semibold text-center mb-8">
        <p class="inline">
          Not a member yet?
        </p>
        <router-link class="hover:text-custom-purple underline pl-1" to="signup"
          >Sign up
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../../layouts/frontend/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      showpassword: false,
    };
  },
};
</script>
