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
            <th>Total Hours</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="text-custom-darkblue font-semibold ">
          <tr
            class="border hover:border-2  hover:border-custom-lightgray group hover:bg-white group"
          >
            <td class="px-5">01</td>
            <td>wedding ceremony</td>
            <td>dec 15, 2020</td>
            <td>dec 15, 2020</td>
            <td>80-100</td>
            <td>4 hrs</td>
            <td>
              <p
                @click="modal = !modal"
                class="text-custom-purple group-hover:visible invisible cursor-pointer"
              >
                view
              </p>
            </td>
          </tr>

          <tr
            class="border hover:border-2  hover:border-custom-lightgray hover:bg-white group"
          >
            <td class="px-5">03</td>
            <td>Birthday Party</td>
            <td>dec 01, 2020</td>
            <td>dec 01, 2020</td>
            <td>50</td>
            <td>1 hrs</td>
            <td>
              <p
                @click="modal = !modal"
                class="text-custom-purple group-hover:visible invisible cursor-pointer"
              >
                view
              </p>
            </td>
          </tr>
          <tr
            class="border hover:border-2  hover:border-custom-lightgray hover:bg-white group"
          >
            <td class="px-5">04</td>
            <td>Children Activities</td>
            <td>nov 23,2020</td>
            <td>nov 23,2020</td>
            <td>10-15</td>
            <td>8 hrs</td>
            <td>
              <p
                @click="modal = !modal"
                class="text-custom-purple group-hover:visible invisible cursor-pointer"
              >
                view
              </p>
            </td>
          </tr>
          <td>
            <p
              @click="modal = !modal"
              class="text-custom-purple group-hover:visible invisible cursor-pointer"
            >
              view
            </p>
          </td>
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
  <OngoingModal v-if="modal" />
</template>
<script>
import OngoingModal from "./OngoingModal";
export default {
  components: { OngoingModal },
  data() {
    return {
      modal: false,
    };
  },
};
</script>
