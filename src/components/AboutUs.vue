<script setup lang="ts">
import background from "@/assets/AboutUs/background.png"
import planet from "@/assets/AboutUs/planet.png"
import dartboard from "@/assets/AboutUs/dartboard.png"
import process1 from "@/assets/AboutUs/process1.png"
import process2 from "@/assets/AboutUs/process2.png"
import process3 from "@/assets/AboutUs/process3.png"
import process4 from "@/assets/AboutUs/process4.png"
</script>

<template>
    <section class="bg-slate-950 py-15">
        <div class="relative max-w-screen-xl mx-auto rounded-xl overflow-hidden" data-aos="fade-up">

            <!-- Background image for sm + md -->
            <div class="absolute inset-0 lg:hidden">
                <img :src="background" alt="" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-blue-950/70"></div>
            </div>

            <!-- Main content -->
            <div class="relative bg-transparent lg:bg-blue-950 flex flex-col lg:flex-row items-stretch gap-10">

                <!-- TEXT -->
                <div class="lg:w-3/5 text-center lg:text-left flex flex-col justify-center px-10 py-16 z-10">

                    <h1 class="text-white text-xl md:text-2xl lg:text-3xl font-bold">
                        We Are Architects of
                        <span class="text-orange-400 text-2xl md:text-3xl lg:text-4xl font-bold">
                            Digital Growth
                        </span>
                    </h1>

                    <p class="text-gray-200 py-6 text-sm max-w-lg mx-auto lg:mx-0">
                        We are a team of designers and developers dedicated to creating modern and effective digital
                        solutions.
                        From branding to websites, we focus on quality, attention to detail, and building long-term
                        relationships with our clients.
                    </p>

                </div>

                <!-- IMAGE (large only) -->
                <div
                    class="hidden lg:flex lg:w-3/5 items-center justify-center rounded-r-xl max-h-[500px] overflow-hidden">
                    <img :src="background" alt="" class="max-h-full object-contain">
                </div>

            </div>
        </div>

        <div class="relative max-w-screen-xl mx-auto overflow-hidden">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-10 text-center pt-15"
                data-aos="fade-up">

                <div class="bg-blue-950 rounded-xl p-6 md:p-8 shadow-lg hover:scale-105 transition duration-300">
                    <h2 class="text-3xl md:text-4xl font-bold text-orange-400">3+</h2>
                    <p class="text-gray-300 mt-2 md:mt-3 text-sm md:text-base">Years of Experience</p>
                </div>

                <div class="bg-blue-950 rounded-xl p-6 md:p-8 shadow-lg hover:scale-105 transition duration-300">
                    <h2 class="text-3xl md:text-4xl font-bold text-orange-400">30+</h2>
                    <p class="text-gray-300 mt-2 md:mt-3 text-sm md:text-base">Clients</p>
                </div>

                <div class="bg-blue-950 rounded-xl p-6 md:p-8 shadow-lg hover:scale-105 transition duration-300">
                    <h2 class="text-3xl md:text-4xl font-bold text-orange-400">85+</h2>
                    <p class="text-gray-300 mt-2 md:mt-3 text-sm md:text-base">Projects Completed</p>
                </div>

            </div>

            <div class="flex flex-col lg:flex-row items-center gap-10 py-15">

                <div class="lg:w-3/5 text-center lg:text-left flex flex-col justify-center" data-aos="fade-up">
                    <h2 class="font-bold text-white text-3xl md:text-4xl mb-6">
                        Our Story
                    </h2>

                    <p class="text-md text-gray-300 max-w-3xl">
                        What started as a small team of passionate creatives has evolved into a
                        full-service digital agency. Over the years, we recognized that businesses
                        need more than just a beautiful logo or a basic website, they need a cohesive
                        digital strategy. That's why we brought together top-tier graphic designers,
                        web developers, and marketing strategits under one roof. Today, we are proud
                        to be the driving force behind the sucess of numerous brands, helping them
                        navigate and dominate the ever-changing digital landscape.
                    </p>
                </div>

                <div class="lg:w-2/5 flex justify-center" data-aos="fade-up">
                    <img :src="planet" alt="Our team"
                        class="rounded-xl shadow-lg w-full max-w-xs md:max-w-sm lg:max-w-md object-cover">
                </div>

            </div>

            <div class="flex flex-col lg:flex-row items-center gap-10">

                <div class="order-2 lg:order-none lg:w-2/5 flex justify-center" data-aos="fade-up">
                    <img :src="dartboard" alt="Our mission"
                        class="rounded-xl shadow-lg w-full max-w-xs md:max-w-sm lg:max-w-md object-cover">
                </div>

                <div class="order-1 lg:order-none lg:w-3/5 text-center lg:text-left flex flex-col justify-center"
                    data-aos="fade-up">
                    <h2 class="font-bold text-white text-3xl md:text-4xl mb-6">
                        Our Mission
                    </h2>

                    <p class="text-md text-gray-300 max-w-3xl">
                        Our mission is simple: to empower businesses of all sizes to reach their full
                        potential online. We strive to deliver visually stunning designs, seamless web
                        experience, and highly effective marketing campaigns that not only capture
                        attention but also convert audiences into loyal customers. Your growth is our
                        ultimate metric of success.
                    </p>
                </div>

            </div>
        </div>

        <div class="">
            <div class="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-16">

                <h2 class="font-bold text-white text-3xl md:text-4xl mb-6 text-center" data-aos="fade-up">
                    Working Process
                </h2>

                <!-- Cards Container -->
                <div class="rounded-2xl p-6 md:p-10 shadow-lg" data-aos="fade-up">

                    <div class="flex gap-4 px-4 overflow-x-auto no-scrollbar
                                snap-x snap-mandatory scroll-smooth
                                md:grid md:grid-cols-2 lg:grid-cols-4
                                md:overflow-visible">

                        <!-- Card 1 -->
                        <div class="w-[75%] max-w-[220px] md:w-full md:max-w-none
                                    flex-shrink-0 md:flex-shrink
                                    snap-center bg-blue-950 rounded-xl p-4 sm:p-6 text-center
                                    transition duration-300 transform hover:-translate-y-2 
                                    hover:scale-105 hover:shadow-2xl">

                            <div class="flex justify-center mb-4">
                                <img :src="process1"
                                    class="h-16 object-contain transition duration-300 hover:scale-110" />
                            </div>

                            <h3 class="text-white text-lg font-bold mb-3">1. Discovery</h3>

                            <p class="text-white text-sm">
                                We start by understanding your business, goals, and vision to
                                create a strong foundation for the project.
                            </p>

                        </div>

                        <!-- Card 2 -->
                        <div class="w-[75%] max-w-[220px] md:w-full md:max-w-none
                                    flex-shrink-0 md:flex-shrink
                                    snap-center bg-blue-950 rounded-xl p-4 sm:p-6 text-center
                                    transition duration-300 transform hover:-translate-y-2 
                                    hover:scale-105 hover:shadow-2xl">
                            <div class="flex justify-center mb-4">
                                <img :src="process2"
                                    class="h-16 object-contain transition duration-300 hover:scale-110" />
                            </div>
                            <h3 class="text-white text-lg font-bold mb-3">2. Design</h3>
                            <p class="text-white text-sm">
                                We craft modern and visually engaging designs that reflect your
                                brand and connect with your audience.
                            </p>
                        </div>

                        <!-- Card 3 -->
                        <div class="w-[75%] max-w-[220px] md:w-full md:max-w-none
                                    flex-shrink-0 md:flex-shrink
                                    snap-center bg-blue-950 rounded-xl p-4 sm:p-6 text-center
                                    transition duration-300 transform hover:-translate-y-2 
                                    hover:scale-105 hover:shadow-2xl">
                            <div class="flex justify-center mb-4">
                                <img :src="process3"
                                    class="h-16 object-contain transition duration-300 hover:scale-110" />
                            </div>
                            <h3 class="text-white text-lg font-bold mb-3">3. Development</h3>
                            <p class="text-white text-sm">
                                We turn the design into a fully functional, reponsive, and
                                high-performing website.
                            </p>
                        </div>

                        <!-- Card 4 -->
                        <div class="w-[75%] max-w-[220px] md:w-full md:max-w-none
                                    flex-shrink-0 md:flex-shrink
                                    snap-center bg-blue-950 rounded-xl p-4 sm:p-6 text-center
                                    transition duration-300 transform hover:-translate-y-2 
                                    hover:scale-105 hover:shadow-2xl">
                            <div class="flex justify-center mb-4">
                                <img :src="process4"
                                    class="h-16 object-contain transition duration-300 hover:scale-110" />
                            </div>
                            <h3 class="text-white text-lg font-bold mb-3">4. Launch</h3>
                            <p class="text-white text-sm">
                                After testing and final adjustments, we launch your project and
                                provide support to ensure success.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </div>

        <div class="relative max-w-screen-xl mx-auto px-6" data-aos="fade-up">

            <div class="bg-blue-950 rounded-xl py-12 md:py-16 px-6 md:px-10 text-center">

                <!-- Title -->
                <h2 class="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
                    Ready to Start Your Project?
                </h2>

                <!-- Description -->
                <p class="text-gray-300 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                    Let’s work together to bring your ideas to life. Whether you need a website,
                    branding, or a complete digital solution, our team is here to help you grow.
                </p>

                <!-- Button -->
                <div class="mt-10">
                    <router-link to="/contact" class="bg-blue-500 rounded-lg text-white font-bold cursor-pointer 
                        lg:w-1/3 py-4 px-8 hover:bg-black transition duration-300">
                        Contact Us
                    </router-link>
                </div>

            </div>

        </div>
    </section>
</template>

<style scoped>
/* Hide scrollbar but keep swipe */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
