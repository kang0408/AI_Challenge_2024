<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  option: { type: String, require: true }
});
</script>

<template>
  <div class="border-input">
    <p class="text-[#848484] text-base">{{ props.option }}</p>
    <div class="w-6 h-6 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.5"
          d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
          class="stroke-primary"
        />
      </svg>
    </div>
  </div>
</template>
