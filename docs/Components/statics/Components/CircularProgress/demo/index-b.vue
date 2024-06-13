<script setup lang="ts">
import { ref } from "vue";

import LibCircularProgress from "../indexB.vue";

const num = ref(0.75);
</script>

<template>
  <div class="demo">
    <input v-model.number="num" type="text" />
    <LibCircularProgress
      :part-gap="0"
      :part="1"
      :value="num"
      :show-gradient="true"
      :stroke-width="20"
      bg-ring-color="#13387e"
    >
      <span>渐变进度条</span>
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
