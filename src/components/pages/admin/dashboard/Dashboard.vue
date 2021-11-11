<template>
  <div>
    <AdminProfileLayout>
      <div class="grid grid-cols-12 gap-x-5">
        <div class="col-span-12 md:col-span-10">
          <Activities @tab="showActivities = false" v-if="showActivities" />
          <FinancialStats v-else @tab="showActivities = true" />
        </div>
        <div
          class="col-span-1 bg-white text-custom-purple hidden  absolute h-screen -right-800p w-8/12"
        >
          <FullCalendar :options="calendarOptions" />
        </div>
      </div>
    </AdminProfileLayout>
  </div>
</template>
<script>
import Activities from "./components/Activities";
import FinancialStats from "./components/FinancialStats";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
export default {
  components: {
    FullCalendar,
    Activities,
    FinancialStats,
  },
  data() {
    return {
      showActivities: true,
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
      },
    };
  },
};
</script>
