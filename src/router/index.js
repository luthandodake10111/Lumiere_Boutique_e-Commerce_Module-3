import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/components/HomePage.vue';
import AboutPage from '@/components/AboutPage.vue';
import ProductPage from '../components/ProductPage.vue';
// import AllProducts from '../components/products/AllProducts.vue';
// import SilkScarvesPage from '../views/SilkScarvesPage.vue';
// import CottonBlendPage from '../views/CottonBlendPage.vue';
// import BandanasPage from '../views/BandanasPage.vue';
import Blog from "../views/Blog.vue";
import BlogPost from "../views/BlogPost.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/AboutPage',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/ProductPage',
    name: 'products',
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
