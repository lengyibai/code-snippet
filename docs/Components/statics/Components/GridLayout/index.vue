<template>
  <div
    class="LibGridLayout"
    ref="LibGridLayout"
    :style="{ gridTemplateColumns: 'repeat(' + count + ', 1fr)', gridGap: gap }"
  >
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';

interface Props {
  count: number;
  gap: string;
  eqhMultiple: number;
}
const props = withDefaults(defineProps<Props>(), {
  count: 3,
  gap: '0px',
  eqhMultiple: 0,
});

let childrens: any[] = [];
const LibGridLayout = ref();

const fn = () => {
  requestAnimationFrame(() => {
    childrens.forEach((item) => {
      item.style.height = `${item.offsetWidth * props.eqhMultiple}px`;
    });
  });
};

const updateHeight = () => {
  childrens.forEach((item) => {
    item.style.height = `${item.scrollWidth * props.eqhMultiple}px`;
  });
  window.addEventListener('resize', fn);
};

onMounted(() => {
  childrens = [...LibGridLayout.value.children];
  let a: any = null;
  (function fn() {
    if (props.eqhMultiple > 0 && childrens?.length) {
      setTimeout(() => {
        updateHeight();
      });
      return;
    }
    a = requestAnimationFrame(fn);
  })();
  // 3秒后还未获取到插槽元素，则取消获取
  setTimeout(() => {
    cancelAnimationFrame(a);
  }, 3000);
});

onBeforeMount(() => {
  window.removeEventListener('resize', fn);
});
</script>
<style scoped lang="less">
.LibGridLayout {
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: row dense;
  align-content: flex-start;
  overflow: auto;
  padding: 15px;
}
</style>
