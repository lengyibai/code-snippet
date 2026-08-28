<script setup>
  import CircularProgressA from './Components/CircularProgress/demo/index-a.vue'
  import CircularProgressB from './Components/CircularProgress/demo/index-b.vue'
</script>

# CircularProgress

<ContainerBox title="介绍">
<template #desc>

版权声明：本页组件为`CSDN`博主`「青春～不散」`所有

原文链接：[SVG 绘制圆环进度条](https://blog.csdn.net/qq_40289557/article/details/123061211)
</template>
</ContainerBox>

## 代码演示

<ContainerBox title="纯色进度条">
<div class="demo-box">
<CircularProgressA />
</div>

<CodeBox>
<template #codes>

```vue
<script setup lang="ts">
import { ref } from "vue";

import LibCircularProgress from "../indexA.vue";

const num = ref(0.15);
</script>

<template>
  <div class="demo">
    <input v-model.number="num" type="text" />
    <LibCircularProgress :value="num">
      <span>纯色进度条</span>
      <br />
      <span>{{ `${(num * 100).toFixed(2)}%` }}</span>
    </LibCircularProgress>
  </div>
</template>

<style scoped>
.demo {
  display: flex;
  align-items: center;
  flex-direction: column;
}

input {
  margin-bottom: 25px;
  font-size: 20px;
}
</style>
```
</template>
</CodeBox>
</ContainerBox>

<ContainerBox title="渐变进度条">
<div class="demo-box">
<CircularProgressB />
</div>

<CodeBox>
<template #codes>

```vue
<script setup lang="ts">
import { ref } from "vue";

import LibCircularProgress from "../indexB.vue";

const num = ref(0.75);
</script>

<template>
  <div class="demo">
    <input v-model.number="num" type="text" />
    <LibCircularProgress
      :part-gap="0"
      :part="1"
      :value="num"
      :show-gradient="true"
      :stroke-width="20"
      bg-ring-color="#13387e"
    >
      <span>渐变进度条</span>
      <br />
      <span>{{ `${(num * 100).toFixed(2)}%` }}</span>
    </LibCircularProgress>
  </div>
</template>

<style scoped>
.demo {
  display: flex;
  align-items: center;
  flex-direction: column;
}

input {
  margin-bottom: 25px;
  font-size: 20px;
}
</style>
```

</template>
</CodeBox>
</ContainerBox>

## 纯色进度条组件源码

<ContainerBox>
  <CodeBox>
  <template #codes>

  ```vue
  <script setup lang="ts">
  import { computed, ref, toRefs, watch } from "vue";

  interface Props {
    /** 0-1 */
    value: number | string;
    /** 整体大小 */
    size: string;
    /** 中间字体大小 */
    fontSize: string;
    /** 中间字体颜色 */
    fontColor: string;
    /** 线条背景色 */
    bgRingColor: string;
    /** 线条颜色 */
    ringColor: string;
    /** 线条厚度 */
    strokeWidth: number;
  }

  const $props = withDefaults(defineProps<Props>(), {
    value: 0.5,
    size: "300px",
    fontSize: "16px",
    fontColor: "#999",
    bgRingColor: "#13387e",
    ringColor: "#00bbff",
    strokeWidth: 20,
  });
  const { value, size, fontSize, fontColor, bgRingColor, ringColor, strokeWidth } = toRefs($props);

  const rate = ref(0);

  const radius = computed(() => {
    return (parseInt(size.value) - strokeWidth.value) / 2;
  });
  const strokeDasharray = computed(() => {
    let value = 0;
    value = 2 * Math.PI * radius.value + strokeWidth.value;
    return value;
  });
  const strokeDashoffset = computed(() => {
    let val = 0;
    let _rate = rate.value;

    if (_rate > 1) {
      _rate = 1;
    } else if (_rate < 0) {
      _rate = 0;
    }

    val = 2 * Math.PI * radius.value * (1 - _rate) + strokeWidth.value;
    return val;
  });

  watch(
    () => value.value,
    (v) => {
      setTimeout(() => {
        if (typeof v === "string") {
          rate.value = 0;
          return;
        }
        rate.value = v;
      }, 250);
    },
    {
      immediate: true,
    },
  );
  </script>

  <template>
    <div
      class="progress"
      :style="{
        width: size,
        height: size,
      }"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 400">
        <!-- 底部背景圆环 -->
        <circle
          cx="200"
          cy="200"
          :r="radius"
          :stroke="bgRingColor"
          :stroke-width="strokeWidth"
          fill="none"
        />
        <!-- 进度条圆环 -->
        <circle
          class="progress-bar"
          cx="200"
          cy="200"
          :r="radius"
          :stroke="ringColor"
          :stroke-width="strokeWidth"
          stroke-linecap="round"
          fill="none"
          transform="rotate(-90, 200, 200)"
          :stroke-dasharray="strokeDasharray"
          :stroke-dashoffset="strokeDashoffset"
        />
      </svg>
      <!-- 中间描述文字 -->
      <div class="progress-desc" :style="{ fontSize: fontSize, color: fontColor }">
        <slot></slot>
      </div>
    </div>
  </template>

  <style scoped>
  .progress {
    position: relative;
  }

  .progress-desc {
    position: absolute;
    top: 50%;
    left: 50%;
    font-family: "Microsoft YaHei";
    text-align: center;
    transform: translate(-50%, -50%);
  }

  .progress-bar {
    transition: stroke-dashoffset 1s ease;
  }
  </style>
  ```
  </template>
  </CodeBox>
</ContainerBox>

## 渐变进度条组件源码

<ContainerBox>
  <CodeBox>
  <template #codes>

  ```vue
  <script setup lang="ts">
  import { computed, ref, toRefs, watch } from "vue";

  interface Props {
    /** 0-1 */
    value: number | string;
    /** 整体大小 */
    size: string;
    /** 中间字体大小 */
    fontSize: string;
    /** 中间字体颜色 */
    fontColor: string;
    /** 线条背景色 */
    bgRingColor: string;
    /** 线条厚度 */
    strokeWidth: number;
    /** 开启渐变后的渐变参数，同一个页面中id务必唯一 */
    gradient: {
      id: string;
      x1: string;
      y1: string;
      x2: string;
      y2: string;
      colorStops: {
        offset: string;
        color: string;
      }[];
    };
  }

  const $props = withDefaults(defineProps<Props>(), {
    value: 0.5,
    size: "300px",
    fontSize: "16px",
    fontColor: "#999",
    bgRingColor: "#13387e",
    strokeWidth: 20,
    gradient: () => {
      return {
        id: "svg-linear-gradient",
        x1: "0%",
        y1: "0%",
        x2: "0%",
        y2: "100%",
        colorStops: [
          { offset: "0%", color: "#70a1ff" },
          { offset: "100%", color: "#3742fa" },
        ],
      };
    },
  });
  const { value, size, fontSize, fontColor, bgRingColor, strokeWidth, gradient } = toRefs($props);

  const rate = ref(0);

  const radius = computed(() => {
    return (parseInt(size.value) - strokeWidth.value) / 2;
  });
  const strokeDasharray = computed(() => {
    let value = 0;
    value = 2 * Math.PI * radius.value + strokeWidth.value;
    return value;
  });
  const strokeDashoffset = computed(() => {
    let val = 0;
    let _rate = rate.value;

    if (_rate > 1) {
      _rate = 1;
    } else if (_rate < 0) {
      _rate = 0;
    }

    val = 2 * Math.PI * radius.value * (1 - _rate) + strokeWidth.value;
    return val;
  });

  watch(
    () => value.value,
    (v) => {
      setTimeout(() => {
        if (typeof v === "string") {
          rate.value = 0;
          return;
        }
        rate.value = v;
      }, 250);
    },
    {
      immediate: true,
    },
  );
  </script>

  <template>
    <div
      class="progress"
      :style="{
        width: size,
        height: size,
      }"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 400">
        <!-- 定义渐变色 -->
        <defs>
          <linearGradient
            :id="gradient.id"
            :x1="gradient.x1"
            :y1="gradient.y1"
            :x2="gradient.x2"
            :y2="gradient.y2"
          >
            <stop
              v-for="(item, index) in gradient.colorStops"
              :key="index"
              :offset="item.offset"
              :stop-color="item.color"
            />
          </linearGradient>
        </defs>
        <!-- 底部背景圆环 -->
        <circle
          cx="200"
          cy="200"
          :r="radius"
          :stroke="bgRingColor"
          :stroke-width="strokeWidth"
          fill="none"
        />
        <!-- 进度条圆环 -->
        <circle
          class="progress-bar"
          cx="200"
          cy="200"
          :r="radius"
          :stroke="`url(#${gradient.id})`"
          :stroke-width="strokeWidth"
          stroke-linecap="round"
          fill="none"
          transform="rotate(-90, 200, 200)"
          :stroke-dasharray="strokeDasharray"
          :stroke-dashoffset="strokeDashoffset"
        />
      </svg>
      <!-- 中间描述文字 -->
      <div class="progress-desc" :style="{ fontSize: fontSize, color: fontColor }">
        <slot></slot>
      </div>
    </div>
  </template>

  <style scoped>
  .progress {
    position: relative;
  }

  .progress-desc {
    position: absolute;
    top: 50%;
    left: 50%;
    font-family: "Microsoft YaHei";
    text-align: center;
    transform: translate(-50%, -50%);
  }

  .progress-bar {
    transition: stroke-dashoffset 1s ease;
  }
  </style>
  ```
  </template>
  </CodeBox>
</ContainerBox>