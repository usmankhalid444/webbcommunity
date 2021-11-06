<template>
  <div
    class="grid grid-cols-12 p-2 md:p-8 gap-x-4 md:gap-x-8 text-custom-darkblue mx-auto"
  >
    <div class="col-span-12 md:col-span-9">
      <FullCalendar :options="calendarOptions" />
    </div>
    <div
      class="col-span-12 md:col-span-3 border text-center py-8 px-5 md:mt-16 mt-5"
    >
      <div class="mb-4 relative" @click="selectAll()">
        <button
          class="border border-custom-lightgray w-full py-3 px-5 font-semibold text-left "
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
          class="border border-custom-lightgray w-full py-3 px-5 font-semibold text-left"
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
      <div class="relative  my-1.5">
        <button
          class="w-full h-14 bg-custom-purple hover:bg-custom-darkblue text-white font-semibold transition"
        >
          CONTINUE
        </button>
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
        { title: "12:00 AM - 01:00 PM", available: true },
        { title: "01:00 PM - 02:00 PM", available: false },
        { title: "02:00 PM - 03:00AM", available: true },
        { title: "03:00 PM - 04:00AM", available: true },
        { title: "04:00 PM - 05:00AM", available: true },
      ],
      selectedTimes: [],
    };
  },
  methods: {
    handleDateClick: function(arg) {
      console.log("date click! " + arg.dateStr);
    },
    // adding time on click
    addTime(item) {
      if (!this.selectedTimes.includes(item.title)) {
        if (item.available) {
          this.selectedTimes.push(item.title);
        }
      } else {
        let itemIndex = this.selectedTimes.indexOf(item);
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
