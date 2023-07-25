<script setup>
  import FlipBox from './Components/FlipBox/demo/index.vue'
</script>

# FlipBox

<ContainerBox title="介绍">
<template #desc>
翻转至背面
</template>
</ContainerBox>

<ContainerBox title="下载并引入">

<template #desc>

[下载组件包及当前组件的所有案例](https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/static/LibFlipBox.zip)

引入参考 [引入组件](/Components/base/start.html)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">
<FlipBox />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <LibFlipBox>
      <template #front>
        <div class="box flex">鼠标放上来</div>
      </template>
      <template #back>
        <div class="box flex">鼠标移出去</div>
      </template>
    </LibFlipBox>
  </div>
</template>
<style scoped>
.demo {
  width: 100%;
  height: 300px;
  font-size: 4vw;
}
.box {
  height: 100%;
  background-color: #eee;
}
.flex {
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

| 参数     | 说明                   | 类型   | 默认值 |
| -------- | ---------------------- | ------ | ------ |
| duration | 旋转动画时长，单位`ms` | Number | 500    |

</template>
</ContainerBox>

<ContainerBox title="Slots">

<template #desc>

| 名称  | 说明     |
| ----- | -------- |
| front | 正面盒子 |
| back  | 背面盒子 |

</template>
</ContainerBox>
