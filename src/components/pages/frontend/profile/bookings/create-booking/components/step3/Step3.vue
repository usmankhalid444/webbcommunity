<template>
  <div>
    <div class="w-full relative">
      <p class="font-semibold">Recurring Event</p>
      <select
        @change="onChange($event)"
        name="status"
        class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8 appearance-none"
      >
        <option value="1 Day Event">1 Day Event</option>
        <option value="1 Day Plus Event">1 Day Plus Event</option>
        <option value="Repeat Weekly">Repeat Weekly</option>
        <option value="Repeat Monthly">Repeat Monthly</option>
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
    <RepeatWeekly v-if="recurringEvent == 'weekly'" />
    <RepeatMonthly v-if="recurringEvent == 'monthly'" />
    <button
      @click="nextStep('step3Part2')"
      class="bg-custom-purple hover:bg-custom-lightblue font-semibold text-white w-full h-16 my-10"
    >
      CONTINUE
    </button>
  </div>
</template>
<script>
import RepeatWeekly from "./RepeatWeekly";
import RepeatMonthly from "./RepeatMonthly";
export default {
  data() {
    return {
      recurringEvent: "",
    };
  },
  components: {
    RepeatWeekly,
    RepeatMonthly,
  },
  methods: {
    nextStep(currentStep) {
      this.$emit("nextStep", currentStep);
    },
    onChange(event) {
      if (event.target.value == "Repeat Weekly") {
        return (this.recurringEvent = "weekly");
      } else if (event.target.value == "Repeat Monthly") {
        return (this.recurringEvent = "monthly");
      } else {
        return (this.recurringEvent = "");
      }

      // console.log(event.target.value);
    },
  },
};
</script>
