<template>
  <div class="demo">
    <UploadFile
      :files="files"
      @cancel="cancel"
      @del="del"
      @fail="fail"
      @progress="progress"
      @success="success"
      id="a"
      url="https://jsonplaceholder.typicode.com/posts/"
    />
    <p v-for="(item, index) in files" :key="index">
      {{ item }}
    </p>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import UploadFile from '../index.vue';

const files = ref([]);
const success = (a) => {
  console.warn('上传成功：', a);
};

const del = (a) => {
  console.warn('删除文件：', a);
};

const cancel = () => {
  console.warn('取消上传');
};

const fail = () => {
  console.error('上传失败');
};

const progress = (a) => {
  console.warn('上传进度：', a);
};
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>
