<script setup lang="ts">
import { vWaveDiffuse } from "./wave-diffuse";
</script>

<template>
  <div v-wave-diffuse="'rgba(100,100,100,0.5)'" class="wave-diffuse">Hello</div>
</template>

<style scoped lang="less">
.wave-diffuse {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 75px;
  font-size: 25px;
  cursor: pointer;
  user-select: none;
}
</style>
