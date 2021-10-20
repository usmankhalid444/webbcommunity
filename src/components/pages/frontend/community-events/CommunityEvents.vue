<template>
  <Header headerClasses="text-white bg-custom-darkblue" />
  <UserDashboard />
  <Events />
</template>
<script>
import Header from "../../../layouts/frontend/Header";
import UserDashboard from "../../../global-components/UserDashboard";
import Events from "./components/Events";
export default {
  components: {
    Header,
    UserDashboard,
    Events,
  },
};
</script>
