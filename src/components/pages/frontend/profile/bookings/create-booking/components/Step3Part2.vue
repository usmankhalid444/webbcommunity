<template>
  <div>
    <div class="w-full">
      <p class="font-semibold">How many guests are invited?</p>
      <input
        class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8"
        type="text"
        placeholder="No. of Adults"
      />
      <input
        class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8"
        type="text"
        placeholder="No. of Kids"
      />
    </div>
    <button
      @click="nextStep('step4')"
      class="bg-custom-purple hover:bg-custom-lightblue font-semibold text-white w-full h-16 my-5"
    >
      CONTINUE3
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
