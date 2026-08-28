<script setup lang="ts">
import { ref } from "vue";

import LibFullScroll from "../index.vue";

const page = ref(1);

const start = (i: number) => {
  alert(`开始滚动回调，当前第${i}页`);
};

const end = (i: number) => {
  alert(`结束滚动回调，当前第${i}页`);
};
</script>

<template>
  <div class="demo">
    <LibFullScroll v-model="page" @start="start" @end="end">
      <div v-for="(item, index) in 10" :key="index" class="scroll-item">
        {{ item }}
      </div>
    </LibFullScroll>
  </div>
</template>

<style scoped>
.demo {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px;
}

.scroll-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  font-size: 10vh;
}
</style>
