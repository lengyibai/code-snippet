<script setup lang="ts">
import { computed } from "vue";

interface Props {
  /** 从左到右，从第几个格子开始？ */
  x?: number;
  /** 从上到下，从第几个格子开始？ */
  y?: number;
  /** 从左到右占用多少格？ */
  countX?: number;
  /** 从上到下占用多少格？ */
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

<template>
  <div class="lib-grid-number" :style="{ gridArea: gridArea }">
    <slot></slot>
  </div>
</template>

<style scoped>
.lib-grid-number {
  display: grid;
  width: 100%;
  height: 100%;
}
</style>
