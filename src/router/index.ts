import { createRouter, createWebHistory } from 'vue-router';
import HomeRouter from '@/views/dashboard/home/router';
import AuthRouter from '@/views/auth/router';

//layouts
import AuthLayout from '@/layouts/authLayout.vue';

const routes: any = [
  {
    path: '/auth',
    children: [...AuthRouter],
    component: AuthLayout,
  },
  {
    path: '/',
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
