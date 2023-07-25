<template>
  <div class="demo">
    <LibStripeBtn @click="fn" :text="text" :bgColor="bgColor" v-model="active" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LibStripeBtn from '../index.vue';

const active = ref(false);
const text = ref('删除');
const bgColor = ref('#f56c6c');

const fn = () => {
  active.value = true;
  text.value = 'loading...';
  bgColor.value = '#67c23a';
  setTimeout(() => {
    bgColor.value = '#409eff';
    text.value = '创建';
    active.value = false;
  }, 2000);
};
</script>
<style scoped>
.demo {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
