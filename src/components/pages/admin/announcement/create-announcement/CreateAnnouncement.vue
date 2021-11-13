<template>
  <div>
    <UserProfileLayout>
      <!-- intro -->
      <div class="w-full relative mb-14">
        <router-link to="announcements">
          <span class="absolute right-0 md:right-auto md:-left-14 text-3xl"
            ><i class="ri-arrow-left-line p-3"></i
          ></span>
        </router-link>
        <h1 class="font-semibold text-4xl text-custom-darkblue">
          New Announcement
        </h1>
      </div>
      <!--intro end  -->
      <div
        class="grid grid-cols-12 text-custom-darkblue gap-x-4 md:gap-x-12 md:pb-10"
      >
        <div class="col-span-12 mb-5 md:w-5/6 xl:w-3/6 w-full">
          <p class="font-semibold text-custom-lightblue">Subject</p>
          <input
            class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8"
            type="text"
            value="Hall Booking Prices have been revised!"
          />
        </div>
        <div class="col-span-12 w-full md:w-5/6 xl:w-3/6 mb-5">
          <p class="font-semibold text-custom-lightblue">
            Brief
          </p>
          <textarea
            class="w-full border-custom-lightgray border  my-4 font-semibold px-8 py-6"
            rows="6"
            placeholder="Write your announcement here"
          ></textarea>
        </div>
        <div class="col-span-12 md:col-span-6 mb-5">
          <button
            @click="showModal"
            class="bg-custom-purple hover:bg-custom-lightblue font-semibold text-white w-full h-14"
          >
            SELECT USERS
          </button>
        </div>
      </div>
      <ModalsContainer />
    </UserProfileLayout>
  </div>
</template>

<script>
import SelectUsersModal from "./components/SelectUsersModal";
import { $vfm, ModalsContainer } from "vue-final-modal";
export default {
  components: { ModalsContainer },
  data() {
    return {
      showmodal: false,
    };
  },
  methods: {
    showModal() {
      $vfm.show({
        component: SelectUsersModal,
      });
    },
  },
};
</script>
