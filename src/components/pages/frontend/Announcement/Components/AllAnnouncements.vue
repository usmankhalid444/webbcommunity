<template>
  <div>
    <!-- table start -->
    <div class="capitalize h-72 md:h-2/5 mt-10 overflow-auto w-full">
      <table
        class="w-full md:leading-extra-loose overflow-scroll text-sm md:text-base"
      >
        <thead class="border-2 text-custom-lightgray">
          <tr class="text-left">
            <th class="px-5">Sr.</th>
            <th>Subject</th>
            <th>
              <span
                ><svg
                  class="inline"
                  id="sort_icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="Path_182"
                    data-name="Path 182"
                    d="M0,0H24V24H0Z"
                    fill="none"
                  />
                  <path
                    id="Path_183"
                    data-name="Path 183"
                    d="M3,18H9V16H3ZM3,6V8H21V6Zm0,7H15V11H3Z"
                    fill="#9ea4c9"
                  />
                </svg>
              </span>
              Date
            </th>
            <th>
              <span
                ><svg
                  class="inline"
                  id="sort_icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="Path_182"
                    data-name="Path 182"
                    d="M0,0H24V24H0Z"
                    fill="none"
                  />
                  <path
                    id="Path_183"
                    data-name="Path 183"
                    d="M3,18H9V16H3ZM3,6V8H21V6Zm0,7H15V11H3Z"
                    fill="#9ea4c9"
                  />
                </svg>
              </span>
              Shared with
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody class="text-custom-darkblue font-semibold ">
          <tr
            v-for="(announcement, i) in announcements"
            :key="i"
            class="border hover:outline-blue group hover:bg-white"
          >
            <td class="px-5">{{ announcement.id }}</td>
            <td>
              {{ announcement.subject }}
            </td>
            <td>{{ announcement.date }}</td>
            <td>{{ announcement.shared_with }}</td>
            <td>
              <p
                @click="showModal(announcement)"
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
  <ModalsContainer />
</template>
<script>
import AnnouncementsDetailModal from "./AnnouncementsDetailModal";
import { $vfm, ModalsContainer } from "vue-final-modal";
export default {
  components: { ModalsContainer },
  data() {
    return {
      showmodal: false,
      announcements: [
        {
          id: 1,
          subject: "Hall Booking Prices Has Been Revised",
          date: "Dec 15 2020",
          time: "04:00 PM",
          shared_with: "All Residents",
          brief:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur praesentium tempora ipsam a aut quis, adipisci doloribus rerum debitisplaceat in excepturi asperiores impedit aliquid quos facilis iure quidem  odit",
        },
        {
          id: 2,
          subject: "The quick, brown fox jumps over a lazy",
          date: "Dec 15 2020",
          time: "04:00 PM",
          shared_with: "All Outsiders",
          brief:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur praesentium tempora ipsam a aut quis, adipisci doloribus rerum debitisplaceat in excepturi asperiores impedit aliquid quos facilis iure quidem  odit",
        },
        {
          id: 3,
          subject: "The quick, brown fox jumps over a lazy",
          date: "Dec 18 2020",
          time: "04:00 PM",
          shared_with: "All Residents",
          brief:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur praesentium tempora ipsam a aut quis, adipisci doloribus rerum debitisplaceat in excepturi asperiores impedit aliquid quos facilis iure quidem  odit",
        },
        {
          id: 4,
          subject: "Hall Booking Prices Has Been Revised",
          date: "Dec 15 2020",
          time: "01:00 PM",
          shared_with: "All Residents",
          brief:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur praesentium tempora ipsam a aut quis, adipisci doloribus rerum debitisplaceat in excepturi asperiores impedit aliquid quos facilis iure quidem  odit",
        },
        {
          id: 5,
          subject: "The quick, brown fox jumps over a lazy",
          date: "Dec 12 2020",
          time: "08:00 PM",
          shared_with: "All Outsiders",
          brief:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur praesentium tempora ipsam a aut quis, adipisci doloribus rerum debitisplaceat in excepturi asperiores impedit aliquid quos facilis iure quidem  odit",
        },
        {
          id: 6,
          subject: "The quick, brown fox jumps over a lazy",
          date: "Dec 15 2020",
          time: "04:00 PM",
          shared_with: "All Residents",
          brief:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur praesentium tempora ipsam a aut quis, adipisci doloribus rerum debitisplaceat in excepturi asperiores impedit aliquid quos facilis iure quidem  odit",
        },
      ],
    };
  },
  methods: {
    showModal(announcement) {
      $vfm.show({
        component: AnnouncementsDetailModal,
        bind: {
          announcements: announcement,
        },
      });
    },
  },
};
</script>
