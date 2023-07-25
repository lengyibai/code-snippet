<script setup>
  import FullScrollA from './Components/FullScroll/demo/index-a.vue'
  import FullScrollB from './Components/FullScroll/demo/index-b.vue'
  import FullScrollC from './Components/FullScroll/demo/index-c.vue'
</script>

# FullScroll

<ContainerBox title="介绍">
<template #desc>
全屏滚动，只适用于全屏情况下
</template>
</ContainerBox>

<ContainerBox title="下载并引入">

<template #desc>

[下载组件包及当前组件的所有案例](https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/static/LibFullScroll.zip)

引入参考 [引入组件](/Components/base/start.html)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>
在下面滚动，整个页面都会滚动，属于正常现象，因为全屏滚动并不依赖滚动条，最终是用于全屏
</template>

<div class="demoBox">
<FullScrollA/>
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <LibFullScroll>
      <div class="scroll-item" v-for="(item, index) in 10" :key="index">
        {{ item }}
      </div>
    </LibFullScroll>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.demo {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.scroll-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7vw;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="横向滚动">
<div class="demoBox">
<FullScrollB />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <LibFullScroll direction="x">
      <div class="scroll-item" v-for="(item, index) in 10" :key="index">
        {{ item }}
      </div>
    </LibFullScroll>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.demo {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.scroll-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7vw;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="滚动回调">
<div class="demoBox">
<FullScrollC />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <LibFullScroll @start="start" @end="end" v-model="page">
      <div class="scroll-item" v-for="(item, index) in 10" :key="index">
        {{ item }}
      </div>
    </LibFullScroll>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const page = ref(3);

const start = (i: number) => {
  console.warn(`开始滚动回调，当前第${i}页`);
};

const end = (i: number) => {
  console.warn(`结束滚动回调，当前第${i}页`);
};
</script>
<style scoped>
.demo {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.scroll-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7vw;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">

<template #desc>

| 参数      | 说明                        | 类型   | 默认值 |
| --------- | --------------------------- | ------ | ------ |
| v-model   | 绑定的页数，大于`0`         | Number | 1      |
| direction | 滚动方向，`x`横向 ，`y`纵向 | String | y      |
| duration  | 滚动动画时长，单位`ms`      | Number | 750    |

</template>
</ContainerBox>

<ContainerBox title="Events">

<template #desc>

| 事件名 | 说明         | 回调参数 |
| ------ | ------------ | -------- |
| start  | 滚动开始回调 | 当前页数 |
| end    | 滚动结束回调 | 当前页数 |

</template>
</ContainerBox>
