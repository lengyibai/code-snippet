<script setup>
  import DeleteBtnA from './Components/DeleteBtn/demo/index-a.vue'
  import DeleteBtnB from './Components/DeleteBtn/demo/index-b.vue'
</script>

# DeleteBtn

<ContainerBox title="介绍">
<template #desc>

自带`loading`效果的删除按钮
</template>
</ContainerBox>

<ContainerBox title="下载并引入">

<template #desc>

[下载组件包及当前组件的所有案例](https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/static/LibDeleteBtn.zip)

引入参考 [引入组件](/Components/base/start.html)
</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>
可设置再次删除
</template>

<div class="demoBox">
<DeleteBtnA />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <LibDeleteBtn @del="del" :finish="finish" />
    <span>{{ text }}</span>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LibDeleteBtn from '../index.vue';

const finish = ref(false);
const text = ref('待删除');

const del = () => {
  text.value = '删除中';
  setTimeout(() => {
    finish.value = true;
    text.value = '删除成功';
  }, 2000);
};
</script>
<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2vw;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="自定义样式">

<template #desc>
自定义大小、可外加一个圆圈

可设置删除失败
</template>

<div class="demoBox">
<DeleteBtnB/>
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <LibDeleteBtn style="border: 0.75vw solid #000" @del="del" :finish="finish" size="15vw" />
    <span>{{ text }}</span>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LibDeleteBtn from '../index.vue';

const finish = ref(false);
const text = ref('待删除');

const del = () => {
  text.value = '删除中';
  setTimeout(() => {
    finish.value = true;
    text.value = '删除成功';
  }, 2000);
};
</script>
<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
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

| 参数    | 说明                                                                                | 类型    | 默认值 |
| ------- | ----------------------------------------------------------------------------------- | ------- | ------ |
| v-model | 控制删除状态，`0`为待删除状态，`1`为删除成功状态                                    | Number  | 0      |
| size    | 按钮及字体大小                                                                      | String  | 50px   |
| finish  | 完成状态，当删除成功后，将其设为`true`即可，如果删除失败或再次删除，需要设为`false` | Boolean | false  |

</template>
</ContainerBox>

<ContainerBox title="Events">

<template #desc>

| 事件名 | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| del    | 点击按钮后触发 | -        |

</template>
</ContainerBox>
