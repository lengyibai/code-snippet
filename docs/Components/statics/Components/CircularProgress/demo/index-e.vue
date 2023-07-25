<template>
  <div class="demo">
    <input type="text" v-model.number="num" />
    <LibCircularProgress
      :part-gap="20"
      :part="50"
      :value="num"
      :stroke-width="20"
      bg-ring-color="#13387e"
      ring-color="#00bbff"
      stroke-linecap="butt"
    >
      <span>更细的进度格</span>
      <br />
      <span>{{ `${(num * 100).toFixed(2)}%` }}</span>
    </LibCircularProgress>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LibCircularProgress from '../index.vue';

const num = ref(0.6);
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
