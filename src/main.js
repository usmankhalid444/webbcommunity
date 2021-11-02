import { createApp } from 'vue';
import App from './App.vue';
import MainFrontEnd from './components/layouts/frontend/MainFrontEnd';
import UserProfileLayout from './components/layouts/frontend/profile-layout/UserProfileLayout';
import router from './router';
import 'remixicon/fonts/remixicon.css';
import "./index.css";

const app = createApp(App)

app.component('FrontendMain', MainFrontEnd); // global registration - can be used anywhere
app.component('UserProfileLayout', UserProfileLayout); // global registration - can be used anywhere

app.use(router);

app.mount('#app');

///createApp(App).use(router).mount('#app');
