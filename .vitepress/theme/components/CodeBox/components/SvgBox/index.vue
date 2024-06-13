<template>
  <span
    class="SvgBox"
    v-html="svg"
    :style="{
      width: size,
      height: size,
      margin: `${top} ${right} ${bottom} ${left}`,
      color: color,
    }"
  ></span>
</template>

<script setup lang="ts">
/*
注意：SVG代码必须删除以下内容
class="icon"
width:宽度px
height:高度px
并将图标颜色fill更改为currentColor
 */

import { defineProps, withDefaults } from "vue";

interface Props {
  svg?: string;
  color?: string;
  size?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

const props = withDefaults(defineProps<Props>(), {
  svg: "",
  color: "#000",
  size: "25px",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
});
</script>
