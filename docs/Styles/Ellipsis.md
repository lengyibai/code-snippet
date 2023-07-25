<script setup>
  import Ellipsis from './Components/Ellipsis/index.vue'
</script>
<ContainerBox title="基础用法">
<template #desc>


  在固定宽度的盒子里，文字超溢出盒子，则使用省略号代替溢出部分
</template>
<div class="demoBox">
<Ellipsis />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="Ellipsis">
    <div class="one-line">测试测试测试测试</div>
    <hr />
    <div class="two-line">测试测试测试测试测试测试测试</div>
    <hr />
    <div class="three-line">测试测试测试测试测试测试测试测试测试测试</div>
  </div>
</template>
<style scoped lang="less">
.Ellipsis {
  position: relative;
  div {
    // display: flex; //注：flex布局会使其失效
    width: 20vw;
    font-size: 3vw;
  }
}
</style>
```

</template>
</ShowCode>

<ShowCode iskey>
<template #codes>

```css
/* 溢出省略号显示单行 */
.one-line {
  word-break: break-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

/* 溢出省略号显示多行 */
.two-line,
.three-line {
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.two-line {
  -webkit-line-clamp: 2;
}

.three-line {
  -webkit-line-clamp: 3;
}
```

</template>
</ShowCode>
</ContainerBox>
