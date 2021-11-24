<template>
  <div>
    <!-- table start -->
    <div class="h-72 md:h-96 mt-10 overflow-auto w-full">
      <table class="w-full md:leading-extra-loose text-sm md:text-base">
        <thead class="border text-custom-lightgray">
          <tr class="text-left">
            <th class="px-5">Sr.</th>
            <th>Event Type</th>
            <th>
              Start Date
            </th>
            <th>
              End Date
            </th>
            <th>Guest No.</th>
            <th>Total Hours</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="text-custom-darkblue font-semibold ">
          <tr
            v-for="(booking, i) in reserved_bookings"
            :key="i"
            class="border hover:outline-blue group hover:bg-white"
          >
            <td class="px-5">{{ booking.id }}</td>
            <td>
              {{ booking.event_type }}
            </td>
            <td>{{ booking.start_date }}</td>
            <td>{{ booking.end_date }}</td>
            <td>{{ booking.guests.no }}</td>
            <td>{{ booking.total_hours }} hrs</td>
            <td>
              <p
                @click="showModal(booking)"
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
      <p class="inline">Total {{ reserved_bookings.length }}</p>
      <p class="float-right">
        Page <i class="ri-arrow-left-s-line align-middle text-xl"></i> 1 of 1
        <i class="ri-arrow-right-s-line align-middle text-xl"></i>
      </p>
    </div>
  </div>
  <ModalsContainer />
</template>
<script>
import BookingModalReserved from "./modals/BookingModalReserved";
import { $vfm, ModalsContainer } from "vue-final-modal";
export default {
  components: { ModalsContainer },
  data() {
    return {
      showmodal: false,
      reserved_bookings: [
        {
          id: 1,
          event_type: "Christmas Party",
          start_date: "Dec 15, 2020",
          end_date: "Dec 16, 2020",
          guests: {
            kids: "20",
            adults: "40",
            no: "80-100",
            type: "Private Event",
          },
          start_time: "4:00 PM",
          end_time: "4:00 PM",
          location: "Webb Estate Hall",
          status: "Reserved",
          duration: "1 Day Event",
          total_hours: "1",
          amount: {
            total: "45",
            payable: "45",
            booking: "45",
            security: "200",
            due_date: "20 Dec 2020",
          },
          host_name: "John Andrews",
        },
        {
          id: 2,
          event_type: "Wedding Cermony",
          start_date: "Dec 17, 2020",
          end_date: "Dec 19, 2020",
          guests: {
            kids: "20",
            adults: "40",
            no: "80-100",
            type: "Private Event",
          },
          start_time: "6:00 PM",
          end_time: "6:00 PM",
          location: "Webb Community Hall",
          status: "Reserved",
          duration: "1 Day Event",
          total_hours: "4",
          amount: {
            total: "45",
            payable: "45",
            booking: "45",
            security: "200",
            due_date: "20 Dec 2020",
          },
          host_name: "Mark Jacob",
        },
        {
          id: 3,
          event_type: "Christmas Party",
          start_date: "Dec 15, 2020",
          end_date: "Dec 16, 2020",
          guests: {
            kids: "20",
            adults: "40",
            no: "80-100",
            type: "Private Event",
          },
          start_time: "4:00 PM",
          end_time: "4:00 PM",
          location: "Webb Estate Hall",
          status: "Reserved",
          duration: "1 Day Event",
          total_hours: "1",
          amount: {
            total: "45",
            payable: "45",
            booking: "45",
            security: "200",
            due_date: "20 Dec 2020",
          },
          host_name: "Eva Smith",
        },
        {
          id: 4,
          event_type: "Wedding Cermony",
          start_date: "Dec 17, 2020",
          end_date: "Dec 19, 2020",
          guests: {
            kids: "20",
            adults: "40",
            no: "80-100",
            type: "Private Event",
          },
          start_time: "6:00 PM",
          end_time: "6:00 PM",
          location: "Webb Community Hall",
          status: "Reserved",
          duration: "1 Day Event",
          total_hours: "4",
          amount: {
            total: "45",
            payable: "45",
            booking: "45",
            security: "200",
            due_date: "20 Dec 2020",
          },
          host_name: "Alice Jeson",
        },
        {
          id: 5,
          event_type: "General Meeting",
          start_date: "Dec 15, 2020",
          end_date: "Dec 16, 2020",
          guests: {
            kids: "20",
            adults: "40",
            no: "80-100",
            type: "Private Event",
          },
          start_time: "4:00 PM",
          end_time: "4:00 PM",
          location: "Webb Estate Hall",
          status: "Reserved",
          duration: "1 Day Event",
          total_hours: "1",
          amount: {
            total: "45",
            payable: "45",
            booking: "45",
            security: "200",
            due_date: "20 Dec 2020",
          },
          host_name: "John Andrews",
        },
        {
          id: 6,
          event_type: "Celebration",
          start_date: "Dec 17, 2020",
          end_date: "Dec 19, 2020",
          guests: {
            kids: "20",
            adults: "40",
            no: "80-100",
            type: "Private Event",
          },
          start_time: "6:00 PM",
          end_time: "6:00 PM",
          location: "Webb Community Hall",
          status: "Reserved",
          duration: "1 Day Event",
          total_hours: "4",
          amount: {
            total: "45",
            payable: "45",
            booking: "45",
            security: "200",
            due_date: "20 Dec 2020",
          },
          host_name: "John Andrews",
        },
        {
          id: 7,
          event_type: "General Meeting",
          start_date: "Dec 15, 2020",
          end_date: "Dec 16, 2020",
          guests: {
            kids: "20",
            adults: "40",
            no: "80-100",
            type: "Private Event",
          },
          start_time: "4:00 PM",
          end_time: "4:00 PM",
          location: "Webb Estate Hall",
          status: "Reserved",
          duration: "1 Day Event",
          total_hours: "1",
          amount: {
            total: "45",
            payable: "45",
            booking: "45",
            security: "200",
            due_date: "20 Dec 2020",
          },
          host_name: "John Andrews",
        },
        {
          id: 8,
          event_type: "Wedding Cermony",
          start_date: "Dec 17, 2020",
          end_date: "Dec 19, 2020",
          guests: {
            kids: "20",
            adults: "40",
            no: "80-100",
            type: "Private Event",
          },
          start_time: "6:00 PM",
          end_time: "6:00 PM",
          location: "Webb Community Hall",
          status: "Reserved",
          duration: "1 Day Event",
          total_hours: "4",
          amount: {
            total: "45",
            payable: "45",
            booking: "45",
            security: "200",
            due_date: "20 Dec 2020",
          },
          host_name: "John Andrews",
        },
      ],
    };
  },
  methods: {
    showModal(booking) {
      $vfm.show({
        component: BookingModalReserved,
        bind: {
          bookings: booking,
        },
      });
    },
  },
};
</script>
