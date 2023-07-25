<template>
  <transition name="iframe">
    <iframe
      v-if="show"
      class="iframe"
      ref="iframe"
      :src="link"
      marginheight="0"
      marginwidth="0"
      frameborder="0"
      scrolling="auto"
      width="100%"
      height="100%"
    ></iframe>
  </transition>
</template>
<script setup lang="ts">
interface Props {
  link?: string;
  show?: boolean;
}
withDefaults(defineProps<Props>(), {
  link: '',
  show: false,
});
</script>
<style scoped lang="less">
/* 进入前状态 */
.iframe-enter,
.iframe-leave-active {
  transform: scale(0.75);
  opacity: 0;
}

/* 进入和离开动画属性 */
.iframe-leave-active,
.iframe-enter-active {
  transition: all 0.25s;
}
</style>
