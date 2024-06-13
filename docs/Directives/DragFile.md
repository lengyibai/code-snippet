<script setup>
  import DragFile from './Components/DragFile/index.vue'
</script>

# DragFile

<ContainerBox title="介绍">
<template #desc>
一般用于拖拽上传
</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">

::: tip
打开控制台查看解析内容
:::

<div class="demo-box">
<DragFile />
</div>

<CodeBox>
<template #codes>

```vue
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
```

</template>
</CodeBox>

<CodeBox iskey>
<template #codes>

```ts
/**
 * v-drag-analysis
 * 拖拽解析
 */
import type { Directive } from "vue";

interface Params {
  /**
   * @description 拖拽放置后调用
   * @param file 拖拽放置的文件
   */
  getFile: (file: (File | null | undefined)[]) => void;
  enter: () => void;
  leave: () => void;
}

const vDragAnalysis: Directive<HTMLElement, Params> = {
  mounted(el, binding) {
    el.addEventListener("dragover", (e) => {
      e.preventDefault();
      binding.value.enter?.();
    });

    el.addEventListener("dragleave", () => {
      binding.value.leave?.();
    });

    el.addEventListener("drop", (e) => {
      e.preventDefault();
      const file = [...e.dataTransfer!.items].map((item) => {
        if (item.kind === "file") {
          return item.getAsFile();
        }
      });

      binding.value.getFile(file);
    });
  },
};

export { vDragAnalysis };
```

</template>
</CodeBox>
</ContainerBox>