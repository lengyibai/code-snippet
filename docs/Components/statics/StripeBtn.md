<script setup>
  import StripeBtnA from './Components/StripeBtn/demo/index-a.vue'
  import StripeBtnB from './Components/StripeBtn/demo/index-b.vue'
</script>

# StripeBtn

<ContainerBox title="介绍">
  <template #desc>
  怀旧条纹加载
  </template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>
在移动端部分浏览器可能会出现锯齿，PC 端正常，可自行调试
</template>

<div class="demo-box">
  <StripeBtnA />
</div>

<CodeBox>
  <template #codes>

    ```vue
    <script setup lang="ts">
    import { ref } from "vue";

    import LibStripeBtn from "../index.vue";

    const active = ref(false);
    const text = ref("删除");
    const bgColor = ref("#f56c6c");

    const handleClick = () => {
      active.value = true;
      text.value = "loading...";
      bgColor.value = "#67c23a";

      setTimeout(() => {
        bgColor.value = "#409eff";
        text.value = "创建";
        active.value = false;
      }, 2000);
    };
    </script>

    <template>
      <div class="demo">
        <LibStripeBtn v-model="active" :text="text" :bg-color="bgColor" @click="handleClick" />
      </div>
    </template>

    <style scoped>
    .demo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100px;
    }
    </style>
    ```
  </template>
  </CodeBox>
</ContainerBox>

<ContainerBox title="深色">
  <div class="demo-box">
    <StripeBtnB />
  </div>

  <CodeBox>
  <template #codes>

    ```vue
    <script setup lang="ts">
    import { ref } from "vue";

    import LibStripeBtn from "../index.vue";

    const active = ref(false);
    const text = ref("删除");
    const bgColor = ref("#f56c6c");

    const fn = () => {
      text.value = "loading...";
      bgColor.value = "#67c23a";

      setTimeout(() => {
        bgColor.value = "#409eff";
        text.value = "创建";
        active.value = false;
      }, 2000);
    };
    </script>

    <template>
      <div class="demo">
        <LibStripeBtn
          v-model="active"
          :text="text"
          :bg-color="bgColor"
          theme="black"
          color="black"
          @click="fn"
        />
      </div>
    </template>

    <style scoped>
    .demo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100px;
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
    /** 蒙版色 */
    theme?: "white" | "black";
    /** 文字颜色 */
    color?: string;
    /** 按钮上的文字 */
    text: string;
    /** 背景色 */
    bgColor: string;
  }

  withDefaults(defineProps<Props>(), {
    theme: "white",
    color: "#fff",
  });

  /** 是否显示条纹 */
  const modelValue = defineModel<boolean>({ required: true });

  const themeColor = {
    white:
      "repeating-linear-gradient(123deg, rgba(255, 255, 255, 0.75) 5px,rgba(255, 255, 255, 0.75) 1em,rgb(255, 255, 255) calc(1em - 1px),rgb(255, 255, 255) 2em)",
    black:
      "repeating-linear-gradient(123deg, rgba(0, 0, 0, 0.85) 0px,rgba(0, 0, 0, 0.85) 1em,rgb(0, 0, 0) calc(1em - 1px), rgb(0, 0, 0) 2em)",
  };

  const stripeBtnRef = ref<HTMLElement>();

  /** @description 是否显示条纹 */
  const handleStripe = () => {
    modelValue.value = true;
  };

  onMounted(() => {
    stripeBtnRef.value!.style.setProperty("--height", stripeBtnRef.value!.offsetHeight + "px");
  });
  </script>

  <template>
    <div
      ref="stripeBtnRef"
      class="stripe-btn"
      :style="{ backgroundColor: bgColor, color: color }"
      @click="handleStripe"
    >
      <span>{{ text }}</span>
      <div
        v-show="modelValue"
        class="stripe"
        :style="{
          backgroundImage: themeColor[theme],
        }"
      ></div>
    </div>
  </template>

  <style scoped lang="less">
  .stripe-btn {
    --height: 0;

    position: relative;
    overflow: hidden;
    padding: 0.75em 1.5em;
    border-radius: 0.5em;
    font-size: 25px;
    cursor: pointer;
    user-select: none;

    .stripe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;
      background-size: calc(var(--height) - 0.625em) var(--height);
      animation: grow 0.5s linear infinite;
      opacity: 0.35;

      @keyframes grow {
        0% {
          background-position: 0 0;
        }

        100% {
          background-position: calc(var(--height) - 0.7em) 0;
        }
      }
    }
  }
  </style>
  ```
  </template>
  </CodeBox>

</ContainerBox>