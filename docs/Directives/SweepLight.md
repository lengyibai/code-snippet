<script setup>
  import SweepLight from './Components/SweepLight/index.vue'
</script>

# SweepLight

<ContainerBox title="介绍">
<template #desc>
光条一扫而过
</template>
</ContainerBox>

## 代码演示

<ContainerBox>
<template #desc>
鼠标悬浮在图片上
</template>
<div class="demo-box">
<SweepLight />
</div>

<CodeBox>
<template #codes>

```vue
<script setup lang="ts">
import { vSweepLight } from "./sweep-light";
</script>

<template>
  <div v-sweep-light="{ auto: false }" class="sweep-light"></div>
</template>

<style scoped>
.sweep-light {
  position: relative;
  overflow: hidden;
  width: 25vw;
  height: 25vw;
  background: url("/images/logo.png") no-repeat center center;
  background-size: cover;
  clip-path: circle(50% at 50% 50%);
}
</style>
```

</template>
</CodeBox>

<CodeBox iskey>
<template #codes>

```ts
/**
 * v-sweep-light
 * 卡片扫光
 */
import type { Directive } from "vue";

interface Params {
  /** 是否自动扫光 */
  auto?: boolean;
  /** 是否启用 */
  enable?: boolean;
}

const vSweepLight: Directive<HTMLElement, Params> = {
  mounted(el, binding) {
    const { enable = true, auto = true } = binding.value || {};
    if (!enable) return;
    setTimeout(() => {
      const light = document.createElement("div");
      el.style.position = "relative";
      light.style.cssText = `
      position: absolute;
      top: 0px;
      left: 0px;
      width: ${el.offsetWidth / 3}px;
      height: 100%;
      transform: skewX(45deg) translateX(${el.offsetWidth * 1.75}px);
      transition: all 2s;
      background-color: rgba(255, 255, 255, 0.3);
      filter: blur(20px);
    `;
      el.appendChild(light);
      if (auto) {
        light.style.transitionDelay = ` ${binding.value}s`;
        light.style.transform = `skewX(45deg) translateX(${-el.offsetWidth * 1.25}px)`;
        setTimeout(() => {
          el.removeChild(light);
        }, 2000);
      } else {
        el.addEventListener("mouseenter", () => {
          light.style.transform = `skewX(45deg) translateX(${-el.offsetWidth * 1.5}px)`;
        });

        el.addEventListener("mouseleave", () => {
          light.style.transform = `skewX(45deg) translateX(${el.offsetWidth * 1.75}px)`;
        });
      }
    });
  },
};

export { vSweepLight };
```

</template>
</CodeBox>
</ContainerBox>