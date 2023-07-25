<template>
  <div class="demo">
    <LibUpdateBtn @update="update" :finish="finish" v-model="status" title="更新" />
    <span>{{ text }}</span>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LibUpdateBtn from '../index.vue';

const status = ref(0); //更新状态
const finish = ref(false);
const text = ref('待更新');

const update = () => {
  text.value = '更新中';
  setTimeout(() => {
    finish.value = true;
    text.value = '更新成功';
    setTimeout(() => {
      status.value = 0;
      finish.value = false;
      text.value = '再次更新';
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
