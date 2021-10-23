<template>
  <div>
    <FrontendMain :darkHeder="false">
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
    </FrontendMain>
  </div>
</template>

<script>
import Hero from "./components/Hero";
import Hall from "./components/Hall";
import BookingCalender from "./components/BookingCalender";
import Location from "./components/Location";
import NewsLetter from "./components/NewsLetter";
export default {
  name: "HomePage",
  components: {
    Hero,
    Hall,
    BookingCalender,
    Location,
    NewsLetter,
  },
};
</script>
