<template>
  <div class="demo">
    <LibCommitBtn
      style="border: 0.75vw solid #000"
      @commit="commit"
      :finish="finish"
      v-model="status"
      title="发布"
      size="15vw"
    />
    <span>{{ text }}</span>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LibCommitBtn from '../index.vue';

const status = ref(0); //提交状态
const finish = ref(false);
const text = ref('待提交');

const commit = () => {
  text.value = '提交中';
  setTimeout(() => {
    status.value = 0;
    text.value = '提交失败';
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
