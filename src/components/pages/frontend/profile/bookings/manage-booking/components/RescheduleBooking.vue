<template>
  <div>
    <UserProfileLayout>
      <!-- intro -->
      <div class="w-full relative  mb-14">
        <router-link to="managebookings">
          <span
            class="absolute right-0 md:right-auto md:-left-14 text-3xl -top-12 md:top-0"
            ><i class="ri-arrow-left-line p-3"></i
          ></span>
        </router-link>
        <h1 class="font-semibold text-4xl text-custom-darkblue">
          Reschedule Booking
        </h1>
      </div>
      <form>
        <div
          class="grid grid-cols-12 text-custom-darkblue gap-x-4 md:gap-x-12 md:pb-10"
        >
          <div class="col-span-12 md:col-span-6 relative mb-5">
            <p class="font-semibold text-custom-lightblue">Booking Type</p>
            <select
              name="status"
              class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8 appearance-none"
            >
              <option value="Children Activities">Children Activities</option>
              <option value="Planning Duty Desk">Planning Duty Desk</option>
              <option value="Benefits">Benefits</option>
              <option value="Housing Advise">Housing Advise</option>
            </select>
            <span class="absolute top-14 right-5">
              <svg
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

          <div class="col-span-12 md:col-span-6 relative mb-5">
            <p class="font-semibold text-custom-lightblue">Event Status</p>
            <select
              name="status"
              class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8 appearance-none"
            >
              <option value="Private">Private</option>
              <option value="2 Day Event">2 Day Event</option>
              <option value="3 Day Event">3 Day Event</option>
            </select>
            <span class="absolute top-14 right-5">
              <svg
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
          <div class="col-span-12 md:col-span-6 mb-5">
            <p class="font-semibold text-custom-lightblue">
              How many adults are invited?
            </p>
            <input
              class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8"
              type="text"
              value="50"
            />
          </div>
          <div class="col-span-12 md:col-span-6 mb-5">
            <p class="font-semibold text-custom-lightblue">
              How many kids are invited?
            </p>
            <input
              class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8"
              type="text"
              value="20"
            />
          </div>
          <div class="col-span-12 md:col-span-6 relative mb-5">
            <p class="font-semibold text-custom-lightblue">Recurring Event</p>
            <select
              name="status"
              class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8 appearance-none"
            >
              <option value="1 Day Event">1 Day Evente</option>
              <option value="2 Day Event">2 Day Event</option>
              <option value="3 Day Event">3 Day Event</option>
            </select>
            <span class="absolute top-14 right-5">
              <svg
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
          <div class="col-span-12 md:col-span-6 mb-5">
            <p class="font-semibold text-custom-lightblue">Date and Time</p>
            <input
              class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8"
              type="date"
              value="21 Dec 2020, 02:00 PM"
            />
          </div>
          <div class="col-span-12 md:col-span-6 mb-5 md:mt-3">
            <button
              type="submit"
              class="bg-custom-purple hover:bg-custom-lightblue font-semibold text-white w-full h-14"
            >
              SUBMIT EVENT
            </button>
          </div>
        </div>
      </form>
    </UserProfileLayout>
  </div>
</template>
<script>
export default {};
</script>
