<script setup>
  import Ellipsis from './Components/Ellipsis/index.vue'
</script>

# 文字溢出省略号

<ContainerBox title="基础用法">
<template #desc>
  在固定宽度的盒子里，文字超溢出盒子，则使用省略号代替溢出部分
</template>
<div class="demo-box">
<Ellipsis />
</div>

<CodeBox>
<template #codes>

```vue
<template>
  <div class="ellipsis">
    <div class="one-line">测试测试测试测试</div>
    <hr />
    <div class="two-line">测试测试测试测试测试测试测试</div>
    <hr />
    <div class="three-line">测试测试测试测试测试测试测试测试测试测试</div>
  </div>
</template>

<style scoped lang="less">
.ellipsis {
  position: relative;

  div {
    // display: flex; //注：flex布局会使其失效
    width: 20vw;
    font-size: 3vw;
  }
}

.one-line {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
}

.two-line,
.three-line {
  display: -webkit-box;
  overflow: hidden;
  word-break: break-all;
  -webkit-box-orient: vertical;
}

.two-line {
  -webkit-line-clamp: 2;
}

.three-line {
  -webkit-line-clamp: 3;
}
</style>
```

</template>
</CodeBox>

<CodeBox iskey>
<template #codes>

```css
.one-line {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
}

.two-line,
.three-line {
  display: -webkit-box;
  overflow: hidden;
  word-break: break-all;
  -webkit-box-orient: vertical;
}

.two-line {
  -webkit-line-clamp: 2;
}

.three-line {
  -webkit-line-clamp: 3;
}
```
</template>
</CodeBox>
</ContainerBox>
