<template>
  <div>
    <FrontendMain :darkHeder="false">
      <div
        class="bg-custom-lightgreen grid justify-items-center md:p-0 p-5 w-full"
      >
        <div class="w-full md:w-563px  text-custom-darkblue md:mt-10">
          <!-- heading -->
          <h1 class="text-center font-semibold text-34px">
            Sign up
          </h1>
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
              class="mr-3 ml-1 transform scale-125 cursor-pointer focus:ring-0 focus:shadow-none ring-offset-0 text-custom-darkblue"
            />
            <!-- resedent or not check -->
            <p class="inline">
              I’m the resident of Webb Estate Community
            </p>
            <i
              class="ri-question-line float-right text-xl align-middle relative group"
            >
              <span
                class="absolute right-0 md:left-0 bottom-8 bg-white p-3 rounded-2xl w-48 text-custom-lightgray hidden group-hover:block"
                >Select if you are resedent</span
              >
            </i>
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
              class="bg-custom-purple hover:bg-custom-lightblue font-semibold text-white w-full h-16 mb-8"
            >
              REGISTER ACCOUNT
            </button></router-link
          >

          <!-- if already have account then login -->
          <div class="font-semibold text-center mb-8">
            <p class="inline">
              Already have an account?
            </p>
            <router-link
              class="hover:text-custom-purple underline pl-1"
              to="login"
              >Login
            </router-link>
          </div>
        </div>
      </div>
    </FrontendMain>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      showpassword: false,
    };
  },
};
</script>
