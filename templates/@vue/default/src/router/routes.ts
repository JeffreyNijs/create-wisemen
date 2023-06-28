import { createRouter, createWebHistory } from 'vue-router';

import AboutView from '@/views/AboutView.vue';

import HomeView from '../views/HomeView.vue';
import { ROUTE_NAME } from './routeName';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTE_NAME.HOME,
      component: HomeView,
    },
    {
      path: '/about',
      name: ROUTE_NAME.ABOUT,
      component: AboutView,
    },
  ],
});

export default router;
