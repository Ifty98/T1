<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

function toggleCard() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="bg-blue-900 w-full rounded-lg px-2 xl:px-0 py-5 text-white cursor-pointer overflow-hidden"
    @click="toggleCard">
    <!-- Header -->
    <div class="grid grid-cols-6 md:grid-cols-8 gap-3 md:gap-2 items-start">

      <!-- Number -->
      <div class="flex justify-center items-start col-span-1">
        <p class="bg-black p-3 rounded-lg inline-flex items-center justify-center">
          <slot name="number" />
        </p>
      </div>

      <!-- Question -->
      <div class="col-span-4 md:col-span-6 min-w-0">
        <p class="py-3 text-sm md:text-lg break-words">
          <slot name="question" />
        </p>
      </div>

      <!-- Toggle -->
      <div class="flex justify-center py-1 col-span-1">
        <button class="cursor-pointer text-xl">
          {{ isOpen ? "~" : "+" }}
        </button>
      </div>

    </div>

    <!-- Answer -->
    <div class="grid grid-cols-6 md:grid-cols-8 gap-2 overflow-hidden transition-all duration-500"
      :class="isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'">
      <div></div>

      <div class="col-span-4 md:col-span-6 py-2 text-gray-300 text-xs md:text-sm min-w-0">
        <p class="break-words">
          <slot name="answer" />
        </p>
      </div>
    </div>
  </div>
</template>