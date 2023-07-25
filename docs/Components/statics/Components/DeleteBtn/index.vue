<template>
  <div
    class="LibDeleteBtn"
    @click="del"
    :style="{
      width: size,
      height: size,
    }"
  >
    <div class="del" v-show="show_del">
      <img class="lid" :class="{ moveUp: modelValue === 1 }" src="./img/lid.svg" />
      <img class="bucket" :class="{ moveDown: modelValue === 1 }" src="./img/bucket.svg" />
    </div>
    <transition name="fade">
      <img v-show="!show_del && modelValue === 1 && !finish" class="rotate" src="./img/loading.svg" />
    </transition>
    <transition name="bounce">
      <img v-show="finish" src="./img/success.svg" />
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
interface Props {
  size?: string;
  finish?: boolean;
  modelValue: number;
}

const props = withDefaults(defineProps<Props>(), {
  size: '50px',
  finish: false,
  modelValue: 0,
});

const show_del = ref(true);
const emit = defineEmits(['del', 'update:modelValue']);
const del = () => {
  emit('update:modelValue', 1);
  setTimeout(() => {
    show_del.value = false;
    emit('del');
  }, 250);
};

watch(
  () => props.modelValue,
  (v) => {
    if (v === 0) {
      show_del.value = true;
    }
  }
);
</script>
<style scoped lang="less">
.LibDeleteBtn {
  position: relative;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .del {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      position: absolute;
      transition: all 0.5s;
      &.lid {
        width: 65%;
        transform: translateY(-30%);
      }
      &.bucket {
        width: 45%;
        transform: translateY(10%);
      }
    }
  }
  img {
    width: 75%;
    height: 75%;
  }
}

.moveUp {
  transform: translateY(calc(-100% - 65px)) !important;
}
.moveDown {
  transform: translateY(calc(100% + 21px)) !important;
}

.rotate {
  animation: rotate 1s infinite linear;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}

.fade-leave-active,
.fade-enter-active {
  transition: all 0.25s;
}

.fade-leave-active {
  position: absolute;
}

.bounce-enter-from,
.bounce-leave-active {
  opacity: 0;
  transform: scale(0);
}

.bounce-enter-from,
.bounce-enter-active {
  transition: all 0.5s 0.2s;
}

.bounce-leave-active {
  position: absolute;
}
</style>
