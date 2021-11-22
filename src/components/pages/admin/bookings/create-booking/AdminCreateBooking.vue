<template>
  <div>
    <AdminProfileLayout>
      <!-- intro -->
      <div class="w-full relative mb-14">
        <router-link to="adminmanagebookings">
          <span class="absolute right-0 md:right-auto md:-left-14 text-3xl"
            ><i class="ri-arrow-left-line p-3"></i
          ></span>
        </router-link>
        <h1 class="font-semibold text-4xl text-custom-darkblue">
          New Booking
        </h1>
      </div>
      <!--intro end  -->
      <div
        class="grid grid-cols-12 text-custom-darkblue gap-x-4 md:gap-x-12 md:pb-10"
      >
        <div class="col-span-12 md:col-span-6 relative mb-5">
          <p class="font-semibold">Booking Type</p>
          <select
            class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8 appearance-none"
          >
            <option value="Children Activities">Children Activities</option>
            <option value="Wedding Ceremony">Wedding Ceremony</option>
            <option value="General Meeting">General Meeting</option>
            <option value="Birthday Party">Birthday Party</option>
            <option value="Coders Meetup">Coders Meetup</option>
          </select>
          <span class="absolute top-14 right-5">
            <svg
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
                fill="#000539"
              />
            </svg>
          </span>
        </div>
        <div class="col-span-12 md:col-span-6 relative mb-5">
          <p class="font-semibold ">Event Status</p>
          <select
            class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8 appearance-none"
          >
            <option value="Private">Private</option>
            <option value="Public">Public</option>
          </select>
          <span class="absolute top-14 right-5">
            <svg
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
                fill="#000539"
              />
            </svg>
          </span>
        </div>
        <div class="col-span-12 md:col-span-6 mb-5">
          <p class="font-semibold">
            How many adults are invited?
          </p>
          <input
            class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8"
            type="text"
            placeholder="No. of Adults"
          />
        </div>
        <div class="col-span-12 md:col-span-6 mb-5">
          <p class="font-semibold">
            How many kids are invited?
          </p>
          <input
            class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8"
            type="text"
            placeholder="No. of Kids"
          />
        </div>
        <div class="col-span-12 md:col-span-6 mb-5 relative">
          <p class="font-semibold">Recurring Event</p>
          <select
            @change="bookingDuration($event)"
            class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8 appearance-none"
          >
            <option value="1 Day Event">1 Day Event</option>
            <option value="1 Day Plus">1 Day Plus Event</option>
            <option value="Repeat Weekly">Repeat Weekly</option>
            <option value="Repeat Monthly">Repeat Monthly</option>
          </select>
          <span class="absolute top-14 right-5 pointer-events-none">
            <svg
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
                fill="#000539"
              />
            </svg>
          </span>
        </div>
        <div
          v-if="recurringEvent == 'weekly'"
          class="col-span-12 md:col-span-6 mb-5"
        >
          <RepeatWeekly v-if="recurringEvent == 'weekly'" />
        </div>
        <div class="col-span-12 mb-5" v-if="recurringEvent == 'monthly'">
          <RepeatMonthly v-if="recurringEvent == 'monthly'" />
        </div>
        <div
          class="col-span-12 md:col-span-6 relative mb-5"
          v-if="recurringEvent == 'monthly'"
        >
          <p class="font-semibold">How many days a month?</p>
          <select
            class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8 appearance-none"
          >
            <option value="1 Day a Month">1 Day a Month</option>
            <option value="2 Day a Month">2 Day a Month</option>
            <option value="3 Day a Month">3 Day a Month</option>
          </select>
          <span class="absolute top-14 right-5">
            <svg
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
                fill="#000539"
              />
            </svg>
          </span>
        </div>
        <div class="col-span-12 md:col-span-6 mb-5">
          <p class="font-semibold">Date and Time</p>
          <Datepicker
            v-model="end_date"
            :is24="false"
            format="dd MMM yyyy, hh:mm a"
            inputClassName="pl-12 py-4 my-4 border border-custom-lightgray rounded-none"
          >
            <template #input-icon>
              <svg
                class="calender-icon fill-current text-custom-darkblue ml-5"
                id="calendar_icon"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_119"
                  data-name="Path 119"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <path
                  id="Path_120"
                  data-name="Path 120"
                  d="M20,3H19V1H17V3H7V1H5V3H4A2.006,2.006,0,0,0,2,5V21a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,20,3Zm0,18H4V10H20ZM20,8H4V5H20Z"
                />
              </svg>
            </template>
          </Datepicker>
        </div>
        <div
          class="col-span-12 md:col-span-6 mb-5"
          v-if="recurringEvent == 'weekly'"
        ></div>
        <div class="col-span-12 md:col-span-6 mb-5 mt-3">
          <router-link to="calender-oneday">
            <button
              class="bg-custom-purple hover:bg-custom-lightblue font-semibold text-white w-full h-14"
            >
              CONFIRM BOOKING
            </button>
          </router-link>
        </div>
      </div>
    </AdminProfileLayout>
  </div>
</template>
<script>
import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";
import RepeatWeekly from "./components/RepeatWeekly";
import RepeatMonthly from "./components/RepeatMonthly";
export default {
  data() {
    return {
      start_date: null,
      end_date: null,
      recurringEvent: "",
    };
  },
  components: {
    RepeatWeekly,
    RepeatMonthly,
    Datepicker,
  },
  methods: {
    bookingDuration(event) {
      if (event.target.value == "Repeat Weekly") {
        return (this.recurringEvent = "weekly");
      } else if (event.target.value == "Repeat Monthly") {
        return (this.recurringEvent = "monthly");
      } else {
        return (this.recurringEvent = "");
      }
    },
  },
};
</script>
<style></style>
