<template>
  <div>
    <AdminProfileLayout>
      <!-- intro -->
      <div class="w-full relative  mb-14">
        <router-link to="admin-dashboard">
          <span class="absolute right-0 md:right-auto md:-left-14 text-3xl"
            ><i class="ri-arrow-left-line p-3"></i
          ></span>
        </router-link>
        <h1 class="font-semibold text-4xl text-custom-darkblue">
          Hiring Prices
        </h1>
      </div>
      <form>
        <div
          class="grid grid-cols-12 text-custom-darkblue gap-x-4 md:gap-x-12 md:pb-10"
        >
          <div class="col-span-12 md:col-span-6 relative mb-5">
            <p class="font-semibold inline">
              Commercial Customer
            </p>
            <input
              class="w-full border-custom-lightgray border h-14 my-4 font-semibold pl-8  pr-16"
              type="text"
              value="£20"
            />
            <span class="absolute top-14 right-8">
              <p class="text-custom-lightblue">per hour</p>
            </span>
          </div>
          <div class="col-span-12 md:col-span-6 relative mb-5">
            <p class="font-semibold inline">
              Private Customer (Resident)
            </p>

            <input
              class="w-full border-custom-lightgray border h-14 my-4 font-semibold pl-8  pr-16"
              type="text"
              value="£15"
            />
            <span class="absolute top-14 right-8">
              <p class="text-custom-lightblue">per hour</p>
            </span>
          </div>
          <div class="col-span-12 md:col-span-6 mb-5">
            <p class="text-custom-darkblue font-semibold py-3">Minimum Days</p>
            <p class="font-semibold text-custom-lightblue">
              Choose the minimum days till the Resident will be considered as a
              private customer.
            </p>
            <div class="relative">
              <select
                name="status"
                class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8 appearance-none"
              >
                <option value="1 Day">1 Day</option>
                <option value="2 Days">2 Days</option>
                <option value="3 Days">3 Days</option>
              </select>
              <span class="absolute top-8 right-5">
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
          </div>
          <div class="col-span-6"></div>
          <div class="col-span-12 md:col-span-6 mb-5 md:mt-3">
            <button
              type="submit"
              class="bg-custom-purple hover:bg-custom-lightblue font-semibold text-white w-full h-14"
            >
              SAVE CHANGES
            </button>
          </div>
        </div>
      </form>
    </AdminProfileLayout>
  </div>
</template>
<script>
export default {};
</script>
