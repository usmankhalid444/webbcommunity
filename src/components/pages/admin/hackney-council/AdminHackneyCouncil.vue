<template>
  <div>
    <AdminProfileLayout>
      <!-- title section-->
      <div class="w-full">
        <h1
          class="font-semibold text-xl md:text-4xl text-custom-darkblue inline"
        >
          Hackney Council
        </h1>
      </div>
      <!-- filter and search field -->
      <div class="w-full bg-white mt-14 p-5 ">
        <ul>
          <li class="text-custom-darkblue inline font-bold relative group">
            <p class="inline cursor-pointer py-5">
              All Enquiries
              <svg
                class="inline"
                id="arrow_down_icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_117"
                  data-name="Path 117"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <path
                  id="Path_118"
                  data-name="Path 118"
                  d="M7.41,8.59,12,13.17l4.59-4.58L18,10l-6,6L6,10Z"
                  fill="#000539"
                />
              </svg>
            </p>
            <!-- dropdown start -->
            <div
              class="absolute top-10 bg-white p-5 hidden group-hover:block w-72 border border-custom-lightgray shadow"
            >
              <ul>
                <li>
                  <a
                    class="py-1.5 inline-block hover:text-custom-lightblue"
                    href="#"
                    >Parking Enquiries and Payments</a
                  >
                </li>
                <li>
                  <a
                    class="py-1.5 inline-block hover:text-custom-lightblue"
                    href="#"
                    >Council Tax</a
                  >
                </li>
                <li>
                  <a
                    class="py-1.5 inline-block hover:text-custom-lightblue"
                    href="#"
                    >Tenants and Leaseholders</a
                  >
                </li>
                <li>
                  <a
                    class="py-1.5 inline-block hover:text-custom-lightblue"
                    href="#"
                    >Housing Repairs</a
                  >
                </li>
                <li>
                  <a
                    class="py-1.5 inline-block hover:text-custom-lightblue"
                    href="#"
                    >Housing Advice</a
                  >
                </li>
                <li>
                  <a
                    class="py-1.5 inline-block hover:text-custom-lightblue"
                    href="#"
                    >Benefits</a
                  >
                </li>
                <li>
                  <a
                    class="py-1.5 inline-block hover:text-custom-lightblue"
                    href="#"
                    >Planning Duty Desk</a
                  >
                </li>
                <li>
                  <a
                    class="py-1.5 inline-block hover:text-custom-lightblue"
                    href="#"
                    >Bulky Waste Collection</a
                  >
                </li>
              </ul>
            </div>
            <!-- dropdown end -->
          </li>
        </ul>
        <div class="float-right relative">
          <input
            class="border border-gray-400 w-44  md:w-80 h-10 -mt-8 float-right inline pr-4 pl-10"
            type="text"
            placeholder=" Search"
          />
          <span class="absolute left-3 bottom-1.5"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="search_icon" transform="translate(-16281 -3203)">
                <path
                  id="Path_3350"
                  data-name="Path 3350"
                  d="M15.5,14h-.79l-.28-.27a6.51,6.51,0,1,0-.7.7l.27.28v.79l5,4.99L20.49,19Zm-6,0A4.5,4.5,0,1,1,14,9.5,4.494,4.494,0,0,1,9.5,14Z"
                  transform="translate(16281 3203)"
                  fill="#5f68a6"
                />
                <rect
                  id="Rectangle_2746"
                  data-name="Rectangle 2746"
                  width="24"
                  height="24"
                  transform="translate(16281 3203)"
                  fill="none"
                />
              </g>
            </svg>
          </span>
        </div>
      </div>
      <!-- table start -->
      <div class="capitalize h-72 md:h-96 mt-10 overflow-auto w-full">
        <table class="w-full md:leading-extra-loose text-sm md:text-base">
          <thead class="border text-custom-lightgray">
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
                <div class="inline relative">
                  <select
                    class="text-sm font-semibold border-none focus:ring-transparent bg-custom-lightgreen"
                  >
                    <option value="Any Date">Any Date</option>
                    <option value="Dec 20">Dec 20</option>
                    <option value="Dec 20">Dec 20</option>
                  </select>
                  <span class="absolute right-3 top-0 pointer-events-none"
                    ><svg
                      class="fill-current"
                      id="arrow_down_icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        id="Path_117"
                        data-name="Path 117"
                        d="M0,0H24V24H0Z"
                        fill="none"
                      />
                      <path
                        id="Path_118"
                        data-name="Path 118"
                        d="M7.41,8.59,12,13.17l4.59-4.58L18,10l-6,6L6,10Z"
                      />
                    </svg>
                  </span>
                </div>
              </th>
              <th>
                Submitted by
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody class="text-custom-darkblue font-semibold ">
            <tr
              v-for="(item, i) in hackney_council"
              :key="i"
              class="border hover:outline-blue group hover:bg-white"
            >
              <td class="px-5">{{ item.id }}</td>
              <td>
                {{ getSubject(item.subject) }}
              </td>
              <td>{{ item.date }}</td>
              <td>{{ item.submitted_by }}</td>
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
        <p class="inline">Total {{ hackney_council.length }}</p>
        <p class="float-right">
          Page <i class="ri-arrow-left-s-line align-middle text-xl"></i> 1 of 1
          <i class="ri-arrow-right-s-line align-middle text-xl"></i>
        </p>
      </div>
    </AdminProfileLayout>
  </div>
  <ModalsContainer />
</template>
<script>
import HcDetailModal from "./components/HcDetailModal";
import { $vfm, ModalsContainer } from "vue-final-modal";

export default {
  components: { ModalsContainer },

  //
  data() {
    return {
      showmodal: false,
      hackney_council: [
        {
          id: 1,
          date: "Dec 08 2020",
          time: "04:00 PM",
          location: "Webb Community Hall",
          submitted_by: "Stephen Baker",
          type: "Bulky Waste Collection",
          subject:
            "The quick, brown fox jumps over a DJs flock by when MTV ax quiz prog The quick, brown fox jumps over a DJs flock by when MTV ax quiz prog The quick, brown fox jumps over a DJs flock by when MTV ax quiz prog",
        },
        {
          id: 2,
          date: "Dec 09 2020",
          time: "04:00 PM",
          location: "Webb Community Hall",
          submitted_by: "Keith Birkett",
          type: "Council Tax",
          subject:
            " DJs flock by when MTV ax quiz prog The quick, brown fox jumps over a The quick, brown fox jumps over a DJs flock by when MTV ax quiz prog The quick, brown fox jumps over a DJs flock by when MTV ax quiz prog",
        },
        {
          id: 3,
          date: "Dec 08 2020",
          time: "04:00 PM",
          location: "Webb Community Hall",
          submitted_by: "Stephen Baker",
          type: "Housing Repairs",
          subject:
            "The quick, brown fox jumps over The quick, brown fox jumps over aa DJs flock by when MTV ax quiz prog The quick, brown fox jumps over a DJs flock by when MTV ax quiz prog The quick, brown fox jumps over a DJs flock by when MTV ax quiz prog",
        },
        {
          id: 4,
          date: "Dec 09 2020",
          time: "04:00 PM",
          location: "Webb Community Hall",
          submitted_by: "Keith Birkett",
          type: "Bulky Waste Collection",
          subject:
            "The quick, brown fox jThe quick, brown fox jumps over aumps over a DJs flock by when MTV ax quiz prog The quick, brown fox jumps over a DJs flock by when MTV ax quiz prog The quick, brown fox jumps over a DJs flock by when MTV ax quiz prog",
        },
        {
          id: 5,
          date: "Dec 08 2020",
          time: "04:00 PM",
          location: "Webb Community Hall",
          submitted_by: "Stephen Baker",
          type: "Benifits",
          subject:
            "TThe quick, brown fox jumps over ahe quick, brown fox jumps over a DJs flock by when MTV ax quiz prog The quick, brown fox jumps over a DJs flock by when MTV ax quiz prog The quick, brown fox jumps over a DJs flock by when MTV ax quiz prog",
        },
        {
          id: 6,
          date: "Dec 09 2020",
          time: "04:00 PM",
          location: "Webb Community Hall",
          submitted_by: "Keith Birkett",
          type: "Bulky Waste Collection",
          subject:
            "The quicThe quick, brown fox jumps over ak, brown fox jumps over a DJs flock by when MTV ax quiz prog The quick, brown fox jumps over a DJs flock by when MTV ax quiz prog The quick, brown fox jumps over a DJs flock by when MTV ax quiz prog",
        },
        {
          id: 7,
          date: "Dec 09 2020",
          time: "04:00 PM",
          location: "Webb Community Hall",
          submitted_by: "Keith Birkett",
          type: "Bulky Waste Collection",
          subject:
            "The quicThe quick, brown fox jumps over ak, brown fox jumps over a DJs flock by when MTV ax quiz prog The quick, brown fox jumps over a DJs flock by when MTV ax quiz prog The quick, brown fox jumps over a DJs flock by when MTV ax quiz prog",
        },
      ],
    };
  },
  methods: {
    getSubject(text) {
      if (text.length < 35) {
        return text;
      } else {
        return text.substring(0, 35) + "...";
      }
    },
    showModal(i) {
      $vfm.show({
        component: HcDetailModal,
        bind: {
          hackney_council: i,
        },
      });
    },
  },
};
</script>
