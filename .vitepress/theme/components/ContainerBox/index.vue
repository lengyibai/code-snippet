<script setup lang="ts">
import { useRadialBorder } from "./hooks/useRadialBorder";
import { ref, onUnmounted, onMounted } from "vue";

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

const containerBoxRef = ref<HTMLElement>();

const { enableRadialBorder, disableRadialBorder } = useRadialBorder(containerBoxRef);

window.addEventListener("mouseenter", enableRadialBorder);
window.addEventListener("mouseleave", disableRadialBorder);

onMounted(enableRadialBorder);
onUnmounted(disableRadialBorder);
</script>

<template>
  <div class="container-box" ref="containerBoxRef">
    <div
      class="title"
      v-if="title"
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
