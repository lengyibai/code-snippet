<script setup>
  import Parabolic from './Components/Parabolic/index.vue'
</script>

# Parabolic

<ContainerBox title="介绍">
<template #desc>
可用于点击加入购物车后将商品抛入购物车
</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法" noGap>
<template #desc>

只能通过固定定位来实现内部的坐标计算，具体参考`demo`源码
</template>

<div class="demo-box">
<Parabolic />
</div>

<CodeBox>
<template #codes>

```vue
<script setup lang="ts">
import { ref, onMounted } from "vue";

import Parabolic from "./Parabolic.js";

let parabolic: Parabolic;

const move = ref<HTMLElement>();
const middle = ref<HTMLElement>();
const right = ref<HTMLElement>();

const run = (e: Event) => {
  parabolic!
    .run(e)
    .then(() => {
      right.value!.style.transition = `all 0.25s`;
      right.value!.style.transform = "rotate(360deg)";
      setTimeout(() => {
        right.value!.style.transition = `all 0s`;
        right.value!.style.transform = "rotate(0deg)";
      }, 250);
      console.log("运动结束");
    })
    .catch(() => {
      console.warn("运动未结束");
    });
};

onMounted(() => {
  parabolic = new Parabolic(move.value!, middle.value!, right.value!, 10);
});
</script>

<template>
  <div ref="parent" class="demo">
    <div class="run" @click="run">点击投掷</div>
    <img ref="move" class="move" src="./img/ball.png" />
    <div ref="middle" class="middle">顶点</div>
    <img ref="right" class="right" src="./img/cock.png" />
  </div>
</template>

<style scoped lang="less">
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.demo {
  width: 100%;
  color: #fff;

  .run {
    .flex();

    width: 178px;
    height: 38px;
    background-color: #ff0036;
    cursor: pointer;
  }

  .point {
    position: fixed;
    width: 100px;
    height: 100px;
  }

  .move {
    .point();

    top: 0;
    z-index: 1;
    display: none;
  }

  .middle {
    .point();
    .flex();

    right: 300px;
    bottom: 400px;
    border-radius: 50%;
    background-color: red;
  }

  .right {
    .point();

    right: 40px;
    bottom: 150px;
    transition: all 0.25s;
  }
}
</style>
```
</template>
</CodeBox>
</ContainerBox>