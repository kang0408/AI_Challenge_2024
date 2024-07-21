<script setup>
import Video from '@components/Video.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
onMounted(() => {
  router.push({ path: '/pages/1' });
});
</script>

<template>
  <main class="mt-[120px] p-4 pb-6">
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
