<template>
  <div class="grid grid-cols-12 xl:gap-12 gap-4 mt-12">
    <NewsCard v-for="card in cards" :key="card.id" :news="card" />
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
import NewsCard from "./NewsCard";
export default {
  components: {
    NewsCard,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          imgsrc: "/assets/user.png",
          name: "John Andrews",
          date: "15 Dec 2020",
          heading: "Drug Activity happened inside the park today",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing consectetur. Iure eveniet atque assumenda Lorem ipsum dolor sit amet...",
        },
        {
          id: 2,
          imgsrc: "/assets/user.png",
          name: "John Andrews",
          date: "15 Dec 2020",
          heading: "Drug Activity happened inside the park today",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing consectetur. Iure eveniet atque assumenda Lorem ipsum dolor sit amet...",
        },
        {
          id: 3,
          imgsrc: "/assets/user.png",
          name: "John Andrews",
          date: "15 Dec 2020",
          heading: "Drug Activity happened inside the park today",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing consectetur. Iure eveniet atque assumenda Lorem ipsum dolor sit amet...",
        },
        {
          id: 4,
          imgsrc: "/assets/user.png",
          name: "John Andrews",
          date: "15 Dec 2020",
          heading: "Drug Activity happened inside the park today",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing consectetur. Iure eveniet atque assumenda Lorem ipsum dolor sit amet...",
        },
        {
          id: 5,
          imgsrc: "/assets/user.png",
          name: "John Andrews",
          date: "15 Dec 2020",
          heading: "Drug Activity happened inside the park today",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing consectetur. Iure eveniet atque assumenda Lorem ipsum dolor sit amet...",
        },
        {
          id: 6,
          imgsrc: "/assets/user.png",
          name: "John Andrews",
          date: "15 Dec 2020",
          heading: "Drug Activity happened inside the park today",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing consectetur. Iure eveniet atque assumenda Lorem ipsum dolor sit amet...",
        },
      ],
    };
  },
};
</script>
<style></style>
