<template>
  <div
    class="LibUpdateBtn"
    @click="update"
    :style="{
      width: size,
      height: size,
    }"
  >
    <img
      class="up"
      v-show="show_up"
      :class="{ move: modelValue === 1 }"
      src="./img/update.svg"
    />
    <transition name="fade">
      <img
        v-show="!show_up && modelValue === 1 && !finish"
        class="rotate"
        src="./img/loading.svg"
      />
    </transition>
    <transition name="bounce">
      <img v-show="finish" src="./img/success.svg" />
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
interface Props {
  size?: string;
  finish?: boolean;
  modelValue: number;
}

const props = withDefaults(defineProps<Props>(), {
  size: "50px",
  finish: false,
  modelValue: 0,
});

const show_up = ref(true);
const emit = defineEmits(["update", "update:modelValue"]);
const update = () => {
  emit("update:modelValue", 1);
  setTimeout(() => {
    show_up.value = false;
    emit("update");
  }, 250);
};

watch(
  () => props.modelValue,
  (v) => {
    if (v === 0) {
      show_up.value = true;
    }
  }
);
</script>
<style scoped lang="less">
.LibUpdateBtn {
  position: relative;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    filter: saturate(2);
  }

  &:active {
    filter: brightness(0.75);
  }
  img {
    width: 75%;
    height: 75%;
    &.up {
      transition: all 0.5s;
    }
  }
}

.move {
  transform: translateY(-200%);
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

.fade-enter-active,
.fade-leave-active {
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

.bounce-enter-active {
  transition: all 0.5s 0.2s;
}

.bounce-leave-active {
  position: absolute;
}
</style>
