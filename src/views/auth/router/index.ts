import Login from '../login/index.vue';
import Register from '../register/index.vue';

const AuthRouter = [
  {
    path: '/login',
    name: 'Login',
    component: () => Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: () => Register,
  },
];

export default AuthRouter;
