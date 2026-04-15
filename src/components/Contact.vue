<script setup lang="ts">
import imgMail from "@/assets/EndBar/mail.svg"
import imgPhone from "@/assets/EndBar/phone.svg"
import imgLocation from "@/assets/EndBar/location.svg"
import { ref } from "vue"
import { countryCodes } from "@/data/countryCodes";
import background1 from "@/assets/Contact/background1.png"

const firstName = ref<string>("");
const lastName = ref<string>("");
const email = ref<string>("");
const company = ref<string>("");
const countryCode = ref<string>("+44");
const phone = ref<string>("");
const message = ref<string>("");

const submitted = ref<boolean>(false);
const loading = ref<boolean>(false);

const submitForm = async (): Promise<void> => {
    loading.value = true;

    const formData = new URLSearchParams();

    formData.append("form-name", "contact");
    formData.append("firstName", firstName.value);
    formData.append("lastName", lastName.value);
    formData.append("email", email.value);
    formData.append("company", company.value);
    formData.append("countryCode", countryCode.value);
    formData.append("phone", phone.value);
    formData.append("message", message.value);

    try {
        await fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData.toString(),
        });

        submitted.value = true;
        resetForm();

        setTimeout(() => {
            submitted.value = false;
        }, 5000);
    } catch (error) {
        console.error("Form submission error:", error);
    } finally {
        loading.value = false;
    }
};

const resetForm = (): void => {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    company.value = "";
    countryCode.value = "";
    phone.value = "";
    message.value = "";
};
</script>

<template>
    <section class="bg-slate-950 py-15">
        <div class="relative max-w-screen-xl mx-auto rounded-xl overflow-hidden shadow-2xl" data-aos="fade-up">

            <!-- Background image for sm + md -->
            <div class="absolute inset-0 lg:hidden">
                <img :src="background1" alt="background" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-blue-950/70"></div>
            </div>

            <!-- Main content -->
            <div class="relative bg-transparent lg:bg-blue-950 flex flex-col lg:flex-row items-stretch gap-10">

                <!-- TEXT -->
                <div class="lg:w-3/5 text-center lg:text-left flex flex-col justify-center px-10 py-16 z-10">

                    <h1 class="text-white text-3xl font-bold">
                        Contact Us
                    </h1>

                    <p class="text-gray-200 py-6 text-sm max-w-lg mx-auto lg:mx-0">
                        Want to see what we can do? Explore our recent projects and discover how we help
                        brands stand out through design and development.
                    </p>

                    <div class="py-5">
                        <router-link to="/portfolio" class="bg-blue-500 rounded-lg text-white font-bold cursor-pointer 
                                      lg:w-1/3 py-4 px-8 hover:bg-black transition duration-300">
                            View our Work
                        </router-link>
                    </div>

                </div>

                <!-- IMAGE (large screens only) -->
                <div class="hidden lg:flex lg:w-2/5 items-center justify-center">
                    <img :src="background1" alt="background" class="h-96 object-contain">
                </div>

            </div>

        </div>

        <div class="relative max-w-screen-xl mx-auto py-10 flex flex-col lg:flex-row gap-6" data-aos="fade-up">
            <div class="bg-[#0b0b45] rounded-xl lg:w-3/5 p-8 shadow-2xl">
                <h2 class="text-white text-xl font-bold mb-6">Send Us a Message</h2>

                <!-- Success message -->
                <div v-if="submitted" class="mb-4 text-green-400 font-medium">
                    Thank you! Your message has been sent successfully.
                </div>

                <form name="contact" method="POST" data-netlify="true" @submit.prevent="submitForm" class="space-y-4">
                    <!-- Netlify hidden input -->
                    <input type="hidden" name="form-name" value="contact" />

                    <!-- Name -->
                    <div class="flex flex-col md:flex-row gap-4">
                        <input v-model="firstName" name="firstName" type="text" placeholder="First Name" required
                            class="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />

                        <input v-model="lastName" name="lastName" type="text" placeholder="Last Name" required
                            class="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                    </div>

                    <!-- Email -->
                    <input v-model="email" name="email" type="email" placeholder="Email" required
                        class="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />

                    <!-- Company -->
                    <input v-model="company" name="company" type="text" placeholder="Company" required
                        class="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />

                    <!-- Phone -->
                    <div class="flex gap-3">
                        <!-- Country Code -->
                        <select v-model="countryCode" name="countryCode" required
                            class="bg-[#0b0b45] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                            <option v-for="country in countryCodes" :key="country.code" :value="country.dial_code"
                                class="bg-[#0b0b45] text-white cursor-pointer">
                                {{ country.code }} ({{ country.dial_code }})
                            </option>
                        </select>

                        <!-- Phone Number -->
                        <input v-model="phone" name="phone" type="tel" placeholder="Phone number" required
                            class="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                    </div>

                    <!-- Message -->
                    <textarea v-model="message" name="message" placeholder="Message" rows="5" required
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
                                info@use-key.co.uk
                            </p>
                        </div>

                    </div>
                    <div class="flex gap-3 items-start py-6">

                        <img :src="imgPhone" alt="mail" class="h-7">

                        <div class="flex flex-col">
                            <p class="text-white font-bold">Phone</p>
                            <p class="text-gray-400 text-sm">
                                 +44 3301330496
                            </p>
                        </div>

                    </div>
                    <div class="flex gap-3 items-start">

                        <img :src="imgLocation" alt="mail" class="h-7">

                        <div class="flex flex-col">
                            <p class="text-white font-bold">Office</p>
                            <p class="text-gray-400 text-sm">
                                26 Brampton Grove
                            </p>
                            <p class="text-gray-400 text-sm">
                                London, NW4 4AJ
                            </p>
                            <p class="text-gray-400 text-sm">
                                United Kingdom
                            </p>
                        </div>

                    </div>
                </div>
                <div class="bg-[#0b0b45] rounded-xl h-2/5 shadow-2xl p-8">
                    <h2 class="text-white text-xl font-bold mb-6">Explore Our Prime Memberships</h2>
                    <p class="text-gray-400 text-sm pb-2">
                        Unlock exclusive benefits with our Prime Membership plans. Get access to
                        ongoing design support, priority service, and tailored digital solutions
                        to help your business grow consistently.
                    </p>
                    <router-link to="/membership" class="w-full bg-blue-600 text-white font-semibold 
                        py-3 px-6 rounded-lg flex items-center justify-center gap-2
                        hover:bg-blue-700 transition duration-300">
                        View Membership Plans
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>