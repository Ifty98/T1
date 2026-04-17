<script setup lang="ts">
import pic1 from "@/assets/Home/pic1.png";
import graphic from "@/assets/Home/graphic.png";
import web from "@/assets/Home/web.png";
import marketing from "@/assets/Home/marketing.png";
import tick from "@/assets/Home/tick.svg";
import group from "@/assets/Home/group.svg";
import calendar from "@/assets/Home/calendar.svg";
import book from "@/assets/Home/book.svg";
import ifty from "@/assets/Home/Photos/Ifty.png";
import sejan from "@/assets/Home/Photos/Sejan.png";
import tareq from "@/assets/Home/Photos/Tareq.png";
import sabbir from "@/assets/Home/Photos/Sabbir.png";

import { ref, onMounted, onUnmounted } from "vue"

const text = "Web, Design & Marketing"
const typedText = ref("")
let index = 0
const typingFinished = ref(false)

onMounted(() => {
  const type = () => {
    if (index < text.length) {
      typedText.value += text[index]
      index++
      setTimeout(type, 100)
    } else {
      typingFinished.value = true
    }
  }

  type()
})

const currentSlide = ref(0)
const startX = ref(0)
const endX = ref(0)

const handleTouchStart = (e: TouchEvent) => {
  startX.value = e.touches[0]!.clientX
}

const handleTouchMove = (e: TouchEvent) => {
  endX.value = e.touches[0]!.clientX
}

const handleTouchEnd = () => {
  const diff = startX.value - endX.value
  if (diff > 50) nextSlide()
  else if (diff < -50) prevSlide()

  pauseForInteraction() // pause 10s after swipe
}

let autoSlideInterval: number | undefined = undefined
let pauseTimeout: number | undefined = undefined
const totalSlides = 4

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides
}

// Start auto-slide
const startAutoSlide = () => {
  clearInterval(autoSlideInterval)
  autoSlideInterval = window.setInterval(() => {
    nextSlide()
  }, 3000)
}

// Stop auto-slide immediately
const pauseAutoSlide = () => {
  clearInterval(autoSlideInterval)
}

// Pause auto-slide for 10 seconds
const pauseForInteraction = () => {
  pauseAutoSlide()
  clearTimeout(pauseTimeout)
  pauseTimeout = window.setTimeout(() => {
    startAutoSlide()
  }, 10000) // 10 seconds
}

onMounted(() => startAutoSlide())
onUnmounted(() => pauseAutoSlide())

</script>

<template>
  <div class="bg-slate-950 text-white">
    <div class="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-16 lg:py-24">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- LEFT CONTENT -->
        <div class="flex-1 text-center lg:text-left">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-aos="fade-up">
            Transform your Brand with
          </h1>

          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-400" data-aos="fade-up">
            {{ typedText }}
            <span v-if="!typingFinished" class="cursor">|</span>
          </h2>

          <p class="py-6 text-gray-200 max-w-xl mx-auto lg:mx-0" data-aos="fade-up">
            We provide cutting-edge web design, creative graphics, and
            data-driven marketing strategies to scale your business.
          </p>

          <!-- BUTTONS -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up">
            <router-link to="services" class="bg-white text-black font-bold rounded-lg py-3 px-6 hover:bg-gray-300 
              cursor-pointer transition duration-300">
              Explore Services
            </router-link>

            <router-link to="/portfolio" class="bg-white text-black font-bold rounded-lg py-3 px-6 hover:bg-gray-300 
              cursor-pointer transition duration-300">
              Our Portfolio
            </router-link>
          </div>
        </div>

        <!-- RIGHT IMAGE -->
        <div class="flex-1 flex justify-center" data-aos="fade-up">
          <img :src="pic1" alt="pic1" class="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain" />
        </div>
      </div>
    </div>
  </div>

  <div class="bg-slate-950 px-6 sm:px-10 lg:px-20 py-10">
    <!-- Title -->
    <div class="flex justify-center items-center" data-aos="fade-up">
      <p class="font-bold text-white text-2xl sm:text-3xl text-center">
        Our Core Services
      </p>
    </div>

    <div class="max-w-screen-xl mx-auto px-2 md:px-4 lg:px-16 py-10" data-aos="fade-up">
      <div
        class="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth lg:grid lg:grid-cols-3 lg:gap-10 lg:overflow-visible">
        <!-- Card 1 -->
        <div
          class="min-w-[280px] md:min-w-[320px] lg:min-w-0 snap-start bg-[#0b0b45] rounded-xl 
                transition duration-300 transform hover:-translate-y-2 
                hover:scale-105 hover:shadow-2xl flex flex-col justify-center py-8 px-6">
          <div class="flex justify-center"> <img :src="graphic" alt=""
              class="rounded-xl h-40 md:h-44 lg:h-48 object-contain" /> </div>
          <div class="text-white text-lg md:text-xl py-3 text-center font-semibold"> Graphic Design </div>
          <div class="text-gray-300 py-2 text-center text-sm md:text-base"> Crafting visually stunning logos, brand
            identities, and creative designs that make your business stand out from the crowd. </div>
        </div> <!-- Card 2 -->
        <div
          class="min-w-[280px] md:min-w-[320px] lg:min-w-0 snap-start bg-[#0b0b45] rounded-xl 
                 transition duration-300 transform hover:-translate-y-2 
                 hover:scale-105 hover:shadow-2xl flex flex-col justify-center py-8 px-6">
          <div class="flex justify-center"> <img :src="web" alt=""
              class="rounded-xl h-40 md:h-44 lg:h-48 object-contain" /> </div>
          <div class="text-white text-lg md:text-xl py-3 text-center font-semibold"> Web Development </div>
          <div class="text-gray-300 py-2 text-center text-sm md:text-base"> Building fast, responsive, and user-friendly
            websites tailored to engage your audience and drive conversions. </div>
        </div> <!-- Card 3 -->
        <div
          class="min-w-[280px] md:min-w-[320px] lg:min-w-0 snap-start bg-[#0b0b45] rounded-xl 
                 transition duration-300 transform hover:-translate-y-2 
                 hover:scale-105 hover:shadow-2xl flex flex-col justify-center py-8 px-6">
          <div class="flex justify-center"> <img :src="marketing" alt=""
              class="rounded-xl h-40 md:h-44 lg:h-48 object-contain" /> </div>
          <div class="text-white text-lg md:text-xl py-3 text-center font-semibold"> Digital Marketing </div>
          <div class="text-gray-300 py-2 text-center text-sm md:text-base"> Boosting your online presence and ROI with
            data-driven SEO, social media marketing and targeted ad campaigns. </div>
        </div>
      </div>
    </div>

    <!-- Button -->
    <div class="flex justify-center pt-5">
      <router-link to="services" class="text-black bg-white rounded-lg py-2 px-5 font-bold cursor-pointer border  
      border-orange-500 hover:bg-orange-300 transition duration-300">
        All Services
      </router-link>
    </div>
  </div>

  <div class="bg-slate-950">
    <div class="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-16">

      <!-- Title -->
      <h2 class="font-bold text-white text-3xl md:text-4xl mb-6" data-aos="fade-up">
        Why Us?
      </h2>

      <!-- Description -->
      <p class="text-lg text-gray-300 max-w-3xl mb-12" data-aos="fade-up">
        We believe that every brand has a unique story to tell. As your
        dedicated digital partner, we combine stunning graphics, robust web
        development, and data-driven marketing to turn your vision into reality.
      </p>

      <!-- Cards Container -->
      <div class="bg-[#0b0b45] rounded-2xl p-6 md:p-10 shadow-lg" data-aos="fade-up">

        <div class="flex gap-4 px-4 overflow-x-auto no-scrollbar
         snap-x snap-mandatory scroll-smooth
         md:grid md:grid-cols-2 lg:grid-cols-4
         md:overflow-visible">

          <!-- Card 1 -->
          <div class="w-[75%] max-w-[220px] md:w-full md:max-w-none
            flex-shrink-0 md:flex-shrink
            snap-center bg-gray-200 rounded-xl p-4 sm:p-6 text-center
            transition duration-300 transform hover:-translate-y-2 
            hover:scale-105 hover:shadow-2xl">
            <div class="flex justify-center mb-4">
              <img :src="tick" class="h-16 object-contain" />
            </div>
            <h3 class="text-blue-950 text-lg font-bold mb-3">Innovation</h3>
            <p class="text-blue-950 text-sm">
              Delivering creative designs and modern marketing strategies to help your brand stand out.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="w-[75%] max-w-[220px] md:w-full md:max-w-none
            flex-shrink-0 md:flex-shrink
            snap-center bg-gray-200 rounded-xl p-4 sm:p-6 text-center 
            transition duration-300 transform hover:-translate-y-2 
            hover:scale-105 hover:shadow-2xl">
            <div class="flex justify-center mb-4">
              <img :src="group" class="h-16 object-contain" />
            </div>
            <h3 class="text-blue-950 text-lg font-bold mb-3">Collaboration</h3>
            <p class="text-blue-950 text-sm">
              Working closely with you to understand your vision and deliver results.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="w-[75%] max-w-[220px] md:w-full md:max-w-none
            flex-shrink-0 md:flex-shrink
            snap-center bg-gray-200 rounded-xl p-4 sm:p-6 text-center 
            transition duration-300 transform hover:-translate-y-2 
            hover:scale-105 hover:shadow-2xl">
            <div class="flex justify-center mb-4">
              <img :src="calendar" class="h-16 object-contain" />
            </div>
            <h3 class="text-blue-950 text-lg font-bold mb-3">Excellence</h3>
            <p class="text-blue-950 text-sm">
              Maintaining high standards in design, performance, and marketing.
            </p>
          </div>

          <!-- Card 4 -->
          <div class="w-[75%] max-w-[220px] md:w-full md:max-w-none
            flex-shrink-0 md:flex-shrink
            snap-center bg-gray-200 rounded-xl p-4 sm:p-6 text-center 
            transition duration-300 transform hover:-translate-y-2 
            hover:scale-105 hover:shadow-2xl">
            <div class="flex justify-center mb-4">
              <img :src="book" class="h-16 object-contain" />
            </div>
            <h3 class="text-blue-950 text-lg font-bold mb-3">Integrity</h3>
            <p class="text-blue-950 text-sm">
              Transparency, honesty, and commitment in every project.
            </p>
          </div>

        </div>

      </div>

    </div>
  </div>
  <div class="bg-slate-950">
    <div class="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-16">

      <!-- Title -->
      <h2 class="font-bold text-white text-3xl md:text-4xl mb-6" data-aos="fade-up">
        Our Team Members
      </h2>

      <!-- Description -->
      <p class="text-lg text-gray-300 max-w-3xl mb-12" data-aos="fade-up">
        Every project we take on starts with a vision, and our team of designers
        and developers is here to make that vision a reality, blending creativity,
        technology, and strategy along the way.
      </p>

      <!-- Carousel -->
      <div class="relative w-full max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto" data-aos="fade-up">

        <!-- Slides -->
        <div class="overflow-hidden relative">

          <!-- Slide wrapper -->
          <div class="flex transition-transform duration-500 ease-in-out touch-pan-y"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }" @touchstart="handleTouchStart"
            @touchmove="handleTouchMove" @touchend="handleTouchEnd">

            <!-- Member 1 -->
            <div class="w-full flex-shrink-0 px-4">
              <div class="bg-[#0b0b45] rounded-xl 
            p-8 md:p-10 lg:p-12
            min-h-[400px] md:min-h-[450px] lg:min-h-[500px]
            flex flex-col items-center text-center">
                <h3 class="text-white font-bold mb-4 text-md">Tareq</h3>
                <div class="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mb-4 flex-shrink-0">
                  <img :src="tareq"
                    class="w-full h-full object-cover rounded-full border-4 border-white/10 shadow-lg shadow-blue-500/25" />
                </div>
                <p class="text-white text-md font-bold mt-10">
                  Graphic Design & Branding Design Specialist
                </p>
              </div>
            </div>

            <!-- Member 2 -->
            <div class="w-full flex-shrink-0 px-4">
              <div class="bg-[#0b0b45] rounded-xl 
            p-8 md:p-10 lg:p-12
            min-h-[400px] md:min-h-[450px] lg:min-h-[500px]
            flex flex-col items-center text-center">
                <h3 class="text-white font-bold mb-4 text-md">Ifty</h3>
                <div class="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mb-4 flex-shrink-0">
                  <img :src="ifty"
                    class="w-full h-full object-cover rounded-full border-4 border-white/10 shadow-lg shadow-blue-500/25" />
                </div>
                <p class="text-white text-md font-bold mt-10">
                  Web Design & Full Stack Developer
                </p>
              </div>
            </div>

            <!-- Member 3 -->
            <div class="w-full flex-shrink-0 px-4">
              <div class="bg-[#0b0b45] rounded-xl 
            p-8 md:p-10 lg:p-12
            min-h-[400px] md:min-h-[450px] lg:min-h-[500px]
            flex flex-col items-center text-center">
                <h3 class="text-white font-bold mb-4 text-md">Sejan</h3>
                <div class="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mb-4 flex-shrink-0">
                  <img :src="sejan"
                    class="w-full h-full object-cover rounded-full border-4 border-white/10 shadow-lg shadow-blue-500/25" />
                </div>
                <p class="text-white text-md font-bold mt-10">
                  Business Development Executive
                </p>
              </div>
            </div>

            <!-- Member 4 -->
            <div class="w-full flex-shrink-0 px-4">
              <div class="bg-[#0b0b45] rounded-xl 
            p-8 md:p-10 lg:p-12
            min-h-[400px] md:min-h-[450px] lg:min-h-[500px]
            flex flex-col items-center text-center">
                <h3 class="text-white font-bold mb-4 text-md">Sabbir</h3>
                <div class="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mb-4 flex-shrink-0">
                  <img :src="sabbir"
                    class="w-full h-full object-cover rounded-full border-4 border-white/10 shadow-lg shadow-blue-500/25" />
                </div>
                <p class="text-white text-md font-bold mt-10">
                  Graphic & UI/UX Designer
                </p>
              </div>
            </div>

          </div>

        </div>

        <!-- Controls -->
        <button @click="prevSlide(); pauseForInteraction()" class="absolute top-1/2 -left-6 md:-left-10 -translate-y-1/2
         w-10 h-10 flex items-center justify-center
         text-white text-4xl rounded-full cursor-pointer
         transition-all duration-300">
          ‹
        </button>

        <button @click="nextSlide(); pauseForInteraction()" class="absolute top-1/2 -right-6 md:-right-10 -translate-y-1/2
         w-10 h-10 flex items-center justify-center
         text-white text-4xl rounded-full cursor-pointer
         transition-all duration-300">
          ›
        </button>

        <div class="flex justify-center mt-6 gap-2">
          <span v-for="i in 4" :key="i" @click="currentSlide = i - 1" class="w-3 h-3 rounded-full cursor-pointer"
            :class="currentSlide === i - 1 ? 'bg-white' : 'bg-white/40'"></span>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
.cursor {
  animation: blink 3s infinite;
}

@keyframes blink {

  0%,
  50%,
  100% {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}

/* Hide scrollbar but keep swipe */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
