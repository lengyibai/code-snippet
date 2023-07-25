<script setup>
  import StripeBtnA from './Components/StripeBtn/demo/index-a.vue'
  import StripeBtnB from './Components/StripeBtn/demo/index-b.vue'
</script>

# StripeBtn

<ContainerBox title="介绍">
<template #desc>
怀旧条纹加载
</template>
</ContainerBox>

<ContainerBox title="下载并引入">

<template #desc>

[下载组件包及当前组件的所有案例](https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/static/LibStripeBtn.zip)

引入参考 [引入组件](/Components/base/start.html)
</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>
在移动端部分浏览器可能会出现锯齿，PC 端正常，可自行调试
</template>

<div class="demoBox">
<StripeBtnA />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <LibStripeBtn @click="fn" :text="text" :bgColor="bgColor" v-model="active" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const active = ref(false);
const text = ref('删除');
const bgColor = ref('#f56c6c');

const fn = () => {
  active.value = true;
  text.value = 'loading...';
  bgColor.value = '#67c23a';
  setTimeout(() => {
    bgColor.value = '#409eff';
    text.value = '创建';
    active.value = false;
  }, 2000);
};
</script>
<style scoped>
.demo {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="深色">
<div class="demoBox">
<StripeBtnB />
</div>
</ContainerBox>

## API

<ContainerBox title="Props">

<template #desc>

| 参数    | 说明                                                                         | 类型    | 默认值  |
| ------- | ---------------------------------------------------------------------------- | ------- | ------- |
| v-mode  | 是否显示条纹，点击后组件内部控制显示条纹，自己只需要在请求结束后隐藏条纹即可 | Boolean | false   |
| theme   | 主题，可选值：white \| black                                                 | String  | white   |
| text    | 按钮文字                                                                     | String  | 按钮    |
| bgColor | 按钮背景色                                                                   | String  | #909399 |
| color   | 按钮文字颜色                                                                 | String  | #fff    |

</template>
</ContainerBox>
