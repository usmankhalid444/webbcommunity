import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/pages/frontend/home/HomePage.vue";
import CommunityEvents from "../components/pages/frontend/community-events/CommunityEvents.vue";
import Signup from '../components/pages/frontend/signup/Signup.vue'
import Verification from '../components/pages/frontend/signup/components/Verification.vue'
import Verified from '../components/pages/frontend/signup/components/Verified.vue'
import Login from '../components/pages/frontend/login/Login.vue'
import ForgotPassword from '../components/pages/frontend/login/components/ForgotPassword.vue'
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
    path: "/verification",
    name: "verification",
    component: Verification,
  },
  {
    path: "/verified",
    name: "verified",
    component: Verified,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/forgotpassword",
    name: "forgot password",
    component: ForgotPassword,
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