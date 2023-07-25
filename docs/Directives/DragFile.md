<script setup>
  import DragFile from './Components/DragFile/index.vue'
</script>

# DragFile

<ContainerBox title="介绍">
<template #desc>
一般用于拖拽上传
</template>
</ContainerBox>

<ContainerBox title="使用">
<template #desc>

引入参考 [准备工作](/Directives/base/start.html#准备工作)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">

::: tip
打开控制台查看解析内容
:::

<div class="demoBox">
<DragFile />
</div>

<ShowCode>
<template #codes>

```vue
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
```

</template>
</ShowCode>

<ShowCode iskey>
<template #codes>

```js
const dragFile = {
  mounted(el: HTMLElement, { value }) {
    el.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    el.addEventListener('drop', (e) => {
      e.preventDefault();
      let file = [...e.dataTransfer!.items].map((item) => {
        if (item.kind === 'file') {
          return item.getAsFile();
        }
      });
      value(file);
    });
  },
};
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="value">

<template #desc>

| 说明                         | 类型     |
| ---------------------------- | -------- |
| 解析回调，回调参数为文件列表 | Function |

</template>
</ContainerBox>
