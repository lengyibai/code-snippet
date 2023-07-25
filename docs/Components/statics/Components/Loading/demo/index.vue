<template>
  <div class="demo">
    <button @click="loading">{{ isFull ? '关闭' : '开启' }}全屏显示</button>
    <LibLoading :show="show" :isFull="isFull" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LibLoading from '../index.vue';

const show = ref(false);
const isFull = ref(false);

const loading = () => {
  isFull.value = !isFull.value;
  show.value = true;
  setTimeout(() => {
    show.value = false;
  }, 3000);
};
</script>
<style scoped>
.demo {
  position: relative;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
