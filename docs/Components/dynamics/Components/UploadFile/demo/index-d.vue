<template>
  <div class="demo">
    <UploadFile
      :files="files"
      id="d"
      url="https://jsonplaceholder.typicode.com/posts/"
      v-if="show || files.length"
    />
    <p v-for="(item, index) in files" :key="index">
      {{ item }}
    </p>
  </div>
</template>
<script setup>
import { ref } from "vue";
import UploadFile from "../index.vue";

const files = ref([]);
const show = ref(false);

/* 模拟异步请求图片，isShow 是为了避免无图片导致隐藏，无法添加图片 */
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
  show.value = true; //请求成功后赋值
}, 1000);
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>
