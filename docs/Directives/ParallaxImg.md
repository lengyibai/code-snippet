<script setup>
  import ParallaxImg from './Components/ParallaxImg/index.vue'
</script>

# ParallaxImg

<ContainerBox title="介绍">
<template #desc>
可用于背景图的视差效果
</template>
</ContainerBox>

<ContainerBox title="使用">

<template #desc>

引入参考 [准备工作](/Directives/base/start.html#准备工作)

</template>
</ContainerBox>

## 代码演示

::: warning
打开控制台后，动画不流畅属于浏览器特性，目前没有解决方案
:::

<ContainerBox title="基础用法">
<div class="demoBox">
<ParallaxImg />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="ParallaxImg">
    <img v-parallaxImg src="./img/bg.png" />
  </div>
</template>
<style scoped>
.ParallaxImg {
  position: relative;
  width: 100%;
  height: 50vh;
  overflow: hidden;
}
</style>
```

</template>
</ShowCode>

<ShowCode iskey>
<template #codes>

```js
const parallaxImg = {
  mounted(el: HTMLElement) {
    el.style.cssText = `
      position: absolute;
      pointer-events: none;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
      transition: all 0.25s ease-out;
    `;
    /* 灵敏度三级 */
    const size = [
      [15, 1.1],
      [10, 1.225],
      [5, 1.35],
    ];
    // 当前灵敏度为中等
    const multiple = size[1][0];
    function transformElement(x, y) {
      let box = el.getBoundingClientRect();
      let calcY = (box.height / 2 - (y - box.y)) / multiple;
      let calcX = (box.width / 2 - (x - box.x)) / multiple;
      el.style.transform = `translateY(${calcY}px) translateX(${calcX}px) scale(${size[1][1]})`;
    }
    el.parentElement!.addEventListener('mousemove', (e) => {
      requestAnimationFrame(function () {
        transformElement(e.clientX, e.clientY);
      });
    });
  },
};
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="value">

<template #desc>

| 说明                        | 类型   | 默认值 |
| --------------------------- | ------ | ------ |
| 灵敏度，0-2，2 为最高灵敏度 | Number | 1      |

</template>
</ContainerBox>
