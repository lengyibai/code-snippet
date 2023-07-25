<template>
  <div class="DownDrag" v-dragFile="dragFile">
    <span>将文件拖动到此处解析</span>
    <div class="list" :class="{ file: item.includes('.') }" v-for="(item, index) in fileList" :key="index">
      {{ `${item.includes('.') ? '[文件] ' : '[文件夹] '}` + item }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const fileList = ref<string[]>([]);

const dragFile = (file: File[]) => {
  console.log(file);
  fileList.value = file.map((item) => {
    return item.name;
  });
};
</script>
<style scoped>
.DownDrag {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 50vh;
  border: 0.35vw dashed #000;
  font-size: 3vw;
}
.list {
  font-size: 1vw;
  color: #f39c12 !important;
}

.file {
  color: #2980b9 !important ;
}
</style>
