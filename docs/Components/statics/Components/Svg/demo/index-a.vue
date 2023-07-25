<template>
  <div class="demo">
    按下
    <LibSvg
      :svg="icon.wzry"
      color="#ffad31"
      enter-color="#4834d4"
      down-color="#c23616"
      size="10vw"
      left="0.5em"
      right="0.5em"
    />变色
  </div>
</template>
<script setup lang="ts">
import LibSvg from '../index.vue';
import icon from './svg/icon.js';
</script>
<style scoped>
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 4vw;
}
</style>
