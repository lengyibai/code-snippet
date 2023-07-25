<template>
  <div class="grid">
    <transition-group>
      <!--
      x、countX、y、countY是固定写法，看得懂可以自行修改，但推荐当前写法
     -->
      <LibGridNumber
        class="LibGridNumber"
        v-for="(item, index) in box"
        :x="item[0]"
        :countX="item[1]"
        :y="item[2]"
        :countY="item[3]"
        :key="index"
      >
        {{ index }}
      </LibGridNumber>
    </transition-group>
  </div>
</template>
<script setup lang="ts">
import { nextTick, onBeforeMount, onMounted, ref } from 'vue';
import LibGridNumber from '../index.vue';

const box = ref<number[][]>([]); //用于存储当前的布局

interface Layout {
  0: number[][];
  500: number[][];
  800: number[][];
  1200: number[][];
  [propsName: string]: number[][];
}

/* 布局列表 */
const boxs: Layout = {
  0: [
    [1, 4, 1, 1],
    [1, 2, 2, 1],
    [3, 2, 2, 1],
    [1, 2, 3, 1],
    [3, 2, 3, 1],
    [1, 4, 4, 1],
    [1, 4, 5, 1],
  ],
  500: [
    /**
     * 每个数组代表一个盒子，每个数组内的数字代表占用
     * 数组元素第1个和第2个，代表X轴第几格开始，占用了几格
     * 数组元素第3个和第4个，代表Y轴第几格开始，占用了几格
     */
    [1, 1, 1, 2],
    [1, 2, 3, 1],
    [1, 3, 4, 1],
    [2, 2, 1, 1],
    [3, 1, 3, 1],
    [3, 1, 2, 1],
    [2, 1, 2, 1],
  ],
  800: [
    [1, 1, 1, 2],
    [2, 1, 1, 3],
    [1, 1, 3, 1],
    [1, 3, 4, 1],
    [4, 1, 2, 3],
    [3, 2, 1, 1],
    [3, 1, 2, 2],
  ],
  1200: [
    [1, 2, 1, 1],
    [3, 1, 1, 2],
    [4, 1, 1, 1],
    [1, 1, 2, 2],
    [2, 1, 2, 1],
    [2, 3, 3, 1],
    [4, 1, 2, 1],
  ],
};

const fn = () => {
  /* 循环布局数组的 key，当大于 key 则使用该 key 布局 */
  Object.keys(boxs).forEach((item) => {
    if (document.documentElement.clientWidth > Number(item)) {
      box.value = boxs[item];
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
.LibGridNumber {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  font-size: 6vw;
  transition: all 1s;
}
</style>
