<script setup lang="ts">
import { ref } from "vue";

interface Props {
  duration?: number;
}
withDefaults(defineProps<Props>(), {
  duration: 500,
});

const show = ref(false);
</script>

<template>
  <div class="lib-flip-box" @mouseenter="show = true" @mouseleave="show = false">
    <div class="card-side card-side-front" :style="{ transitionDuration: duration + 'ms' }">
      <slot name="front">正面</slot>
    </div>
    <div class="card-side card-side-back" :style="{ transitionDuration: duration + 'ms' }">
      <transition name="fade">
        <slot v-if="show" name="back">反面</slot>
      </transition>
    </div>
  </div>
</template>

<style scoped lang="less">
.lib-flip-box {
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1000px;

  &:hover .card-side-front {
    transform: rotateX(-180deg);
  }

  &:hover .card-side-back {
    transform: rotateX(0deg);
  }

  .card-side {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
    backface-visibility: hidden;
  }

  .card-side-back {
    transform: rotateY(180deg);
  }
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}

.fade-leave-active,
.fade-enter-active {
  transition: all 0.5s;
}
</style>
