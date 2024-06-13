<script setup lang="ts">
import { vTextHoverColor } from "./text-hover-color";
</script>

<template>
  <div class="text-hover-color">
    <span v-text-hover-color>冷弋白</span>
  </div>
</template>

<style scoped>
.text-hover-color {
  position: relative;
  color: #3498db;
  font-size: 50px;
  cursor: pointer;
  user-select: none;
}
</style>
