<script setup>
  import SweepLight from './Components/SweepLight/index.vue'
</script>

# SweepLight

<ContainerBox title="介绍">
<template #desc>
光条一扫而过
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
鼠标悬浮在图片上
</template>
<div class="demoBox">
<SweepLight />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="SweepLight" v-sweepLight="{ auto: false }"></div>
</template>
<style scoped>
.SweepLight {
  width: 25vw;
  height: 25vw;
  overflow: hidden;
  background: url("https://lengyibai.gitee.io/img-bed/lib.png") no-repeat center
    center;
  background-size: cover;
  clip-path: circle(50% at 50% 50%);
}
</style>
```

</template>
</ShowCode>

<ShowCode iskey>
<template #codes>

```js
const sweepLight = {
  mounted(el: HTMLElement, binding) {
    const { auto = true, time = 1 } = binding.value || {};
    setTimeout(() => {
      const a = auto !== false;
      const light = document.createElement("div");
      el.style.position = "relative";
      light.style.cssText = `
      position: absolute;
      top: 0px;
      left: 0px;
      width: ${el.offsetWidth / 3}px;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.5);
      transform: skewX(45deg) translateX(${el.offsetWidth * 1.5}px);
      transition: all ${time}s;
      filter: blur(5px)
    `;
      el.appendChild(light);
      if (a) {
        light.style.transform = `skewX(45deg) translateX(${
          -el.offsetWidth * 1.5
        }px)`;
      } else {
        el.addEventListener("mouseenter", () => {
          light.style.transform = `skewX(45deg) translateX(${
            -el.offsetWidth * 0.75
          }px)`;
        });

        el.addEventListener("mouseleave", () => {
          light.style.transform = `skewX(45deg) translateX(${
            el.offsetWidth * 1.5
          }px)`;
        });
      }
    });
  },
};
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="value">

<template #desc>

| 说明                                                 | 类型   | 默认值                                 |
| ---------------------------------------------------- | ------ | -------------------------------------- |
| {<br />auto: 是否自动播放<br />time: 动画时长<br />} | Object | {<br />auto: true,<br />time: 1<br />} |

</template>
</ContainerBox>
