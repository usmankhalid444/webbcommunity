<template>
  <div>
    <Header :darkHeader="darkHeder" />

    <!-- main page content will go here -->
    <slot></slot>

    <Footer />
  </div>
</template>
<script>
import Header from "./header/Header";
import Footer from "./Footer";
export default {
  props: ["darkHeder"],
  components: {
    Header,
    Footer,
  },
};
</script>
