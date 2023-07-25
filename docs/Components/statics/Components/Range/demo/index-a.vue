<template>
  <div class="demo">
    <LibRange v-model="value" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LibRange from '../index.vue';

const value = ref(0);
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>
