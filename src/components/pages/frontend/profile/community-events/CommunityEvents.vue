<template>
  <Header :darkHeader="true" />
  <UserSideMenu> </UserSideMenu>
  <Events />
</template>
<script>
import Header from "../../../../layouts/frontend/Header";
import Events from "./components/Events";
export default {
  components: {
    Header,
    Events,
  },
};
</script>
