<script setup lang="ts">
import LibFullScroll from "../index.vue";
</script>

<template>
  <div class="demo">
    <LibFullScroll>
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
