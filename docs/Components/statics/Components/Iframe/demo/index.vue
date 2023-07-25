<template>
  <div class="demo">
    <button class="btn" @click="Switch">{{ show ? '关闭' : '打开' }}</button>
    <LibIframe class="LibIframe" link="https://vitepress.vuejs.org/" :show="show" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LibIframe from '../index.vue';

const show = ref(false);

const Switch = () => {
  show.value = !show.value;
};
</script>
<style scoped>
.demo {
  position: relative;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.LibIframe {
  width: 100%;
  height: 100%;
}
</style>
