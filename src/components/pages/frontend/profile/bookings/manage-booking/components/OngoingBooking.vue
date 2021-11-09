<template>
  <div>
    <!-- table start -->
    <div class="capitalize h-72 md:h-96 mt-10 overflow-auto w-full">
      <table
        class="w-full md:leading-extra-loose overflow-scroll text-sm md:text-base"
      >
        <thead class="border-2 text-custom-lightgray">
          <tr class="text-left">
            <th class="px-5">id.</th>
            <th>Event Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Guest No.</th>
            <th>Total Hours</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="text-custom-darkblue font-semibold ">
          <tr
            v-for="(item, i) in tabledata"
            :key="i"
            class="border hover:border-2  hover:border-custom-lightgray group hover:bg-white"
          >
            <td class="px-5">{{ item.id }}</td>
            <td>{{ item.eventType }}</td>
            <td>{{ item.startData }}</td>
            <td>{{ item.endDate }}</td>
            <td>{{ item.guestsNo }}</td>
            <td>{{ item.totalHours }}</td>
            <td>
              <p
                @click="showEvent"
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
      <p class="inline">Total 4</p>
      <p class="float-right">
        Page <i class="ri-arrow-left-s-line align-middle text-xl"></i> 1 of 1
        <i class="ri-arrow-right-s-line align-middle text-xl"></i>
      </p>
    </div>
  </div>
  <OngoingBookingDetailModal v-model="showmodal" />
</template>
<script>
import OngoingBookingDetailModal from "../../../../../../global-components/modals/OngoingBookingDetailModal";
import { $vfm } from "vue-final-modal";
export default {
  components: { OngoingBookingDetailModal },
  data() {
    return {
      showmodal: false,
      tabledata: [
        {
          id: "01",
          eventType: "Wedding Ceremony",
          startData: "Dec 15, 2020",
          endDate: "Dec 16, 2020",
          guestsNo: "80-100",
          totalHours: "4 Hrs",
        },
        {
          id: "02",
          eventType: "General Meeting",
          startData: "Dec 15, 2020",
          endDate: "Dec 16, 2020",
          guestsNo: "80",
          totalHours: "5 Hrs",
        },
        {
          id: "03",
          eventType: "Birthday Party",
          startData: "Dec 15, 2020",
          endDate: "Dec 16, 2020",
          guestsNo: "80-100",
          totalHours: "4 Hrs",
        },
        {
          id: "04",
          eventType: "Coders Meetup",
          startData: "Dec 15, 2020",
          endDate: "Dec 16, 2020",
          guestsNo: "60",
          totalHours: "1 Hrs",
        },
      ],
    };
  },
  methods: {
    showEvent() {
      $vfm.show("ongoingBookingDetailModal");
    },
  },
};
</script>
