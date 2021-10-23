<template>
  <Header headerClasses="text-white bg-custom-darkblue" />

  <div
    class="container mx-auto lg:w-800p xl:w-1100p text-custom-darkblue px-2 md:px-0"
  >
    <Intro
      heading="Webb Community"
      info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
    />
    <div class="text-center text-xl font-semibold">
      <p
        class="inline px-4 cursor-pointer"
        :class="!showEvent ? 'text-custom-lightgray' : 'text-custom-darkblue'"
        @click="showEvent = !showEvent"
      >
        News
      </p>
      <p
        class="inline px-4 cursor-pointer"
        :class="!showEvent ? 'text-custom-darkblue' : 'text-custom-lightgray'"
        @click="showEvent = !showEvent"
      >
        Events
      </p>
    </div>
    <News v-if="showEvent" />
    <Event v-if="!showEvent" />
  </div>
</template>
<script>
import Header from "../../../layouts/frontend/Header";
import Intro from "../../../global-components/Intro";
import News from "./components/News";
import Event from "./components/Event";
export default {
  data() {
    return {
      showEvent: true,
    };
  },
  components: {
    Header,
    Intro,
    News,
    Event,
  },
};
</script>
<style></style>
