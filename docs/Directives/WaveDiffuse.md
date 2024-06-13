<script setup>
  import WaveDiffuse from './Components/WaveDiffuse/index.vue'
</script>

# WaveDiffuse

<ContainerBox title="介绍">
<template #desc>
模拟安卓的点击和按下水波扩散效果
</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>
尝试点击方块内部，狂点、长按
</template>
<div class="demo-box">
<WaveDiffuse />
</div>

<CodeBox>
<template #codes>

```vue
<script setup lang="ts">
import { vWaveDiffuse } from "./wave-diffuse";
</script>

<template>
  <div v-wave-diffuse="'rgba(100,100,100,0.5)'" class="wave-diffuse">Hello</div>
</template>

<style scoped lang="less">
.wave-diffuse {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 75px;
  font-size: 25px;
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
 * v-wave-diffuse
 * 点击水波效果
 */
const vWaveDiffuse = {
  mounted(el: HTMLElement, { value = "#ccc" }) {
    el.style.cssText = `
      overflow: hidden;
    `;
    const style = `
      position: absolute;
      background-color: ${value};
      transform: translate(-50%, -50%);
      pointer-events: none;
      border-radius: 50%;
      width: 0;
      height: 0;
      transition: all 1s linear;
      opacity: 0.75;
    `;
    el.addEventListener("mousedown", function (e: MouseEvent) {
      const v = e.target as HTMLInputElement;
      const c = document.createElement("span");
      c.style.cssText = style;
      const x = e.clientX - v.getBoundingClientRect().left;
      const y = e.clientY - v.getBoundingClientRect().top;
      c.style.left = x + "px";
      c.style.top = y + "px";
      this.appendChild(c);
      const width = v.offsetWidth;
      const height = v.offsetHeight;
      const size = width > height ? width : height;
      c.style.width = `${size * 5}px`;
      c.style.height = `${size * 5}px`;
      function fn() {
        c.style.transition = "all 0.675s ease-out";
        c.style.opacity = "0";
        setTimeout(() => {
          c.remove();
        }, 675);
      }
      el.addEventListener("mouseup", fn);
      el.addEventListener("mouseleave", fn);
    });
  },
};

export { vWaveDiffuse };
```

</template>
</CodeBox>
</ContainerBox>