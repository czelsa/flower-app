import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const loadView = (view) => (
  () => import(/* webpackChunkName: "view-[request]" */ `./views/${view}.vue`)
);


const routes = [{
    path: '/',
    name: 'home',
    component: loadView('Home'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: loadView('Dashboard'),
    meta: { isProtected: true },
  },
  {
    path: '/register',
    name: 'register',
    component: loadView('Register'),
  },
  {
    path: '/login',
    name: 'login',
    component: loadView('Login'),
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: loadView('NotFound'),
  },
  {
    path: '*',
    redirect: 'not-found',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isProtected = to.matched.some((record) => record.meta.isProtected);
  const loggedIn = localStorage.getItem('user');

  if (isProtected && !loggedIn) {
    next('/');
  } else {
    next();
  }
});

export default router;
