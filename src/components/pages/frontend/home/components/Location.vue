<template>
  <intro
    heading="location"
    info="Lorem ipsum dolor . Repudiandae, eius magni fugit, neque eum
      quam a iste similique uam a iste similique ipsum et sint,a iste similique
      ipsum et sint."
  />
  <div class="grid justify-self-center justify-items-center ">
    <img src="/assets/map.png" alt="map" />
  </div>
  <div class="grid justify-self-center justify-items-center py-12">
    <button
      class="bg-custom-purple hover:bg-custom-lightblue w-72 md:w-96 h-14 uppercase font-semibold text-white"
    >
      get directions
    </button>
  </div>
</template>
<script>
import Intro from "../../../../global-components/Intro.vue";
export default {
  components: {
    Intro,
  },
};
</script>
<style></style>
