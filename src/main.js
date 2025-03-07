import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { loadStripe } from '@stripe/stripe-js'; 

axios.defaults.baseURL = 'http://localhost:3000';

// Initialize Stripe
const stripePromise = loadStripe('your-public-stripe-key-here'); 

const app = createApp(App);
app.config.globalProperties.$axios = axios; 
app.config.globalProperties.$stripe = stripePromise; 

app.use(store).use(router).mount('#app');
