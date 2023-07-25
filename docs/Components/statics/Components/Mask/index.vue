<template>
  <transition name="Mask">
    <div class="LibMask" v-if="modelValue" @click="hide">
      <slot></slot>
    </div>
  </transition>
</template>
<script setup lang="ts">
interface Props {
  modelValue?: boolean;
}
withDefaults(defineProps<Props>(), {
  modelValue: false,
});

interface Emits {
  (e: 'update:modelValue', v: boolean): void;
}
const emit = defineEmits<Emits>();

const hide = (e: Event) => {
  const v = e.target as HTMLInputElement;
  if (v.className === 'LibMask') {
    emit('update:modelValue', false);
  }
};
</script>
<style scoped lang="less">
.LibMask {
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Mask-enter-from,
.Mask-leave-active {
  opacity: 0;
}

.Mask-enter-active,
.Mask-leave-active {
  transition: all 0.25s;
}
</style>
