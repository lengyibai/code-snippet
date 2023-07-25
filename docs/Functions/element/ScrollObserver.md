<script setup>
  import ScrollObserver from './Components/ScrollObserver/index.vue'
</script>

# ScrollObserver

<ContainerBox title="介绍">

<template #desc>
使用`IntersectionObserver`方法重写上一个动画函数，更简洁，性能更好
</template>

</ContainerBox>

<ContainerBox title="下载所需文件">

<template #desc>

[ScrollObserver.zip](https://gitee.com/lengyibai/lib3-component-packages/raw/master/utils/ScrollObserver.zip)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">

<template #desc>
第一和第二个方块只会执行一次动画，意味着离开可视区再进入可视区不会再触发动画

第三、第四个方块离开可视区再进入可视区依旧会重复触发动画
</template>

<div class="demoBox">
<ScrollObserver />
</div>

<ShowCode>

<template #codes>

```vue
<template>
  <div class="demo">
    <div class="scrollbox">
      <div class="fill"></div>

      <h1>从小到大</h1>
      <div class="intobox" ref="intoboxA">
        <div class="box a hide"></div>
      </div>

      <h1>从大到小</h1>
      <div class="intobox" ref="intoboxB">
        <div class="box b hide"></div>
      </div>

      <h1>从左到右顺时针</h1>
      <div class="intobox" ref="intoboxC">
        <div class="box c hide"></div>
      </div>

      <h1>从右到左逆时针</h1>
      <div class="intobox" ref="intoboxD">
        <div class="box d hide"></div>
      </div>

      <div class="fill"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { $animateOnce, $animateRepeat } from "../index";

const intoboxA = ref();
const intoboxB = ref();
const intoboxC = ref();
const intoboxD = ref();

onMounted(() => {
  $animateOnce(intoboxA.value, "hide");
  $animateOnce(intoboxB.value, "hide");
  $animateRepeat(intoboxC.value, "hide");
  $animateRepeat(intoboxD.value, "hide");
});
</script>
<style scoped lang="less">
.demo {
  position: relative;
  width: 100%;
  input {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 0.75vw;
    padding: 0.25em;
    z-index: 1;
    &:nth-of-type(1) {
      transform: translateY(0%);
    }
    &:nth-of-type(2) {
      transform: translateY(150%);
    }
    &:nth-of-type(3) {
      transform: translateY(300%);
    }
  }
  .btn {
    position: absolute;
    right: 0;
    z-index: 1;
  }
  .scrollbox {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50vh;
    overflow: hidden auto;
    h1 {
      font-size: 2vw;
      margin-top: 1em;
    }
    .fill {
      flex-shrink: 0;
      width: 25vw;
      height: 75vh;
    }
    .box {
      width: 10vw;
      height: 10vw;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2vw;
      transition: all 1s;
    }
  }
}

.common {
  opacity: 0;
  //如果开启动画重复播放，必须在离开可视区前取消动画过渡效果
  transition: all 0s !important;
}

.a {
  background-image: linear-gradient(180deg, #dc3545 0%, #fd7e14 100%);

  &.hide {
    .common();
    transform: translateY(100%) scale(0);
  }
}

.b {
  background-image: linear-gradient(180deg, #fd7e14 0%, #ffc107 100%);

  &.hide {
    .common();
    transform: translateY(-100%) scale(3);
  }
}

.c {
  background-image: linear-gradient(180deg, #ffc107 0%, #28a745 100%);

  &.hide {
    .common();
    transform: translateX(-200%) rotate(-180deg);
  }
}

.d {
  background-image: linear-gradient(180deg, #28a745 0%, #17a2b8 100%);

  &.hide {
    .common();
    transform: translateX(200%) rotate(180deg);
  }
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="函数参数">

<template #desc>

| 参数      | 说明                                                                                       | 类型        | 默认值 |
| --------- | ------------------------------------------------------------------------------------------ | ----------- | ------ |
| el        | 入场动画盒子                                                                               | HTMLElement | -      |
| className | 动画隐藏类名，当元素进入可视区，将移除该类名<br />若是开启重复动画，离开可视区后会添加类名 | String      | -      |

</template>
</ContainerBox>
