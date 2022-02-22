<template>
  <div class="w-full xl:w-10/12 2xl:w-full  ">
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
      <div class="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-7 gap-y-4 mt-8">
        <div
          class="bg-white p-5 xl:py-7 border border-gray-300 hover:border-custom-darkblue hover:shadow"
        >
          <h3 class="text-34px font-semibold">£{{ overview.total_earned }}</h3>
          <p class="text-custom-lightblue font-semibold inline">
            Total Earned
          </p>
          <div class="inline relative">
            <select class="text-sm font-semibold border-none focus:ring-transparent">
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
                <path id="Path_117" data-name="Path 117" d="M0,0H24V24H0Z" fill="none" />
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
          <path id="Path_117" data-name="Path 117" d="M0,0H24V24H0Z" fill="none" />
          <path
            id="Path_118"
            data-name="Path 118"
            d="M7.41,8.59,12,13.17l4.59-4.58L18,10l-6,6L6,10Z"
          />
        </svg>
      </span>
    </div>
    <!-- chart start -->
    <div class="mt-3">
      <Chart :options="chartOptions"></Chart>
    </div>
    <!-- chart end -->
    <!-- sidebar start -->
    <div
      class="fixed h-screen right-0 border top-16 xl:w-72 2xl:w-80 bg-white p-5 overflow-auto hidden xl:block "
    >
      <div class="my-5">
        <span class="text-2xl font-semibold">Bookings</span
        ><span
          class="text-custom-purple text-lg underline xl:mx-3 2xl:mx-6 cursor-pointer block xl:inline"
          >Full View</span
        >
        <div class="relative inline">
          <select
            class="text-custom-lightblue font-semibold relative -left-2 border-none focus:ring-transparent mt-1"
          >
            <option value="Wednesday, 21 Dec">Wednesday, 21 Dec</option>
            <option value="Wednesday, 22 Dec">Wednesday, 22 Dec</option>
            <option value="Wednesday, 23 Dec">Wednesday, 23 Dec</option>
          </select>
          <span class="absolute right-5 top-0 pointer-events-none"
            ><svg
              class="fill-current text-custom-lightblue"
              id="arrow_down_icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path id="Path_117" data-name="Path 117" d="M0,0H24V24H0Z" fill="none" />
              <path
                id="Path_118"
                data-name="Path 118"
                d="M7.41,8.59,12,13.17l4.59-4.58L18,10l-6,6L6,10Z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div class="space-y-4 2xl:pb-16 ">
        <div class="bg-custom-lightgreen border border-gray-300 text-lg  2xl:text-xl">
          <p class="border-b border-gray-300 py-3 px-5 font-semibold">
            Children Activities
          </p>
          <div class="space-y-1.5 py-3 px-5">
            <p class="text-custom-lightblue"><span>10:00 AM</span>- <span>11:00 AM</span></p>
            <p class="text-custom-lightblue"><span>12:00 AM</span>- <span>01:00 PM</span></p>
            <p class="text-custom-lightblue"><span>02:00 PM</span>- <span>03:00 PM</span></p>
          </div>
        </div>
        <div class="bg-custom-lightgreen border border-gray-300 text-lg  2xl:text-xl">
          <p class="border-b border-gray-300 py-3 px-5 font-semibold">
            Wedding Ceremony
          </p>
          <div class="space-y-1.5 py-3 px-5">
            <p class="text-custom-lightblue"><span>08:00 AM</span>- <span>10:00 AM</span></p>
          </div>
        </div>
      </div>
    </div>
    <!-- sidebar end -->
  </div>
</template>
<script>
import { Chart } from "highcharts-vue";
export default {
  components: { Chart },
  data() {
    return {
      earning_data: [1300, 1450, 1100, 1200, 1050, 1380, 950, 1250, 1370, 1180, 1300, 1150],
      overview: {
        total_earned: 8500,
        total_pending: 3450,
        security_deposite: 800,
      },
    };
  },
  computed: {
    chartOptions() {
      return {
        chart: {
          type: "column",
          borderColor: "#D1D5DB",
          borderWidth: 1,
        },
        credits: {
          enabled: false,
        },
        tooltip: { enabled: false },
        title: {
          text: null,
        },
        xAxis: {
          labels: {
            style: {
              color: "#00033C",
              fontWeight: "bold",
            },
          },
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          crosshair: true,
        },
        yAxis: {
          visible: false,
          title: {
            text: null,
          },
          labels: {
            enabled: false,
          },
        },
        legend: { enabled: false },

        plotOptions: {
          series: {
            pointWidth: 60,
            dataLabels: { enabled: true, outside: true, color: "#6168A4", format: "£ {y}" },
          },
          column: {
            borderWidth: 0,
            color: "#9FA4C8",
          },
        },
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 700,
              },
              chartOptions: {
                series: {
                  pointWidth: 45,
                },
              },
            },
          ],
        },
        series: [
          {
            data: this.earning_data,
          },
        ],
      };
    },
  },
};
</script>
