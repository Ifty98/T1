<script setup lang="ts">
import pic1 from "@/assets/pic1.png";
import graphic from "@/assets/graphic.svg";
import web from "@/assets/web.svg";
import marketing from "@/assets/marketing.svg";
import tick from "@/assets/tick.svg";
import group from "@/assets/group.svg";
import calendar from "@/assets/calendar.svg";
import book from "@/assets/book.svg";
import account from "@/assets/account.png";
</script>

<template>
  <div class="bg-blue-950 text-white">
    <div class="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-16 lg:py-24">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- LEFT CONTENT -->
        <div class="flex-1 text-center lg:text-left">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Transform your Brand with
          </h1>

          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-400">
            Design, Web & Marketing
          </h2>

          <p class="py-6 text-gray-200 max-w-xl mx-auto lg:mx-0">
            We provide cutting-edge web design, creative graphics, and
            data-driven marketing strategies to scale your business.
          </p>

          <!-- BUTTONS -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button type="button"
              class="bg-white text-black font-bold rounded-lg py-3 px-6 hover:bg-gray-300 
              cursor-pointer transition duration-300">
              Explore Services
            </button>

            <button type="button"
              class="bg-white text-black font-bold rounded-lg py-3 px-6 hover:bg-gray-300 
              cursor-pointer transition duration-300">
              Our Portfolio
            </button>
          </div>
        </div>

        <!-- RIGHT IMAGE -->
        <div class="flex-1 flex justify-center">
          <img :src="pic1" alt="pic1" class="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain" />
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white px-6 sm:px-10 lg:px-20 py-10">
    <!-- Title -->
    <div class="flex justify-center items-center">
      <p class="font-bold text-blue-900 text-2xl sm:text-3xl text-center">
        Our Core Services
      </p>
    </div>

    <!-- Grid -->
    <div class="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-10">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">

        <!-- Card 1 -->
        <div class="bg-blue-950 rounded-xl flex flex-col justify-center py-8 px-6">
          <div class="flex justify-center">
            <img :src="graphic" alt="" class="rounded-xl h-40 md:h-44 lg:h-48 object-contain" />
          </div>
          <div class="text-white text-lg md:text-xl py-3 text-center font-semibold">
            Graphic Design
          </div>
          <div class="text-gray-300 py-2 text-center text-sm md:text-base">
            Crafting visually stunning logos, brand identities, and creative
            designs that make your business stand out from the crowd.
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-blue-950 rounded-xl flex flex-col justify-center py-8 px-6">
          <div class="flex justify-center">
            <img :src="web" alt="" class="rounded-xl h-40 md:h-44 lg:h-48 object-contain" />
          </div>
          <div class="text-white text-lg md:text-xl py-3 text-center font-semibold">
            Web Development
          </div>
          <div class="text-gray-300 py-2 text-center text-sm md:text-base">
            Building fast, responsive, and user-friendly websites tailored to
            engage your audience and drive conversions.
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-blue-950 rounded-xl flex flex-col justify-center py-8 px-6
                md:col-span-2 md:max-w-md md:mx-auto
                lg:col-span-1 lg:max-w-none">

          <div class="flex justify-center">
            <img :src="marketing" alt="" class="rounded-xl h-40 md:h-44 lg:h-48 object-contain" />
          </div>

          <div class="text-white text-lg md:text-xl py-3 text-center font-semibold">
            Digital Marketing
          </div>

          <div class="text-gray-300 py-2 text-center text-sm md:text-base">
            Boosting your online presence and ROI with data-driven SEO, social
            media marketing and targeted ad campaigns.
          </div>

        </div>

      </div>

    </div>
    <!-- Button -->
    <div class="flex justify-center pt-5">
      <button type="button"
        class="text-black bg-white rounded-lg py-2 px-5 font-bold cursor-pointer border  
        border-orange-500 hover:bg-orange-300 transition duration-300">
        All Services
      </button>
    </div>
  </div>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-16">

      <!-- Title -->
      <h2 class="font-bold text-blue-900 text-3xl md:text-4xl mb-6">
        Why Us?
      </h2>

      <!-- Description -->
      <p class="text-lg text-gray-700 max-w-3xl mb-12">
        We believe that every brand has a unique story to tell. As your
        dedicated digital partner, we combine stunning graphics, robust web
        development, and data-driven marketing to turn your vision into reality.
      </p>

      <!-- Cards Container -->
      <div class="bg-gray-200 rounded-2xl p-6 md:p-10 shadow-lg">

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <!-- Card 1 -->
          <div class="bg-white rounded-xl p-6 text-center">
            <div class="flex justify-center mb-4">
              <img :src="tick" class="h-16 object-contain" />
            </div>
            <h3 class="text-blue-950 text-lg font-bold mb-3">
              Innovation
            </h3>
            <p class="text-blue-950 text-sm">
              Delivering creative designs and modern marketing strategies to help
              your brand stand out in the ever-evolving digital landscape.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="bg-white rounded-xl p-6 text-center">
            <div class="flex justify-center mb-4">
              <img :src="group" class="h-16 object-contain" />
            </div>
            <h3 class="text-blue-950 text-lg font-bold mb-3">
              Collaboration
            </h3>
            <p class="text-blue-950 text-sm">
              Working closely with you to understand your unique vision and turn it
              into tailored digital solutions that drive measurable success.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="bg-white rounded-xl p-6 text-center">
            <div class="flex justify-center mb-4">
              <img :src="calendar" class="h-16 object-contain" />
            </div>
            <h3 class="text-blue-950 text-lg font-bold mb-3">
              Excellence
            </h3>
            <p class="text-blue-950 text-sm">
              Maintaining the highest standards in design aesthetics, seamless web
              performance, and ROI-driven marketing campaigns.
            </p>
          </div>

          <!-- Card 4 -->
          <div class="bg-white rounded-xl p-6 text-center">
            <div class="flex justify-center mb-4">
              <img :src="book" class="h-16 object-contain" />
            </div>
            <h3 class="text-blue-950 text-lg font-bold mb-3">
              Integrity
            </h3>
            <p class="text-blue-950 text-sm">
              Operating with full transparency, honest communication, and a strong
              commitment to delivering your projects on time.
            </p>
          </div>

        </div>

      </div>

    </div>
  </div>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-16">

      <!-- Title -->
      <h2 class="font-bold text-blue-900 text-3xl md:text-4xl mb-6">
        Our Team Members
      </h2>

      <!-- Description -->
      <p class="text-lg text-gray-700 max-w-3xl mb-12">
        We believe that every brand has a unique story to tell. As your
        dedicated digital partner, we combine stunning graphics, robust web
        development, and data-driven marketing to turn your vision into reality.
      </p>

      <!-- Team Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <!-- Member 1 -->
        <div class="bg-blue-950 rounded-xl p-8 flex flex-col items-center text-center">
          <h3 class="text-white font-bold mb-4">Tareq</h3>
          <div class="h-40 flex items-center justify-center mb-5">
            <img :src="account" class="max-h-full object-contain" />
          </div>
          <p class="text-white text-sm min-h-[48px]">
            Graphic Design & Branding Design Specialist
          </p>
        </div>

        <!-- Member 2 -->
        <div class="bg-blue-950 rounded-xl p-8 flex flex-col items-center text-center">
          <h3 class="text-white font-bold mb-4">Ifty</h3>
          <div class="h-40 flex items-center justify-center mb-5">
            <img :src="account" class="max-h-full object-contain" />
          </div>
          <p class="text-white text-sm min-h-[48px]">
            Web Design & Full Stack Developer
          </p>
        </div>

        <!-- Member 3 -->
        <div class="bg-blue-950 rounded-xl p-8 flex flex-col items-center text-center">
          <h3 class="text-white font-bold mb-4">Sejan</h3>
          <div class="h-40 flex items-center justify-center mb-5">
            <img :src="account" class="max-h-full object-contain" />
          </div>
          <p class="text-white text-sm min-h-[48px]">
            Business Development Executive (BDE)
          </p>
        </div>

        <!-- Member 4 -->
        <div class="bg-blue-950 rounded-xl p-8 flex flex-col items-center text-center">
          <h3 class="text-white font-bold mb-4">Sabbir</h3>
          <div class="h-40 flex items-center justify-center mb-5">
            <img :src="account" class="max-h-full object-contain" />
          </div>
          <p class="text-white text-sm min-h-[48px]">
            Graphic & UI/UX Designer
          </p>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped></style>
