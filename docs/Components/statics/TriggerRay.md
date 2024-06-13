<script setup>
  import TriggerRayA from './Components/TriggerRay/demo/index-a.vue'
  import TriggerRayB from './Components/TriggerRay/demo/index-b.vue'
</script>

# TriggerRay

<ContainerBox title="介绍" noGap>
  <template #desc>

  模仿`B站`的点赞放射效果
  </template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
  <template #desc>
  放射背景自适应大小，无需担心尺寸适配问题
  </template>

  <div class="demo-box">
    <TriggerRayA />
  </div>

  <CodeBox>
  <template #codes>

  ```vue
  <script setup lang="ts">
  import { ref } from "vue";

  import LibTriggerRay from "../index.vue";

  const icon = `<svg t="1662786269694" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1864"><path d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24z" p-id="1865" fill="currentColor"></path></svg>`;

  const status = ref(false);
  </script>

  <template>
    <div class="demo">
      <LibTriggerRay v-model="status" size="10vh" :icon="icon" color="#f1c40f" />
    </div>
  </template>

  <style scoped lang="less">
  .demo {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20vw;
    min-height: 150px;
  }
  </style>
  ```
  </template>
  </CodeBox>
</ContainerBox>

<ContainerBox title="自定义样式">
  <template #desc>
  可自定义大小及颜色
  </template>

  <div class="demo-box">
    <TriggerRayB />
  </div>

  <CodeBox>
  <template #codes>

  ```vue
  <script setup lang="ts">
  import { ref } from "vue";

  import LibTriggerRay from "../index.vue";

  const icon = `<svg t="1662721480621" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1415"><path d="M64 483.04V872c0 37.216 30.144 67.36 67.36 67.36H192V416.32l-60.64-0.64A67.36 67.36 0 0 0 64 483.04zM857.28 344.992l-267.808 1.696c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-68.832-155.488-137.568-145.504-60.608 8.8-67.264 61.184-67.264 126.816v59.264c0 76.064-63.84 140.864-137.856 148L256 416.96v522.4h527.552a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824z" p-id="1416" fill="currentColor"></path></svg>`;

  const status = ref(false);
  </script>

  <template>
    <div class="demo">
      <LibTriggerRay v-model="status" size="15vh" :icon="icon" color="#3498db" />
    </div>
  </template>

  <style scoped lang="less">
  .demo {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20vw;
    min-height: 150px;
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
  import { onMounted, ref } from "vue";

  interface Props {
    /** 元素颜色 */
    color: string;
    /** 元素SVG */
    icon: string;
    /** 元素大小 */
    size: string;
  }

  const $props = defineProps<Props>();

  /** 是否已点击过 */
  const modelValue = defineModel<boolean>({ required: true });

  const triggerRayRef = ref<HTMLElement>();

  /** 元素当前颜色 */
  const _color = ref("#666");
  /** 是否显示放射元素 */
  const play_ray = ref(false);
  /** 是否播放缩放动画 */
  const play_scale = ref(false);

  //设置初始状态
  if (modelValue.value) {
    _color.value = $props.color;
  }

  /** @description 播放动画 */
  const handlePlay = () => {
    if (play_ray.value) return;

    modelValue.value = !modelValue.value;

    if (modelValue.value) {
      _color.value = "#666";
      return;
    }

    play_scale.value = true;
    play_ray.value = true;
    setTimeout(() => {
      _color.value = $props.color;
    }, 150);

    setTimeout(() => {
      play_scale.value = false;
    }, 500);

    if (play_ray.value) {
      setTimeout(() => {
        play_ray.value = false;
      }, 750);
    }
  };

  onMounted(() => {
    triggerRayRef.value!.style.setProperty("--color", $props.color);
    triggerRayRef.value!.style.setProperty(
      "--size",
      (triggerRayRef.value!.offsetWidth / 100).toString(),
    );
  });
  </script>

  <template>
    <div ref="triggerRayRef" class="trigger-ray">
      <div v-if="play_ray" class="shine">
        <span v-for="(item, index) in 16" :key="index" :style="`--i:${item}`"></span>
      </div>

      <i
        :style="{ color: _color, width: size, height: size }"
        :class="{
          scale: play_scale,
        }"
        @click="handlePlay"
        v-html="icon"
      ></i>
    </div>
  </template>

  <style scoped lang="less">
  .trigger-ray {
    position: relative;

    i {
      z-index: 1;
      display: inline-block;
    }

    .scale {
      animation: scale 0.5s;
    }

    @keyframes scale {
      35% {
        transform: scale(0);
      }

      75% {
        transform: scale(1.3);
      }

      100% {
        transform: scale(1);
      }
    }

    .shine {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .shine::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: ray-border 0.4s ease-out;
      box-sizing: border-box;
    }

    @keyframes ray-border {
      0% {
        width: 0;
        height: 0;
        border: 0 solid var(--color);
        opacity: 0.75;
      }

      35% {
        width: calc(100px * var(--size));
        height: calc(100px * var(--size));
        border: calc(50px * var(--size)) solid var(--color);
        opacity: 0.75;
      }

      100% {
        width: calc(200px * var(--size));
        height: calc(200px * var(--size));
        border: 0 solid var(--color);
        opacity: 0.75;
      }
    }

    .shine span {
      position: absolute;
      display: block;
      width: calc(5px * var(--size));
      border-radius: 50%;
      background-color: var(--color);
    }

    .shine span:nth-child(even) {
      height: calc(30px * var(--size));
      animation: ray-even 0.75s ease;
    }

    .shine span:nth-child(odd) {
      height: calc(15px * var(--size));
      animation: ray-odd 0.75s ease;
    }

    @keyframes ray-even {
      0% {
        transform: rotate(calc(22.5deg * var(--i))) translateY(0);
        opacity: 1;
      }

      60% {
        height: calc(30px * var(--size));
        opacity: 0.8;
      }

      100% {
        height: calc(10px * var(--size));
        transform: rotate(calc(22.5deg * var(--i))) translateY(calc(120px * var(--size)));
        opacity: 0;
      }
    }

    @keyframes ray-odd {
      0% {
        transform: rotate(calc(22.5deg * var(--i))) translateY(0);
        opacity: 1;
      }

      60% {
        height: calc(15px * var(--size));
        opacity: 1;
      }

      100% {
        height: calc(10px * var(--size));
        transform: rotate(calc(22.5deg * var(--i))) translateY(calc(125px * var(--size)));
        opacity: 0;
      }
    }
  }
  </style>
  ```
  </template>
  </CodeBox>
</ContainerBox>

