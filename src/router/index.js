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
import BookingSummary from '../components/pages/frontend/profile/bookings/create-booking/components/BookingSummary'
import Dashboard from '../components/pages/admin/dashboard/Dashboard'
import Users from '../components/pages/admin/users/Users'
import Announcements from '../components/pages/admin/announcement/Announcements'
import CreateAnnouncement from '../components/pages/admin/announcement/create-announcement/CreateAnnouncement'
import AdminNews from '../components/pages/admin/news/AdminNews'
import AdminReports from '../components/pages/admin/reports/AdminReports'
import CreateNews from '../components/pages/admin/news/components/CreateNews'
import EditNews from '../components/pages/admin/news/components/EditNews'
import AdminHackneyCouncil from '../components/pages/admin/hackney-council/AdminHackneyCouncil'
import Subscribers from '../components/pages/admin/subscribers/Subscribers'
import AdminEvents from '../components/pages/admin/events/AdminEvents'
import AdminCreateEvent from '../components/pages/admin/events/components/AdminCreateEvent'
import AdminNotification from '../components/pages/admin/notifications/AdminNotification'
import HiringPrices from '../components/pages/admin/hiring-prices/HiringPrices'
import AdminManageBooking from '../components/pages/admin/bookings/manage-booking/AdminManageBooking'
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
  {
    path: "/bookingsummary",
    name: "Booking Summary",
    component: BookingSummary,
  },
  {
    path: "/admin-dashboard",
    name: "Admin Dashboard",
    component:Dashboard,
  },
  {
    path: "/users",
    name: "Users",
    component:Users,
  },
   {
    path: "/announcements",
    name: "Announcements",
    component:Announcements,
  },
   {
    path: "/createannouncement",
    name: "Create New Announcement",
    component:CreateAnnouncement,
  },
  {
    path: "/adminnews",
    name: "Admin News",
    component:AdminNews,
  },
   {
    path: "/adminreports",
    name: "Admin Reports",
    component:AdminReports,
  },
  {
    path: "/createnews",
    name: "Create News",
    component:CreateNews,
  },
  {
    path: "/editnews",
    name: "Edit News",
    component: EditNews,
  },
  {
    path: "/adminhackneycouncil",
    name: "Admin Hackney Council",
    component: AdminHackneyCouncil,
  },
   {
    path: "/subscribers",
    name: "Subscribers",
    component: Subscribers,
  },
   {
    path: "/adminevents",
    name: "Events",
    component: AdminEvents,
  },
   {
    path: "/admincreateevent",
    name: "Create Event",
    component: AdminCreateEvent,
  },
  {
    path: "/adminnotifications",
    name: "Admin Notifications",
    component: AdminNotification,
  },
  {
    path: "/hiringprices",
    name: "Hiring Prices",
    component: HiringPrices,
  },
  {
    path: "/adminmanagebookings",
    name: "Admin Manage Bookings",
    component: AdminManageBooking,
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