import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.css';
import { createRouter, createWebHistory } from 'vue-router';

// Import the page components
import HomePage from './components/HomePage.vue';
import AboutUs from './components/AboutUs.vue';
import ContactUs from './components/ContactUs.vue';
import OurServices from './components/OurServices.vue';

// Create routes - map paths to components
const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutUs },
    { path: '/contact', component: ContactUs },
    { path: '/services', component: OurServices },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
