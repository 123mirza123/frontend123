import Vendors from '../views/Vendors.vue'
import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Assets from '../views/Assets.vue'
import VendorsReports from '@/views/VendorsReports.vue'
import AssetsReports from '@/views/AssetsReports.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Error404 from '@/views/Error404.vue'
import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    /*{
      path: '/Login',
      name: 'Login',
      component: NotFound
    },
    {
      path: '/Register',
      name: 'Register',
      component: NotFound
    },*/
    {
      path: '/Profile',
      name: 'Profile',
      component: NotFound
    },
    {
      path: '/placeholder1',
      name: 'placeholder1',
      component: () => import('../views/PlaceHolder1.vue')
    },
    {
      path: '/Vendors',
      name: 'Vendors',
      component: Vendors
    },
    {
      path: '/VendorsReports',
      name: 'VendorsReports',
      component: VendorsReports

    },
    {
      path: '/AssetsReports',
      name: 'AssetsReports',
      component: AssetsReports

    },
    {
      path: '/Assets',
      name: 'Assets',
      component: Assets
    },
  
    {
    path: "/:catchAll(.*)",
    name: 'Not Found',
    component: NotFound
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Error404',
    name: 'Error404',
    component: Error404
  }
  ]
})

export default router

