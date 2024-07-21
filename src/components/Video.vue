<template>
  <div class="">
    <div class="grid gap-4 m:grid-cols-2 md:grid-cols-3 xl:grid-cols-8">
      <div
        class="flex items-center justify-center w-full h-28 rounded-md border-black border-2 m:h-32"
        v-for="(item, index) in paginatedVideos"
        :key="index"
      >
        <p>{{ item.name }}</p>
      </div>
    </div>
    <div class="mt-6 flex items-center justify-center">
      <n-pagination
        v-model:page="currentPage"
        :page-count="pageCount"
        show-quick-jumper
        :page-slot="pageSlot"
        size="large"
        @update:page="handlePageChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, onBeforeUnmount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { NPagination } from 'naive-ui';
const videos = ref([]);

const router = useRouter();
const route = useRoute();

const currentPage = ref(Number(route.params.page)); // page hiện tại
const pageSize = ref(64); // Kích thước tối đa video của 1 page
const pageCount = computed(() => Math.ceil(videos.value.length / pageSize.value)); // Số lượng page

const paginatedVideos = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return videos.value.slice(start, end);
});

const handlePageChange = (page) => {
  currentPage.value = page;
  router.push({ name: 'page', params: { page } });
};

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

watch(currentPage, () => topFunction());

const pageSlot = ref(7);
function getRes() {
  if (window.innerWidth < 480) {
    pageSlot.value = 2;
    pageSize.value = 20;
  } else if (window.innerWidth >= 480 && window.innerWidth < 1024) {
    pageSlot.value = 7;
    pageSize.value = 27;
  } else if (window.innerWidth > 1024 && window.innerWidth <= 1280) {
    pageSlot.value = 7;
  } else {
    pageSlot.value = 7;
    pageSize.value = 64;
  }
}

onMounted(() => {
  for (let i = 0; i < 957; i++) {
    videos.value.push({ id: i + 1, name: `Video ${i + 1}` });
  }
  window.addEventListener('resize', getRes);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', getRes);
});

getRes();
</script>
