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
