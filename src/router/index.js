import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import AboutPage from '@/views/AboutPage.vue';
import ProductPage from '../views/ProductPage.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
// import SilkScarvesPage from '../views/SilkScarvesPage.vue';
// import CottonBlendPage from '../views/CottonBlendPage.vue';
// import BandanasPage from '../views/BandanasPage.vue';
import Blog from "../views/Blog.vue";
import BlogPost from "../views/BlogPost.vue";
import ProductDetail from '@/components/ProductDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/AboutPage',
    name: 'About',
    component: AboutPage
  },
  
  {
    path: '/ProductPage',
    name: 'Products',
    component: ProductPage,
  },
  {
    path: '/product/:id',
    name: 'product-detail',
    component: ProductDetail,
    props: true,
  },
//   {
//     path: '/silk-scarves',
//     name: 'silk-scarves',
//     component: SilkScarvesPage,
//   },
//   {
//     path: '/cotton-blend',
//     name: 'cotton-blend',
//     component: CottonBlendPage,
//   },
//   {
//     path: '/bandanas',
//     name: 'bandanas',
//     component: BandanasPage,
//   },
{
  path: '/Login',
  name: Login,
  component: () => import('../views/Login.vue')
},
{
  path: '/Register',
  name: Register,
  component: () => import('../views/Register.vue')
},
  {
    path: "/blog",
    component: Blog
  },
  {
    path: "/blog/:id",
    component: BlogPost
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/Login');
  } else {
    next();
  }
});

export default router;
