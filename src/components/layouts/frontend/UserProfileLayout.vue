<template>
  <Header darkHeader="true" />
  <UserSideMenu />

  <!-- user profile content goes here -->
  <div
    class="bg-custom-lightgreen p-3 md:p-14 w-full md:w-auto md:ml-72 h-screen"
  >
    <slot></slot>
  </div>
</template>
<script>
import Header from "./Header";
import UserSideMenu from "../../global-components/UserSideMenu";
export default {
  components: {
    Header,
    UserSideMenu,
  },
  data() {
    return {
      bookingsDropdown: false,
      webbcommunityDropdown: false,
    };
  },
};
</script>
