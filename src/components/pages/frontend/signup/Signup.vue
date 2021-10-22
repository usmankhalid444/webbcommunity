<template>
  <Header headerClasses="text-white bg-custom-darkblue" />
  <div
    class="bg-custom-lightgreen md:fixed grid md:h-screen justify-items-center md:p-0 p-5 w-full"
  >
    <div class="w-full md:w-563px  text-custom-darkblue md:mt-10">
      <!-- heading -->
      <h1 class="text-center font-semibold text-34px ">Sign up</h1>
      <!-- name -->
      <input
        type="text"
        placeholder="Name"
        class="block h-16 border border-custom-lightgray w-full px-5 placeholder-custom-lightgray my-8 font-semibold"
      />
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
          class="block h-16 border border-custom-lightgray w-full px-5  placeholder-custom-lightgray my-8 font-semibold"
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
      <div class="font-semibold my-8">
        <input
          type="checkbox"
          class="mr-3 ml-1 transform scale-125 cursor-pointer"
        />
        <!-- resedent or not check -->
        <p class="inline">
          I’m the resident of Webb Estate Community
        </p>
        <i class="ri-question-line float-right text-xl align-middle"></i>
      </div>
      <div
        class="font-semibold my-8 bg-white py-6 border border-custom-lightgray relative px-5"
      >
        <input type="checkbox" class="mr-3 ml-1 h-8 w-8 cursor-pointer" />
        <p class="inline absolute top-8">I’m not a robot</p>
        <i class="ri-question-line float-right text-xl align-middle"></i>
      </div>
      <!-- register account button -->
      <router-link to="verification"
        ><button
          class="bg-custom-btnblue hover:bg-custom-lightblue font-semibold text-white w-full h-16 mb-8"
        >
          REGISTER ACCOUNT
        </button></router-link
      >

      <!-- if already have account then login -->
      <div class="font-semibold text-center mb-8">
        <p class="inline">
          Already have an account?
        </p>
        <router-link class="hover:text-custom-btnblue underline pl-1" to="login"
          >Login
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
