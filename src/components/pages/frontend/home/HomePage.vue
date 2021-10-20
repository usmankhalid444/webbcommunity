<template>
  <!-- header start -->
  <Header />
  <!-- hero start -->
  <Hero />
  <div class="container mx-auto lg:w-800p xl:w-1100p">
    <!-- halls section start -->
    <Hall />
    <!-- booking calender start -->
    <BookingCalender />
    <!-- Location start -->
    <Location />
  </div>
  <!-- news letter start -->
  <NewsLetter />
  <!-- footer start -->
  <Footer />
</template>

<script>
import Header from "../../../layouts/frontend/Header";
import Hero from "./components/Hero";
import Hall from "./components/Hall";
import BookingCalender from "./components/BookingCalender";
import Location from "./components/Location";
import NewsLetter from "./components/NewsLetter";
import Footer from "../../../layouts/frontend/Footer";
export default {
  name: "HomePage",
  components: {
    Header,
    Hero,
    Hall,
    BookingCalender,
    Location,
    NewsLetter,
    Footer,
  },
};
</script>
