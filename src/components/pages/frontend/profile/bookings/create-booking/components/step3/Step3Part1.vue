<template>
  <div>
    <div class="w-full relative">
      <p class="font-semibold">How many days a month?</p>
      <select
        name="status"
        class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8 appearance-none"
      >
        <option value="1 Day a Month">1 Day a Month</option>
        <option value="2 Days a Month">2 Days a Month</option>
        <option value="3 Days a Month">3 Days a Month</option>
        <option value="4 Days a Month">4 Days a Month</option>
        <option value="5 Days a Month">5 Days a Month</option>
        <option value="6 Days a Month">6 Days a Month</option>
      </select>
      <span class="absolute top-14 right-5 pointer-events-none">
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
    <button
      @click="nextStep('step3Part2')"
      class="bg-custom-purple hover:bg-custom-lightblue font-semibold text-white w-full h-16 my-10"
    >
      CONTINUE
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    nextStep(currentStep) {
      this.$emit("nextStep", currentStep);
    },
  },
};
</script>
