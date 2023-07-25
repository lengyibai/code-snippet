<script setup>
  import ScrollInto from './Components/ScrollInto/index.vue'
</script>

# ScrollInto

<ContainerBox title="介绍">

<template #desc>
使元素进入可视区或进入可视区一定范围，播放入场动画，适合列表或一些官网
</template>

</ContainerBox>

<ContainerBox title="下载并引入">

<template #desc>

[ScrollInto.zip](https://gitee.com/lengyibai/lib3-component-packages/raw/master/utils/ScrollInto.zip)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">

<template #desc>

组件内置了一个动画库，可前往[滚动入场动画库](http://lengyibai.gitee.io/scroll-animate)预览动画及复制动画名

复制动画名后，替换下面的`translate4`即可更换第一个盒子的动画
</template>

<div class="demoBox">
<ScrollInto />
</div>

<ShowCode>

<template #codes>

```vue
<template>
  <div class="demo">
    <input
      type="text"
      @blur="blur"
      v-model="name"
      placeholder="请输入动画库里的动画名"
    />
    <input
      type="text"
      @blur="blur"
      v-model="time"
      placeholder="请输入动画时长"
    />
    <input
      type="text"
      @blur="blur"
      v-model="into"
      placeholder="滚动到几倍自身大小显示"
    />
    <button class="btn" @click="once = !once">
      点击切换为{{ once ? "重复播放" : "播放一次" }}
    </button>
    <div class="scrollbox" @scroll="scroll" ref="scrollbox">
      <div class="fill"></div>

      <h1>由左上角输入框决定</h1>
      <div class="intobox" ref="intobox">
        <div class="box a"></div>
      </div>

      <h1>从小到大</h1>
      <div class="intobox" ref="intoboxA">
        <div class="box b"></div>
      </div>

      <h1>从大到小</h1>
      <div class="intobox" ref="intoboxB">
        <div class="box c"></div>
      </div>

      <h1>从左到右顺时针</h1>
      <div class="intobox" ref="intoboxC">
        <div class="box d"></div>
      </div>

      <h1>从右到左逆时针</h1>
      <div class="intobox" ref="intoboxD">
        <div class="box e"></div>
      </div>

      <h1>自定义动画</h1>
      <div class="intobox" ref="intoboxE">
        <div class="box f"></div>
      </div>

      <div class="fill"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { ScrollInto } from "../animate.js";

const name = ref("translate4");
const time = ref(0.5);
const into = ref(1);
const once = ref(false);

const scrollbox = ref();
const intobox = ref();
const intoboxA = ref();
const intoboxB = ref();
const intoboxC = ref();
const intoboxD = ref();
const intoboxE = ref();

const scrollInto = ref<ScrollInto>(); //滚动类型

onMounted(() => {
  scrollInto.value = new ScrollInto({
    parent: scrollbox.value,
    animate: { name: name.value, time: time.value, into: into.value },
  });

  /* 自定义动画 */
  const animate = (el: HTMLElement) => {
    el.style.transform = "rotate(360deg) scale(5)";
  };

  scrollInto.value.setOption(intobox.value);
  scrollInto.value.setOption(intoboxA.value, { name: "scale1" });
  scrollInto.value.setOption(intoboxB.value, { name: "scale2" });
  scrollInto.value.setOption(intoboxC.value, { name: "mixedTR5" });
  scrollInto.value.setOption(intoboxD.value, { name: "mixedTR6" });
  scrollInto.value.setOption(intoboxE.value, {
    name: animate,
    time: 2,
    into: 1,
  });
  scrollInto.value.mountAnimate(); //挂载动画
});

const scroll = () => {
  scrollInto.value!.scroll();
};

const blur = () => {
  scrollInto.value!.updateAnimate(
    { name: name.value, time: time.value, into: into.value },
    0
  );
};

watch(once, (v) => {
  if (v) {
    scrollInto.value!.mountAnimate("once"); //挂载动画
  } else {
    scrollInto.value!.mountAnimate(); //挂载动画
  }
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
      height: 100vh;
    }
    .box {
      width: 10vw;
      height: 10vw;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2vw;
    }
  }
}

.a {
  background-image: linear-gradient(180deg, #dc3545 0%, #fd7e14 100%);
}

.b {
  background-image: linear-gradient(180deg, #fd7e14 0%, #ffc107 100%);
}

.c {
  background-image: linear-gradient(180deg, #ffc107 0%, #28a745 100%);
}

.d {
  background-image: linear-gradient(180deg, #28a745 0%, #17a2b8 100%);
}

.e {
  background-image: linear-gradient(180deg, #17a2b8 0%, #007bff 100%);
}

.f {
  background-image: linear-gradient(180deg, #007bff 0%, #6610f2 100%);
}

.g {
  background-image: linear-gradient(180deg, #6610f2 0%, #e83e8c 100%);
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="new ScrollInto()">

<template #desc>

| 参数    | 说明                                                             | 类型        | 默认值   |
| ------- | ---------------------------------------------------------------- | ----------- | -------- |
| parent  | 滚动的盒子                                                       | HTMLElement | -        |
| animate | 控制入场动画盒子的动画属性，如果子盒子单独设置，将会覆盖相应属性 | Object      | 参考下表 |

`animate`

| 属性 | 说明                                   | 类型                                | 默认值        |
| ---- | -------------------------------------- | ----------------------------------- | ------------- |
| name | 动画名，也可自定义动画                 | String \| (el: HTMLElement) => void | opacity       |
| time | 动画时长                               | Number                              | 0.5，单位`秒` |
| into | 元素自身高度多少倍进入可视区后触发动画 | Number                              | 1，单位`倍`   |

</template>
</ContainerBox>

<ContainerBox title="ScrollInto setOption">

<template #desc>

| 参数    | 说明                           | 类型        | 默认值   |
| ------- | ------------------------------ | ----------- | -------- |
| elBox   | 包裹动画盒子的容器             | HTMLElement | -        |
| animate | 单独控制入场动画盒子的动画属性 | Object      | 参考上表 |

</template>
</ContainerBox>

<ContainerBox title="ScrollInto mountAnimate">

<template #desc>

用于挂载动画及设置滚动类型，当需要添加动画盒子，需要在添加后调用此函数

| 参数 | 说明                                                               | 类型   | 默认值 |
| ---- | ------------------------------------------------------------------ | ------ | ------ |
| type | 滚动类型，设置动画只播放一次还是始终播放动画，填写`once`只播放一次 | String | repeat |

</template>
</ContainerBox>

<ContainerBox title="ScrollInto updateAnimate">
<template #desc>

| 参数  | 说明                                  | 类型   | 默认值 |
| ----- | ------------------------------------- | :----- | ------ |
| obj   | 更改动画类型、时长等，参考`animate`表 | Object | -      |
| index | 需要更改盒子的索引号                  | Number | -      |

</template>
</ContainerBox>
