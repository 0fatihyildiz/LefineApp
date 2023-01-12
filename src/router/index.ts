import { createRouter, createWebHistory } from 'vue-router';
import HomeRouter from '@/views/dashboard/home/router';

const routes: any = [
  {
    path: '/private',
    // auth
  },
  {
    path: '/public',
    redirect: {
      name: 'Home',
    },
    children: [...HomeRouter],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
