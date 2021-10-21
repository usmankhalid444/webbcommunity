<template>
  <Header headerClasses="text-white bg-custom-darkblue" />
  <UserSideMenu />
  <Events />
</template>
<script>
import Header from "../../../layouts/frontend/Header";
import UserSideMenu from "../../../global-components/UserSideMenu";
import Events from "./components/Events";
export default {
  components: {
    Header,
    UserSideMenu,
    Events,
  },
};
</script>
