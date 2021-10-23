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

    <div class="text-center my-14 text-xl text-custom-lightgray">
      <i class="ri-arrow-left-s-line align-middle mx-4 text-custom-darkblue">
      </i>
      <a href="#" class="mx-2 md:mx-4 text-custom-darkblue">1</a>
      <a href="#" class="mx-2 md:mx-4">2</a>
      <a href="#" class="mx-2 md:mx-4">3</a>
      <a href="#" class="mx-2 md:mx-4">4</a>
      <a href="#" class="mx-2 md:mx-4">5</a>
      <a href="#" class="mx-2 md:mx-4">6</a>
      <i
        class="ri-arrow-right-s-line align-middle mx-4 text-custom-darkblue"
      ></i>
    </div>
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
