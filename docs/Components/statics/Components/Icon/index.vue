<template>
  <div
    class="LibIcon"
    @mouseenter="fn(true)"
    @mouseleave="fn(false)"
    :style="{
      width: `${size}`,
      height: `${size}`,
      margin: `${top} ${right} ${bottom} ${left}`,
      backgroundImage: `url(${!toggle ? imgUrl : imgUrlHover || imgUrl})`,
    }"
    :title="title"
  ></div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  imgUrl?: string;
  imgUrlHover?: string;
  title?: string;
  size?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

withDefaults(defineProps<Props>(), {
  imgUrl: '',
  imgUrlHover: '',
  title: '',
  size: '25px',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
});

const toggle = ref(false);

const fn = (status: boolean) => {
  toggle.value = status;
};
</script>
<style scoped>
.LibIcon {
  position: relative;
  background: no-repeat center center;
  background-size: contain;
  cursor: pointer;
}
</style>
