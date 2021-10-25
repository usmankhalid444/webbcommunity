import { createApp } from 'vue';
import App from './App.vue';
import MainFrontEnd from './components/layouts/frontend/MainFrontEnd';
import UserSideMenu from './components/global-components/UserSideMenu';
import router from './router';
import 'remixicon/fonts/remixicon.css';
import "./index.css";

const app = createApp(App)

app.component('FrontendMain', MainFrontEnd); // global registration - can be used anywhere
app.component('UserSideMenu', UserSideMenu); // global registration - can be used anywhere

app.use(router);

app.mount('#app')

///createApp(App).use(router).mount('#app');
