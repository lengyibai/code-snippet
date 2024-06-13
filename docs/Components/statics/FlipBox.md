<script setup>
  import FlipBox from './Components/FlipBox/demo/index.vue'
</script>

# FlipBox

<ContainerBox title="介绍">
<template #desc>
翻转至背面
</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demo-box">
<FlipBox />
</div>

<CodeBox>
<template #codes>

```vue
<script setup lang="ts">
import LibFlipBox from "../index.vue";
</script>

<template>
  <div class="demo">
    <LibFlipBox>
      <template #front>
        <div class="box flex">鼠标放上来</div>
      </template>
      <template #back>
        <div class="box flex">鼠标移出去</div>
      </template>
    </LibFlipBox>
  </div>
</template>

<style scoped>
.demo {
  width: 100%;
  height: 300px;
  font-size: 4vw;
}

.box {
  height: 100%;
  background-color: #eee;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```

</template>
</CodeBox>
</ContainerBox>


## 组件源码

<ContainerBox>
  <CodeBox>
  <template #codes>

  ```vue
  <script setup lang="ts">
  import { ref } from "vue";

  interface Props {
    duration?: number;
  }
  withDefaults(defineProps<Props>(), {
    duration: 500,
  });

  const show = ref(false);
  </script>

  <template>
    <div class="lib-flip-box" @mouseenter="show = true" @mouseleave="show = false">
      <div class="card-side card-side-front" :style="{ transitionDuration: duration + 'ms' }">
        <slot name="front">正面</slot>
      </div>
      <div class="card-side card-side-back" :style="{ transitionDuration: duration + 'ms' }">
        <transition name="fade">
          <slot v-if="show" name="back">反面</slot>
        </transition>
      </div>
    </div>
  </template>

  <style scoped lang="less">
  .lib-flip-box {
    position: relative;
    width: 100%;
    height: 100%;
    perspective: 1000px;

    &:hover .card-side-front {
      transform: rotateX(-180deg);
    }

    &:hover .card-side-back {
      transform: rotateX(0deg);
    }

    .card-side {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      width: 100%;
      height: 100%;
      transition: all 0.5s ease;
      backface-visibility: hidden;
    }

    .card-side-back {
      transform: rotateY(180deg);
    }
  }

  .fade-enter-from,
  .fade-leave-active {
    opacity: 0;
  }

  .fade-leave-active,
  .fade-enter-active {
    transition: all 0.5s;
  }
  </style>
  ```
  </template>
  </CodeBox>
</ContainerBox>