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
    <BtnLg text="get directions" />
  </div>
</template>
<script>
import Intro from "../../../../global-components/Intro.vue";
import BtnLg from "../../../../global-components/BtnLg";
export default {
  components: {
    Intro,
    BtnLg,
  },
};
</script>
<style></style>
