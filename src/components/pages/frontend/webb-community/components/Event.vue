<template>
  <div class="grid grid-cols-12 xl:gap-12 gap-4 mt-12">
    <EventCard
      v-for="card in cards"
      :key="card.id"
      :imgsrc="card.imgsrc"
      :name="card.name"
      :date="card.date"
      :heading="card.heading"
      :duration="card.duration"
      :location="card.location"
    />
  </div>
  <div class="text-center my-14 text-xl text-custom-lightgray">
    <i class="ri-arrow-left-s-line align-middle mx-4 text-custom-darkblue"> </i>
    <a href="#" class="mx-2 md:mx-4 text-custom-darkblue">1</a>
    <a href="#" class="mx-2 md:mx-4">2</a>
    <a href="#" class="mx-2 md:mx-4">3</a>
    <a href="#" class="mx-2 md:mx-4">4</a>
    <a href="#" class="mx-2 md:mx-4">5</a>
    <a href="#" class="mx-2 md:mx-4">6</a>
    <i class="ri-arrow-right-s-line align-middle mx-4 text-custom-darkblue"></i>
  </div>
</template>
<script>
import EventCard from "./EventCard";
export default {
  components: {
    EventCard,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          imgsrc: "/assets/user2.png",
          name: "Stephen Baker",
          date: "20 Dec 2020",
          heading: "The quick, brown fox jumps over a lazy dog. DJs flock.",
          duration: "1 Day Event",
          location: "Webb community Hall",
        },
        {
          id: 2,
          imgsrc: "/assets/user2.png",
          name: "Stephen Baker",
          date: "20 Dec 2020",
          heading: "The quick, brown fox jumps over a lazy dog. DJs flock.",
          duration: "1 Day Event",
          location: "Webb community Hall",
        },
        {
          id: 3,
          imgsrc: "/assets/user2.png",
          name: "Stephen Baker",
          date: "20 Dec 2020",
          heading: "The quick, brown fox jumps over a lazy dog. DJs flock.",
          duration: "1 Day Event",
          location: "Webb community Hall",
        },
        {
          id: 4,
          imgsrc: "/assets/user2.png",
          name: "Stephen Baker",
          date: "20 Dec 2020",
          heading: "The quick, brown fox jumps over a lazy dog. DJs flock.",
          duration: "1 Day Event",
          location: "Webb community Hall",
        },
        {
          id: 5,
          imgsrc: "/assets/user2.png",
          name: "Stephen Baker",
          date: "20 Dec 2020",
          heading: "The quick, brown fox jumps over a lazy dog. DJs flock.",
          duration: "1 Day Event",
          location: "Webb community Hall",
        },
        {
          id: 6,
          imgsrc: "/assets/user2.png",
          name: "Stephen Baker",
          date: "20 Dec 2020",
          heading: "The quick, brown fox jumps over a lazy dog. DJs flock.",
          duration: "1 Day Event",
          location: "Webb community Hall",
        },
      ],
    };
  },
};
</script>
<style></style>
