<template>
  <div>
    <!-- title -->
    <div class="mb-8">
      <h2 class="text-34px font-semibold md:inline">Dashboard</h2>
      <a
        @click="$emit('tab')"
        class="text-custom-purple hover:text-custom-darkblue underline md:px-8 py-2 text-lg relative top-0 tracking-tight"
        href="#"
        >View Financial Stats</a
      >
    </div>
    <!--bookings tab -->
    <div class="mb-1">
      <h3 class="inline text-2xl font-semibold">Bookings</h3>
      <label for="toggleB" class="flex items-center cursor-pointer float-right"
        ><!-- label -->
        <div class="mr-3 text-lg tracking-tight" @click="showEvent">
          Vacation Mode
        </div>
        <!-- toggle -->
        <div class="relative">
          <!-- input -->
          <input type="checkbox" id="toggleB" class="sr-only" />
          <!-- line -->
          <div
            class="block border-2 border-black w-6 h-4 rounded-full bg"
          ></div>
          <!-- dot -->
          <div
            class="dot absolute left-1 top-1 bg-black w-2 h-2 rounded-full transition"
          ></div>
        </div>
      </label>
    </div>
    <div>
      <div class="relative inline text-custom-lightblue">
        <select
          class="font-semibold relative border-none bg-custom-lightgreen pl-0 focus:ring-transparent "
        >
          <option value="December, 2020">December, 2020</option>
          <option value="January, 2021">January, 2021</option>
        </select>
        <span class="absolute right-2 top-0 pointer-events-none"
          ><svg
            class="fill-current text-custom-lightblue"
            id="arrow_down_icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              id="Path_117"
              data-name="Path 117"
              d="M0,0H24V24H0Z"
              fill="none"
            />
            <path
              id="Path_118"
              data-name="Path 118"
              d="M7.41,8.59,12,13.17l4.59-4.58L18,10l-6,6L6,10Z"
            />
          </svg>
        </span>
      </div>
      <div
        class="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-7 gap-y-4 mt-2"
      >
        <div
          class="bg-white p-5 xl:px-6 xl:py-7 border border-gray-300 hover:border-custom-purple hover:shadow"
        >
          <h3 class="text-34px font-semibold">
            {{ bookings.total_bookings }}
          </h3>
          <p class="text-custom-lightblue font-semibold">
            Total Bookings
          </p>
        </div>
        <div
          class="bg-white p-5 xl:px-6 xl:py-7 border border-gray-300 hover:border-custom-purple hover:shadow"
        >
          <h3 class="text-34px font-semibold">
            {{ bookings.upcomming_bookings }}
          </h3>
          <p class="text-custom-lightblue font-semibold">
            Upcoming Bookings
          </p>
        </div>
        <div
          class="bg-white p-5 xl:px-6 xl:py-7 border border-gray-300 hover:border-custom-purple hover:shadow"
        >
          <h3 class="text-34px font-semibold">
            {{ bookings.declined_bookings }}
          </h3>
          <p class="text-custom-lightblue font-semibold">
            Declined Bookings
          </p>
        </div>
      </div>
    </div>
    <!-- bookings tab end -->
    <!-- community tab -->
    <div class="mt-12"></div>
    <h3 class="inline text-2xl font-semibold">Community</h3>
    <div>
      <div class="relative inline text-custom-lightblue">
        <select
          class="font-semibold relative border-none bg-custom-lightgreen pl-0 focus:ring-transparent "
        >
          <option value="December, 2020">December, 2020</option>
          <option value="January, 2021">January, 2021</option>
        </select>
        <span class="absolute right-2 top-0 pointer-events-none"
          ><svg
            class="fill-current text-custom-lightblue"
            id="arrow_down_icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              id="Path_117"
              data-name="Path 117"
              d="M0,0H24V24H0Z"
              fill="none"
            />
            <path
              id="Path_118"
              data-name="Path 118"
              d="M7.41,8.59,12,13.17l4.59-4.58L18,10l-6,6L6,10Z"
            />
          </svg>
        </span>
      </div>
      <div
        class="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-7 gap-y-4 mt-2 border-b-2 pb-10"
      >
        <div
          class="bg-white p-5 xl:p-6 border border-gray-300 hover:border-custom-purple hover:shadow "
        >
          <h3 class="text-34px font-semibold">
            {{ community.hackney_enquires }}
          </h3>
          <p class="text-custom-lightblue font-semibold">
            Hackney Enquiries
          </p>
        </div>
        <div
          class="bg-white p-5 xl:p-6 border border-gray-300 hover:border-custom-purple hover:shadow "
        >
          <h3 class="text-34px font-semibold">
            {{ community.complaints }}
          </h3>
          <p class="text-custom-lightblue font-semibold">
            Complaints
          </p>
        </div>
        <div
          class="bg-white p-5 xl:p-6 border border-gray-300 hover:border-custom-purple hover:shadow "
        >
          <h3 class="text-34px font-semibold">
            {{ community.events_published }}
          </h3>
          <p class="text-custom-lightblue font-semibold">
            Events Published
          </p>
        </div>
      </div>
    </div>
    <!-- community tab end -->
    <div class="my-12">
      <p class="md:inline pr-5 font-semibold my-4 md:my-0">
        Residential Documents Verification
      </p>
      <p class="inline px-5 py-1 rounded-full bg-custom-darkblue text-white">
        2 Awaiting
      </p>
      <a
        class="float-right underline text-custom-purple hover:text-custom-darkblue font-semibold"
        href="#"
        >Review Documents</a
      >
    </div>
    <VacationModeModal v-model="showmodal" />
  </div>
</template>
<script>
import VacationModeModal from "./VacationModeModal";
import { $vfm } from "vue-final-modal";

export default {
  components: {
    VacationModeModal,
  },
  data() {
    return {
      showmodal: false,
      bookings: {
        total_bookings: 27,
        upcomming_bookings: 18,
        declined_bookings: 10,
      },
      community: { hackney_enquires: 34, complaints: 25, events_published: 13 },
    };
  },
  methods: {
    showEvent() {
      $vfm.show("vacationModeModal");
    },
  },
};
</script>
<style scoped>
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: white;
}
input:checked ~ .bg {
  background-color: black;
}
</style>
