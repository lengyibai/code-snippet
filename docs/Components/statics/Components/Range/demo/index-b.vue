<template>
  <div class="demo">
    <LibRange
      :icon="icon"
      :max="1000"
      :showIcon="true"
      :size="50"
      :step="10"
      :text="'进度：' + value"
      color="#c0392b"
      ply="10px"
      v-model="value"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LibRange from '../index.vue';
import icon from './img/icon.svg';

const value = ref(0);
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>
