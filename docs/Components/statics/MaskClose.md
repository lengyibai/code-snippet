<script setup>
  import MaskClose from './Components/MaskClose/demo/index.vue'
</script>

# MaskClose

<ContainerBox title="介绍">
<template #desc>

灵感来自`B站`观看视频最大化时，鼠标移动到顶部，会有一个关闭按钮
</template>
</ContainerBox>

<ContainerBox title="下载并引入">

<template #desc>

[下载组件包及当前组件的所有案例](https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/static/LibMaskClose.zip)

引入参考 [引入组件](/Components/base/start.html)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>
鼠标移动到导航栏处看效果
</template>
<MaskClose />

<ShowCode>
<template #codes>

```vue
<template>
  <LibMaskClose @close="close" />
</template>
<script setup lang="ts">
const close = () => {
  alert('关闭回调');
};
</script>
```

</template>
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Events">

<template #desc>

| 事件名 | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| close  | 点击关闭时调用 | -        |

</template>
</ContainerBox>
