<script setup>
  import MaskGradient from './Components/MaskGradient/index.vue'
</script>

# MaskGradient

<ContainerBox title="介绍">
<template #desc>
可为一些弹窗的半透明黑色蒙版背景加上渐变，或者一些视频封面文字
</template>
</ContainerBox>

<ContainerBox title="使用">

<template #desc>

引入参考 [准备工作](/Directives/base/start.html#准备工作)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>
例如王者荣耀的弹窗背景
</template>
<div class="demoBox">
<MaskGradient />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div
    class="MaskGradient"
    v-maskGradient="{
      color: 'rgba(40, 100, 195, 0.5)',
      num1: '0%',
      num2: '50%',
    }"
  >
    <img src="./preview.png" alt="" />
  </div>
</template>
<style scoped>
.MaskGradient {
  position: relative;
  width: 100%;
  height: 50vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2.5vw;
}
img {
  width: 75%;
  z-index: 1;
}
</style>
```

</template>
</ShowCode>

<ShowCode iskey>
<template #codes>

```js
const maskGradient = {
  mounted(el: HTMLElement, binding) {
    const { color = 'rgba(0, 0, 0, 0.75)', rotate = '0deg', num1 = '0%', num2 = '50%' } = binding.value || {};
    const mask = document.createElement('div');
    mask.style.cssText = `
    position: absolute;
    inset:0;
    background-image: linear-gradient(${rotate}, ${color} ${num1}, transparent ${num2});
    pointer-events: none;
    `;
    el.appendChild(mask);
  },
};
```

</template>
</ShowCode>
</ContainerBox>
