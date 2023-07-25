<template>
  <div class="demo">
    <LibFullScroll @start="start" @end="end" v-model="page">
      <div class="scroll-item" v-for="(item, index) in 10" :key="index">
        {{ item }}
      </div>
    </LibFullScroll>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LibFullScroll from '../index.vue';

const page = ref(3);

const start = (i: number) => {
  console.warn(`开始滚动回调，当前第${i}页`);
};

const end = (i: number) => {
  console.warn(`结束滚动回调，当前第${i}页`);
};
</script>
<style scoped>
.demo {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.scroll-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7vw;
}
</style>
