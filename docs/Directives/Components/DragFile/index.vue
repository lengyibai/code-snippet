<script setup lang="ts">
import { ref } from "vue";

import { vDragAnalysis } from "./drag-analysis";

const fileList = ref<string[]>([]);
/** 拖拽文件进入状态 */
const drag_enter = ref(false);

/** @description 拖拽进入 */
const onDragEnter = () => {
  drag_enter.value = true;
};

/** @description 拖拽离开 */
const onDragLeave = () => {
  drag_enter.value = false;
};

/** @description 解析文件
 * @param file 拖拽放置的文件
 */
const onDragEnd = (files: File[]) => {
  fileList.value = files;
  console.log(files);
  onDragLeave();
};
</script>

<template>
  <div
    v-drag-analysis="{
      getFile: onDragEnd,
      enter: onDragEnter,
      leave: onDragLeave,
    }"
    class="down-drag"
  >
    <span v-show="fileList.length === 0">将文件拖动到此处解析</span>
    <div v-for="(item, index) in fileList" :key="index" class="list">
      {{ item.name }}
    </div>
  </div>
</template>

<style scoped>
.down-drag {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 50vh;
  border: 0.35vw dashed #000;
  font-size: 2vw;
}
</style>
