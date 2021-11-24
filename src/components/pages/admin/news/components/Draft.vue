<template>
  <div>
    <!-- table start -->
    <div class="capitalize h-72 md:h-96 mt-10 overflow-auto w-full">
      <table class="w-full md:leading-extra-loose text-sm md:text-base">
        <thead class="border text-custom-lightgray">
          <tr class="text-left">
            <th class="px-5">Sr.</th>
            <th>News</th>
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
              Published On
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
              Source
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody class="text-custom-darkblue font-semibold ">
          <tr
            v-for="(item, i) in news"
            :key="i"
            class="border hover:outline-blue group hover:bg-white"
          >
            <td class="px-5">{{ item.id }}</td>
            <td>
              <span class="text-lg">{{ item.news_title }} - </span
              ><span>{{ getBriefDescription(item.brief) }}</span>
            </td>
            <td>{{ item.published_on }}</td>
            <td>{{ item.source }}</td>
            <td>
              <p
                @click="showModal(item)"
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
      <p class="inline">Total {{ news.length }}</p>
      <p class="float-right">
        Page <i class="ri-arrow-left-s-line align-middle text-xl"></i> 1 of 1
        <i class="ri-arrow-right-s-line align-middle text-xl"></i>
      </p>
    </div>
  </div>
  <ModalsContainer />
</template>
<script>
import NewsDetailModal from "./NewsDetailModal";
import { $vfm, ModalsContainer } from "vue-final-modal";
export default {
  components: { ModalsContainer },
  data() {
    return {
      showmodal: false,
      news: [
        {
          id: 1,
          news_title: "Illegal Activity",
          published_on: "Dec 15 2020",
          time: "04:00 PM",
          type: "Draft",
          source: "Stephen Baker",
          location: "Webb Community Hall",
          brief:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur praesentium tempora ipsam a aut quis, adipisci doloribus rerum debitisplaceat in excepturi asperiores impedit aliquid quos facilis iure quidem  odit",
        },
        {
          id: 2,
          news_title: "Crime Activity",
          published_on: "Dec 14 2020",
          time: "04:00 PM",
          type: "Draft",
          source: "Keith Birkett",
          location: "Webb Community Hall",
          brief: "Lorem dolor",
        },
        {
          id: 3,
          news_title: "Illegal Activity",
          published_on: "Dec 18 2020",
          time: "04:00 PM",
          type: "Draft",
          source: "Steven Clark",
          location: "Webb Community Hall",
          brief:
            "Adipisci doloribus rerum debitisplaceat in excepturi asperiores impedit aliquid quos Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur praesentium tempora ipsam a aut q facilis iure quidem  odit",
        },
        {
          id: 4,
          news_title: "Illegal Activity",
          published_on: "Dec 15 2020",
          time: "04:00 PM",
          type: "Draft",
          source: "Stephen Baker",
          location: "Webb Community Hall",
          brief:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur praesentium tempora ipsam a aut quis, adipisci doloribus rerum debitisplaceat in excepturi asperiores impedit aliquid quos facilis iure quidem  odit",
        },
        {
          id: 5,
          news_title: "Illegal Activity",
          published_on: "Dec 15 2020",
          time: "04:00 PM",
          type: "Draft",
          source: "Stephen Baker",
          location: "Webb Community Hall",
          brief:
            " Consequatur praesentium tempora ipsam a aut quis, adipisci doloribus rerum debitisplaceat in excepturi asperiores Lorem ipsum dolor sit amet consectetur adipisicing elit. impedit aliquid quos facilis iure quidem  odit",
        },
        {
          id: 6,
          news_title: "Illegal Activity",
          published_on: "Dec 15 2020",
          time: "04:00 PM",
          type: "Draft",
          source: "Stephen Baker",
          location: "Webb Community Hall",
          brief:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur praesentium tempora ipsam a aut quis, adipisci doloribus rerum debitisplaceat in excepturi asperiores impedit aliquid quos facilis iure quidem  odit",
        },
      ],
    };
  },
  methods: {
    showModal(item) {
      $vfm.show({
        component: NewsDetailModal,
        bind: {
          news: item,
        },
      });
    },
    getBriefDescription(text) {
      if (text.length < 35) {
        return text;
      } else {
        return text.substring(0, 35) + "...";
      }
    },
  },
};
</script>
