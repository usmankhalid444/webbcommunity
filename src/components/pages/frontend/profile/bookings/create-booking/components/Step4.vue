<template>
  <div class="w-full relative">
    <p class="font-semibold text-custom-lightblue">Date and Time</p>
    <input
      class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8"
      type="datetime-local"
      value="21 Dec 2020, 02:00 PM"
    />
    <button
      @click="nextStep('step4')"
      class="bg-custom-purple hover:bg-custom-lightblue font-semibold text-white w-full h-16 my-10"
    >
      SEND BOOKING REQUEST4
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
