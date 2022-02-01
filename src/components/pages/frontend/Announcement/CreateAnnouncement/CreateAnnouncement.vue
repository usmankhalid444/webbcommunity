<template>
  <div>
      <!-- intro -->
      <div class="w-full relative mb-14">
        <Link href="/admin/announcements/all">
          <span class="absolute right-0 md:right-auto md:-left-14 text-3xl"
            ><i class="ri-arrow-left-line p-3"></i
          ></span>
        </Link>
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
            v-model="announcement_subject"
            class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8"
            type="text"
          />
        </div>
        <div class="col-span-12 w-full md:w-5/6 xl:w-3/6 mb-5">
          <p class="font-semibold text-custom-lightblue">
            Brief
          </p>
          <textarea
            class="w-full border-custom-lightgray border  my-4 font-semibold px-8 py-6"
            rows="6"
            v-model="announcement_brief"
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
  </div>
</template>

<script>
import  AdminProfileLayout  from "@la/ProfileLayout/AdminProfileLayout";
import SelectUsersModal from "./Components/SelectUsersModal";
import { $vfm, ModalsContainer } from "vue-final-modal";
export default {
  layout: AdminProfileLayout,
  props: [
    "users"
  ],
  components: { ModalsContainer },
  data() {
    return {
      announcement_subject: "",
      announcement_brief: "",
      showmodal: false,
      announcement_data: {}
    };
  },
  methods: {
    showModal() {
      this.announcement_data['subject'] = this.announcement_subject;
      this.announcement_data['brief'] = this.announcement_brief;
      $vfm.show({
        component: SelectUsersModal,
        bind: {
          users: this.users,
          announcement_data: this.announcement_data,
        },
      });
    },
  },
};
</script>
