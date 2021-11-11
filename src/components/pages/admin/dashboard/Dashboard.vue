<template>
  <div>
    <AdminProfileLayout>
      <div class="grid grid-cols-12 gap-x-5">
        <div class="col-span-12 md:col-span-10">
          <!-- title -->
          <div class="mb-8">
            <h2 class="text-34px font-semibold md:inline">Dashboard</h2>
            <a
              class="text-custom-purple underline md:px-8 py-2 text-lg relative top-0 tracking-tight"
              href="#"
              >View Financial Stats</a
            >
          </div>
          <!--bookings tab -->
          <div class="mb-1">
            <h3 class="inline text-2xl font-semibold">Bookings</h3>
            <label
              for="toggleB"
              class="flex items-center cursor-pointer float-right"
              ><!-- label -->
              <div class="mr-3 text-lg tracking-tight">
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
                v-for="(item, i) in bookings"
                :key="i"
                class="bg-white p-5 xl:px-6 xl:py-7 border border-gray-300 hover:border-custom-purple"
              >
                <h3 class="text-34px font-semibold">{{ item.count }}</h3>
                <p class="text-custom-lightblue font-semibold">
                  {{ item.type }}
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
                v-for="(item, i) in community"
                :key="i"
                class="bg-white p-5 xl:p-6 border border-gray-300 hover:border-custom-purple "
              >
                <h3 class="text-34px font-semibold">{{ item.count }}</h3>
                <p class="text-custom-lightblue font-semibold">
                  {{ item.type }}
                </p>
              </div>
            </div>
          </div>
          <!-- community tab end -->
          <div class="my-12">
            <p class="md:inline pr-5 font-semibold my-4 md:my-0">
              Residential Documents Verification
            </p>
            <p
              class="inline px-5 py-1 rounded-full bg-custom-darkblue text-white"
            >
              2 Awaiting
            </p>
            <a
              class="float-right underline text-custom-purple font-semibold"
              href="#"
              >Review Documents</a
            >
          </div>
        </div>
        <div
          class="col-span-1 bg-white text-custom-purple hidden md:block absolute h-screen -right-800p w-8/12"
        >
          <FullCalendar :options="calendarOptions" />
        </div>
      </div>
    </AdminProfileLayout>
  </div>
</template>
<script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
      },
      bookings: [
        { count: 56, type: "Total Bookings" },
        { count: 18, type: "Upcoming Bookings" },
        { count: 10, type: "Declined Bookings" },
      ],
      community: [
        { count: 34, type: "Hackney Enquires" },
        { count: 25, type: "Complaints" },
        { count: 13, type: "Events Published" },
      ],
    };
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
