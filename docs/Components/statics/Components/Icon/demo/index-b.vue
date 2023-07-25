<template>
  <div class="demo">
    滑
    <LibIcon :imgUrl="a" :imgUrlHover="b" title="滑稽" size="10vw" left="0.5em" right="0.5em" />稽
  </div>
</template>
<script setup lang="ts">
import LibIcon from '../index.vue';
import a from './img/a.svg';
import b from './img/b.svg';
</script>
<style scoped>
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 7.5vw;
}
</style>
