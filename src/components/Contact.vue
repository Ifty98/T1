<script setup lang="ts">
import imgMail from "@/assets/EndBar/mail.svg"
import imgPhone from "@/assets/EndBar/phone.svg"
import imgLocation from "@/assets/EndBar/location.svg"
import { ref } from "vue"
import { countryCodes } from "@/data/countryCodes";

const countryCode = ref("+44")

const firstName = ref("")
const lastName = ref("")
const email = ref("")
const company = ref("")
const phone = ref("")
const message = ref("")

function submitForm() {
    console.log({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        company: company.value,
        phone: phone.value,
        message: message.value
    })
}

import background1 from "@/assets/Contact/background1.png"
</script>

<template>
    <section class="bg-blue-950 py-15">
        <div class="relative max-w-screen-xl mx-auto rounded-xl overflow-hidden shadow-2xl">

            <!-- Background image for sm + md -->
            <div class="absolute inset-0 lg:hidden">
                <img :src="background1" alt="background" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-blue-950/70"></div>
            </div>

            <!-- Main content -->
            <div class="relative bg-transparent lg:bg-blue-900 flex flex-col lg:flex-row items-stretch gap-10">

                <!-- TEXT -->
                <div class="lg:w-3/5 text-center lg:text-left flex flex-col justify-center px-10 py-16 z-10">

                    <h1 class="text-white text-3xl font-bold">
                        Contact Us
                    </h1>

                    <p class="text-gray-200 py-6 text-sm max-w-lg mx-auto lg:mx-0">
                        Ready to elevate your brand? Get in touch with our creative team
                        to discuss your project and let's build something amazing together.
                    </p>

                    <div class="py-3">
                        <button type="button" class="bg-blue-500 rounded-lg text-white font-bold cursor-pointer 
                                      lg:w-1/3 py-4 px-2 hover:bg-black transition duration-300">
                            Get in Touch Now
                        </button>
                    </div>

                </div>

                <!-- IMAGE (large screens only) -->
                <div class="hidden lg:flex lg:w-2/5 items-center justify-center">
                    <img :src="background1" alt="background" class="h-96 object-contain">
                </div>

            </div>

        </div>

        <div class="relative max-w-screen-xl mx-auto py-10 flex flex-col lg:flex-row gap-6">
            <div class="bg-[#0b0b45] rounded-xl lg:w-3/5 p-8 shadow-2xl">
                <h2 class="text-white text-xl font-bold mb-6">Send Us a Message</h2>

                <form @submit.prevent="submitForm" class="space-y-4">

                    <!-- Name -->
                    <div class="flex flex-col md:flex-row gap-4">
                        <input v-model="firstName" type="text" placeholder="First Name"
                            class="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />

                        <input v-model="lastName" type="text" placeholder="Last Name"
                            class="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                    </div>

                    <!-- Email -->
                    <input v-model="email" type="email" placeholder="Email"
                        class="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />

                    <!-- Company -->
                    <input v-model="company" type="text" placeholder="Company"
                        class="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />

                    <!-- Phone -->
                    <div class="flex gap-3">

                        <!-- Country Code -->
                        <select v-model="countryCode"
                            class="bg-[#0b0b45] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                            <option v-for="country in countryCodes" :key="country.code" :value="country.dial_code"
                                class="bg-[#0b0b45] text-white cursor-pointer">
                                {{ country.code }} ({{ country.dial_code }})
                            </option>
                        </select>

                        <!-- Phone Number -->
                        <input v-model="phone" type="tel" placeholder="Phone number"
                            class="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />

                    </div>

                    <!-- Message -->
                    <textarea v-model="message" placeholder="Message" rows="5"
                        class="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"></textarea>

                    <!-- Button -->
                    <button type="submit"
                        class="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition duration-300 cursor-pointer">
                        <span>Send</span>

                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rotate-45" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>

                </form>
            </div>
            <div class="lg:w-2/5 flex flex-col gap-5">
                <div class="bg-[#0b0b45] rounded-xl h-3/5 shadow-2xl p-8">
                    <h2 class="text-white text-xl font-bold mb-6">Contact Information</h2>
                    <div class="flex gap-3 items-start">

                        <img :src="imgMail" alt="mail" class="h-7">

                        <div class="flex flex-col">
                            <p class="text-white font-bold">Email</p>
                            <p class="text-gray-400 text-sm">
                                t1@services.ac.uk
                            </p>
                        </div>

                    </div>
                    <div class="flex gap-3 items-start py-6">

                        <img :src="imgPhone" alt="mail" class="h-7">

                        <div class="flex flex-col">
                            <p class="text-white font-bold">Phone</p>
                            <p class="text-gray-400 text-sm">
                                +44 7834275779
                            </p>
                        </div>
                        
                    </div>
                    <div class="flex gap-3 items-start">

                        <img :src="imgLocation" alt="mail" class="h-7">

                        <div class="flex flex-col">
                            <p class="text-white font-bold">Office</p>
                            <p class="text-gray-400 text-sm">
                                5511 Brampton Street
                            </p>
                            <p class="text-gray-400 text-sm">
                                London, NW8 4XP
                            </p>
                            <p class="text-gray-400 text-sm">
                                United Kingdom
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div class="bg-[#0b0b45] rounded-xl h-2/5 shadow-2xl p-8">
                    <h2 class="text-white text-xl font-bold mb-6">Let's Talk Strategy</h2>
                    <p class="text-gray-400 text-sm pb-2">
                        Want to discuss your project in detail? Schedule a free consultation 
                        with our design and marketing experts. We'll help you find the perfect 
                        digital solutions for your business growth.
                    </p>
                    <button type="submit"
                        class="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold 
                        py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition 
                        duration-300 cursor-pointer">
                        Book a meeting
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>