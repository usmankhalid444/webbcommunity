import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/pages/frontend/home/HomePage.vue";
import CommunityEvents from "../components/pages/frontend/profile/community-events/CommunityEvents.vue";
import Signup from '../components/pages/frontend/signup/Signup.vue'
import Verification from '../components/pages/frontend/signup/components/Verification.vue'
import Verified from '../components/pages/frontend/signup/components/Verified.vue'
import Login from '../components/pages/frontend/login/Login.vue'
import ForgotPassword from '../components/pages/frontend/login/components/ForgotPassword.vue'
import WebbCommunity from '../components/pages/frontend/webb-community/WebbCommunity.vue'
import SingleNewsPage from '../components/pages/frontend/webb-community/components/SingleNewsPage'
import MyProfile from '../components/pages/frontend/profile/my-profile/MyProfile'
import NumberVerification from '../components/pages/frontend/profile/my-profile/components/NumberVerification'
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
  {
    path: "/webbcommunity",
    name: "Webb Communit",
    component: WebbCommunity,
  },
  {
    path: "/singlenewspage",
    name: "Single news page",
    component: SingleNewsPage,
  },
  {
    path: "/myprofile",
    name: "My Profile",
    component: MyProfile,
  },
  {
    path: "/numberverification",
    name: "Number Verification",
    component: NumberVerification,
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