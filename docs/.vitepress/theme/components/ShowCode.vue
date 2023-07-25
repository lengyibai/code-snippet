<template>
  <div class="ShowCode">
    <transition name="fade">
      <div class="code" :class="{ showCode: show }" ref="code">
        <slot name="codes" />
      </div>
    </transition>
    <div class="show" @click="showCode" ref="lib">
      <LibSvg
        class="LibSvg"
        :svg="icon.DOWNUP"
        color="var(--font-color)"
        size="16px"
        right="10px"
        :class="{ iconRotate: !show }"
      />
      <span>{{ text }}{{ iskey ? '关键代码' : '源码' }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import LibSvg from './LibSvg.vue';
import icon from '../assets/icon/icon.js';

interface Props {
  iskey?: boolean;
}
withDefaults(defineProps<Props>(), {
  iskey: false,
});

const show = ref(true);
const text = ref('查看');
const lib = ref();
const code = ref();

watch(show, (v) => {
  const show = lib;
  if (!v) {
    if (document.documentElement.clientHeight - lib.value.getBoundingClientRect().y - code.value.scrollHeight < -500) {
      lib.value.classList.add('fixed');
    }
  } else {
    lib.value.classList.remove('fixed');
  }
});

onMounted(() => {
  code.value.style.height = code.value.scrollHeight + 10 + 'px';
});

const showCode = () => {
  show.value = !show.value;
  text.value = show.value ? '查看' : '隐藏';
};
</script>
<style scoped lang="less">
.ShowCode {
  width: 100%;
  .code {
    width: 100%;
    overflow: hidden;
    transition: all 0.5s;
    margin-bottom: 10px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .show {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    height: 35px;
    cursor: pointer;
    text-align: center;
    transition: all 0.25s;
    border-radius: 5px;
    background-color: var(--vp-c-bg-alt);
    &:hover {
      opacity: 0.5;
    }
    &:active {
      opacity: 0.25;
    }
  }
  .LibSvg {
    transition: all 0.5s;
    span {
      color: var(--font-color);
      &:hover {
        opacity: 0.5;
      }
    }
  }
}

.showCode {
  height: 0px !important;
}

.iconRotate {
  transform: rotate(-180deg);
}

.fixed {
  width: 100%;
  right: 0;
  position: fixed !important;
  bottom: 0px !important;
  z-index: 2;
  box-shadow: 0 0px 5px #aaa;
}
</style>
