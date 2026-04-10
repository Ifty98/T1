import './assets/main.css'
import AOS from "aos"
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts'

AOS.init({
  duration: 1500,
  once: false,
  offset: 120,
  easing: 'ease-out-cubic'
})

createApp(App).use(router).mount('#app')
