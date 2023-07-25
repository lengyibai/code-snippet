<script setup>
  import Iframe from './Components/Iframe/demo/index.vue'
</script>

# Iframe

<ContainerBox title="介绍">
<template #desc>
在当前网页以动画形式打开其他网页
</template>
</ContainerBox>

<ContainerBox title="下载并引入">

<template #desc>

[下载组件包及当前组件的所有案例](https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/static/LibIframe.zip)

引入参考 [引入组件](/Components/base/start.html)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">
<Iframe />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <button class="btn" @click="Switch">{{ show ? '关闭' : '打开' }}</button>
    <LibIframe class="LibIframe" link="https://vitepress.vuejs.org/" :show="show" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);

const Switch = () => {
  show.value = !show.value;
};
</script>
<style scoped>
.demo {
  position: relative;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.LibIframe {
  width: 100%;
  height: 100%;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">

<template #desc>

| 参数 | 说明         | 类型    | 默认值 |
| ---- | ------------ | ------- | ------ |
| link | 要打开的链接 | String  | -      |
| show | 是否显示     | Boolean | -      |

</template>
</ContainerBox>
