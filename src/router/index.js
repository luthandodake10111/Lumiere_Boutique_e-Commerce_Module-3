import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import AboutPage from '@/views/AboutPage.vue';
import ProductPage from '../views/ProductPage.vue';
// import AllProducts from '../components/products/AllProducts.vue';
// import SilkScarvesPage from '../views/SilkScarvesPage.vue';
// import CottonBlendPage from '../views/CottonBlendPage.vue';
// import BandanasPage from '../views/BandanasPage.vue';
import Blog from "../views/Blog.vue";
import BlogPost from "../views/BlogPost.vue";

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

export default router;
