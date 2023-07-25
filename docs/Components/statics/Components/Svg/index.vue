<template>
  <span
    class="LibSvg"
    v-html="svg"
    :style="{
      width: size,
      height: size,
      margin: `${top} ${right} ${bottom} ${left}`,
      color: color,
    }"
    :title="title"
    @mouseenter="enter"
    @mouseleave="leave"
    @mousedown="down"
    @mouseup="up"
  ></span>
</template>
<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
  svg?: string;
  color?: string;
  enterColor?: string;
  downColor?: string;
  title?: string;
  size?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  downFn?: (el?: HTMLElement) => void;
  upFn?: (el?: HTMLElement) => void;
}
const props = withDefaults(defineProps<Props>(), {
  svg: '',
  color: '#000',
  enterColor: '',
  downColor: '',
  title: '',
  size: '25px',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
  downFn: () => {},
  upFn: () => {},
});

const { svg, color, enterColor, downColor, title, size, top, right, bottom, left, downFn, upFn } = toRefs(props);

const enter = (e: any) => {
  let el = e.target;
  el.style.color = enterColor.value || color.value;
};

const leave = (e: any) => {
  let el = e.target;
  el.style.color = color.value;
  if (el.tagName === 'svg') {
    upFn.value(el.parentNode as HTMLElement);
  } else {
    upFn.value(el.parentNode!.parentNode as HTMLElement);
  }
};

const down = (e: any) => {
  let el = e.target;
  if (el.tagName === 'svg') {
    el.parentNode.style.color = downColor || enterColor.value || color.value;
    downFn.value(el.parentNode as HTMLElement);
  } else {
    el.parentNode.parentNode.style.color = downColor || enterColor.value || color.value;
    downFn.value(el.parentNode!.parentNode as HTMLElement);
  }
};

const up = (e: any) => {
  const el = e.target;
  if (el.tagName === 'svg') {
    el.parentNode.style.color = enterColor.value || color.value;
    upFn.value(el.parentNode as HTMLElement);
  } else {
    el.parentNode.parentNode.style.color = enterColor.value || color.value;
    upFn.value(el.parentNode!.parentNode as HTMLElement);
  }
};
</script>
<style scoped lang="less">
.LibSvg {
  display: inline-block;
  position: relative;
  background: no-repeat center center;
  background-size: contain;
  cursor: pointer;

  &:hover {
    transition: all 0.1s;
  }
}
</style>
