<script setup lang="ts">
import { vTypewriterMultiple } from "./typewriter-multiple";
</script>

<template>
  <div
    v-typewriter-multiple="{
      speed: 300,
      content: '你好，世界！',
    }"
    class="typewriter-multiple"
  ></div>
</template>

<style scoped>
.typewriter-multiple {
  font-size: 25px;
}
</style>
