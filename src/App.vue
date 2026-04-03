<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import EndBar from "@/components/EndBar.vue"
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <NavBar/>
        <main class="flex-grow">
            <router-view/>
        </main>
        <EndBar/>
    </div>
</template>

<style scoped></style>
