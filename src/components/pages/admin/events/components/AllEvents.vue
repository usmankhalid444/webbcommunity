<template>
  <div>
    <!-- table start -->
    <div class="h-72 md:h-96 mt-10 overflow-auto w-full">
      <table
        class="w-full md:leading-extra-loose overflow-scroll text-sm md:text-base"
      >
        <thead class="border-2 text-custom-lightgray">
          <tr class="text-left">
            <th class="px-5">Sr.</th>
            <th>Type</th>
            <th>
              Date
            </th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="text-custom-darkblue font-semibold ">
          <tr
            v-for="(event, i) in all_events"
            :key="i"
            class="border hover:border-2  hover:border-custom-lightgray group hover:bg-white"
          >
            <td class="px-5">{{ event.id }}</td>
            <td>
              {{ event.type }}
            </td>
            <td>{{ event.start_date }}</td>
            <td>{{ event.status }}</td>
            <td>
              <p
                @click="showModal(event)"
                class="text-custom-purple group-hover:visible invisible cursor-pointer"
              >
                view
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="w-full text-custom-darkblue font-semibold mt-10">
      <p class="inline">Total {{ all_events.length }}</p>
      <p class="float-right">
        Page <i class="ri-arrow-left-s-line align-middle text-xl"></i> 1 of 1
        <i class="ri-arrow-right-s-line align-middle text-xl"></i>
      </p>
    </div>
  </div>
  <ModalsContainer />
</template>
<script>
import EventsDetailModal from "./EventsDetailModal";
import { $vfm, ModalsContainer } from "vue-final-modal";
export default {
  components: { ModalsContainer },
  data() {
    return {
      showmodal: false,
      all_events: [
        {
          id: 1,
          type: "Birthday Party",
          start_date: "Dec 15, 2020",
          end_date: "Dec 16, 2020",
          guests_no: "80-100",
          start_time: "4:00 PM",
          end_time: "4:00 PM",
          location: "Webb Estate Hall",
          status: "Under Review",
          duration: "1 Day Event",
          cost: "45",
        },
        {
          id: 2,
          type: "Wedding Cermony",
          start_date: "Dec 17, 2020",
          end_date: "Dec 19, 2020",
          guests_no: "60-100",
          start_time: "6:00 PM",
          end_time: "6:00 PM",
          location: "Webb Community Hall",
          status: "Approved",
          duration: "4 Day Event",
          cost: "65",
        },
        {
          id: 3,
          type: "Birthday Party",
          start_date: "Dec 15, 2020",
          end_date: "Dec 16, 2020",
          guests_no: "80-100",
          start_time: "4:00 PM",
          end_time: "4:00 PM",
          location: "Webb Estate Hall",
          status: "Under Review",
          duration: "1 Day Event",
          cost: "45",
        },
        {
          id: 4,
          type: "Wedding Cermony",
          start_date: "Dec 17, 2020",
          end_date: "Dec 19, 2020",
          guests_no: "80-100",
          start_time: "6:00 PM",
          end_time: "6:00 PM",
          location: "Webb Community Hall",
          status: "Approved",
          duration: "4 Day Event",
          cost: "65",
        },
        {
          id: 5,
          type: "General Meeting",
          start_date: "Dec 15, 2020",
          end_date: "Dec 16, 2020",
          guests_no: "80-90",
          start_time: "4:00 PM",
          end_time: "4:00 PM",
          location: "Webb Estate Hall",
          status: "Under Review",
          duration: "1 Day Event",
          cost: "45",
        },
        {
          id: 6,
          type: "Celebration",
          start_date: "Dec 17, 2020",
          end_date: "Dec 19, 2020",
          guests_no: "80-100",
          start_time: "6:00 PM",
          end_time: "6:00 PM",
          location: "Webb Community Hall",
          status: "Approved",
          duration: "4 Day Event",
          cost: "65",
        },
        {
          id: 7,
          type: "General Meeting",
          start_date: "Dec 15, 2020",
          end_date: "Dec 16, 2020",
          guests_no: "80-100",
          start_time: "4:00 PM",
          end_time: "4:00 PM",
          location: "Webb Estate Hall",
          status: "Under Review",
          duration: "1 Day Event",
          cost: "45",
        },
        {
          id: 8,
          type: "Wedding Cermony",
          start_date: "Dec 17, 2020",
          end_date: "Dec 19, 2020",
          guests_no: "80-100",
          start_time: "6:00 PM",
          end_time: "6:00 PM",
          location: "Webb Community Hall",
          status: "Approved",
          duration: "4 Day Event",
          cost: "65",
        },
      ],
    };
  },
  methods: {
    showModal(event) {
      $vfm.show({
        component: EventsDetailModal,
        bind: {
          events: event,
        },
      });
    },
  },
};
</script>
