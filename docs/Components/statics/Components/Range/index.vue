<template>
  <div class="LibRange">
    <div class="sliderValue" v-if="showNum">
      <span :class="{ showNum: show_num }" :style="{ left: barWidth }">{{ text || modelValue }}</span>
    </div>
    <div class="field">
      <div class="bar" :style="{ width: barWidth, backgroundColor: color }">
        <img :src="icon" v-show="showIcon && showDot" :style="{ width: size + 'px', height: size + 'px' }" />
        <span v-show="showDot && !showIcon" :style="{
          width: size + 'px',
          height: size + 'px',
          backgroundColor: color,
        }"></span>
      </div>
      <input :value="modelValue" @input="changeValue" @mouseup="show_num = false" type="range" :min="min" :max="max" :step="step" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import iconSvg from './img/icon.svg';

interface Props {
  min?: number;
  max?: number;
  modelValue?: number;
  text?: string;
  color?: string;
  size?: number;
  showDot?: boolean;
  showIcon?: boolean;
  icon?: string;
  showNum?: boolean;
  step?: number;
}
interface Emits {
  (e: 'update:modelValue', v: number): void;
}

const emit = defineEmits<Emits>();
const props = withDefaults(defineProps<Props>(), {
  min: 0,
  max: 100,
  modelValue: 0,
  text: '',
  color: '#3498db',
  size: 20,
  showDot: true,
  showIcon: false,
  icon: iconSvg,
  showNum: true,
  step: 1,
});

const show_num = ref(false);
const rotate = ref(0);

const barWidth = computed(() => {
  let value = props.modelValue - props.min;
  let max = props.max - props.min;
  return `calc(${ value / (max / 100) }% + ${ ((props.size - (props.showDot ? 0 : 25)) * (max / 2 - value)) / max }px)`;
});

const changeValue = (e: Event) => {
  const v = Number((e.target as HTMLInputElement).value);
  show_num.value = true;
  emit('update:modelValue', Number(v));
  rotate.value = v / props.max;
};
</script>
<style scoped lang="less">
.LibRange {
  position: relative;
  width: 100%;

  .sliderValue {
    position: absolute;
    width: 100%;
    top: -75px;

    span {
      position: absolute;
      padding: 0 15px;
      height: 50px;
      border-radius: 50px;
      font-weight: 500;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.5);
      text-align: center;
      transform: translateX(-50%) scale(0);
      transform-origin: bottom;
      transition: transform 0.3s ease-in-out;
      line-height: 50px;
      z-index: 2;
      white-space: nowrap;

      &::after {
        position: absolute;
        content: '';
        //width: 100%;
        //height: 100%;
        background-color: #000;
        font-weight: 500;
        color: #fff;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
        border-bottom-left-radius: 50%;
        z-index: -1;
      }
    }
  }

  .field {
    @height: 3px;
    display: flex;
    justify-content: center;

    .bar {
      position: absolute;
      left: 0;
      width: 0%;
      height: @height;
      border-radius: @height;
      pointer-events: none;

      img,
      span {
        position: absolute;
        transform: translateX(50%) translateY(-50%);
        top: 1.5px;
        right: 0;
        border-radius: 50%;
        transition: transform 0.5s;
      }

      img {
        z-index: 2;
      }
    }

    input {
      appearance: none;
      width: 100%;
      height: @height;
      border-radius: @height;
      margin: 0;
      background-color: #ddd;
      outline: none;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background-size: cover;
        border-radius: 50px;
        cursor: pointer;
      }
    }

    .value {
      position: relative;
      font-size: 18px;
      font-weight: 600;
      color: #000;

      &.left {
        left: -22px;
      }

      &.right {
        right: -43px;
      }
    }
  }
}

/* 拖动显示数字 */
.showNum {
  transform: translateX(-50%) scale(1) !important;
}

/* 淡入淡出 */
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
</style>
