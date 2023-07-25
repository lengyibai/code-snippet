<template>
  <div class="grid">
    <LibGridLayout gap="10px" :count="3" :eqhMultiple="0.5">
      <div class="box" v-for="item in 8" :key="item" />
    </LibGridLayout>
  </div>
</template>
<script setup lang="ts">
import LibGridLayout from '../index.vue';
</script>
<style scoped>
.grid {
  width: 100%;
  height: 100%;
}
.box {
  border: 1px solid #000;
  transition: all 0.5s;
}
</style>
