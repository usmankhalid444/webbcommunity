<template>
  <Header darkHeader="true" />
  <div
    class="bg-custom-lightgreen md:py-20 grid  justify-items-center md:p-0 p-5 w-full h-full md:fixed"
  >
    <div class="w-full md:w-563px  text-custom-darkblue ">
      <!-- heading -->
      <h1 class="text-center font-semibold text-34px mb-12">New Booking</h1>
      <Step1
        :nextstep="(currentStep = 'step1')"
        v-if="currentStep == 'step1'"
      />
      <Step2
        :nextstep="(currentStep = 'step2')"
        v-if="currentStep == 'step2'"
      />
      <Step3
        :nextstep="(currentStep = 'step3')"
        v-if="currentStep == 'step3'"
      />
      <Step3Part2
        :nextstep="(currentStep = 'step3Part2')"
        v-if="currentStep == 'step3Part2'"
      />
      <Step4
        :nextstep="(currentStep = 'step4')"
        v-if="currentStep == 'step4'"
      />
    </div>
  </div>
</template>
<script>
import Header from "../../../../../layouts/frontend/header/Header";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step3Part2 from "./components/Step3Part2";
import Step4 from "./components/Step4";
export default {
  data() {
    return {
      currentStep: "step1",
    };
  },
  components: {
    Header,
    Step1,
    Step2,
    Step3,
    Step3Part2,
    Step4,
  },
};
</script>
