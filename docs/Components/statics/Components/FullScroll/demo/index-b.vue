<template>
  <div class="demo">
    <LibFullScroll direction="x">
      <div class="scroll-item" v-for="(item, index) in 10" :key="index">
        {{ item }}
      </div>
    </LibFullScroll>
  </div>
</template>
<script setup lang="ts">
import LibFullScroll from '../index.vue';
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
