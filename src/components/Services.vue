<script setup lang="ts">
import background1 from "@/assets/Services/background-1.png"
import brand from "@/assets/Services/Brand identity.png"
import UXUIDesign from "@/assets/Services/UX-UI Design.png"
import WebDev from "@/assets/Services/Web Dev.png"
import ECommerce from "@/assets/Services/E-commerce.png"
import Marketing from "@/assets/Services/Marketing.png"
import Advertising from "@/assets/Services/Advertising.png"
import Arrow from "@/assets/Services/Arrow.png"
</script>

<template>
  <section class="bg-slate-950 py-15">

    <div class="relative max-w-screen-xl mx-auto rounded-xl overflow-hidden" data-aos="fade-up">

      <!-- Background image for sm + md -->
      <div class="absolute inset-0 lg:hidden">
        <img :src="background1" alt="" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-blue-950/70"></div>
      </div>

      <!-- Main content -->
      <div class="relative bg-transparent lg:bg-blue-950 flex flex-col lg:flex-row items-stretch gap-10">

        <!-- TEXT -->
        <div class="lg:w-3/5 text-center lg:text-left flex flex-col justify-center px-10 py-16 z-10">

          <h1 class="text-white text-xl md:text-2xl lg:text-3xl font-bold">
            Our Comprehensive
            <span class="text-blue-400 text-2xl md:text-3xl lg:text-4xl font-bold">
              Digital Solutions
            </span>
          </h1>

          <p class="text-gray-200 py-6 text-sm max-w-lg mx-auto lg:mx-0">
            At Use-Key, we offer a complete suite of digital services designed to elevate
            your brand and drive measurable growth. From crafting visually stunning
            logo designs and building high-performance websites to executing data-driven
            digital marketing campaigns, our expert team is here to transform your online
            presence. We blend creativity with modern technology to deliver exceptional
            results that truly matter to your business.
          </p>

        </div>

        <!-- IMAGE (large only) -->
        <div class="hidden lg:block lg:w-2/5">

          <img :src="background1" alt="" class="w-full h-full object-cover rounded-r-xl">

        </div>

      </div>

    </div>

    <section class="py-16">

      <div class="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Card -->
          <div data-aos="fade-up">
            <div class="bg-slate-900 backdrop-blur-md border-2 border-white 
            transform-gpu will-change-transform
            transition-transform transition-shadow transition-colors
            duration-300 ease-out
            rounded-2xl shadow-md
            hover:shadow-xl hover:-translate-y-1.5 hover:scale-[1.02]
            py-6 px-5 md:py-10 md:px-10
            max-w-sm md:max-w-lg mx-auto cursor-pointer">

              <!-- Image -->
              <div class="flex justify-center mb-4 md:mb-6">
                <img :src="brand" alt="Web Development" class="h-40 lg:h-60 object-contain">
              </div>

              <!-- Content -->
              <div>
                <h3 class="text-lg md:text-xl text-blue-200 font-bold mb-2 md:mb-3 text-center">
                  Brand Identity & Design
                </h3>

                <p class="text-sm md:text-base text-white px-2 text-center">
                  Crafting memorable visual identities that resonate with your target
                  audience and make your business stand out from the competition.
                </p>
              </div>

              <!-- Small Grid -->
              <div class="text-white grid grid-cols-2 gap-4 md:gap-8 py-4 md:py-5 text-xs 
                        px-2 lg:whitespace-nowrap">
                <div>• Marketing Collaterals</div>
                <div>• Brand Guidelands</div>
                <div>• Packaging Design</div>
              </div>

              <!-- Button -->
              <div class="flex justify-center items-center">
                <router-link to="/contact" class="bg-slate-750 text-white px-4 py-2 text-sm md:text-base 
                                          rounded-2xl flex items-center gap-2
                                          hover:bg-blue-900 hover:text-white transition duration-300
                                          border border-blue-500 cursor-pointer">
                  Book a call
                  <img :src="Arrow" alt="arrow" class="h-8 w-10 object-contain bg-blue-400
                rounded-xl" />
                </router-link>
              </div>

            </div>
          </div>

          <!-- Card -->
          <div data-aos="fade-up">
            <div class="bg-slate-900 backdrop-blur-md border-2 border-white 
            transform-gpu will-change-transform
            transition-transform transition-shadow transition-colors
            duration-300 ease-out
            rounded-2xl shadow-md
            hover:shadow-xl hover:-translate-y-1.5 hover:scale-[1.02]
            py-6 px-5 md:py-10 md:px-10
            max-w-sm md:max-w-lg mx-auto cursor-pointer">

              <!-- Image -->
              <div class="flex justify-center mb-4 md:mb-6">
                <img :src="UXUIDesign" alt="Web Development" class="h-40 lg:h-60 object-contain">
              </div>

              <!-- Content -->
              <div>
                <h3 class="text-lg md:text-xl text-blue-200 font-bold mb-2 md:mb-3 text-center">
                  UI/UX Design
                </h3>

                <p class="text-sm md:text-base text-white px-2 text-center">
                  Designing intuitive, user-centric, and visually stunning interfaces for
                  websites and mobile applications that keep users engaged.
                </p>
              </div>

              <!-- Small Grid -->
              <div class="text-white grid grid-cols-2 gap-4 md:gap-8 py-4 md:py-5 text-xs px-2 lg:whitespace-nowrap">
                <div>• Wireframing & Prototyping</div>
                <div>• User Experience (UX) Research</div>
                <div>• Web Interface Desingn</div>
                <div>• Mobile App UI</div>
              </div>

              <!-- Button -->
              <div class="flex justify-center items-center">
                <router-link to="/contact" class="bg-slate-750 text-white px-4 py-2 text-sm md:text-base 
                                          rounded-2xl flex items-center gap-2
                                          hover:bg-blue-900 hover:text-white transition duration-300
                                          border border-blue-500 cursor-pointer">
                  Book a call
                  <img :src="Arrow" alt="arrow" class="h-8 w-10 object-contain bg-blue-400
                rounded-xl" />
                </router-link>
              </div>
            </div>
          </div>

          <!-- Card -->
          <div data-aos="fade-up">
            <div class="bg-slate-900 backdrop-blur-md border-2 border-white 
            transform-gpu will-change-transform
            transition-transform transition-shadow transition-colors
            duration-300 ease-out
            rounded-2xl shadow-md
            hover:shadow-xl hover:-translate-y-1.5 hover:scale-[1.02]
            py-6 px-5 md:py-10 md:px-10
            max-w-sm md:max-w-lg mx-auto cursor-pointer">

              <!-- Image -->
              <div class="flex justify-center mb-4 md:mb-6">
                <img :src="WebDev" alt="Web Development" class="h-40 lg:h-60 object-contain">
              </div>

              <!-- Content -->
              <div>
                <h3 class="text-lg md:text-xl text-blue-200 font-bold mb-2 md:mb-3 text-center">
                  Custom Web Development
                </h3>

                <p class="text-sm md:text-base text-white px-2 text-center">
                  Building fast, secure, responsive, and highly scalable websites tailored perfectly
                  to achieve your unique business goals.
                </p>
              </div>

              <!-- Small Grid -->
              <div class="text-white grid grid-cols-2 gap-4 md:gap-8 py-4 md:py-5 text-xs px-2 lg:whitespace-nowrap">
                <div>• Corporate Websites</div>
                <div>• Landing Pages</div>
                <div>• WordPress & CMS</div>
                <div>• Performance Optimization</div>
              </div>

              <!-- Button -->
              <div class="flex justify-center items-center">
                <router-link to="/contact" class="bg-slate-750 text-white px-4 py-2 text-sm md:text-base 
                                          rounded-2xl flex items-center gap-2
                                          hover:bg-blue-900 hover:text-white transition duration-300
                                          border border-blue-500 cursor-pointer">
                  Book a call
                  <img :src="Arrow" alt="arrow" class="h-8 w-10 object-contain bg-blue-400
                rounded-xl" />
                </router-link>
              </div>

            </div>
          </div>

          <!-- Card -->
          <div data-aos="fade-up">
            <div class="bg-slate-900 backdrop-blur-md border-2 border-white 
            transform-gpu will-change-transform
            transition-transform transition-shadow transition-colors
            duration-300 ease-out
            rounded-2xl shadow-md
            hover:shadow-xl hover:-translate-y-1.5 hover:scale-[1.02]
            py-6 px-5 md:py-10 md:px-10
            max-w-sm md:max-w-lg mx-auto cursor-pointer">

              <!-- Image -->
              <div class="flex justify-center mb-4 md:mb-6">
                <img :src="ECommerce" alt="Web Development" class="h-40 lg:h-60 object-contain">
              </div>

              <!-- Content -->
              <div>
                <h3 class="text-lg md:text-xl text-blue-200 font-bold mb-2 md:mb-3 text-center">
                  E-Commerce Solutions
                </h3>

                <p class="text-sm md:text-base text-white px-2 text-center">
                  Creating high-converting online stores that provide a seamless shopping
                  experience and drive continuous sales growth.
                </p>
              </div>

              <!-- Small Grid -->
              <div class="text-white grid grid-cols-2 gap-4 md:gap-8 py-4 md:py-5 text-xs px-2 lg:whitespace-nowrap">
                <div>• Shopify Development</div>
                <div>• WooCommerce Setup</div>
                <div>• Payment Gateway Integration</div>
                <div>• Pruduct Page Optimization</div>
              </div>

              <!-- Button -->
              <div class="flex justify-center items-center">
                <router-link to="/contact" class="bg-slate-750 text-white px-4 py-2 text-sm md:text-base 
                                          rounded-2xl flex items-center gap-2
                                          hover:bg-blue-900 hover:text-white transition duration-300
                                          border border-blue-500 cursor-pointer">
                  Book a call
                  <img :src="Arrow" alt="arrow" class="h-8 w-10 object-contain bg-blue-400
                rounded-xl" />
                </router-link>
              </div>

            </div>
          </div>

          <!-- Card -->
          <div data-aos="fade-up">
            <div class="bg-slate-900 backdrop-blur-md border-2 border-white 
            transform-gpu will-change-transform
            transition-transform transition-shadow transition-colors
            duration-300 ease-out
            rounded-2xl shadow-md
            hover:shadow-xl hover:-translate-y-1.5 hover:scale-[1.02]
            py-6 px-5 md:py-10 md:px-10
            max-w-sm md:max-w-lg mx-auto cursor-pointer">

              <!-- Image -->
              <div class="flex justify-center mb-4 md:mb-6">
                <img :src="Marketing" alt="Web Development" class="h-40 lg:h-60 object-contain">
              </div>

              <!-- Content -->
              <div>
                <h3 class="text-lg md:text-xl text-blue-200 font-bold mb-2 md:mb-3 text-center">
                  Social Media Marketing
                </h3>

                <p class="text-sm md:text-base text-white px-2 text-center">
                  Building strong online communities, increasing brand awareness, and engaging
                  your audience across all major social platforms.
                </p>
              </div>

              <!-- Small Grid -->
              <div class="text-white grid grid-cols-2 gap-4 md:gap-8 py-4 md:py-5 text-xs px-2 lg:whitespace-nowrap">
                <div>• Social Media Strategy</div>
                <div>• Content Creation</div>
                <div>• Community Management</div>
                <div>• Influencer Outreach</div>
              </div>

              <!-- Button -->
              <div class="flex justify-center items-center">
                <router-link to="/contact" class="bg-slate-750 text-white px-4 py-2 text-sm md:text-base 
                                          rounded-2xl flex items-center gap-2
                                          hover:bg-blue-900 hover:text-white transition duration-300
                                          border border-blue-500 cursor-pointer">
                  Book a call
                  <img :src="Arrow" alt="arrow" class="h-8 w-10 object-contain bg-blue-400
                rounded-xl" />
                </router-link>
              </div>

            </div>
          </div>

          <!-- Card -->
          <div data-aos="fade-up">
            <div class="bg-slate-900 backdrop-blur-md border-2 border-white 
            transform-gpu will-change-transform
            transition-transform transition-shadow transition-colors
            duration-300 ease-out
            rounded-2xl shadow-md
            hover:shadow-xl hover:-translate-y-1.5 hover:scale-[1.02]
            py-6 px-5 md:py-10 md:px-10
            max-w-sm md:max-w-lg mx-auto cursor-pointer">

              <!-- Image -->
              <div class="flex justify-center mb-4 md:mb-6">
                <img :src="Advertising" alt="Web Development" class="h-40 lg:h-60 object-contain">
              </div>

              <!-- Content -->
              <div>
                <h3 class="text-lg md:text-xl text-blue-200 font-bold mb-2 md:mb-3 text-center">
                  SEO & Paid Advertising
                </h3>

                <p class="text-sm md:text-base text-white px-2 text-center">
                  Driving highly tageted traffic to your website and maximizing your Return
                  on Investment (ROI) through data-driven campaigns.
                </p>
              </div>

              <!-- Small Grid -->
              <div class="text-white grid grid-cols-2 gap-4 md:gap-8 py-4 md:py-5 text-xs px-2 lg:whitespace-nowrap">
                <div>• Search Engine Optimization (SEO)</div>
                <div>• Google Ads (PPC)</div>
                <div>• Facebook & Instagram Ads</div>
                <div>• Analytics & Performance Reporting</div>
              </div>

              <!-- Button -->
              <div class="flex justify-center items-center">
                <router-link to="/contact" class="bg-slate-750 text-white px-4 py-2 text-sm md:text-base 
                                          rounded-2xl flex items-center gap-2
                                          hover:bg-blue-900 hover:text-white transition duration-300
                                          border border-blue-500 cursor-pointer">
                  Book a call
                  <img :src="Arrow" alt="arrow" class="h-8 w-10 object-contain bg-blue-400
                rounded-xl" />
                </router-link>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>



  </section>
</template>

<style scoped></style>