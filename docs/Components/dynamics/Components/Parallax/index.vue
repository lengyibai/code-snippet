<template>
  <div ref="parallax">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Parallax from './Parallax.js';

interface Props {
  follow?: boolean;
  outinit?: boolean;
  reverse?: boolean;
  unit?: string;
}
const props = withDefaults(defineProps<Props>(), {
  follow: true,
  outinit: true,
  reverse: false,
  unit: 'px',
});

const parallax = ref();

onMounted(() => {
  let childs = [...parallax.value.children].map((item) => {
    return {
      el: item,
      x: item.attributes._x?.value,
      y: item.attributes._y?.value,
      blur: item.attributes._blur?.value,
      init: {
        blur: item.attributes._initBlur?.value,
      },
    };
  });
  const LibParallax = new Parallax(parallax.value, {
    follow: props.follow,
    outinit: props.outinit,
    reverse: props.reverse,
    unit: props.unit,
  });
  for (const k in childs) {
    const o = childs[k];
    LibParallax.setOption(childs[k].el, {
      x: o.x,
      y: o.y,
      blur: o.blur,
      init: o.init,
    });
  }
});
</script>
