<template>
  <div class="demo">
    <input type="text" v-model.number="num" />
    <LibCircularProgress
      :value="num"
      :stroke-width="200"
      bg-ring-color="#4834d4"
      ring-color="#686de0"
      stroke-linecap="butt"
    >
      <span>进度“饼”</span>
      <br />
      <span>{{ `${(num * 100).toFixed(2)}%` }}</span>
    </LibCircularProgress>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LibCircularProgress from '../index.vue';

const num = ref(0.9);
</script>
<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  font-size: 20px;
  margin-bottom: 25px;
}
</style>
