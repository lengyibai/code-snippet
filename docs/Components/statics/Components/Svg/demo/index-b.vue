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
      :downFn="downFn"
      :upFn="upFn"
    />动画
  </div>
</template>
<script setup lang="ts">
import LibSvg from '../index.vue';
import icon from './svg/icon.js';

const downFn = (el: HTMLElement | undefined) => {
  el!.style.transition = 'all 0.25s';
  el!.style.transform = 'rotate(360deg) scale(0.75)';
};

const upFn = (el: HTMLElement | undefined) => {
  el!.style.transition = 'all 1s';
  el!.style.transform = 'rotate(0deg) scale(1)';
};
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
