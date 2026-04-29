<script setup lang="ts">
import FaqCard from "@/components/FaqCard.vue"
import logo from "@/assets/logo.webp"
import facebook from "@/assets/EndBar/facebook.svg"
import instagram from "@/assets/EndBar/instagram.svg"
import linkedin from "@/assets/EndBar/linkedin.svg"
import mail from "@/assets/EndBar/mail.svg"
import phone from "@/assets/EndBar/phone.svg"
import location from "@/assets/EndBar/location.svg"
</script>

<template>
    <footer class="bg-slate-950 text-white px-0 py-5 lg:px-60">
        <div class="flex justify-center text-xl pt-10" data-aos="fade-up">
            <h1>Frequently Asked Questions</h1>
        </div>
        <div class="flex justify-center pt-16 px-5 lg:px-0 xl:px-25 md:px-5" data-aos="fade-up">
            <FaqCard>
                <template #question>
                    What services do you provide?
                </template>
                <template #answer>
                    We combine creativity and technology to deliver impactful
                    digital solutions. Our services include web design and
                    development, branding, logo creation, and user experience
                    design, everything you need to build a strong and memorable
                    online presence.
                </template>
                <template #number>
                    01
                </template>
            </FaqCard>
        </div>
        <div class="flex justify-center pt-16 px-5 lg:px-0 xl:px-25 md:px-5" data-aos="fade-up">
            <FaqCard>
                <template #question>
                    How long does it take to complete a project?
                </template>
                <template #answer>
                    The duration of a project depends on its complexity and
                    requirements. Smaller projects can take as little as 1–2 weeks,
                    while more comprehensive websites or branding packages may
                    take 3–6 weeks. We’ll provide a detailed timeline before
                    starting and keep you informed every step of the way.
                </template>
                <template #number>
                    02
                </template>
            </FaqCard>
        </div>
        <div class="flex justify-center pt-16 px-5 lg:px-0 xl:px-25 md:px-5" data-aos="fade-up">
            <FaqCard>
                <template #question>
                    What if I want changes to the design?
                </template>
                <template #answer>
                    We welcome feedback and revisions throughout the design process.
                    Your satisfaction is important to us, so we include a set
                    number of revisions to refine the design until it meets your
                    expectations. Additional revisions can also be arranged if needed.
                </template>
                <template #number>
                    03
                </template>
            </FaqCard>
        </div>
        <div class="flex justify-center pt-16 px-5 lg:px-0 xl:px-25 md:px-5" data-aos="fade-up">
            <FaqCard>
                <template #question>
                    How do we get started with a project?
                </template>
                <template #answer>
                    Getting started is simple. Just reach out to us through our contact
                    form with details about your project. We’ll review your requirements,
                    get in touch to discuss your goals, and provide a tailored plan to
                    bring your ideas to life.
                </template>
                <template #number>
                    04
                </template>
            </FaqCard>
        </div>
        <div class="flex justify-center pt-16 px-5 lg:px-0 xl:px-25 md:px-5" data-aos="fade-up">
            <FaqCard>
                <template #question>
                    Do you offer custom pricing packages?
                </template>
                <template #answer>
                    Yes, we offer custom pricing tailored to each project. Every business
                    has different needs, so we provide personalised quotes based on your
                    specific requirements, goals, and scope of work.
                </template>
                <template #number>
                    05
                </template>
            </FaqCard>
        </div>
        <div class="border-t border-gray-300 my-10 mx-5" data-aos="fade-up"></div>
        <!-- Desktop Navbar (hidden on sm & md) -->
        <div class="hidden lg:block w-full" data-aos="fade-up">
            <div class="max-w-screen-xl mx-auto px-6 lg:px-10 mb-10">
                <div class="flex justify-between items-center">

                    <!-- Logo -->
                    <div class="flex items-center">
                        <img :src="logo" alt="logo" class="h-10 flex-shrink-0">
                    </div>

                    <!-- Navigation -->
                    <ul class="flex gap-6 xl:gap-10 text-gray-300 items-center">
                        <router-link to="/"
                            class="px-3 py-2 hover:bg-black rounded-full transition duration-300 cursor-pointer text-xs xl:text-sm">
                            Home</router-link>
                        <router-link to="/services"
                            class="px-3 py-2 hover:bg-black rounded-full transition duration-300 cursor-pointer text-xs xl:text-sm">
                            Services</router-link>
                        <router-link to="/portfolio"
                            class="px-3 py-2 hover:bg-black rounded-full transition duration-300 cursor-pointer text-xs xl:text-sm">
                            Portfolio</router-link>
                        <router-link to="/aboutus"
                            class="px-3 py-2 hover:bg-black rounded-full transition duration-300 cursor-pointer text-xs xl:text-sm">
                            About Us</router-link>
                    </ul>

                    <!-- Desktop Social Icons -->
                    <ul class="flex gap-4 items-center">
                        <a href="https://www.facebook.com/profile.php?id=61572072644345" class="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-110">
                            <img :src="facebook" class="h-5 transition duration-300 hover:opacity-80">
                        </a>

                        <a href="https://www.instagram.com/usekeyhq/" class="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-110">
                            <img :src="instagram" class="h-5 transition duration-300 hover:opacity-80">
                        </a>

                        <a href="" class="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-110">
                            <img :src="linkedin" class="h-5 transition duration-300 hover:opacity-80">
                        </a>
                    </ul>

                </div>
            </div>
        </div>


        <!-- Mobile + Tablet Social Icons ONLY -->
        <div class="block lg:hidden w-full" data-aos="fade-up">
            <div class="max-w-screen-xl mx-auto px-6 mb-6">
                <ul class="flex justify-center gap-4 items-center">
                    <a href="https://www.facebook.com/profile.php?id=61572072644345" class="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-110">
                        <img :src="facebook" class="h-5 transition duration-300 hover:opacity-80">
                    </a>
                    <a href="https://www.instagram.com/usekeyhq/" class="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-110">
                        <img :src="instagram" class="h-5 transition duration-300 hover:opacity-80">
                    </a>
                    <a href="" class="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-110">
                        <img :src="linkedin" class="h-5 transition duration-300 hover:opacity-80">
                    </a>
                </ul>
            </div>
        </div>
        <div class="w-full border-t border-gray-200" data-aos="fade-up">
            <div class="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-0 xl:px-40 py-6">

                <div class="flex flex-col gap-4 
                md:flex-row md:flex-wrap 
                lg:flex-nowrap 
                justify-between items-center 
                text-sm">

                    <div class="flex gap-2 items-center text-xs">
                        <img :src="mail" class="h-5">
                        info@use-key.co.uk
                    </div>

                    <div class="flex gap-2 items-center text-xs">
                        <img :src="phone" class="h-5">
                        +44 3301330496
                    </div>

                    <div class="flex gap-2 items-center text-xs">
                        <img :src="location" class="h-5">
                        Greater London, UK
                    </div>

                    <div class="flex gap-6">
                        <a href="" class="text-xs hover:underline">Terms of Service</a>
                        <a href="" class="text-xs hover:underline">Privacy Policy</a>
                    </div>

                </div>

            </div>
        </div>
        <div class="flex justify-center items-center mt-6 text-gray-400" data-aos="fade-up">
            © 2026 Use-Key services. All rights reserved.
        </div>
    </footer>
</template>

<style scoped></style>