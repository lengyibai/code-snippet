<script setup>
  import ValidationCountdown from './Components/ValidationCountdown/demo/index.vue'
</script>

# ValidationCountdown

<ContainerBox title="介绍">
<template #desc>
一个获取短信验证码的倒计时按钮
</template>
</ContainerBox>

<ContainerBox title="下载并引入">

<template #desc>

[下载组件包及当前组件的所有案例](https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/dynamic/LibValidationCountdown.zip)

引入参考 [引入组件](/Components/base/start.html)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>

只通过插槽`props`提供文字描述，按钮样式需自定义
</template>

::: tip
插槽内只能存在一个可点击的元素，建议始终使用原生`button`标签，它自带的`disabled`能够屏蔽点击，并自动变灰
:::

<div class="demoBox">
<ValidationCountdown />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demoFull flex">
    <LibValidationCountdown @change="statusChange" :time="3">
      <template v-slot="{ text, disabled }">
        <button class="btn" :disabled="disabled" :style="{ cursor: disabled ? 'not-allowed' : 'pointer' }">
          {{ text }}
        </button>
      </template>
    </LibValidationCountdown>
  </div>
</template>
<script setup>
const statusChange = (status) => {
  alert(status);
};
</script>
<style scoped>
button {
  background-color: transparent;
  font-size: 2vw;
  padding: 1em;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">

<template #desc>

| 参数 | 说明       | 类型   | 默认值 |
| ---- | ---------- | ------ | ------ |
| time | 倒计时秒数 | Number | 60     |

</template>
</ContainerBox>

<ContainerBox title="Events">

<template #desc>

| 事件名 | 说明                                                                        | 回调参数 |
| ------ | --------------------------------------------------------------------------- | -------- |
| change | 按钮状态，点击时触发，回调参数为`false`，倒计时结束时触发，回调参数为`true` | -        |

</template>
</ContainerBox>

<ContainerBox title="Slots">

<template #desc>

| 名称    | 说明                                 | 参数 |
| ------- | ------------------------------------ | ---- |
| default | text：倒计时文本，disabled：按钮状态 | -    |

</template>
</ContainerBox>
