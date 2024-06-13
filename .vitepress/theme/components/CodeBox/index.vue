<script setup lang="ts">
import { ref, onMounted } from "vue";
import SvgBox from "./components/SvgBox/index.vue";
import icon from "../../assets/icon/icon.js";

interface Props {
  iskey?: boolean;
}
withDefaults(defineProps<Props>(), {
  iskey: false,
});

const codeRef = ref<HTMLElement>();

const show = ref(true);
const text = ref("查看");

onMounted(() => {
  if (!codeRef.value) return;
  codeRef.value.style.height = codeRef.value.scrollHeight + 10 + "px";
});

const showCode = () => {
  show.value = !show.value;
  text.value = show.value ? "查看" : "隐藏";

  setTimeout(() => {
    if (show.value) {
      codeRef.value?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, 250);
};
</script>

<template>
  <div class="code-box">
    <div class="collage" v-show="!show" @click="showCode">
      <SvgBox
        :svg="icon.DOWNUP"
        color="var(--font-color)"
        size="16px"
        right="10px"
        :class="{ iconRotate: true }"
      />
      <span>{{ text }}{{ iskey ? "关键代码" : "源码" }}</span>
    </div>

    <transition name="fade">
      <div class="code" :class="{ open: show }" ref="codeRef">
        <slot name="codes" />
      </div>
    </transition>

    <div class="collage" @click="showCode" ref="btnRef">
      <SvgBox
        :svg="icon.DOWNUP"
        color="var(--font-color)"
        size="16px"
        right="10px"
        :class="{ iconRotate: !show }"
      />
      <span>{{ text }}{{ iskey ? "关键代码" : "源码" }}</span>
    </div>
  </div>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
