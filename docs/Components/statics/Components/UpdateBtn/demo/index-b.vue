<template>
  <div class="demo">
    <LibUpdateBtn
      style="border: 0.75vw solid #000"
      @update="update"
      :finish="finish"
      size="15vw"
      v-model="status"
      title="更新"
    />
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
    status.value = 0;
    text.value = '更新失败';
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
