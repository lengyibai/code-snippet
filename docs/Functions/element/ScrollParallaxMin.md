# ScrollParallaxMin

<ContainerBox title="介绍">
<template #desc>

对抖音`渡一Web前端学习频道`老师的代码进行封装
</template>
</ContainerBox>

<ContainerBox title="下载demo">

<template #desc>

[ScrollFollow.zip](https://gitee.com/lengyibai/lib3-component-packages/raw/master/utils/ScrollParallaxMin.zip)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<ShowCode>
<template #codes>

```vue
<script setup lang="ts">
import { onMounted, ref } from "vue";

import ScrollParallax from "./scroll";
const app = ref<HTMLElement>();
const playground = ref<HTMLElement>();
const container = ref<HTMLElement>();

onMounted(() => {
  const boxs = document.querySelectorAll(".box") as unknown as HTMLElement[];

  const scrollParallax = new ScrollParallax(app.value!, playground.value!);
  Array.from(boxs).forEach((item) => {
    item = item as HTMLElement;
    scrollParallax.addAnimationStyle(item!, (scrollStart, scrollEnd) => {
      scrollStart = scrollStart + Number(item!.dataset.order) * 500;
      const translateX = scrollParallax.createAnimation(
        scrollStart,
        scrollEnd,
        container.value!.clientWidth / 2 -
          item!.offsetLeft -
          item!.clientWidth / 2,
        0
      );
      const translateY = scrollParallax.createAnimation(
        scrollStart,
        scrollEnd,
        container.value!.clientHeight / 2 -
          item!.offsetTop -
          item!.clientHeight / 2,
        0
      );
      const scale = scrollParallax.createAnimation(
        scrollStart,
        scrollEnd,
        0.5,
        1
      );
      const opacity = scrollParallax.createAnimation(
        scrollStart,
        scrollEnd,
        0,
        1
      );
      const transform = (scroll: number) => {
        const x = translateX(scroll);
        const y = translateY(scroll);
        const s = scale(scroll);
        return `translate(${x}px, ${y}px) scale(${s})`;
      };
      return { transform, opacity: opacity };
    });
    scrollParallax.updateMap();
  });
});
</script>
<template>
  <div ref="app" class="App">
    <div class="body">
      <h1 class="full">向下滚动</h1>
      <div ref="playground" class="playground">
        <div ref="container" class="animation-container">
          <div data-order="0" class="A box"></div>
          <div data-order="1" class="B box"></div>
          <div data-order="2" class="C box"></div>
          <div data-order="1" class="D box"></div>
          <div data-order="0" class="E box"></div>
          <div data-order="0" class="F box"></div>
          <div data-order="1" class="G box"></div>
          <div data-order="2" class="H box"></div>
          <div data-order="1" class="I box"></div>
          <div data-order="0" class="J box"></div>
        </div>
      </div>
      <h1 class="full">作者：冷弋白</h1>
    </div>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}

html {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

body {
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #333;
}
</style>
<style scoped lang="less">
.App {
  overflow: auto;
  width: 100%;
  height: 100%;
}

.body {
  width: 100%;
  height: 450vh;
}

.full {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 10vw;
}

.playground {
  position: relative;
  width: 100%;
  height: 250vh;
  background-color: #222;
}

.animation-container {
  position: sticky;
  top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  margin: 0 auto;
  padding: 8vw 4vw;
  background-color: #000;
  align-content: center;
  flex-wrap: wrap;
  gap: 10.4167vw 5.2083vw;
}

.box {
  width: 9.1146vw;
  height: 9.1146vw;
  border-radius: 2.6042vw;
  background-color: #fff;
  transition: all 0.25s ease-out;

  &.A,
  &.F {
    background-color: #c0392b;
  }

  &.B,
  &.G {
    background-color: #f39c12;
  }

  &.C,
  &.H {
    background-color: #27ae60;
  }

  &.D,
  &.I {
    background-color: #2980b9;
  }

  &.E,
  &.J {
    background-color: #8e44ad;
  }
}
</style>
```

</template>
</ShowCode>
</ContainerBox>
