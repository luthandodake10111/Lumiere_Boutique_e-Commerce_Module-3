import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import AboutPage from '@/views/AboutPage.vue';
import ProductPage from '../views/ProductPage.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import ContactPage from "@/views/ContactPage.vue";
import TrackOrderPage from "@/views/TrackOrderPage.vue";
import FAQsPage from "@/views/FAQsPage.vue";
import SocialResponsibilityPage from "@/views/SocialResponsibilityPage.vue";
// import SilkScarvesPage from '../views/SilkScarvesPage.vue';
// import CottonBlendPage from '../views/CottonBlendPage.vue';
// import BandanasPage from '../views/BandanasPage.vue';
import Blog from "../views/Blog.vue";
import BlogPost from "../views/BlogPost.vue";
import ProductDetail from '@/components/ProductDetail.vue';
import CartPage from '@/views/CartPage.vue';
import CarouselProductImages from '@/components/CarouselProductImages.vue';

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
    path: '/products/:id',
    name: 'productDetail',
    component: ProductDetail,
    props: true,
  },
  {
  path: '/products/:id',
  name: 'productImages',
  component: CarouselProductImages,
  props: true,
},
  {
    path: '/CartPage',
    name: 'CartPage',
    component: CartPage,
   
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
},
{
  path: "/contact",
  name: "Contact",
  component: ContactPage,
},
{
  path: "/track-order",
  name: "TrackOrder",
  component: TrackOrderPage,
},
{
  path: "/faqs",
  name: "FAQs",
  component: FAQsPage,
},
{
  path: "/AboutPage",
  name: "AboutPage",
  component: AboutPage,
},
{
  path: "/social-responsibility",
  name: "SocialResponsibility",
  component: SocialResponsibilityPage,
},

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
