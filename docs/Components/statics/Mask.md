<script setup>
  import Mask from './Components/Mask/demo/index.vue'
</script>

# LibMask

<ContainerBox title="介绍">
<template #desc>
普通的黑色背景蒙版
</template>
</ContainerBox>

<ContainerBox title="下载并引入">

<template #desc>

[下载组件包及当前组件的所有案例](https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/static/LibMask.zip)

引入参考 [引入组件](/Components/base/start.html)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>
点击除内部元素以外的空白处，会关闭蒙版
</template>

<div class="demoBox">
<Mask />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="flex">
    <button @click="show = true">点击显示</button>
    <LibMask v-model="show">
      <h1>这是一个蒙版，点击除这里以外的位置会关闭</h1>
    </LibMask>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const show = ref(false);
</script>
<style scoped>
.flex {
  display: flex;
  justify-content: center;
}

h1 {
  color: #fff;
  font-size: 4vw;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">

<template #desc>

| 参数    | 说明       | 类型    | 默认值 |
| ------- | ---------- | ------- | ------ |
| v-model | 显示与隐藏 | Boolean | false  |

</template>
</ContainerBox>
