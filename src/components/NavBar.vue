<script setup lang="ts">
import logo from "@/assets/logo.svg"
import account from "@/assets/account.png"
import { ref } from 'vue'

const isOpen = ref(false)
const isServicesOpen = ref(false)
</script>

<template>
  <header class="bg-white text-black px-4 md:px-8 lg:px-20 xl:px-52 py-3 relative">

    <div class="flex items-center justify-between">

      <!-- Left Side (Logo + Hamburger) -->
      <div class="flex justify-center items-center gap-10">
        <button class="lg:hidden md:hidden cursor-pointer text-2xl" @click="isOpen = !isOpen">
          ☰
        </button>

        <img :src="logo" alt="t1-logo" class="h-6 lg:h-10 md:h-8">
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden items-center text-center lg:flex lg:gap-8 lg:flex lg:gap-15 md:flex md:gap-2">

        <li class="p-3 text-blue-900 hover:bg-gray-300 rounded-full transition duration-300 cursor-pointer">
          Our Portfolio
        </li>

        <!-- Services Dropdown -->
        <li class="relative group">
          <div class="p-3 text-blue-900 hover:bg-gray-300 rounded-full transition duration-300 cursor-pointer">
            Services ⮟
          </div>

          <div class="absolute top-full left-1/2 -translate-x-1/2
          w-56 bg-white shadow-xl rounded-xl py-2
          opacity-0 invisible
          group-hover:opacity-100 group-hover:visible
          transition duration-200 z-50">

            <a href="#" class="block text-sm px-4 py-2 hover:bg-gray-100">Web Development</a>
            <a href="#" class="block text-sm px-4 py-2 hover:bg-gray-100">UI/UX Design</a>
            <a href="#" class="block text-sm px-4 py-2 hover:bg-gray-100">Brand Identity & Design</a>
            <a href="#" class="block text-sm px-4 py-2 hover:bg-gray-100">E-Commerce Solutions</a>
            <a href="#" class="block text-sm px-4 py-2 hover:bg-gray-100">Social Media Marketing</a>
            <a href="#" class="block text-sm px-4 py-2 hover:bg-gray-100">SEO & Paid Advertising</a>

          </div>
        </li>

        <li class="p-3 text-blue-900 font-bold hover:bg-gray-300 rounded-full transition duration-300 cursor-pointer">
          🔥 Prime Membership
        </li>

        <li class="p-3 text-blue-900 hover:bg-gray-300 rounded-full transition duration-300 cursor-pointer">
          About Us
        </li>

      </ul>

      <div class="flex justify-center">
        <button class="bg-blue-800 text-white rounded-full py-2 px-4 text-center flex items-center justify-center
          gap-2 cursor-pointer hover:bg-black transition duration-300 text-xs lg:text-sm md:text-sm" type="button">
          <img :src="account" alt="" class="h-3 lg:h-5 md:h-5">
          Book a Consultation
        </button>
      </div>

    </div>

    <!-- Mobile Menu -->
    <div class="lg:hidden overflow-hidden transition-all duration-300"
      :class="isOpen ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0'">
      <div class="flex flex-col gap-2 py-4 border-t">

        <a href="#" class="py-2 px-2 hover:bg-gray-300 rounded-lg">
          Our Portfolio
        </a>

        <!-- Services Dropdown -->
        <div>

          <!-- Clickable Header -->
          <button @click="isServicesOpen = !isServicesOpen"
            class="w-full cursor-pointer text-left py-2 px-2 hover:bg-gray-300 rounded-lg flex justify-between items-center">
            Services
            <span :class="isServicesOpen ? 'rotate-180' : ''" class="transition-transform duration-300">
              ⮟
            </span>
          </button>

          <!-- Dropdown Items -->
          <div class="overflow-hidden transition-all duration-300 pl-4"
            :class="isServicesOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'">
            <a href="#" class="block py-2 hover:bg-gray-200 rounded-lg">
              Web Development
            </a>
            <a href="#" class="block py-2 hover:bg-gray-200 rounded-lg">
              UI/UX Design
            </a>
            <a href="#" class="block py-2 hover:bg-gray-200 rounded-lg">
              Brand Identity & Design
            </a>
            <a href="#" class="block py-2 hover:bg-gray-200 rounded-lg">
              E-Commerce Solutions
            </a>
            <a href="#" class="block py-2 hover:bg-gray-200 rounded-lg">
              Social Media Marketing
            </a>
            <a href="#" class="block py-2 hover:bg-gray-200 rounded-lg">
              SEO & Paid Advertising
            </a>
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

  </header>
</template>

<style scoped></style>