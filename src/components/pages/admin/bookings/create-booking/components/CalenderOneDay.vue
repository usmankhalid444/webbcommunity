<template>
  <Header />
  <div
    class="grid grid-cols-12 p-2 md:p-8 gap-x-4 md:gap-x-8 text-custom-darkblue mx-auto xl:max-w-7xl mt-10"
  >
    <!-- calender section -->
    <div class="col-span-12 md:col-span-7 xl:col-span-9">
      <FullCalendar ref="one_day_calander" :options="calendarOptions" />
    </div>
    <!-- sidebar section -->
    <div
      class="col-span-12 md:col-span-5 xl:col-span-3 border text-center py-8 px-5 md:mt-16 mt-5"
    >
      <div
        class="mb-4 relative"
        @click="checkAllDayAvailable() === 0 ? selectAll() : ''"
      >
        <button
          class="border border-custom-lightgray w-full py-3 px-5  font-semibold text-left"
          :class="checkAllDayAvailable() > 0 ? 'opacity-50' : ''"
        >
          All Days
        </button>
        <span
          v-if="
            selectedTimes.length === times.length &&
              checkAllDayAvailable() === 0
          "
          class="absolute right-4 top-3"
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
        <span class="absolute right-4 top-3">
          <svg
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
        <router-link to="calender-oneday-plus">
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
import Header from "../../../../../layouts/admin/AdminHeader.vue";
import "@fullcalendar/core/vdom";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
export default {
  components: {
    FullCalendar,
    Header,
  },
  data() {
    return {
      //selected_date: "2021-11-15",
      new_event: {
        title: "New event",
        start: "2021-11-15",
        end: "2021-11-15",
        time_slots: ["10:00 AM"],
      },
      selectedTimes: [],
      booking_events: [
        {
          title: "Wedding event",
          start: "2021-11-15",
          end: "2021-11-15",
          time_slots: ["10:00 AM", "12:00 PM"],
        },
        {
          title: "Birthday event",
          start: "2021-11-15",
          end: "2021-11-15",
          time_slots: ["10:00 AM"],
        },
        {
          title: "Test event",
          start: "2021-11-18",
          end: "2021-11-18",
          time_slots: ["01:00 PM"],
        },
      ],
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        dateClick: this.handleDateClick,
        selectable: true,
        events: [],
      },
      times: [
        { title: "10:00 AM", available: true },
        { title: "11:00 AM", available: true },
        { title: "12:00 AM", available: true },
        { title: "01:00 PM", available: true },
        { title: "02:00 PM ", available: true },
        { title: "03:00 PM ", available: true },
        { title: "04:00 PM ", available: true },
      ],
    };
  },
  created() {
    this.calendarOptions.events = this.booking_events;
    this.disableNotAvailableSlots();
    //console.log(this.checkAllDayAvailable());
  },
  methods: {
    handleDateClick: function(arg) {
      this.new_event.start = arg.dateStr;
      this.disableNotAvailableSlots();
      //console.log(this.new_event.start);
    },
    disableNotAvailableSlots() {
      let temp_slots = [];
      this.booking_events.map((event) => {
        if (event.start === this.new_event.start) {
          temp_slots = [...new Set([...temp_slots, ...event.time_slots])];
          // temp_slots.concat(event.time_slots).unique();
        }
      });

      this.new_event.time_slots = temp_slots;
      console.log(this.new_event.time_slots);
    },
    checkAllDayAvailable() {
      return this.booking_events.filter((event) => {
        return event.start == this.new_event.start;
      }).length;
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
