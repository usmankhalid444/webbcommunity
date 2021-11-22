<template>
  <vue-final-modal
    name="UserDetailModal"
    v-slot="{ close }"
    v-bind="$attrs"
    classes="flex justify-center items-center overflow-scroll"
    content-class="w-full md:w-3/4 xl:w-2/4 relative max-h-full mx-4 md:p-12 p-5 border rounded bg-white"
  >
    <div>
      <div class="border-b pb-8">
        <p class="text-custom-lightblue font-medium inline-block">
          REF No. <span class="underline">WC{{ bookings.id }}</span>
        </p>
        <p @click="close" class="float-right cursor-pointer">
          <i class="ri-close-line text-3xl"></i>
        </p>
        <h1
          class="text-2xl md:text-34px text-custom-darkblue py-3.5 font-semibold"
        >
          {{ bookings.event_type }}
        </h1>
        <div class="mt-2">
          <p
            class="inline text-custom-lightblue bg-custom-lightgreen p-1 mr-5 "
          >
            {{ bookings.status }}
          </p>
          <p class="text-custom-lightblue bg-custom-lightgreen inline p-1 mr-5">
            {{ bookings.guests.type }}
          </p>
          <p
            class="text-custom-lightblue bg-custom-lightgreen block md:inline p-1 md:mt-0 mt-5"
          >
            By <span class="underline">{{ bookings.host_name }}</span>
          </p>
        </div>
      </div>
      <div class="grid grid-cols-12 mt-2 border-b py-2">
        <div class="col-span-6 ">
          <p class="text-custom-lightblue">Duration</p>
          <p class="text-custom-darkblue md:text-xl font-semibold py-2">
            {{ bookings.duration }}
          </p>
        </div>
        <div class="col-span-6 ">
          <p class="text-custom-lightblue">Guest No.</p>
          <p class="text-custom-darkblue md:text-xl font-semibold py-2">
            {{ bookings.guests.kids }} Kids ::
            {{ bookings.guests.adults }} Adults
          </p>
        </div>
      </div>
      <div class="grid grid-cols-12 mt-2 border-b py-2">
        <div class="col-span-6 ">
          <p class="text-custom-lightblue">Start</p>
          <p class="text-custom-darkblue md:text-xl font-semibold py-2">
            {{ bookings.start_date }}, {{ bookings.start_time }}
          </p>
        </div>
        <div class="col-span-12 md:col-span-6 ">
          <p class="text-custom-lightblue">End</p>
          <p class="text-custom-darkblue md:text-xl font-semibold py-2">
            {{ bookings.end_date }}, {{ bookings.end_time }}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-12 mt-2 border-b py-2">
        <div class="col-span-6 ">
          <p class="text-custom-lightblue">Total Hours</p>
          <p class="text-custom-darkblue md:text-xl font-semibold py-2">
            {{ bookings.total_hours }} hrs
          </p>
        </div>
        <div class="col-span-6 group">
          <div class="relative ">
            <p class="text-custom-lightblue py-1 inline">
              Total Amount
              <svg
                class="inline fill-current text-custom-lightblue ml-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g id="more_info_icon" transform="translate(-22666 2559)">
                  <g id="Group_1817" data-name="Group 1817">
                    <g
                      id="Ellipse_131"
                      data-name="Ellipse 131"
                      transform="translate(22666 -2559)"
                      fill="none"
                      stroke="#5F68A6"
                      stroke-width="2"
                    >
                      <circle cx="12" cy="12" r="12" stroke="none" />
                      <circle cx="12" cy="12" r="11" fill="none" />
                    </g>
                    <path
                      id="Path_3369"
                      data-name="Path 3369"
                      d="M0,0H24V24H0Z"
                      transform="translate(22666 -2559)"
                      fill="none"
                    />
                    <g
                      id="Group_1816"
                      data-name="Group 1816"
                      transform="translate(-2)"
                    >
                      <circle
                        id="Ellipse_128"
                        data-name="Ellipse 128"
                        cx="1.5"
                        cy="1.5"
                        r="1.5"
                        transform="translate(22673.5 -2548.5)"
                      />
                      <circle
                        id="Ellipse_129"
                        data-name="Ellipse 129"
                        cx="1.5"
                        cy="1.5"
                        r="1.5"
                        transform="translate(22678.5 -2548.5)"
                      />
                      <circle
                        id="Ellipse_130"
                        data-name="Ellipse 130"
                        cx="1.5"
                        cy="1.5"
                        r="1.5"
                        transform="translate(22683.5 -2548.5)"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </p>
            <div
              class="absolute -top-16 -left-32 2xl:left-32 border-2 border-custom-lightgreen py-4 px-7 w-52 md:w-80 text-custom-lightblue font-semibold bg-white hidden group-hover:block"
            >
              <div class="mb-4">
                <span
                  >Security
                  <svg
                    class="inline ml-0.5 md:ml-2"
                    id="check_circle_icon_dim"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      id="Path_3367"
                      data-name="Path 3367"
                      d="M0,0H24V24H0ZM0,0H24V24H0Z"
                      fill="none"
                    />
                    <path
                      id="Path_3368"
                      data-name="Path 3368"
                      d="M16.59,7.58,10,14.17,6.41,10.59,5,12l5,5,8-8ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                      fill="#5f68a6"
                    />
                  </svg>
                </span>
                <span class="float-right line-through"
                  >£{{ bookings.amount.security }}</span
                >
              </div>
              <div>
                <span
                  >Booking
                  <svg
                    class="inline ml-0.5 md:ml-2"
                    id="check_circle_icon_dim"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      id="Path_3367"
                      data-name="Path 3367"
                      d="M0,0H24V24H0ZM0,0H24V24H0Z"
                      fill="none"
                    />
                    <path
                      id="Path_3368"
                      data-name="Path 3368"
                      d="M16.59,7.58,10,14.17,6.41,10.59,5,12l5,5,8-8ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                      fill="#5f68a6"
                    />
                  </svg>
                </span>
                <span class="float-right line-through"
                  >£{{ bookings.amount.booking }}</span
                >
              </div>
            </div>
          </div>

          <p
            class="text-custom-darkblue md:text-xl font-semibold my-2 inline-block"
          >
            £{{ bookings.amount.total }}
          </p>
        </div>
      </div>
      <div class="float-right mt-3 md:mt-10 grid justify-items-center md:flex">
        <button
          class="border-custom-lightgray hover:bg-custom-lightblue w-full hover:border-transparent hover:text-white border px-5 py-2 my-1 md:my-0 font-semibold"
        >
          Decline
        </button>
        <button
          class="border-custom-lightgray hover:bg-custom-lightblue w-full hover:border-transparent hover:text-white border px-5 py-2 my-1 md:my-0 mx-8 font-semibold"
        >
          Accept
        </button>
        <div class="relative">
          <select
            class=" border-custom-lightgray border h-12 font-semibold px-4 w-56"
          >
            <option value="More Actions">More Actions</option>
            <option value="Ask Reschedule">Ask Reschedule</option>
            <option value="Cancel Booking">Cancel Booking</option>
            <option value="Download Invoice">Download Invoice</option>
          </select>
          <span class="absolute top-3 right-7 pointer-events-none">
            <svg
              class="fill-current hover:text-red-600"
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
      </div>
    </div>
  </vue-final-modal>
</template>
<script>
import { VueFinalModal } from "vue-final-modal";
export default {
  props: ["bookings"],
  components: {
    VueFinalModal,
  },
  inheritAttrs: false,
  emits: ["cancel", "confirm"],
};
</script>
