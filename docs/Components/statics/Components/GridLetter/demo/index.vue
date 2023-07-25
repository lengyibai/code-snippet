<template>
  <div class="grid" :style="{ gridTemplateAreas: layout }">
    <LibGridLetter class="LibGridLetter" v-for="(item, index) in box" :area="item" :key="index">
      {{ item }}
    </LibGridLetter>
  </div>
</template>
<script setup lang="ts">
import { nextTick, onBeforeMount, onMounted, ref } from 'vue';
import LibGridLetter from '../index.vue';

interface Layout {
  [propsName: string]: string;
}

const box = ref('abcdefg'); //代表7个盒子，字母代表盒子的id
const layout = ref(''); //用于存储当前的布局

const layouts: Layout = {
  0: `
    'a a a a'
    'b b c c'
    'd d e e'
    'f f f f'
    'g g g g'
  `,
  500: `
    'a d d'
    'a g f'
    'b b e'
    'c c c'
  `,
  800: `
    'a b f f'
    'a b f f'
    'c b g e'
    'd d d e'
  `,
  1200: `
    'a a b c'
    'd e b g'
    'd f f f'
  `,
};

const fn = () => {
  /* 循环布局数组的 key，当大于 key 则使用该 key 布局 */
  Object.keys(layouts).forEach((item) => {
    if (document.documentElement.clientWidth > Number(item)) {
      layout.value = layouts[item];
    }
  });
};

onMounted(() => {
  nextTick(() => {
    fn();
  });
  window.addEventListener('resize', fn);
});

onBeforeMount(() => {
  window.removeEventListener('resize', fn);
});
</script>
<style scoped>
.grid {
  display: grid;
  width: 100%;
  grid-gap: 5px;
}
.LibGridLetter {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  font-size: 6vw;
}
</style>
