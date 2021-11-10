<template>
  <div
    class="grid grid-cols-12 p-2 md:p-8 gap-x-4 md:gap-x-8 text-custom-darkblue mx-auto xl:max-w-7xl mt-10"
  >
    <!-- calender section -->

    <div class="col-span-12 md:col-span-7 xl:col-span-9">
      <FullCalendar :options="calendarOptions" />
    </div>
    <!-- sidebar section -->
    <div
      class="col-span-12 md:col-span-5 xl:col-span-3 border text-center py-8 px-5 md:mt-16 mt-5"
    >
      <label class="float-left cursor-pointer relative mb-1.5">
        <span
          ><input
            class="absolute top-0.5 h-5 w-5 text-custom-darkblue focus:ring-0 focus:shadow-none cursor-pointer"
            type="checkbox"
        /></span>
        <p class="inline pl-8 font-semibold">Same Time all Day</p>
      </label>
      <br />
      <div class="relative">
        <select
          name="status"
          class="w-full border-custom-lightgray border font-semibold py-3 px-5 my-4"
        >
          <option value="21 Dec 2020">21 Dec 2020</option>
          <option value="22 Dec 2020">22 Dec 2020</option>
          <option value="23 Dec 2020">23 Dec 2020</option>
        </select>
        <span class="absolute right-5 top-9"
          ><svg
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
      <div class="mb-3 relative" @click="selectAll()">
        <button
          class="border border-custom-lightgray w-full py-3 px-5  font-semibold text-left"
        >
          All Days
        </button>
        <span class="absolute right-4 top-3"
          ><svg
            class="hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g id="uncheck_circle_icon" transform="translate(-19524 4739)">
              <path
                id="Path_3444"
                data-name="Path 3444"
                d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                transform="translate(19524 -4739)"
                fill="#00033c"
              />
              <rect
                id="Rectangle_2745"
                data-name="Rectangle 2745"
                width="24"
                height="24"
                transform="translate(19524 -4739)"
                fill="none"
              />
            </g>
          </svg>
          <svg
            id="check_circle_icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
        </span>
      </div>
      <div
        class="my-4 relative"
        v-for="(item, i) in times"
        :key="i"
        @click="addTime(item)"
      >
        <button
          class="border border-custom-lightgray w-full py-3 px-5  font-semibold text-left"
          :class="!item.available ? 'opacity-50' : ''"
        >
          {{ item.title }}
        </button>
        <span class="absolute right-4 top-3"
          ><svg
            :class="
              selectedTimes.includes(item.title)
                ? 'hidden'
                : 'block' && !item.available
                ? 'hidden'
                : ''
            "
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g id="uncheck_circle_icon" transform="translate(-19524 4739)">
              <path
                id="Path_3444"
                data-name="Path 3444"
                d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                transform="translate(19524 -4739)"
                fill="#00033c"
              />
              <rect
                id="Rectangle_2745"
                data-name="Rectangle 2745"
                width="24"
                height="24"
                transform="translate(19524 -4739)"
                fill="none"
              />
            </g>
          </svg>
          <svg
            :class="selectedTimes.includes(item.title) ? 'block' : 'hidden'"
            id="check_circle_icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
        </span>
      </div>
      <div class="relative  mt-1.5">
        <router-link to="calendermonthly">
          <button
            class="w-full h-14 bg-custom-purple hover:bg-custom-darkblue text-white font-semibold transition"
          >
            CONTINUE
          </button>
        </router-link>
      </div>
    </div>
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
        dateClick: this.handleDateClick,
        selectable: true,
        events: [
          { title: "event 1", date: "2019-04-01" },
          { title: "event 2", date: "2019-04-02" },
        ],
      },
      times: [
        { title: "10:00 AM - 11:00 AM", available: true },
        { title: "11:00 AM - 12:00 AM", available: false },
        { title: "12:00 AM - 01:00 PM", available: false },
        { title: "01:00 PM - 02:00 PM", available: true },
        { title: "02:00 PM - 03:00AM", available: true },
      ],
      selectedTimes: [],
    };
  },
  methods: {
    handleDateClick: function(arg) {
      alert("date click! " + arg.dateStr);
    },
    // adding time on click
    addTime(item) {
      if (!this.selectedTimes.includes(item.title)) {
        if (item.available) {
          this.selectedTimes.push(item.title);
        }
      } else {
        let itemIndex = this.selectedTimes.indexOf(item.title);
        this.selectedTimes.splice(itemIndex, 1);
      }
      console.log(this.selectedTimes);
    },
    // add all time
    selectAll() {
      this.selectedTimes = this.times.map((i) => {
        return i.title;
      });
    },
  },
};
</script>
<style></style>
