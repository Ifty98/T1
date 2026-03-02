<script setup lang="ts">
import logo from "@/assets/logo.svg"
import account from "@/assets/NavBar/account.png"
import { ref } from 'vue'

const isOpen = ref(false)
const isServicesOpen = ref(false)
</script>

<template>
  <header class="bg-white text-black py-3">

    <!-- Centered Container -->
    <div class="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">

      <!-- NAV WRAPPER -->
      <div class="flex items-center justify-between w-full lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center">

        <!-- LEFT (Logo + Hamburger) -->
        <div class="flex items-center gap-4 min-w-max">
          <!-- Hamburger for Mobile/MD -->
          <button class="lg:hidden cursor-pointer text-2xl" @click="isOpen = !isOpen">
            ☰
          </button>

          <!-- Logo -->
          <img :src="logo" alt="t1-logo" class="h-6 md:h-8 lg:h-10 w-auto object-contain flex-shrink-0">
        </div>

        <!-- CENTER (Desktop Menu, only visible on lg) -->
        <ul class="hidden lg:flex justify-center items-center gap-8">
          <router-link to="/"
            class="px-3 py-2 whitespace-nowrap text-blue-900 hover:bg-gray-300 hover:text-black rounded-full transition duration-300 cursor-pointer">
            Home
          </router-link>
          <li
            class="px-3 py-2 whitespace-nowrap text-blue-900 hover:bg-gray-300 hover:text-black rounded-full transition duration-300 cursor-pointer">
            Our Portfolio
          </li>
          <li class="relative group">

            <!-- Trigger -->
            <router-link to="/services" class="px-3 py-2 whitespace-nowrap text-blue-900 
           hover:bg-gray-300 hover:text-black rounded-full 
           transition duration-300 cursor-pointer">
              Services ⮟
            </router-link>

            <!-- Dropdown -->
            <div class="absolute left-1/2 -translate-x-1/2 top-full
           mt-0
           w-56 bg-white shadow-xl rounded-xl py-2
           opacity-0 invisible
           group-hover:opacity-100 group-hover:visible
           transition duration-200
           z-[999]">

              <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100">
                Web Development
              </a>
              <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100">
                UI/UX Design
              </a>
              <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100">
                Brand Identity & Design
              </a>
              <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100">
                E-Commerce Solutions
              </a>
              <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100">
                Social Media Marketing
              </a>
              <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100">
                SEO & Paid Advertising
              </a>

            </div>

          </li>
          <li
            class="px-3 py-2 whitespace-nowrap text-blue-900 font-bold hover:bg-gray-300 hover:text-black rounded-full transition duration-300 cursor-pointer">
            🔥 Prime Membership
          </li>
          <li
            class="px-3 py-2 whitespace-nowrap text-blue-900 hover:bg-gray-300 hover:text-black rounded-full transition duration-300 cursor-pointer">
            About Us
          </li>
        </ul>

        <!-- RIGHT (Book Button, always visible) -->
        <div class="min-w-max">
          <button
            class="bg-blue-800 cursor-pointer text-white rounded-full px-4 py-2 flex items-center gap-2 whitespace-nowrap hover:bg-black transition duration-300 text-sm"
            type="button">
            <img :src="account" alt="" class="h-5">
            Book a Consultation
          </button>
        </div>

      </div>

    </div>

    <!-- Mobile Menu -->
    <div class="lg:hidden overflow-hidden transition-all duration-300"
      :class="isOpen ? 'max-h-[900px] opacity-100 mt-4' : 'max-h-0 opacity-0'">

      <div class="flex flex-col py-4 border-t">

        <!-- Links -->
        <div class="flex flex-col gap-2">

          <router-link to="/" class="py-2 px-2 hover:bg-gray-300 hover:text-black rounded-lg">
            Home
          </router-link>

          <a href="#" class="py-2 px-2 hover:bg-gray-300 rounded-lg">
            Our Portfolio
          </a>

          <!-- Services Dropdown -->
          <div>
            <!-- Top Row -->
            <div class="flex justify-between items-center">

              <!-- Navigate -->
              <RouterLink to="/services" class="flex-1 py-2 px-2 hover:bg-gray-300 
              hover:text-black rounded-lg">
                Services
              </RouterLink>

              <!-- Toggle Arrow -->
              <button @click="isServicesOpen = !isServicesOpen" class="py-2 px-2">
                <span :class="isServicesOpen ? 'rotate-180' : ''"
                  class="transition-transform duration-300 inline-block cursor-pointer">
                  ⮟
                </span>
              </button>

            </div>

            <!-- Dropdown -->
            <div class="overflow-hidden transition-all duration-300 pl-4" :class="isServicesOpen
              ? 'max-h-96 opacity-100 mt-2'
              : 'max-h-0 opacity-0'">

              <RouterLink to="/services" class="block py-2 hover:bg-gray-200 rounded-lg">
                Web Development
              </RouterLink>

              <RouterLink to="/services" class="block py-2 hover:bg-gray-200 rounded-lg">
                UI/UX Design
              </RouterLink>

              <RouterLink to="/services" class="block py-2 hover:bg-gray-200 rounded-lg">
                Brand Identity & Design
              </RouterLink>

            </div>
          </div>

          <a href="#" class="py-2 px-2 hover:bg-gray-300 rounded-lg">
            Prime Membership
          </a>

          <a href="#" class="py-2 px-2 hover:bg-gray-300 rounded-lg">
            About Us
          </a>

        </div>
      </div>
    </div>

  </header>
</template>

<style scoped></style>