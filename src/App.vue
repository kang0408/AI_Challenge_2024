<script setup>
import { NConfigProvider } from 'naive-ui';

const themeOverrides = {
  common: {
    primaryColor: '#EA7027'
  },
  Radio: {
    labelFontWeight: '700',
    labelPadding: '0 16px 0 0'
  }
};
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <router-view></router-view>
  </n-config-provider>
</template>

<style scoped></style>
