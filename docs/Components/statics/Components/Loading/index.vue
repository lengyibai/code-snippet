<template>
  <transition name="LibLoading">
    <div class="LibLoading" :class="{ full: isFull, show: show }">
      <div class="wrapper">
        <div
          class="circle"
          v-for="(item, index) in color"
          :key="index"
          :style="{
            backgroundColor: item,
            animationDelay: (index + 1) * 0.1 + 's',
            left: 75 * (index + 1) + 'px',
            boxShadow: '0 0 50px ' + item,
          }"
        ></div>
        <div
          class="shadow"
          v-for="(item, index) in color"
          :style="{
            animationDelay: (index + 1) * 0.1 + 's',
            left: 75 * (index + 1) + 'px',
            boxShadow: '0 0 50px ' + item,
          }"
        ></div>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
interface Props {
  show?: boolean;
  isFull?: boolean;
}
withDefaults(defineProps<Props>(), {
  show: false,
  isFull: true,
});

const color = ['#ffff00', '#76ff03', '#f06292', '#4fc3f7', '#ba68c8', '#f57c00', '#673ab7'];
</script>
<style scoped lang="less">
.LibLoading {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s;
}

.wrapper {
  width: 200px;
  height: 60px;
  transform: translate(-225px);
  position: relative;
  z-index: 1;
}

.circle {
  width: 40px;
  height: 40px;
  position: absolute;
  left: calc(var(--i) * 10px);
  border-radius: 50%;
  background-color: #fff;
  left: 15%;
  transform-origin: 50%;
  animation: circle7124 0.35s alternate infinite ease;
}

@keyframes circle7124 {
  0% {
    top: 120px;
    height: 10px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }

  40% {
    height: 40px;
    border-radius: 50%;
    transform: scaleX(1);
  }

  100% {
    top: 0%;
  }
}

.shadow {
  width: 40px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 128px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: shadow046 0.35s alternate infinite ease;
}

@keyframes shadow046 {
  0% {
    transform: scaleX(1.5);
  }

  40% {
    transform: scaleX(1);
    opacity: 0.7;
  }

  100% {
    transform: scaleX(0.2);
    opacity: 0.4;
  }
}

.full {
  position: fixed !important;
  width: 100vw !important;
  height: 100vh !important;
  inset: 0 !important;
}
.show {
  opacity: 1;
  pointer-events: auto;
}
</style>