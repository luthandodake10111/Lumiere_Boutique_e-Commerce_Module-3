import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000'; // Backend API URL

createApp(App).use(store).use(router).mount('#app')
