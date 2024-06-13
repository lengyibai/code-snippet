<script setup lang="ts">
import { vSweepLight } from "./sweep-light";
</script>

<template>
  <div v-sweep-light="{ auto: false }" class="sweep-light"></div>
</template>

<style scoped>
.sweep-light {
  position: relative;
  overflow: hidden;
  width: 25vw;
  height: 25vw;
  background: url("/images/logo.png") no-repeat center center;
  background-size: cover;
  clip-path: circle(50% at 50% 50%);
}
</style>
