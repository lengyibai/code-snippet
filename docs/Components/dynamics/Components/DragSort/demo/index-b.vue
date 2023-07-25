<template>
  <div class="demo">
    <component :is="toggle ? comps[0] : comps[1]" :data="boxs" @sort-data="sort" id="name">
      <template v-slot="{ item }">
        <div class="box" :draggable="draggable" @dragend="draggable = false">
          <svg
            class="icon"
            src="./img/icon.svg"
            @mousedown="draggable = true"
            @mouseup="draggable = false"
            t="1661959286791"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="886"
          >
            <path
              d="M128 234.666667A64 64 0 0 1 192 170.666667h640a64 64 0 0 1 0 128h-640A64 64 0 0 1 128 234.666667zM128 512a64 64 0 0 1 64-64h640a64 64 0 0 1 0 128h-640A64 64 0 0 1 128 512z m64 213.333333a64 64 0 0 0 0 128h640a64 64 0 0 0 0-128h-640z"
              p-id="887"
              fill="#ffffff"
            ></path>
          </svg>
          <span>{{ item.name }}</span>
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

const comps = [LibDragSortDown, LibDragSortMove];

const arr = ref<string[]>([]);
const draggable = ref(false);
const toggle = ref(false);
const boxs = [
  {
    name: 'A',
  },
  {
    name: 'B',
  },
  {
    name: 'C',
  },
  {
    name: 'D',
  },
  {
    name: 'E',
  },
];

const sort = (data = boxs) => {
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
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 10vw;
    height: 10vw;
    margin: 0.5vw;
    background-color: #000;
    .icon {
      width: 1vw;
      height: 1vw;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-50%, 50%);
      cursor: move;
    }
    span {
      color: #fff;
      font-size: 2vw;
    }
  }
}
</style>
