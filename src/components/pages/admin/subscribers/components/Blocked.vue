<template>
  <div>
    <!-- table start -->
    <div class="h-72 md:h-2/5 mt-10 overflow-auto w-full">
      <table
        class="w-full md:leading-extra-loose overflow-scroll text-sm md:text-base"
      >
        <thead class="border-2 text-custom-lightgray">
          <tr class="text-left">
            <th class="px-5">Sr.</th>
            <th>Email</th>
            <th>
              Subscription Date
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody class="text-custom-darkblue font-semibold ">
          <tr
            v-for="(subscriber, i) in blocked_subscribers"
            :key="i"
            class="border hover:border-2  hover:border-custom-lightgray group hover:bg-white"
          >
            <td class="px-5">{{ subscriber.id }}</td>
            <td>
              {{ subscriber.email }}
            </td>
            <td>{{ subscriber.date }}</td>
            <td>
              <p
                @click="showModal"
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
      <p class="inline">Total {{ blocked_subscribers.length }}</p>
      <p class="float-right">
        Page <i class="ri-arrow-left-s-line align-middle text-xl"></i> 1 of 1
        <i class="ri-arrow-right-s-line align-middle text-xl"></i>
      </p>
    </div>
  </div>
  <ModalsContainer />
</template>
<script>
import SubscribersDetailModal from "./SubscribersDetailModal";
import { $vfm, ModalsContainer } from "vue-final-modal";
export default {
  components: { ModalsContainer },
  data() {
    return {
      showmodal: false,
      blocked_subscribers: [
        {
          id: 1,
          email: "keith_birkett@yahoo.com",
          date: "Dec 19, 2020",
        },
        {
          id: 2,
          email: "keith_birkett@yahoo.com",
          date: "Dec 10, 2020",
        },
        {
          id: 3,
          email: "john_andrews@gmail.com",
          date: "Dec 19, 2020",
        },
        {
          id: 4,
          email: "keith_birkett@yahoo.com",
          date: "Dec 10, 2020",
        },
        {
          id: 5,
          email: "keith_birkett@yahoo.com",
          date: "Dec 19, 2020",
          time: "04:00 PM",
        },
        {
          id: 6,
          email: "keith_birkett@yahoo.com",
          date: "Dec 18, 2020",
        },
      ],
    };
  },
  methods: {
    showModal() {
      $vfm.show({
        component: SubscribersDetailModal,
        // bind: {
        //   subscribers: subscriber,
        // },
      });
    },
  },
};
</script>
