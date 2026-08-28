<script setup lang="ts">
import { computed, ref, useId } from "vue";

import icon from "../../assets/icon/icon.js";

import SvgBox from "./components/SvgBox/index.vue";

interface Props {
  iskey?: boolean;
}
withDefaults(defineProps<Props>(), {
  iskey: false,
});

const collapsed = ref(true);
const codeId = `code-box-${useId()}`;
const actionText = computed(() => (collapsed.value ? "查看" : "隐藏"));

const showCode = () => {
  collapsed.value = !collapsed.value;
};
</script>

<template>
  <div class="code-box">
    <button
      v-show="!collapsed"
      class="collage"
      type="button"
      :aria-controls="codeId"
      :aria-expanded="!collapsed"
      @click="showCode"
    >
      <SvgBox
        :svg="icon.DOWNUP"
        color="var(--font-color)"
        size="16px"
        right="10px"
        class="iconRotate"
      />
      <span>{{ actionText }}{{ iskey ? "关键代码" : "源码" }}</span>
    </button>

    <div :id="codeId" class="code" :class="{ collapsed }">
      <div class="code-inner">
        <slot name="codes" />
      </div>
    </div>

    <button
      class="collage"
      type="button"
      :aria-controls="codeId"
      :aria-expanded="!collapsed"
      @click="showCode"
    >
      <SvgBox
        :svg="icon.DOWNUP"
        color="var(--font-color)"
        size="16px"
        right="10px"
        :class="{ iconRotate: collapsed }"
      />
      <span>{{ actionText }}{{ iskey ? "关键代码" : "源码" }}</span>
    </button>
  </div>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
