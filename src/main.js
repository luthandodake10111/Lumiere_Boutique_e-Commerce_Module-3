import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

axios.defaults.baseURL = 'http://localhost:3000';

const app = createApp(App);
app.config.globalProperties.$axios = axios; 
app.use(store).use(router).mount('#app');
