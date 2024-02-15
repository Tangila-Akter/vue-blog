import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';
import PostPage from '../components/PostPage.vue';
import ContactPage from '../components/ContactPage.vue';
import GetPage from '../components/GetPage.vue';
import NoRoute from '../components/NoRoute.vue';
import LoginPage from '../components/LoginPage.vue';
import RegisterPage from '../components/RegisterPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/post',
    name: 'Post',
    component: PostPage,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  },
  {
    path: '/get',
    name: 'Get',
    component: GetPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
  },
  {
    name: 'NoRoute',
    path: '/:notFound',
    component: NoRoute
},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;