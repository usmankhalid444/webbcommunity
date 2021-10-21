import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/pages/frontend/home/HomePage.vue";
import CommunityEvents from "../components/pages/frontend/community-events/CommunityEvents.vue";
import Signup from '../components/pages/frontend/signup/Signup.vue'
import Varification from '../components/pages/frontend/signup/components/Varification.vue'
const routes = [
  {
    path: "/",
    name: "Webb Community Hall",
    component: Home,
  },
  {
    path: "/communityEvents",
    name: "Community Events",
    component: CommunityEvents,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/varification",
    name: "Varification",
    component: Varification,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});
export default router;