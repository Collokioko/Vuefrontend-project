import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { createRouter, createWebHistory } from 'vue-router';

// Import the page components
import Homepage from './components/HomePage.vue';
import AboutUs from './components/AboutUs.vue';
import ContactUs from './components/ContactUs.vue';
import OurServices from './components/OurServices.vue';

// Create routes - route to component
const routes = [
    { path: '/', component: Homepage },
    { path: '/about', component: AboutUs },
    { path: '/contact', component: ContactUs },
    { path: '/services', component: OurServices },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Create and mount the Vue app
const app = createApp(App);
app.use(router);
app.mount('#app');
