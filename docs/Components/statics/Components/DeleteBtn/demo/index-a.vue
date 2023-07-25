<template>
  <div class="demo">
    <LibDeleteBtn @del="del" :finish="finish" v-model="status" title="删除" />
    <span>{{ text }}</span>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LibDeleteBtn from '../index.vue';

const status = ref(0); //删除状态
const finish = ref(false);
const text = ref('待删除');

const del = () => {
  text.value = '删除中';
  setTimeout(() => {
    finish.value = true;
    text.value = '删除成功';
    setTimeout(() => {
      status.value = 0;
      finish.value = false;
      text.value = '再次删除';
    }, 1000);
  }, 1000);
};
</script>
<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2vw;
}
</style>
