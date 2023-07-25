<script setup>
  import ParallaxVideo from './Components/ParallaxVideo/index.vue'
</script>

# ParallaxVideo

<ContainerBox title="介绍">
<template #desc>
可用于视频背景视差效果
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
<ParallaxVideo />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="ParallaxVideo">
    <video v-parallaxVideo autoplay src="https://www.runoob.com/try/demo_source/movie.mp4" loop muted></video>
  </div>
</template>
<style scoped>
.ParallaxVideo {
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
const parallaxVideo = {
  mounted(el: HTMLElement, { value = 2 }) {
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
    const sensitivity = [
      [15, 1.1],
      [10, 1.225],
      [5, 1.35],
    ];
    // 当前灵敏度为最高
    const multiple = sensitivity[value][0];
    function transformElement(x, y) {
      let box = el.getBoundingClientRect();
      let calcY = (box.height / 2 - (y - box.y)) / multiple;
      let calcX = (box.width / 2 - (x - box.x)) / multiple;
      el.style.transform = `translateY(${calcY}px) translateX(${calcX}px) scale(${sensitivity[value][1]})`;
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
| 灵敏度，0-2，2 为最高灵敏度 | Number | 2      |

</template>
</ContainerBox>
