<template>
  <div class="StripeBtn" @click="fn" :style="{ backgroundColor: bgColor, color: color }" ref="StripeBtn">
    <span>{{ text }}</span>
    <div
      class="stripe"
      v-show="modelValue"
      :style="{
        backgroundImage: themeColor[theme],
      }"
    ></div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface Props {
  modelValue?: boolean;
  theme?: 'white' | 'black';
  text?: string;
  bgColor?: string;
  color?: string;
}
withDefaults(defineProps<Props>(), {
  modelValue: false,
  theme: 'white',
  text: '按钮',
  bgColor: '#909399',
  color: '#fff',
});

const themeColor = {
  white:
    'repeating-linear-gradient(123deg, rgba(255, 255, 255, 0.75) 5px,rgba(255, 255, 255, 0.75) 1em,rgb(255, 255, 255) calc(1em - 1px),rgb(255, 255, 255) 2em)',
  black:
    'repeating-linear-gradient(123deg, rgba(0, 0, 0, 0.85) 0px,rgba(0, 0, 0, 0.85) 1em,rgb(0, 0, 0) calc(1em - 1px), rgb(0, 0, 0) 2em)',
};

const StripeBtn = ref();

interface Emits {
  (e: 'update:modelValue', v: boolean): void;
}
const emit = defineEmits<Emits>();
const fn = () => {
  emit('update:modelValue', true);
};

onMounted(() => {
  StripeBtn.value.style.setProperty('--height', StripeBtn.value.offsetHeight + 'px');
});
</script>
<style scoped lang="less">
.StripeBtn {
  --height: 0;
  position: relative;
  padding: 0.75em 1.5em;
  font-size: 25px;
  border-radius: 0.5em;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  .stripe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: calc(var(--height) - 0.625em) var(--height);
    background-position: 0 0;
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
