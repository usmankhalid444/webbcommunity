<template>
  <div>
    <!-- table start -->
    <div class="capitalize h-72 md:h-96 mt-10 overflow-auto w-full">
      <table
        class="w-full md:leading-extra-loose overflow-scroll text-sm md:text-base"
      >
        <thead class="border-2 text-custom-lightgray">
          <tr class="text-left">
            <th class="px-5">sr.</th>
            <th>Event Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Guest No.</th>
            <th>status</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="text-custom-darkblue font-semibold ">
          <tr
            v-for="(item, i) in tabledata"
            :key="i"
            class="border hover:border-2  hover:border-custom-lightgray hover:bg-white group"
          >
            <td class="px-5">{{ item.id }}</td>
            <td>{{ item.eventType }}</td>
            <td>{{ item.startData }}</td>
            <td>{{ item.endDate }}</td>
            <td>{{ item.guestsNo }}</td>
            <td>{{ item.status }}</td>
            <td class="relative">
              <span class="group-hover:visible invisible cursor-pointer">
                <svg
                  class="group"
                  id="help_icon_blue"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="Path_3341"
                    data-name="Path 3341"
                    d="M0,0H24V24H0Z"
                    fill="none"
                  />
                  <path
                    id="Path_3342"
                    data-name="Path 3342"
                    d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,17H11V17h2Zm2.07-7.75-.9.92A3.4,3.4,0,0,0,13,15H11v-.5a4.025,4.025,0,0,1,1.17-2.83l1.24-1.26A1.955,1.955,0,0,0,14,9a2,2,0,0,0-4,0H8a4,4,0,0,1,8,0A3.182,3.182,0,0,1,15.07,11.25Z"
                    fill="#575ef6"
                  />
                </svg>
                <p
                  class="absolute -left-20 top-12 text-sm text-white bg-custom-darkblue px-3 py-1 rounded-full hidden group-hover:block"
                >
                  Upload Form
                </p>
              </span>
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
</template>
<script>
export default {
  data() {
    return {
      tabledata: [
        {
          id: "01",
          eventType: "Friends’ Meetup",
          startData: "Dec 15, 2020",
          endDate: "Dec 16, 2020",
          guestsNo: "80-100",
          status: "Confirmed",
        },
        {
          id: "02",
          eventType: "Birthday Party",
          startData: "Dec 15, 2020",
          endDate: "Dec 16, 2020",
          guestsNo: "80",
          status: "Requested",
        },
        {
          id: "03",
          eventType: "General Meetup",
          startData: "Dec 15, 2020",
          endDate: "Dec 16, 2020",
          guestsNo: "80-100",
          status: "Confirmed",
        },
        {
          id: "04",
          eventType: "Coders Meetup",
          startData: "Dec 15, 2020",
          endDate: "Dec 16, 2020",
          guestsNo: "60",
          status: "Confirmed",
        },
        {
          id: "05",
          eventType: "Birthday Party",
          startData: "Dec 15, 2020",
          endDate: "Dec 16, 2020",
          guestsNo: "80",
          status: "Reserved",
        },
      ],
    };
  },
};
</script>
