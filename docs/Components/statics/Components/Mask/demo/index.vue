<template>
  <div class="flex">
    <button @click="show = true">点击显示</button>
    <LibMask v-model="show">
      <h1>这是一个蒙版，点击除这里以外的位置会关闭</h1>
    </LibMask>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LibMask from '../index.vue';
const show = ref(false);
</script>
<style scoped>
.flex {
  display: flex;
  justify-content: center;
}

h1 {
  color: #fff;
  font-size: 4vw;
}
</style>
