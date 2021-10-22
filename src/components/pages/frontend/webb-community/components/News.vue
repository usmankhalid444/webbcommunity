<template>
  <div class="grid grid-cols-12 xl:gap-12 gap-4 mt-12">
    <Card imgsrc="" name="" date="" heading="" info="" />
  </div>
</template>
<script>
import Card from "./Card";
export default {
  components: {
    Card,
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
