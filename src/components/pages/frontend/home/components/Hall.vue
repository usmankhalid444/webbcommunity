<template>
  <Intro
    heading="Multi-Purpose Hall"
    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudian
      consectetur adipisicing elit sint,a iste similique
      ipsum et sint."
  />
  <div class="grid grid-cols-12 xl:gap-10 gap-4">
    <Card
      imgsrc="/assets/card1.png"
      title="Lorem ipsum consectetur amet
      adipisicing"
    />

    <Card
      imgsrc="/assets/card2.png"
      title="Lorem ipsum consectetur amet
      adipisicing"
    />

    <Card
      imgsrc="/assets/card3.png"
      title="Lorem ipsum consectetur amet
      adipisicing"
    />
  </div>
</template>
<script>
import Intro from "../../../../global-components/Intro.vue";
import Card from "./Card";
export default {
  components: {
    Intro,
    Card,
  },
};
</script>
