<template>
  <div class="LibScroll">
    <LibScroll>
      <div class="content">
        <h1 v-for="(item, index) in 50" :key="index">{{ item }}</h1>
      </div>
    </LibScroll>
  </div>
</template>
<script setup lang="ts">
import LibScroll from '../index.vue';
</script>
<style scoped lang="less">
.LibScroll {
  position: relative;
  width: 100%;
  height: 50vh;
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      color: var(--contrast1-color);
    }
  }
}
</style>
