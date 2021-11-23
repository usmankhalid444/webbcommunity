<template>
  <div>
    <AdminProfileLayout>
      <!-- title -->
      <div class="w-full">
        <h1
          class="font-semibold text-xl md:text-4xl text-custom-darkblue inline"
        >
          Community Reports
        </h1>
      </div>
      <!-- filter and search field -->
      <div class="w-full bg-white mt-10 p-5 relative">
        <ul>
          <li class="inline font-bold text-custom-darkblue">
            <p class="inline cursor-pointer px-5 py-5">
              All Reports
            </p>
          </li>
        </ul>
        <div class="lg:float-right relative">
          <input
            class="border border-gray-400 w-44  lg:w-80 h-10 lg:-mt-8 lg:float-right inline pr-4 pl-10 mt-5"
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
      <div>
        <!-- table start -->
        <div class="h-72 md:h-96 mt-10 overflow-auto w-full">
          <table
            class="w-full md:leading-extra-loose overflow-scroll text-sm md:text-base"
          >
            <thead class="border-2 text-custom-lightgray">
              <tr class="text-left">
                <th class="px-5">Sr.</th>
                <th>Enquiry</th>
                <th>
                  Date
                </th>
                <th>
                  Submitted by
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody class="text-custom-darkblue font-semibold ">
              <tr
                v-for="(report, i) in reports"
                :key="i"
                class="border hover:border-2  hover:border-custom-lightgray group hover:bg-white"
              >
                <td class="px-5">{{ report.id }}</td>
                <td>
                  {{ report.enquiry }}
                </td>
                <td>{{ report.date }}</td>
                <td>{{ report.submitted_by }}</td>
                <td>
                  <p
                    @click="showModal(report)"
                    class="text-custom-purple group-hover:visible invisible cursor-pointer"
                  >
                    View
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="w-full text-custom-darkblue font-semibold mt-10">
          <p class="inline">Total {{ reports.length }}</p>
          <p class="float-right">
            Page <i class="ri-arrow-left-s-line align-middle text-xl"></i> 1 of
            1
            <i class="ri-arrow-right-s-line align-middle text-xl"></i>
          </p>
        </div>
      </div>
    </AdminProfileLayout>
  </div>
  <ModalsContainer />
</template>
<script>
import ReportsDetailModal from "./components/ReportsDetailModal";
import { $vfm, ModalsContainer } from "vue-final-modal";

export default {
  components: { ModalsContainer },
  data() {
    return {
      reports: [
        {
          id: 1,
          email: "john_andrews@gmail.com",
          contact_no: "+44 7700 900077",
          enquiry: "Bulky Waste Collection",
          date: "Dec 15, 2020",
          time: "04:00 PM",
          submitted_by: "John Andrews",
          location: "Webb Community Hall",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit, quisquam expedita explicabo sequi, ad exercitationem commodi iusto dolore impedit optio voluptates porro consequuntur non deserunt, provident consequatur maiores sapiente!",
        },
        {
          id: 2,
          email: "john_andrews@gmail.com",
          contact_no: "+44 7700 900077",
          enquiry: "Noise Pollution",
          date: "Dec 15, 2020",
          time: "04:00 PM",
          submitted_by: "Stephen Baker",
          location: "Webb Community Hall",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit, quisquam expedita explicabo sequi, ad exercitationem commodi iusto dolore impedit optio voluptates porro consequuntur non deserunt, provident consequatur maiores sapiente!",
        },
        {
          id: 3,
          email: "john_andrews@gmail.com",
          contact_no: "+44 7700 900077",
          enquiry: "Housing Repairs",
          date: "Dec 15, 2020",
          time: "04:00 PM",
          submitted_by: "Keith Birkett",
          location: "Webb Community Hall",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit, quisquam expedita explicabo sequi, ad exercitationem commodi iusto dolore impedit optio voluptates porro consequuntur non deserunt, provident consequatur maiores sapiente!",
        },
        {
          id: 4,
          email: "john_andrews@gmail.com",
          contact_no: "+44 7700 900077",
          enquiry: "Parking Enquires and Payments",
          date: "Dec 15, 2020",
          time: "04:00 PM",
          submitted_by: "John Andrews",
          location: "Webb Community Hall",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit, quisquam expedita explicabo sequi, ad exercitationem commodi iusto dolore impedit optio voluptates porro consequuntur non deserunt, provident consequatur maiores sapiente!",
        },
        {
          id: 5,
          email: "john_andrews@gmail.com",
          contact_no: "+44 7700 900077",
          enquiry: "Housing Repairs",
          date: "Dec 15, 2020",
          time: "04:00 PM",
          submitted_by: "Steven Cark",
          location: "Webb Community Hall",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit, quisquam expedita explicabo sequi, ad exercitationem commodi iusto dolore impedit optio voluptates porro consequuntur non deserunt, provident consequatur maiores sapiente!",
        },
        {
          id: 6,
          email: "john_andrews@gmail.com",
          contact_no: "+44 7700 900077",
          enquiry: "Noise Pollution",
          date: "Dec 15, 2020",
          time: "04:00 PM",
          submitted_by: "John Andrews",
          location: "Webb Community Hall",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit, quisquam expedita explicabo sequi, ad exercitationem commodi iusto dolore impedit optio voluptates porro consequuntur non deserunt, provident consequatur maiores sapiente!",
        },
      ],
    };
  },
  methods: {
    showModal(report) {
      $vfm.show({
        component: ReportsDetailModal,
        bind: {
          reports: report,
        },
      });
    },
  },
};
</script>
