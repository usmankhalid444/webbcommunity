<template>
  <Header darkHeader="true" />

  <div
    class="text-custom-darkblue bg-custom-lightgreen py-14 grid px-4  justify-items-center w-full h-full xl:fixed"
  >
    <div class="w-full md:w-1100p  text-custom-darkblue">
      <!-- title -->
      <div>
        <router-link to="createbooking">
          <span class="relative px-5 md:py-3 py-1.5">
            <svg
              class="absolute top-1"
              id="arrow_back_icon"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
            >
              <path
                id="Path_210"
                data-name="Path 210"
                d="M0,0H24V24H0Z"
                fill="none"
              />
              <path
                id="Path_211"
                data-name="Path 211"
                d="M20,11H7.83l5.59-5.59L12,4,4,12l8,8,1.41-1.41L7.83,13H20Z"
                fill="#00033c"
              />
            </svg>
          </span>
        </router-link>

        <h1 class="inline text-xl md:text-34px font-semibold ml-3">
          Booking Summary
        </h1>
      </div>
      <div class="grid grid-cols-12 mt-14 md:gap-x-10 gap-y-5 md:gap-y-0">
        <div
          class="col-span-12 md:col-span-7 bg-white border border-custom-lightgray p-12 shadow"
        >
          <h1 class="text-xl md:text-34px font-semibold">
            Children Activities
          </h1>
          <div class="mt-12 md:text-xl">
            <div class="my-5">
              <h3 class="inline text-custom-lightblue">Reference Number</h3>
              <p class="float-right">WC01</p>
            </div>
            <div class="my-5">
              <h3 class="inline text-custom-lightblue">Event Status</h3>
              <p class="float-right">Private</p>
            </div>
            <div class="my-5">
              <h3 class="inline text-custom-lightblue">Duration</h3>
              <p class="float-right">1 Day Event</p>
            </div>
            <div class="my-5">
              <h3 class="inline text-custom-lightblue">Guest No.</h3>
              <p class="float-right">20 Kids</p>
              <br />
              <div class="my-5">
                <p class="float-right">50 Adults</p>
              </div>
            </div>
            <br />

            <div class="my-6">
              <h3 class="inline text-custom-lightblue">Start</h3>
              <p class="float-right">15 Dec 2020</p>
              <br />
              <div class="mt-6">
                <h3 class="inline text-custom-lightblue">End</h3>

                <p class="float-right">15 Dec 2020</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-4">
          <div
            class="w-full bg-white border border-custom-lightgray py-7 shadow"
          >
            <div class="border-b border-custom-lightgray px-12 md:text-xl">
              <div class="my-5">
                <h3 class="inline">Bookings</h3>
                <p class="float-right">£45</p>
              </div>
              <div class="my-5 text-custom-lightblue opacity-70">
                <h3 class="inline line-through">
                  Security
                </h3>
                <span class="ml-1.5"
                  ><svg
                    class="inline"
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
                <p class="float-right line-through">£200</p>
              </div>
              <div class="mt-5 mb-8">
                <h3 class="inline">Payable</h3>
                <p class="float-right">£45</p>
              </div>
            </div>
            <div class="border-b border-custom-lightgray px-12 py-7 relative">
              <p class="text-custom-lightblue">To confirm your spot</p>
              <select
                class="w-full border-custom-lightgray border h-12 mt-4 font-semibold px-8"
              >
                <option value="Pay Booking Fee">Pay Booking Fee</option>
                <option value="Pay 2nd Instl.">Pay 2nd Instl.</option>
              </select>
              <span class="absolute right-20 bottom-10"
                ><svg
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
              </span>
            </div>
            <div class="mt-6 px-8 text-xl">
              <h3 class="inline">Due</h3>
              <p class="float-right">8 Dec 2020</p>
            </div>
          </div>
          <div class="mt-8">
            <button
              class="w-full bg-custom-purple text-white text-md font-semibold py-4 hover:bg-custom-lightblue"
            >
              Pay Amount - £45
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../../../../../layouts/frontend/header/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      bookingData: [
        { title: "Reference Number", value: "WC01" },
        { title: "Event Status", value: "Private" },
        { title: "Duration", value: "1 Day Event" },
        { title: "Guests No", value: [{ kids: "20" }, { adults: "50" }] },
        { title: "Start", value: "15 Dec 2020" },
        { title: "End", value: "16 Dec 2020" },
      ],
    };
  },
};
</script>
