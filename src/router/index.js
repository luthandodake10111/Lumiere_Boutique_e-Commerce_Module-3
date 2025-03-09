import { createRouter, createWebHistory } from 'vue-router'
import Blog from "../views/Blog.vue";
import BlogPost from "../views/BlogPost.vue";
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Cart from '@/components/Cart.vue';
import Checkout from '@/components/Checkout.vue';
import AboutPage from '@/views/AboutPage.vue';
import ProductDetail from '@/components/ProductDetail.vue';
import OrderPage from '@/components/OrderPage.vue';
import ProductPage from '@/views/ProductPage.vue';
import Home from '@/views/Home.vue';
import AdminLogin from '@/components/AdminLogin.vue';
import AdminDashboard from '@/components/AdminDashboard.vue';
import ContactUs from '@/components/ContactUs.vue';
import NewArrivals from '@/components/NewArrivals.vue';
import paymentConfirmation from '@/components/paymentConfirmation.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/AboutPage',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/ProductPage',
    name: 'ProductPage',
    component: ProductPage,
  },
  {
    path: '/products/:id',
    name: 'productDetail',
    component: ProductDetail,
    props: true,
  },
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
    path: '/Cart',
    name: Cart,
    component: Cart

  },
  {
    path: '/Checkout',
    name: Checkout,
    component: Checkout

  },
  {
    path: '/OrderPage',
    name: OrderPage,
    component: OrderPage

  },
  {
    path: '/AdminLogin',
    name: AdminLogin,
    component: AdminLogin

  },
  {
    path: '/AdminDashboard',
    name: AdminDashboard,
    component: AdminDashboard

  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs,
  },
  {
    path: '/new-arrivals',
    name: 'NewArrivals',
    component: NewArrivals
  },
  {
    path: '/paymentConfirmation',
    name: 'paymentConfirmation',
    component: paymentConfirmation
  },

{ path: "/blog", component: Blog },
{ path: "/blog/:id", component: BlogPost },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/Login');
  } else {
    next();
  }
});


export default router
