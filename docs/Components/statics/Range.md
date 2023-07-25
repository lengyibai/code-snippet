<script setup>
  import RangeA from './Components/Range/demo/index-a.vue'
  import RangeB from './Components/Range/demo/index-b.vue'
</script>

# Range

<ContainerBox title="介绍">
<template #desc>

基于原生`input:type=range`进行封装
</template>
</ContainerBox>

<ContainerBox title="下载并引入">

<template #desc>

[下载组件包及当前组件的所有案例](https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/static/LibRange.zip)

引入参考 [引入组件](/Components/base/start.html)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">
<RangeA />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <LibRange v-model="value" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0);
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="自定义样式">

<template #desc>
自定义圆点大小、圆点样式、进度条颜色、步长、最大值、按下悬浮文本等
</template>

<div class="demoBox">
<RangeB />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <LibRange
      :icon="icon"
      :max="1000"
      :showIcon="true"
      :size="50"
      :step="10"
      :text="'进度：' + value"
      color="#c0392b"
      ply="10px"
      v-model="value"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import icon from './img/icon.svg';

const value = ref(0);
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">

<template #desc>

| 参数     | 说明                                                                                          | 类型    | 默认值  |
| -------- | --------------------------------------------------------------------------------------------- | ------- | ------- |
| min      | 最小值                                                                                        | Number  | 0       |
| max      | 最大值                                                                                        | Number  | 100     |
| v-model  | 绑定值                                                                                        | Number  | 0       |
| text     | 按下悬浮文本                                                                                  | String  | -       |
| color    | 进度条颜色                                                                                    | String  | #3498db |
| size     | 圆点和图标大小，单位`px`                                                                      | Number  | 20      |
| ply      | 进度条厚度                                                                                    | String  | 3px     |
| showDot  | 是否显示圆点，也决定是否显示图标                                                              | Boolean | true    |
| showIcon | 是否显示图标                                                                                  | Boolean | false   |
| icon     | 图标路径，引入本地图片请使用`require('路径')`                                                 | 未知    | -       |
| showNum  | 是否在滑动的时候显示数字                                                                      | Boolean | true    |
| step     | 步长，滑动一格的数值<br />例子：`max`为`200`,步长为`10`，则一共有`20`格，滑动一格的数值为`10` | Number  | 1       |

</template>
</ContainerBox>
