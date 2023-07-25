<template>
  <div class="demo">
    <LibCommitBtn size="50px" @commit="commit" :finish="finish" v-model="status" title="发布" />
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
    finish.value = true;
    text.value = '提交成功';
    setTimeout(() => {
      status.value = 0;
      finish.value = false;
      text.value = '再次提交';
    }, 1000);
  }, 1000);
};
</script>
<style scoped lang="less">
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2vw;
}
</style>
