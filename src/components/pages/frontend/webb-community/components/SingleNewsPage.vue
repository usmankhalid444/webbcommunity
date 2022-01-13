<template>
  <FrontendMain :darkHeder="true">
    <div
      class="text-custom-darkblue py-10 md:py-16 px-5 md:px-0 lg:w-800p xl:w-1100p mx-auto"
    >
      <p class="text-custom-lightblue text-xl">15 Dec 2020</p>
      <h1 class="text-3xl md:text-6xl font-semibold mt-8">
        Drug Activity happened inside the park today.
      </h1>
      <div class="py-14">
        <img
          class="inline w-11 h-11 rounded-full"
          src="/assets/user.png"
          alt="userimage"
        />
        <p class="inline px-5 font-semibold text-xl">John Andrews</p>
      </div>
      <p class="text-xl md:text-2xl">
        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
        quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz,
        vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab
        quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens
        jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim.
        <br /><br />
        Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV
        quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my
        big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!"
        my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by
        job.
      </p>
      <!-- releated news section -->
      <div class=" py-12">
        <h1 class="text-3xl md:text-5xl font-semibold inline">Related News</h1>
        <p class="float-right inline">
          <i
            @click="prev_slide()"
            class="ri-arrow-left-s-line text-3xl px-2 text-custom-lightgray hover:text-custom-darkblue cursor-pointer"
          ></i
          ><i
            @click="next_slide()"
            class="ri-arrow-right-s-line text-3xl px-2 text-custom-lightgray hover:text-custom-darkblue cursor-pointer"
          ></i>
        </p>
      </div>
      <!-- <div class="grid grid-cols-12 gap-5 md:gap-x-14">
        <RelatedNewsCard />
        <RelatedNewsCard />
      </div> -->
      <section class="px-5">
        <carousel
          ref="news_slider"
          :items-to-show="2.5"
          snapAlign="start"
          transition="1000"
          :breakpoints="breakpoints"
        >
          <slide v-for="slide in 10" :key="slide">
            <RelatedNewsCard />
          </slide>
        </carousel>
      </section>
    </div>
  </FrontendMain>
</template>
<script>
import "vue3-carousel/dist/carousel.css"; //https://ismail9k.github.io/vue3-carousel/
import { Carousel, Slide } from "vue3-carousel";
import RelatedNewsCard from "./RelatedNewsCard";
export default {
  components: {
    RelatedNewsCard,
    Carousel,
    Slide,
  },
  data() {
    return {
      breakpoints: {
        // 700px and up
        0: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        480: {
          itemsToShow: 2,
          snapAlign: "start",
        },
        // 1024 and up
        1024: {
          itemsToShow: 2.5,
          snapAlign: "start",
        },
      },
    };
  },
  methods: {
    next_slide() {
      this.$refs.news_slider.next();
    },
    prev_slide() {
      this.$refs.news_slider.prev();
    },
  },
};
</script>
<style>
.carousel__slide {
  padding: 10px;
}
.carousel__prev,
.carousel__next {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
