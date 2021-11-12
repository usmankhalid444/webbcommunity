<template>
  <div>
    <!-- intro -->
    <div class="w-full relative mb-14">
      <span
        @click="$emit('tab')"
        class="absolute right-0 md:right-auto md:-left-8 text-3xl cursor-pointer"
        ><i class="ri-arrow-left-line p-3"></i
      ></span>
      <h1 class="font-semibold text-4xl text-custom-darkblue pl-8">
        Financial Stats
      </h1>
    </div>
    <!--intro end  -->
    <div class="mb-8">
      <h3 class="inline text-2xl font-semibold">Overview</h3>
      <div
        class="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-7 gap-y-4 mt-8"
      >
        <div
          class="bg-white p-5 xl:py-7 border border-gray-300 hover:border-custom-darkblue hover:shadow"
        >
          <h3 class="text-34px font-semibold">£{{ overview.total_earned }}</h3>
          <p class="text-custom-lightblue font-semibold inline">
            Total Earned
          </p>
          <div class="inline relative">
            <select
              class="text-sm font-semibold border-none focus:ring-transparent"
            >
              <option value="Dec 20">Dec 20</option>
              <option value="Dec 20">Dec 20</option>
              <option value="Dec 20">Dec 20</option>
            </select>
            <span class="absolute right-3 top-0 pointer-events-none"
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
        </div>
        <div
          class="bg-white p-5 xl:px-6 xl:py-7 border border-gray-300 hover:border-custom-darkblue hover:shadow"
        >
          <h3 class="text-34px font-semibold">£{{ overview.total_pending }}</h3>
          <p class="text-custom-lightblue font-semibold">
            Total Pending
          </p>
        </div>
        <div
          class="bg-white p-5 xl:px-6 xl:py-7 border border-gray-300 hover:border-custom-darkblue hover:shadow"
        >
          <h3 class="text-34px font-semibold">£{{ overview.total_pending }}</h3>
          <p class="text-custom-lightblue font-semibold">
            Security Deposits
          </p>
        </div>
      </div>
    </div>
    <h4 class="text-2xl font-semibold">Total Earned</h4>
    <div class="relative inline text-custom-lightblue">
      <select
        class="font-semibold relative border-none bg-custom-lightgreen px-2 focus:ring-transparent "
      >
        <option value="December, 2020">Year 2020</option>
        <option value="January, 2021">Year 2021</option>
        <option value="January, 2021">Year 2022</option>
      </select>
      <span class="absolute -right-5 top-0 pointer-events-none"
        ><svg
          class="fill-current text-custom-lightblue"
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
</template>
<script>
export default {
  data() {
    return {
      overview: {
        total_earned: 8500,
        total_pending: 3450,
        security_deposite: 800,
      },
    };
  },
};
</script>
