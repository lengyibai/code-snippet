<script setup lang="ts">
import { useTemplateRef } from "vue";

import { useRadialBorder } from "./hooks/useRadialBorder";

interface Props {
  /** 标题 */
  title?: string;
  /** 是否取消标题下面的间距，当标题下面使用了特殊格式，需要换行才能生效，次数需要隐藏取消间距 */
  noGap?: boolean;
}

withDefaults(defineProps<Props>(), {
  title: "",
  noGap: false,
});

const containerBoxRef = useTemplateRef<HTMLElement>("containerBox");
const { handlePointerMove, resetPosition } = useRadialBorder(containerBoxRef);
</script>

<template>
  <div
    ref="containerBox"
    class="container-box"
    @pointermove="handlePointerMove"
    @pointerleave="resetPosition"
  >
    <div
      v-if="title"
      class="title"
      :class="{
        marginBottom: !noGap,
      }"
    >
      {{ title }}
    </div>

    <div class="desc">
      <slot name="desc"></slot>
    </div>

    <div class="code">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
