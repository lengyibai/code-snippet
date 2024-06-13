<script setup>
  import TextHoverColor from './Components/TextHoverColor/index.vue'
</script>

# TextHoverColor

<ContainerBox title="介绍">
<template #desc>
特别的鼠标悬浮文字变色效果
</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demo-box">
<TextHoverColor />
</div>

<CodeBox>
<template #codes>

```vue
<script setup lang="ts">
import { vTextHoverColor } from "./text-hover-color";
</script>

<template>
  <div class="text-hover-color">
    <span v-text-hover-color>冷弋白</span>
  </div>
</template>

<style scoped>
.text-hover-color {
  position: relative;
  color: #3498db;
  font-size: 50px;
  cursor: pointer;
  user-select: none;
}
</style>
```

</template>
</CodeBox>

<CodeBox iskey>
<template #codes>

```ts
/**
 * v-text-hover-color
 * 悬浮文字时，文字变色效果及底部线条
 */
import type { Directive } from "vue";

/* 文字悬浮变色 */
const vTextHoverColor: Directive = {
  mounted(el: HTMLElement) {
    //需要给父盒子加相对定位或绝对定位
    const mask = document.createElement("div");
    const line = document.createElement("div");
    mask.innerHTML = el.innerHTML;
    mask.style.cssText = `
      z-index: 9;
      position: absolute;
      top: 0;
      left: 0;
      color: #fff;
      background-color: #000;
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
      height: ${line_height / 16}rem;
      bottom: 0;
      color: transparent;
      background-color: #2980b9;
      transition: all 0.35s;
      left: 50%;
      transform: translate(-50%,5px);
      border-radius: ${line_height / 16}rem;
    `;

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

export { vTextHoverColor };
```

</template>
</CodeBox>
</ContainerBox>