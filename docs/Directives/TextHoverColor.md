<script setup>
  import TextHoverColor from './Components/TextHoverColor/index.vue'
</script>

# TextHoverColor

<ContainerBox title="介绍">
<template #desc>
特别的鼠标悬浮文字变色效果
</template>
</ContainerBox>

<ContainerBox title="使用">

<template #desc>

引入参考 [准备工作](/Directives/base/start.html#准备工作)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">
<TextHoverColor />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="TextHoverColor">
    <span v-textHoverColor="'black'">冷弋白</span>
  </div>
</template>
<style scoped>
.TextHoverColor {
  position: relative;
  font-size: 10vw;
  color: #3498db;
  cursor: pointer;
  user-select: none;
}
</style>
```

</template>
</ShowCode>

<ShowCode iskey>
<template #codes>

```js
const textHoverColor = {
  mounted(el: HTMLElement, { value = "black" }) {
    // 需要给父盒子加相对定位或绝对定位
    const mask = document.createElement("div");
    const line = document.createElement("div");
    mask.innerHTML = el.innerHTML;
    mask.style.cssText = `
      z-index: 9;
      position: absolute;
      top: 0;
      left: 0;
      color: #fff;
      background-color: ${value};
      transition: all 0.35s;
      text-shadow: initial;
      -webkit-background-clip: text;
      clip-path: circle(75% at 50% 50%);
    `;
    const line_height = el.offsetHeight / 8;
    line.style.cssText = `
      z-index: 9;
      position: absolute;
      width: 0%;
      height: ${line_height}px;
      bottom: 0;
      color: transparent;
      background-color: #2980b9;
      transition: all 0.35s;
      left: 50%;
      transform: translate(-50%,5px);
      border-radius: ${line_height}px;
    `;
    window.addEventListener("resize", () => {
      const line_height = el.offsetHeight / 20;
      line.style.height = line_height + "px";
      line.style.borderRadius = line_height + "px";
    });

    el.appendChild(mask);
    el.appendChild(line);
    el.addEventListener("mouseenter", () => {
      mask.style.clipPath = "circle(0% at 50% 50%)";
      line.style.width = "100%";
    });
    el.addEventListener("mouseleave", () => {
      mask.style.clipPath = "circle(75% at 50% 50%)";
      line.style.width = "0%";
    });
  },
};
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="value">

<template #desc>

| 说明         | 类型   | 默认值 |
| ------------ | ------ | ------ |
| 文字初始颜色 | String | black  |

</template>
</ContainerBox>
