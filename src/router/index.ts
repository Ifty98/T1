import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import Home from '@/components/Home.vue'
import Services from '@/components/Services.vue'
import Contact from '@/components/Contact.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'text-white bg-black'
})

export default router