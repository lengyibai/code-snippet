<script setup>
  import TriggerRayA from './Components/TriggerRay/demo/index-a.vue'
  import TriggerRayB from './Components/TriggerRay/demo/index-b.vue'
</script>

# TriggerRay

<ContainerBox title="介绍">
<template #desc>
模仿 B 站的点赞放射效果
</template>
</ContainerBox>

<ContainerBox title="下载并引入">

<template #desc>

[下载组件包及当前组件的所有案例](https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/static/LibTriggerRay.zip)

引入参考 [引入组件](/Components/base/start.html)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>
放射背景自适应大小，无需担心尺寸适配问题
</template>

<div class="demoBox">
<TriggerRayA />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="Test">
    <LibTriggerRay @click="fn" :icon="icon" v-model="flag" color="#f1c40f" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LibTriggerRay from '../index.vue';

const icon = `<svg t="1662786269694" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1864"><path d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24z" p-id="1865" fill="currentColor"></path></svg>`;

const flag = ref(false);

const fn = () => {
  flag.value = !flag.value;
};
</script>
<style scoped lang="less">
.Test {
  position: relative;
  width: 100%;
  height: 20vw;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="自定义样式">

<template #desc>
可自定义大小及颜色
</template>

<div class="demoBox">
<TriggerRayB />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="Test">
    <LibTriggerRay @click="fn" :icon="icon" v-model="flag" color="#3498db" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LibTriggerRay from '../index.vue';

const icon = `<svg t="1662721480621" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1415"><path d="M64 483.04V872c0 37.216 30.144 67.36 67.36 67.36H192V416.32l-60.64-0.64A67.36 67.36 0 0 0 64 483.04zM857.28 344.992l-267.808 1.696c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-68.832-155.488-137.568-145.504-60.608 8.8-67.264 61.184-67.264 126.816v59.264c0 76.064-63.84 140.864-137.856 148L256 416.96v522.4h527.552a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824z" p-id="1416" fill="currentColor"></path></svg>`;

const flag = ref(true);

const fn = () => {
  flag.value = !flag.value;
};
</script>
<style scoped lang="less">
.Test {
  position: relative;
  width: 100%;
  height: 20vw;
  min-height: 150px;
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

| 参数    | 说明                                                                 | 类型    | 默认值 |
| ------- | -------------------------------------------------------------------- | ------- | ------ |
| v-model | 控制射线动画播放，整个过程`750ms`<br />动画播放结束后，自动为`false` | Boolean | false  |
| color   | 放射颜色                                                             | String  | red    |

</template>
</ContainerBox>
