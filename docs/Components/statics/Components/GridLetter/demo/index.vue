<script setup lang="ts">
import { nextTick, onBeforeMount, onMounted, ref } from "vue";

import LibGridLetter from "../index.vue";

interface Layout {
  [propsName: string]: string;
}

/** 代表7个盒子，字母代表盒子的id */
const box = ref("abcdefg");
/** 用于存储当前的布局 */
const layout = ref("");

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

const changeArea = () => {
  //循环布局数组的 key，当大于 key 则使用该 key 布局
  Object.keys(layouts).forEach((item) => {
    if (document.documentElement.clientWidth > Number(item)) {
      layout.value = layouts[item];
    }
  });
};

onMounted(() => {
  nextTick(() => {
    changeArea();
  });
  window.addEventListener("resize", changeArea);
});

onBeforeMount(() => {
  window.removeEventListener("resize", changeArea);
});
</script>

<template>
  <div class="grid" :style="{ gridTemplateAreas: layout }">
    <LibGridLetter v-for="(item, index) in box" :key="index" class="lib-grid-letter" :area="item">
      {{ item }}
    </LibGridLetter>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  width: 100%;
  grid-gap: 5px;
}

.lib-grid-letter {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  font-size: 6vw;
}
</style>
