<script setup>
  import Loading from './Components/Loading/demo/index.vue'
</script>

# Loading

<ContainerBox title="介绍">
<template #desc>

彩色圆点`Loading`
</template>
</ContainerBox>

<ContainerBox title="下载并引入">

<template #desc>

[下载组件包及当前组件的所有案例](https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/static/LibLoading.zip)

引入参考 [引入组件](/Components/base/start.html)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>
支持全屏及局部显示
</template>

<div class="demoBox">
<Loading />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <button @click="loading">{{ isFull ? '关闭' : '开启' }}全屏显示</button>
    <LibLoading :show="show" :isFull="isFull" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);
const isFull = ref(false);

const loading = () => {
  isFull.value = !isFull.value;
  show.value = true;
  setTimeout(() => {
    show.value = false;
  }, 1000);
};
</script>
<style scoped>
.demo {
  position: relative;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">

<template #desc>

| 参数   | 说明         | 类型    | 默认值 |
| ------ | ------------ | ------- | ------ |
| show   | 控制隐藏显示 | Boolean | false  |
| isFull | 是否全屏显示 | Boolean | true   |

</template>
</ContainerBox>
