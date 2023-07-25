<template>
  <div class="demo">
    <component :is="toggle ? comps[0] : comps[1]" :data="imgs" @sort-data="sort" id="name">
      <template v-slot="{ item }">
        <div class="box">
          <img :src="item.src" alt="" />
        </div>
      </template>
    </component>
    <h1>{{ arr || ['A', 'B', 'C', 'D', 'E'] }}</h1>
    <button @click="toggle = !toggle">当前组件：{{ toggle ? 'LibDragSortDown' : 'LibDragSortMove' }}，点击切换</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LibDragSortDown from '../DragSortDown/index.vue';
import LibDragSortMove from '../DragSortMove/index.vue';
import A from './img/a.png';
import B from './img/b.png';
import C from './img/c.png';
import D from './img/d.png';
import E from './img/e.png';

const comps = [LibDragSortDown, LibDragSortMove];

const arr = ref<string[]>([]);
const toggle = ref(false);
const imgs = [
  {
    name: 'A',
    src: A,
  },
  {
    name: 'B',
    src: B,
  },
  {
    name: 'C',
    src: C,
  },
  {
    name: 'D',
    src: D,
  },
  {
    name: 'E',
    src: E,
  },
];

const sort = (data = imgs) => {
  arr.value = data.map((item) => {
    return item.name;
  });
};

sort();
</script>
<style scoped lang="less">
.demo {
  width: 100%;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 3vw;
    text-align: center;
    margin-bottom: 0 !important;
  }
  .box {
    width: 10vw;
    height: 10vw;
    margin: 0.5vw;
    img {
      width: 100%;
      height: 100%;
      filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 2px 4px);
    }
  }
}
</style>
