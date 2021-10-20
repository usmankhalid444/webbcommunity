import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/pages/frontend/home/HomePage.vue";
import CommunityEvents from "../components/pages/frontend/community-events/CommunityEvents.vue";

const routes = [
  {
    path: "/",
    name: "communityevents",
    component: Home,
  },
  {
    path: "/communityEvents",
    name: "communityEvents",
    component: CommunityEvents,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;