<template>
  <div>
    <UserProfileLayout>
      <!-- title and add new event section -->
      <div class="w-full relative">
        <h1
          class="font-semibold text-xl md:text-4xl text-custom-darkblue inline"
        >
          Bookings
        </h1>
        <router-link to="createevent">
          <button
            class="bg-custom-purple hover:bg-custom-lightblue md:w-44 md:h-12 h-10 w-40 uppercase font-semibold text-white absolute right-0"
          >
            <i class="ri-add-fill px-1 align-middle"></i> NEW BOOKING
          </button>
        </router-link>
      </div>
      <!-- filter and search field -->
      <div class="w-full bg-white mt-14 p-5 relative">
        <ul>
          <li class="inline text-custom-lightgray pr-5">
            <a href="#">Ongoing</a>
          </li>
          <li class="inline text-custom-lightgray px-5">
            <a href="#">Upcoming</a>
          </li>
          <li class="text-custom-darkblue   inline font-bold px-5">
            <a href="#">Past</a>
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
      <!-- table start -->
      <div class="capitalize h-72 md:h-96 mt-10 overflow-auto w-full">
        <!-- px-8 py-4 -->
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
              <td class="px-5">02</td>
              <td>General Meeting</td>
              <td>Dec 08, 2020</td>
              <td>Dec 08, 2020</td>
              <td>20-30</td>
              <td>2 hrs</td>
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
              <td class="px-5">02</td>
              <td>General Meeting</td>
              <td>Dec 08, 2020</td>
              <td>Dec 08, 2020</td>
              <td>20-30</td>
              <td>2 hrs</td>
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
              <td></td>
            </tr>
            <tr
              class="border hover:border-2  hover:border-custom-lightgray hover:bg-white group"
            >
              <td class="px-5">02</td>
              <td>General Meeting</td>
              <td>Dec 08, 2020</td>
              <td>Dec 08, 2020</td>
              <td>20-30</td>
              <td>2 hrs</td>
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
      <Modal v-if="modal" />
    </UserProfileLayout>
  </div>
</template>
<script>
import Modal from "./components/Modal";
export default {
  data() {
    return {
      modal: false,
    };
  },
  components: {
    Modal,
  },
};
</script>
