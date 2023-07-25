<template>
  <div>
    <transition name="maskClose">
      <div class="mask-close" v-show="show">
        <transition name="closeDown">
          <div class="close" v-show="show" @click="close">
            <img src="./img/close.svg" alt="" />
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface Emits {
  (e: 'close'): void;
}
const emit = defineEmits<Emits>();

const show = ref(false);

const throttleDelay = (() => {
  let timer: any = null;
  return function (fn = () => {}, delay = 1000) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn();
      }, delay);
    }
  };
})();

onMounted(() => {
  window.addEventListener('mousemove', (e: MouseEvent) => {
    throttleDelay(() => {
      if (e.clientY <= 100) {
        show.value = true;
      } else {
        show.value = false;
      }
    }, 100);
  });
});
const close = () => {
  emit('close');
};
</script>
<style scoped lang="less">
.mask-close {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(0deg, transparent 0%, rgba(0, 0, 0, 0.5) 100%);
  z-index: 999;
  .close {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.65);
    color: #fff;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      width: 50%;
      height: 50%;
    }
  }
}

/* 进入前状态 */
.maskClose-enter-from,
.maskClose-leave-active {
  opacity: 0;
}

/* 进入和离开动画属性 */
.maskClose-leave-active,
.maskClose-enter-active {
  transition: all 0.25s;
}

/* 进入前状态 */
.closeDown-enter-from,
.closeDown-leave-active {
  transform: translateY(-100%);
}

/* 进入和离开动画属性 */
.closeDown-leave-active,
.closeDown-enter-active {
  transition: all 0.25s;
}
</style>
