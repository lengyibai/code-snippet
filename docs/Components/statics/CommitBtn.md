<script setup>
  import CommitBtnA from './Components/CommitBtn/demo/index-a.vue'
  import CommitBtnB from './Components/CommitBtn/demo/index-b.vue'
</script>

# CommitBtn

<ContainerBox title="介绍">
<template #desc>

自带`loading`效果的提交按钮
</template>
</ContainerBox>

<ContainerBox title="下载并引入">
<template #desc>

[下载组件包及当前组件的所有案例](https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/static/LibCommitBtn.zip)

引入参考 [引入组件](/Components/base/start.html)
</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>
可设置再次提交
</template>

<div class="demoBox">
<CommitBtnA />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <LibCommitBtn size="50px" @commit="commit" :finish="finish" v-model="status" title="发布" />
    <span>{{ text }}</span>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const status = ref(0); //提交状态
const finish = ref(false);
const text = ref('待提交');

const commit = () => {
  text.value = '提交中';
  setTimeout(() => {
    finish.value = true;
    text.value = '提交成功';
    setTimeout(() => {
      status.value = 0;
      finish.value = false;
      text.value = '再次提交';
    }, 1000);
  }, 1000);
};
</script>
<style scoped lang="less">
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

可设置提交失败
</template>

<div class="demoBox">
<CommitBtnB />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <LibCommitBtn
      style="border: 0.75vw solid #000"
      @commit="commit"
      :finish="finish"
      v-model="status"
      title="发布"
      size="15vw"
    />
    <span>{{ text }}</span>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const status = ref(0); //提交状态
const finish = ref(false);
const text = ref('待提交');

const commit = () => {
  text.value = '提交中';
  setTimeout(() => {
    status.value = 0;
    text.value = '提交失败';
  }, 1000);
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
| v-model | 控制提交状态，`0`为待提交状态，`1`为提交成功状态                                    | Number  | 0      |
| size    | 按钮及字体大小                                                                      | String  | 50px   |
| finish  | 完成状态，当提交成功后，将其设为`true`即可，如果提交失败或再次提交，需要设为`false` | Boolean | false  |

</template>
</ContainerBox>

<ContainerBox title="Events">
<template #desc>

| 事件名 | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| commit | 点击按钮后触发 | -        |

</template>
</ContainerBox>
