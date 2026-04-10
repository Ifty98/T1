<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import EndBar from "@/components/EndBar.vue"
import AboutUs from "@/components/AboutUs.vue"
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <NavBar/>
        <main class="flex-grow">
            <RouterView/>
        </main>
        <EndBar/>
    </div>
</template>

<style scoped></style>
