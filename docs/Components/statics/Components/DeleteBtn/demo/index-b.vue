<template>
  <div class="demo">
    <LibDeleteBtn
      style="border: 0.75vw solid #000"
      @del="del"
      :finish="finish"
      v-model="status"
      title="删除"
      size="15vw"
    />
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
    status.value = 0;
    text.value = '删除失败';
  }, 1000);
};
</script>
<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 4vw;
}
</style>
