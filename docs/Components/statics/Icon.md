<script setup>
  import IconA from './Components/Icon/demo/index-a.vue'
  import IconB from './Components/Icon/demo/index-b.vue'
</script>

# Icon

<ContainerBox title="介绍">
<template #desc>
有字体图标的特点，不会被拖拽，自带鼠标悬浮效果及悬浮提示
</template>
</ContainerBox>

<ContainerBox title="下载并引入">
<template #desc>

[下载组件包及当前组件的所有案例](https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/static/LibIcon.zip)

引入参考 [引入组件](/Components/base/start.html)
</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">
<IconA />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    爱
    <LibIcon :imgUrl="love" title="爱心" left="0.5em" right="0.5em" />心
  </div>
</template>
<script setup lang="ts">
import love from './img/love.svg';
</script>
<style scoped>
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 25px;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="自定义样式">
<template #desc>
悬浮切换图标
</template>

<div class="demoBox">
<IconB />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    滑
    <LibIcon :imgUrl="a" :imgUrlHover="b" title="滑稽" size="10vw" left="0.5em" right="0.5em" />稽
  </div>
</template>
<script setup lang="ts">
import a from './img/a.svg';
import b from './img/b.svg';
</script>
<style scoped>
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 7.5vw;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">
<template #desc>

| 参数                           | 说明                                              | 类型   | 默认值 |
| ------------------------------ | ------------------------------------------------- | ------ | ------ |
| imgUrl                         | 图标，引入本地图片请使用`require('路径')`         | 未知   | -      |
| imgUrlHover                    | 悬浮后的图标，引入本地图片请使用`require('路径')` | 未知   | -      |
| title                          | 悬浮提示                                          | String | -      |
| size                           | 图标大小                                          | String | 25px   |
| top \| left \| bottom \| right | 图标外边距                                        | String | 0px    |

</template>
</ContainerBox>
