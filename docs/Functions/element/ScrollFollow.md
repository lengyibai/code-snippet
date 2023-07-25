<script setup>
  import ScrollFollow from './Components/ScrollFollow/index.vue'
</script>

# ScrollFollow

<ContainerBox title="介绍">
<template #desc>
使元素进入可视区或进入可视区一定范围，播放入场动画，适合列表或一些官网
</template>
</ContainerBox>

<ContainerBox title="下载所需文件">

<template #desc>

[ScrollFollow.js](https://gitee.com/lengyibai/lib3-component-packages/raw/master/utils/ScrollFollow.zip)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>
在下面缓慢滚动

注：切勿给需要滚动跟随元素设置`transform`属性，元素依赖于此属性
</template>

<div class="demoBox">
<ScrollFollow />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo" ref="demo">
    <div class="container">
      <div class="a" ref="a">HTML+CSS</div>
      <div class="b" ref="b">JavaScript</div>
      <div class="c" ref="c">Vue</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ScrollFollow from './ScrollFollow.js';

const a = ref();
const b = ref();
const c = ref();
const demo = ref();

onMounted(() => {
  const scrollFollow = new ScrollFollow(demo.value, { unit: '%' });

  scrollFollow.setOptions({
    el: a.value,
    intoY: 0,
    endY: 500,
    intoStyle: {
      right: -100,
    },
    endStyle: {
      right: 50,
    },
  });
  scrollFollow.setOptions({
    el: b.value,
    intoY: 0,
    endY: 500,
    intoStyle: {
      left: -100,
    },
    endStyle: {
      left: 50,
    },
  });
  scrollFollow.setOptions({
    el: c.value,
    intoY: 0,
    endY: 500,
    intoStyle: {
      scale: 0,
    },
    endStyle: {
      scale: 1,
    },
  });
});
</script>
<style scoped lang="less">
.demo {
  position: relative;
  width: 100%;
  height: 75vh;
  overflow: auto;
  overscroll-behavior: contain;
  color: #fff;
  overflow-x: hidden;
  .container {
    width: 100%;
    height: 250vh;
    background-color: #1a1a1a;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      position: absolute;
      top: 32.5vh;
    }
    .a,
    .b,
    .c {
      position: absolute;
      font-size: 5vw;
    }
    .a {
      right: 0;
      top: 100vh;
    }
    .b {
      left: 0;
      top: 150vh;
    }
    .c {
      top: 205vh;
    }
  }
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="new ScrollFollow(dom, obj)">

<template #desc>

| 参数 | 说明                                                                                                                 | 类型                             | 默认值                 |
| ---- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------- |
| dom  | 传递带滚动事件的父元素                                                                                               | Element                          | -                      |
| obj  | unit：单位，默认`px`，此单位作用于`transform: translate()`<br />fade：是否开启淡入淡出<br />smooth：是否开启平滑动画 | String<br />Boolean<br />Boolean | px<br />true<br />true |

</template>
</ContainerBox>

<ContainerBox title="setOptions(obj)">

<template #desc>

| 参数      | 说明                                                                                                 | 类型               | 默认值                    |
| --------- | ---------------------------------------------------------------------------------------------------- | ------------------ | ------------------------- |
| el        | 赋予动画的元素                                                                                       | Element            | -                         |
| intoY     | 进入可视区后的几`px`处开始跟随滚动入场                                                               | Number             | 0（进入可视区后立即开始） |
| endY      | 进入可视区后的几`px`处走完整个动画跟随滚动入场                                                       | Number             | -                         |
| intoStyle | 滚动前的样式：<br />left \| right：相对位置，与`CSS`定位用法一样<br />scale：元素缩放倍数，`0`会消失 | Number<br />Number | -                         |
| endStyle  | 滚动完成后的样式，对应`intoStyle`                                                                    | 同上               | -                         |

</template>
</ContainerBox>
