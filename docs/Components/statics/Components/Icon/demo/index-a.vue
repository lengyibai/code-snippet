<template>
  <div class="demo">
    爱
    <LibIcon :imgUrl="love" title="爱心" left="0.5em" right="0.5em" />心
  </div>
</template>
<script setup lang="ts">
import LibIcon from '../index.vue';
import love from './img/love.svg';
</script>
<style scoped>
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 25px;
}
</style>
