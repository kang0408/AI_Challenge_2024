<script setup>
import { defineEmits } from 'vue';
const emits = defineEmits(['showModal']);
</script>

<template>
  <div>
    <div class="border-input !w-full h-44 mb-4">
      <textarea
        placeholder="Nhập tìm kiếm..."
        class="resize-none w-full h-full outline-none text-lg"
      />
    </div>
    <div class="flex items-center justify-between">
      <div class="bg-white rounded-full shadow-md cursor-pointer hover:opacity-70">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-7 h-7 m-2">
          <path
            class="fill-primary"
            d="M12 14q-1.25 0-2.125-.875T9 11V5q0-1.25.875-2.125T12 2t2.125.875T15 5v6q0 1.25-.875 2.125T12 14m-1 7v-3.075q-2.6-.35-4.3-2.325T5 11h2q0 2.075 1.463 3.538T12 16t3.538-1.463T17 11h2q0 2.625-1.7 4.6T13 17.925V21z"
          />
        </svg>
      </div>
      <div class="flex items-center gap-2">
        <div
          class="border-4 border-gray-400 px-4 py-2 bg-gray-400 rounded-full text-white cursor-pointer hover:opacity-70"
          @click="emits('showModal')"
        >
          <p class="text-lg">Hủy</p>
        </div>
        <div
          class="group border-input !w-fit cursor-pointer hover:bg-primary transition-all duration-300 ease-out"
        >
          <p class="text-lg text-primary group-hover:text-white">Tìm kiếm</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
