<template>
  <div class="LibGridNumber" :style="{ gridArea: gridArea }">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  x?: number;
  y?: number;
  countX?: number;
  countY?: number;
}
const props = withDefaults(defineProps<Props>(), {
  x: 0,
  y: 0,
  countX: 0,
  countY: 0,
});

const gridArea = computed(() => {
  return `${props.y} / ${props.x} / ${props.y + props.countY} / ${props.x + props.countX}`;
});
</script>
<style scoped>
.LibGridNumber {
  display: grid;
  width: 100%;
  height: 100%;
}
</style>
