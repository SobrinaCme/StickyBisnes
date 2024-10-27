// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
import Dashboard from '../components/Dashboard.vue';
import Stickers from '../components/Stickers.vue';
import Orders from '../components/Orders.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/',
    redirect: '/login', // Redirect to login by default
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/stickers',
    name: 'Stickers',
    component: Stickers,
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;