import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/pages/frontend/home/HomePage.vue";
import Signup from '../components/pages/frontend/signup/Signup.vue';
import Verification from '../components/pages/frontend/signup/components/Verification.vue';
import Verified from '../components/pages/frontend/signup/components/Verified.vue';
import Login from '../components/pages/frontend/login/Login.vue';
import ForgotPassword from '../components/pages/frontend/login/components/ForgotPassword.vue';
import WebbCommunity from '../components/pages/frontend/webb-community/WebbCommunity.vue';
import SingleNewsPage from '../components/pages/frontend/webb-community/components/SingleNewsPage';
import MyProfile from '../components/pages/frontend/profile/my-profile/MyProfile';
import NumberVerification from '../components/pages/frontend/profile/my-profile/components/NumberVerification';
import EditProfile from '../components/pages/frontend/profile/my-profile/EditProfile';
import HackneyCouncil from '../components/pages/frontend/profile/hackney-council/HackneyCouncil';
import CreateHC from '../components/pages/frontend/profile/hackney-council/components/CreateHC';
import Events from '../components/pages/frontend/profile/events/Events';
import CreateEvent from '../components/pages/frontend/profile/events/components/CreateEvent';
import Reports from '../components/pages/frontend/profile/Reports/Reports';
import CreateReport from '../components/pages/frontend/profile/Reports/components/CreateReport';
import Practice from '../components/layouts/frontend/profile-layout/components/Practice';
import ManageBooking from '../components/pages/frontend/profile/bookings/manage-booking/ManageBooking';
import RescheduleBooking from '../components/pages/frontend/profile/bookings/manage-booking/components/RescheduleBooking';
import CreateBooking from '../components/pages/frontend/profile/bookings/create-booking/CreateBooking';
import CalenderOneDay from '../components/pages/frontend/profile/bookings/create-booking/components/CalenderOneDay'
import Notification from '../components/pages/frontend/profile/notifications/Notification'
import CalenderOneDayPlus from '../components/pages/frontend/profile/bookings/create-booking/components/CalenderOneDayPlus'
import CalenderWeekly from '../components/pages/frontend/profile/bookings/create-booking/components/CalenderWeekly'
import CalenderMonthly from '../components/pages/frontend/profile/bookings/create-booking/components/CalenderMonthly'

const routes = [
  {  
    path: "/",
    name: "Webb Community Hall",
    component: Home,
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
  {
    path: "/editprofile",
    name: "Edit Profile",
    component: EditProfile,
  },
  {
    path: "/hackneycouncil",
    name: "Hackney Council",
    component: HackneyCouncil,
  },
  {
    path: "/createhackneycouncil",
    name: "Create New Hackney Council",
    component: CreateHC,
  },
  {
    path: "/events",
    name: "Community events",
    component: Events,
  },
  {
    path: "/createevent",
    name: "Create New Event",
    component: CreateEvent,
  },
  {
    path: "/reports",
    name: "Reports",
    component: Reports,
  },
  {
    path: "/createreport",
    name: "Create Report",
    component: CreateReport,
  },
  {
    path: "/practice",
    name: "Practice",
    component: Practice,
  },
  {
    path: "/managebookings",
    name: "Manage Bookings",
    component: ManageBooking,
  },
  {
    path: "/rechedulebooking",
    name: "Reschedule Bookings",
    component: RescheduleBooking,
  },
  {
    path: "/createbooking",
    name: "New Booking",
    component: CreateBooking,
  },
  {
    path: "/calenderoneday",
    name: "One Day Calender",
    component: CalenderOneDay,
  },
  {
    path: "/calenderonedayplus",
    name: "One Day Plus Calender",
    component: CalenderOneDayPlus,
  },
  {
    path: "/calenderweekly",
    name: "Weekly Calender",
    component: CalenderWeekly,
  },
  {
    path: "/calendermonthly",
    name: "Monthly Calender",
    component: CalenderMonthly,
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Notification,
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