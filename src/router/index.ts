import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import Home from '@/components/Home.vue'
import Services from '@/components/Services.vue'
import Contact from '@/components/Contact.vue'
import Portfolio from '@/components/Portfolio.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'bg-gradient-to-r from-orange-500 to-cyan-400',
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router