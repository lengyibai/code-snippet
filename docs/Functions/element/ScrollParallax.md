<script setup>
  import ScrollParallax from './Components/ScrollParallax/index.vue'
</script>

# ScrollParallax

<ContainerBox title="介绍">
<template #desc>

类似`iPhone`官网滚动动画效果

原理：获取整个滚动盒子的高度，计算出鼠标滚完整个盒子的百分比，通过百分比来控制动画，
拓展了一下，可以设置某个区间，当滚动到这个区间，则开始计算这个区间的百分比，由此可控制这个区间的元素动画
</template>
</ContainerBox>

<ContainerBox title="下载所需文件">

<template #desc>

[ScrollFollow.zip](https://gitee.com/lengyibai/lib3-component-packages/raw/master/utils/ScrollParallax.zip)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>

在下面缓慢滚动

</template>
<div class="demoBox">
<ScrollParallax />
</div>

<ShowCode>
<template #codes>

```vue
<script setup lang="ts">
import { onMounted, ref } from "vue";

import ScrollParallax from "./ScrollParallax";

const parent = ref();
const room = ref(); //房间
const book = ref(); //书
const lyb = ref(); //名

onMounted(() => {
  const sp = new ScrollParallax(parent.value!);
  /* 房间 */
  sp.trigger([500, 1000], (v: number) => {
    room.value.style.transform = `scale(${4 - 2.5 * v})`;
    room.value.style.opacity = v;
  });
  sp.trigger([1250, 2000], (v: number) => {
    room.value.style.transform = `scale(${1.5 - 0.5 * v})`;
    room.value.style.filter = `blur(${7.5 * v}px)`;
  });

  /* 书 */
  sp.trigger([1250, 2000], (v: number) => {
    book.value.style.transform = `translateY(${50 - 50 * v}%) scale(${
      2.5 - 1.5 * v
    })`;
    book.value.style.opacity = v;
  });

  /* lengyibai */
  sp.trigger([4000, 5000], (v: number) => {
    lyb.value.style.transform = `translateY(${100 - v * 100}px) scale(${v})`;
    lyb.value.style.opacity = v;
  });

  sp.trigger([5250, 6000], (v: number) => {
    lyb.value.style.transform = `translateY(-${v * 100}px) scale(${1 - v})`;
    lyb.value.style.opacity = 1 - v;
  });
});
</script>

<template>
  <div ref="parent" class="parent">
    <div class="sticky-container1">
      <div class="sticky-box1">
        <div ref="room" class="room"></div>
        <div ref="book" class="book"></div>
      </div>
    </div>
    <div class="end">第一页结束</div>
    <div class="sticky-container2">
      <div class="sticky-box2">
        <div ref="lyb" class="lyb">@lengyibai</div>
      </div>
    </div>
    <div class="end">第二页结束</div>
  </div>
</template>

<style scoped lang="less">
* {
  color: #fff;
  transition: all 0.25s ease-out;
}

*::-webkit-scrollbar {
  //display: none;
}

.parent {
  @height: 50vh;

  position: relative;
  overflow: hidden auto;
  width: 1280px;
  height: @height;
  background-color: #1a1a1a;
  overscroll-behavior: contain;

  .sticky-container1 {
    width: 100%;
    height: calc(2500px + @height);

    .sticky-box1 {
      position: sticky;
      top: 0;
      overflow: hidden;
      width: 100%;
      height: @height;

      .room {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("./img/room.png") no-repeat center center;
        background-size: cover;

        //需要初始化样式
        opacity: 0;
        transform: scale(4);
      }

      .book {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 75%;
        background: url("./img/book.png") no-repeat center bottom;
        background-size: contain;

        //需要初始化样式
        opacity: 0;
        transform: translateY(100px) scale(2.5);
      }
    }
  }

  .sticky-container2 {
    width: 100%;
    height: calc(2500px + @height);

    .sticky-box2 {
      position: sticky;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: @height;
      background-color: #111;

      .lyb {
        font-size: 24px;

        //需要初始化样式
        opacity: 0;
        transform: translateY(100px) scale(0);
      }
    }
  }

  .end {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: @height;
    font-size: 24px;
    background-color: #000;
  }
}
</style>
```

</template>
</ShowCode>
</ContainerBox>