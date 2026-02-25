<script setup lang="ts">
import FaqCard from "@/components/FaqCard.vue"
import logo from "@/assets/logo.svg"
import facebook from "@/assets/facebook.svg"
import twitter from "@/assets/twitter.svg"
import linkedin from "@/assets/linkedin.svg"
import mail from "@/assets/mail.svg"
import phone from "@/assets/phone.svg"
import location from "@/assets/location.svg"
</script>

<template>
    <footer class="bg-blue-950 text-white px-0 py-5 lg:px-60">
        <div class="flex justify-center text-xl pt-10">
            <h1>Frequently Asked Questions</h1>
        </div>
        <div class="flex justify-center pt-16 px-5 lg:px-0 xl:px-25 md:px-5">
            <FaqCard>
                <template #question>
                    What services do you provide?
                </template>
                <template #answer>
                    Now is the winter of our discontent
                    Made glorious summer by this sun of York;
                    And all the clouds that lour'd upon our house
                    In the deep bosom of the ocean buried.
                </template>
                <template #number>
                    01
                </template>
            </FaqCard>
        </div>
        <div class="flex justify-center pt-16 px-5 lg:px-0 xl:px-25 md:px-5">
            <FaqCard>
                <template #question>
                    How long does it take to complete a project?
                </template>
                <template #answer>
                    Now is the winter of our discontent
                    Made glorious summer by this sun of York;
                    And all the clouds that lour'd upon our house
                    In the deep bosom of the ocean buried.
                </template>
                <template #number>
                    02
                </template>
            </FaqCard>
        </div>
        <div class="flex justify-center pt-16 px-5 lg:px-0 xl:px-25 md:px-5">
            <FaqCard>
                <template #question>
                    What if I want changes to the design?
                </template>
                <template #answer>
                    Now is the winter of our discontent
                    Made glorious summer by this sun of York;
                    And all the clouds that lour'd upon our house
                    In the deep bosom of the ocean buried.
                </template>
                <template #number>
                    03
                </template>
            </FaqCard>
        </div>
        <div class="flex justify-center pt-16 px-5 lg:px-0 xl:px-25 md:px-5">
            <FaqCard>
                <template #question>
                    How do we get started with a project?
                </template>
                <template #answer>
                    Now is the winter of our discontent
                    Made glorious summer by this sun of York;
                    And all the clouds that lour'd upon our house
                    In the deep bosom of the ocean buried.
                </template>
                <template #number>
                    04
                </template>
            </FaqCard>
        </div>
        <div class="flex justify-center pt-16 px-5 lg:px-0 xl:px-25 md:px-5">
            <FaqCard>
                <template #question>
                    Do you offer custom pricing packages?
                </template>
                <template #answer>
                    Now is the winter of our discontent
                    Made glorious summer by this sun of York;
                    And all the clouds that lour'd upon our house
                    In the deep bosom of the ocean buried.
                </template>
                <template #number>
                    05
                </template>
            </FaqCard>
        </div>
        <div class="border-t border-gray-300 my-10 mx-5"></div>
        <!-- Desktop Navbar (hidden on sm & md) -->
        <!-- Desktop Navbar (UNCHANGED) -->
        <div class="hidden lg:block w-full">
            <div class="max-w-screen-xl mx-auto px-6 lg:px-10 mb-10">
                <div class="flex justify-between items-center">

                    <!-- Logo -->
                    <div class="flex items-center">
                        <img :src="logo" alt="t1-logo" class="h-8 flex-shrink-0">
                    </div>

                    <!-- Navigation -->
                    <ul class="flex gap-6 xl:gap-10 text-gray-300 items-center">
                        <li
                            class="px-3 py-2 hover:bg-black rounded-full transition duration-300 cursor-pointer text-xs xl:text-sm">
                            Home</li>
                        <li
                            class="px-3 py-2 hover:bg-black rounded-full transition duration-300 cursor-pointer text-xs xl:text-sm">
                            Services</li>
                        <li
                            class="px-3 py-2 hover:bg-black rounded-full transition duration-300 cursor-pointer text-xs xl:text-sm">
                            Portfolio</li>
                        <li
                            class="px-3 py-2 hover:bg-black rounded-full transition duration-300 cursor-pointer text-xs xl:text-sm">
                            About Us</li>
                    </ul>

                    <!-- Desktop Social Icons -->
                    <ul class="flex gap-4 items-center">
                        <li class="cursor-pointer"><img :src="facebook" class="h-5"></li>
                        <li class="cursor-pointer"><img :src="twitter" class="h-5"></li>
                        <li class="cursor-pointer"><img :src="linkedin" class="h-5"></li>
                    </ul>

                </div>
            </div>
        </div>


        <!-- Mobile + Tablet Social Icons ONLY -->
        <div class="block lg:hidden w-full">
            <div class="max-w-screen-xl mx-auto px-6 mb-6">
                <ul class="flex justify-center gap-4 items-center">
                    <li class="cursor-pointer"><img :src="facebook" class="h-5"></li>
                    <li class="cursor-pointer"><img :src="twitter" class="h-5"></li>
                    <li class="cursor-pointer"><img :src="linkedin" class="h-5"></li>
                </ul>
            </div>
        </div>
        <div class="w-full border-t border-gray-200">
            <div class="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-0 xl:px-40 py-6">

                <div class="flex flex-col gap-4 
                md:flex-row md:flex-wrap 
                lg:flex-nowrap 
                justify-between items-center 
                text-sm">

                    <div class="flex gap-2 items-center text-xs">
                        <img :src="mail" class="h-5">
                        t1@services.ac.uk
                    </div>

                    <div class="flex gap-2 items-center text-xs">
                        <img :src="phone" class="h-5">
                        +44 7834275779
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
        <div class="flex justify-center items-center mt-6 text-gray-400">
            © 2026 T1 services. All rights reserved.
        </div>
    </footer>
</template>

<style scoped></style>