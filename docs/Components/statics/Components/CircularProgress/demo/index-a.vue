<script setup lang="ts">
import { ref } from "vue";

import LibCircularProgress from "../indexA.vue";

const num = ref(0.15);
</script>

<template>
  <div class="demo">
    <input v-model.number="num" type="text" />
    <LibCircularProgress :value="num">
      <span>纯色进度条</span>
      <br />
      <span>{{ `${(num * 100).toFixed(2)}%` }}</span>
    </LibCircularProgress>
  </div>
</template>

<style scoped>
.demo {
  display: flex;
  align-items: center;
  flex-direction: column;
}

input {
  margin-bottom: 25px;
  font-size: 20px;
}
</style>
