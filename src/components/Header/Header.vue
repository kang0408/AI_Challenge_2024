<script setup>
import SearchOption from '@/components/Header/SearchOption.vue';
import Search from '@components/Search.vue';
import { NRadio, NModal, NCard } from 'naive-ui';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const checkedValue = ref(null);
function handleChange(e) {
  checkedValue.value = e.target.value;
}

const toggleMenu = ref(false);
function toggleMenuHandler() {
  toggleMenu.value = !toggleMenu.value;
}

const showModal = ref(false);
const searchOption = ref('');
function toggleSearchOption(name) {
  searchOption.value = name;
  showModal.value = !showModal.value;
}

const menuPos = ref('');
const exitPos = ref('');
const bodyStyle = ref({
  width: '50%'
});

function getRes() {
  if (window.innerWidth < 480) {
    menuPos.value = 'top';
    exitPos.value = 'bottom';
    toggleMenu.value = false;
    bodyStyle.value.width = '100%';
  } else if (window.innerWidth >= 480 && window.innerWidth < 1024) {
    menuPos.value = 'left';
    exitPos.value = 'right';
    toggleMenu.value = false;
    bodyStyle.value.width = '80%';
  } else {
    menuPos.value = '';
    exitPos.value = '';
    toggleMenu.value = true;
    bodyStyle.value.width = '50%';
  }
}

onMounted(() => {
  window.addEventListener('resize', getRes);
  getRes();
});

onBeforeUnmount(() => {
  window.addEventListener('resize', getRes);
});
</script>

<template>
  <header
    class="rounded-3xl top-0 right-0 left-0 shadow-lg p-4 w-full fixed lg:shadow-none z-50 bg-white"
  >
    <!-- Logo mobile -> tablet -->
    <div class="menu-res lg:hidden flex items-center justify-between w-full bg-white">
      <div class="w-14 h-14">
        <img src="/public/logo.jpg" alt="" class="w-full h-full" />
      </div>
      <div @click="toggleMenuHandler">
        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
          <g fill="none">
            <path
              d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
            />
            <path
              class="fill-primary"
              d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z"
            />
          </g>
        </svg>
      </div>
    </div>
    <!-- Menu bar -->
    <transition name="slide">
      <div
        class="fixed top-0 left-0 bottom-0 right-0 lg:w-full lg:absolute bg-gray-200 lg:rounded-3xl transition-all duration-500 ease-out"
        v-if="toggleMenu"
      >
        <div
          class="menu flex flex-row gap-4 p-4 justify-between bg-white absolute overflow-x-hidden rounded-b-3xl shadow-lg h-full transition-all duration-500 ease-out m:items-end m:flex-col m:absolute m:top-0 m:left-0 m:w-full m:h-1/2 sm:w-1/2 sm:h-full sm:items-start lg:flex-row lg:h-fit lg:justify-between lg:items-center lg:w-full"
          :class="`menu-${menuPos}`"
        >
          <div class="z-10 m:hidden lg:block">
            <img src="/public/logo.jpg" alt="" />
          </div>
          <div
            class="flex items-center gap-4 z-10 m:flex-col m:w-full m:items-end sm:items-start sm:h-full lg:flex-row lg:w-fit"
          >
            <SearchOption option="Tìm kiếm" @click="toggleSearchOption('Tìm kiếm')" />
            <SearchOption option="OCR" @click="toggleSearchOption('OCR')" />
            <SearchOption option="ASR" @click="toggleSearchOption('ASR')" />
            <div class="flex items-center gap-4 z-10 m:w-full">
              <div class="border-input m:justify-center">
                <n-radio
                  :checked="checkedValue === 'Modal 1'"
                  value="Modal 1"
                  name="modal-option"
                  @change="handleChange"
                  class="flex flex-row-reverse text-base font-medium m:justify-between"
                  >Modal 1</n-radio
                >
              </div>
              <div class="border-input m:justify-center">
                <n-radio
                  :checked="checkedValue === 'Modal 2'"
                  value="Modal 2"
                  name="modal-option"
                  class="flex flex-row-reverse text-base font-medium m:justify-between"
                  @change="handleChange"
                  >Modal 2</n-radio
                >
              </div>
            </div>
          </div>
          <!-- Svg -->
          <div class="absolute bottom-0 left-0 right-0 w-full z-0 m:h-16 sm:h-48 lg:h-20 lg:w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 66"
              fill="none"
              class="m:h-full"
            >
              <g filter="url(#filter0_i_138_72)">
                <path
                  d="M38.5 17.208C17.3 16.008 -3.33333 37.708 -11 48.708V75.708L1487 80.708C1479.67 55.3747 1455.87 0.20797 1418.5 0.208008C1381.5 0.208045 1357 47 1324.5 49C1302.04 50.3823 1283.5 32.5 1260.5 26.208C1210.34 12.4868 1212 62.5 1180.5 60.5C1149 58.5 1149.5 43 1133 40.5C1077.58 32.1025 1066.5 64.5 1050.5 57C1034.5 49.5 1039 32 1008.5 30C978 28 953.5 52.5 937 47.5C920.5 42.5 895.5 27 865.5 26C797.505 23.7335 815.221 60.5 770.5 60.5C735 60.5 749.5 15.708 689 11.708C609.617 6.45952 611 66.208 562 58.708C513 51.208 500.5 25.708 472 15.708C388.924 -13.4414 406 58.708 371 58.708C336 58.708 342 36.708 319.5 34.208C297 31.708 277.5 62.208 265 58.708C236 50.708 258.034 3.32912 217.5 20.708C183 35.5 166.5 62 131.5 58.5C96.5 55 65 18.708 38.5 17.208Z"
                  fill="#333A73"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_138_72"
                  x="-11"
                  y="0.208008"
                  width="1503"
                  height="90.5"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="5" dy="10" />
                  <feGaussianBlur stdDeviation="5" />
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_138_72" />
                </filter>
              </defs>
            </svg>
          </div>
          <div class="z-10">
            <div class="w-fit p-2 border-4 rounded-full border-primary bg-white cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24">
                <path
                  class="fill-primary"
                  d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- Exit menu button -->
    <transition name="slide-exit"
      ><div
        class="exit fixed m:bottom-2 z-10 rounded-full border-2 border-primary transition-all duration-500 ease-out m:left-1/2 m:-translate-x-1/2 sm:left-[95%] sm:bottom-1/2 sm:-translate-y-1/2 lg:hidden"
        :class="`exit-${exitPos}`"
        v-if="toggleMenu"
        @click="toggleMenuHandler"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
          class="m-3"
        >
          <path
            class="fill-primary"
            d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
          />
        </svg>
      </div>
    </transition>
  </header>
  <n-modal v-model:show="showModal">
    <n-card
      :title="searchOption"
      :bordered="false"
      size="huge"
      aria-modal="true"
      :style="bodyStyle"
    >
      <template #header-extra>
        <div class="cursor-pointer" @click="showModal = !showModal">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 256 256">
            <path
              fill="currentColor"
              d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
            />
          </svg>
        </div>
      </template>
      <Search @show-modal="showModal = !showModal" />
    </n-card>
  </n-modal>
</template>
<style scoped>
/* Menu animation */
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-to .menu,
.slide-leave-from .menu {
  transform: translateX(0);
  opacity: 1;
}
/* Silde top */
.slide-enter-from .menu-top,
.slide-leave-to .menu-top {
  transform: translateY(-100%);
}
/* Slide left */
.slide-enter-from .menu-left,
.slide-leave-to .menu-left {
  transform: translateX(-100%);
  opacity: 0;
}

/* Exit animation*/
.slide-exit-enter-from,
.slide-exit-leave-to {
  opacity: 0;
}
/* Slide bottom*/
.slide-exit-enter-to.exit-bottom,
.slide-exit-leave-from.exit-bottom {
  transform: translate(-50%, 0);
  opacity: 1;
}
.slide-exit-enter-from.exit-bottom,
.slide-exit-leave-to.exit-bottom {
  transform: translate(-50%, 100%);
}
/* Slide right */
.slide-exit-enter-to.exit-right,
.slide-exit-leave-from.exit-right {
  transform: translate(-50%, -50%);
  opacity: 1;
}
.slide-exit-enter-from.exit-right,
.slide-exit-leave-to.exit-right {
  transform: translate(50px, -50%);
  opacity: 0;
}
</style>
