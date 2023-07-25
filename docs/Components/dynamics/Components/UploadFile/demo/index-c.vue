<template>
  <div class="demo">
    <UploadFile :files="files" id="c" readOnly v-if="files.length" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import UploadFile from "../index.vue";

const files = ref([]);

/* 模拟异步请求图片进行预览 */
setTimeout(() => {
  files.value = [
    {
      fileName: "图片1",
      src: "https://lengyibai.gitee.io/img-bed/lyb.png",
    },
    {
      fileName: "图片2",
      src: "https://lengyibai.gitee.io/img-bed/lyb.png",
    },
    {
      fileName: "图片3",
      src: "https://lengyibai.gitee.io/img-bed/lyb.png",
    },
  ];
}, 1000);
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>
