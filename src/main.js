// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import './style.css'; // Import your Tailwind CSS

const app = createApp(App);
app.use(router); // Use the router
app.mount('#app');