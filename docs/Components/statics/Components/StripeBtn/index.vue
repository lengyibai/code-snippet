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
