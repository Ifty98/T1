<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

function toggleCard() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="bg-blue-900 w-full rounded-lg px-2 xl:px-0 py-5 text-white cursor-pointer" 
       @click="toggleCard">
    <div class="grid grid-cols-8 gap-2">
      <div class="flex justify-center">
        <p class="bg-black p-3 rounded-lg flex items-center justify-center"><slot name="number" /></p>
      </div>

      <div class="col-span-6">
        <p class="py-3 text-sm md:text-lg">
          <slot name="question" />
        </p>
      </div>
      <div class="flex justify-center py-1">
        <button
          
          class="cursor-pointer text-xl"
        >
          {{ isOpen ? "~" : "+" }}
        </button>
      </div>
    </div>

    <div
      class="grid grid-cols-8 gap-1 overflow-hidden transition-all duration-500"
      :class="isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
    >
      <div></div>
      <div class="col-span-6 py-2 text-gray-300 text-xs md:text-sm">
        <slot name="answer" />
      </div>
    </div>
  </div>
</template>