<script setup lang="ts">
import logo from "@/assets/logo.png"
import account from "@/assets/NavBar/account.png"
import { ref, watch } from 'vue'
import { useRoute } from "vue-router"

const isOpen = ref(false)
const isServicesOpen = ref(false)

const route = useRoute()
watch(route, () => {
  isOpen.value = false
})
</script>

<template>
  <header class="bg-blue-950 text-black py-3 sticky top-0 z-50">

    <!-- Centered Container -->
    <div class="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">

      <!-- NAV WRAPPER -->
      <div class="flex items-center justify-between w-full lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center">

        <!-- LEFT (Logo + Hamburger) -->
        <div class="flex items-center justify-between w-full gap-4 min-w-max">

          <!-- Logo -->
          <img :src="logo" alt="t1-logo" class="h-10 md:h-12 lg:h-14 w-auto object-contain flex-shrink-0">


          <!-- Hamburger for Mobile/MD -->
          <button class="lg:hidden cursor-pointer text-xl text-white" @click="isOpen = !isOpen">
            ☰
          </button>
        </div>

        <!-- CENTER (Desktop Menu, only visible on lg) -->
        <ul class="hidden lg:flex justify-center items-center gap-8">
          <router-link to="/"
            class="px-3 py-2 whitespace-nowrap text-white hover:bg-white hover:text-black rounded-full transition duration-300 cursor-pointer">
            Home
          </router-link>
          <li
            class="px-3 py-2 whitespace-nowrap text-white hover:bg-white hover:text-black rounded-full transition duration-300 cursor-pointer">
            Portfolio
          </li>
          <li class="relative group">

            <!-- Trigger -->
            <router-link to="/services" class="px-3 py-2 whitespace-nowrap text-white 
           hover:bg-white hover:text-black rounded-full 
           transition duration-300 cursor-pointer">
              Services
            </router-link>
          </li>
          <li
            class="px-3 py-2 whitespace-nowrap text-white font-bold hover:bg-white hover:text-black rounded-full transition duration-300 cursor-pointer">
            🔥 Prime Membership
          </li>
          <li
            class="px-3 py-2 whitespace-nowrap text-white hover:bg-white hover:text-black rounded-full transition duration-300 cursor-pointer">
            About Us
          </li>
        </ul>

        <!-- RIGHT (Book Button, always visible) -->
        <div class="hidden lg:block min-w-max">
          <router-link to="/contact">
            <button class="bg-blue-800 cursor-pointer text-white rounded-full px-4 py-2 flex items-center gap-2 
              whitespace-nowrap hover:bg-black transition duration-300 text-sm" type="button">
              <img :src="account" alt="" class="h-5">
              Book a Consultation
            </button>
          </router-link>
        </div>

      </div>

    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" x-transition.opacity @click="isOpen = false" class="fixed inset-0 bg-black/50 z-40 lg:hidden">
    </div>

    <!-- SIDE MENU (RIGHT → LEFT) -->
    <div class="fixed top-0 right-0 h-full w-64 md:w-80 bg-gray-900 z-50 p-6
         transform transition-transform duration-300 ease-in-out lg:hidden"
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'">

      <div class="flex items-center justify-between mb-6">

        <!-- Logo (LEFT) -->
        <img :src="logo" alt="logo" class="h-8 object-contain">

        <!-- Close Button (RIGHT) -->
        <button @click="isOpen = false" class="text-white text-2xl cursor-pointer">
          ✕
        </button>

      </div>

      <!-- Links -->
      <div class="flex flex-col gap-3">

        <router-link to="/" class="py-2 px-2 text-white hover:bg-gray-300 hover:text-black rounded-lg">
          Home
        </router-link>

        <a href="#" class="py-2 px-2 text-white hover:bg-gray-300 hover:text-black rounded-lg">
          Portfolio
        </a>

        <RouterLink to="/services" class="py-2 px-2 text-white hover:bg-gray-300 hover:text-black rounded-lg">
          Services
        </RouterLink>

        <a href="#" class="py-2 px-2 text-white hover:bg-gray-300 hover:text-black rounded-lg">
          Prime Membership
        </a>

        <a href="#" class="py-2 px-2 text-white hover:bg-gray-300 hover:text-black rounded-lg">
          About Us
        </a>

      </div>

      <div class="mt-auto pt-6">
        <router-link to="/contact">
          <button @click="isOpen = false" class="w-full bg-blue-800 text-white rounded-full px-4 py-3 flex items-center 
            justify-center gap-2 hover:bg-black transition duration-300 cursor-pointer">

            <img :src="account" alt="" class="h-5">
            Book a Consultation

          </button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<style scoped></style>