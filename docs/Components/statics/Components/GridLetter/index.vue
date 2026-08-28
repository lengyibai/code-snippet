<script setup lang="ts">
interface Props {
  area: string;
}

withDefaults(defineProps<Props>(), {
  area: "",
});
</script>

<template>
  <div class="lib-grid-letter" :style="{ gridArea: area }">
    <slot></slot>
  </div>
</template>

<style scoped>
.lib-grid-letter {
  width: 100%;
  height: 100%;
}
</style>
