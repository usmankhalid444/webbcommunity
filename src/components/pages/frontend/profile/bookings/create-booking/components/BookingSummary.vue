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
              <path id="Path_210" data-name="Path 210" d="M0,0H24V24H0Z" fill="none" />
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
        <div class="col-span-12 md:col-span-7 bg-white border border-custom-lightgray p-12 shadow">
          <h1 class="text-xl md:text-34px font-semibold">
            Children Activities
          </h1>
          <div class="mt-12 md:text-xl">
            <div class="my-5">
              <h3 class="inline text-custom-lightblue">Reference Number</h3>
              <p class="float-right">{{ bookingSummary.reference_no }}</p>
            </div>
            <div class="my-5">
              <h3 class="inline text-custom-lightblue">Event Status</h3>
              <p class="float-right">{{ bookingSummary.event_status }}</p>
            </div>
            <div class="my-5">
              <h3 class="inline text-custom-lightblue">Duration</h3>
              <p class="float-right">{{ bookingSummary.duration }}t</p>
            </div>
            <div class="my-5">
              <h3 class="inline text-custom-lightblue">Guest No.</h3>
              <p class="float-right">{{ bookingSummary.guests.kids }} Kids</p>
              <br />
              <div class="my-5">
                <p class="float-right">{{ bookingSummary.guests.adults }} Adults</p>
              </div>
            </div>
            <br />
            <div class="my-6">
              <h3 class="inline text-custom-lightblue">Start</h3>
              <p class="float-right">{{ bookingSummary.start }}</p>
              <br />
              <div class="mt-6">
                <h3 class="inline text-custom-lightblue">End</h3>

                <p class="float-right">{{ bookingSummary.end }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-4">
          <div class="w-full bg-white border border-custom-lightgray py-7 shadow">
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
            <div class="border-b border-custom-lightgray px-12 py-7">
              <p class="text-custom-lightblue">To confirm your spot</p>
              <button
                @click="full_amount = !full_amount"
                class="border border-custom-lightgray w-full py-3 px-5 mt-4 font-semibold relative"
              >
                Pay Full Amount
                <span class="absolute left-3.5 top-3"
                  ><svg
                    :class="full_amount ? 'hidden' : 'block'"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g id="uncheck_circle_icon" transform="translate(-19524 4739)">
                      <path
                        id="Path_3444"
                        data-name="Path 3444"
                        d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                        transform="translate(19524 -4739)"
                        fill="#00033c"
                      />
                      <rect
                        id="Rectangle_2745"
                        data-name="Rectangle 2745"
                        width="24"
                        height="24"
                        transform="translate(19524 -4739)"
                        fill="none"
                      />
                    </g>
                  </svg>
                  <svg
                    :class="full_amount ? 'block' : 'hidden'"
                    id="check_circle_icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path id="Path_121" data-name="Path 121" d="M0,0H24V24H0Z" fill="none" />
                    <path
                      id="Path_122"
                      data-name="Path 122"
                      d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM10,17,5,12l1.41-1.41L10,14.17l7.59-7.59L19,8Z"
                      fill="#00033c"
                    />
                  </svg>
                </span>
              </button>
              <button
                @click="installment = !installment"
                class="border border-custom-lightgray w-full py-3 px-5 mt-4 font-semibold relative"
              >
                Pay 1nd Instl
                <span class="absolute left-3.5 top-3"
                  ><svg
                    :class="installment ? 'hidden' : 'block'"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g id="uncheck_circle_icon" transform="translate(-19524 4739)">
                      <path
                        id="Path_3444"
                        data-name="Path 3444"
                        d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                        transform="translate(19524 -4739)"
                        fill="#00033c"
                      />
                      <rect
                        id="Rectangle_2745"
                        data-name="Rectangle 2745"
                        width="24"
                        height="24"
                        transform="translate(19524 -4739)"
                        fill="none"
                      />
                    </g>
                  </svg>
                  <svg
                    :class="installment ? 'block' : 'hidden'"
                    id="check_circle_icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path id="Path_121" data-name="Path 121" d="M0,0H24V24H0Z" fill="none" />
                    <path
                      id="Path_122"
                      data-name="Path 122"
                      d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM10,17,5,12l1.41-1.41L10,14.17l7.59-7.59L19,8Z"
                      fill="#00033c"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div class="mt-6 px-8 text-xl font-semibold">
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
      installment: false,
      full_amount: false,
      bookingSummary: {
        reference_no: "WC01",
        event_status: "Private",
        duration: "1 Day Event",
        guests: { kids: 20, adults: 50 },
        start: "15 Dec 2020",
        end: "16 Dec 2020",
      },
    };
  },
};
</script>
