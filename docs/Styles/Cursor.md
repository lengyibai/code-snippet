<script setup>
  import Cursor from './Components/Cursor/index.vue'
</script>

# 鼠标样式

<ContainerBox title="基础用法">
<template #desc>
不同的鼠标悬浮样式，图片自定义
</template>

<div class="demo-box">
<Cursor />
</div>

<CodeBox>
<template #codes>

```vue
<template>
  <div class="cursor">
    <div class="box cursor-default">鼠标移动到此处：default</div>
    <div class="box cursor-pointer">鼠标移动到此处：pointer</div>
    <div class="box cursor-not-allowed">鼠标移动到此处：not-allowed</div>
  </div>
</template>

<style scoped lang="less">
.cursor {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  font-size: 1vw;
}

.cursor-default {
  cursor: url("./cur/default.png"), auto !important;
}

.cursor-pointer {
  cursor: url("./cur/pointer.png"), auto !important;
}

.cursor-not-allowed {
  cursor: url("./cur/not-allowed.png"), auto !important;
}
</style>
```

</template>
</CodeBox>

<CodeBox iskey>
<template #codes>

```css
.cursor-default {
  cursor: url('./cur/default.png'), auto !important;
}

.cursor-pointer {
  cursor: url('./cur/pointer.png'), auto !important;
}

.cursor-not-allowed {
  cursor: url('./cur/not-allowed.png'), auto !important;
}
```

</template>
</CodeBox>
</ContainerBox>