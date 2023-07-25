<template>
  <div class="LibDragSort">
    <div class="transition-group">
      <transition-group name="sort">
        <div
          class="box"
          :class="{ active: currentIndex === index }"
          @dragstart="dragstart(index)"
          @dragover="dragover($event, index)"
          @drop="drop(index)"
          @dragleave="dragleave"
          v-for="(item, index) in arr"
          :key="item[id]"
        >
          <slot :item="item" :index="index"></slot>
        </div>
      </transition-group>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  data?: any;
  id?: string;
}

interface Emits {
  (e: 'sort-data', v: any): void;
}

const emit = defineEmits<Emits>();
const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  id: 'id',
});

const arr: any = ref([]);
const fromIndex: any = ref(null);
const currentIndex: any = ref(null);

arr.value = [...props.data];

const exchange = (arr: any, index: number, target: number) => {
  if (index > target) {
    arr.splice(target, 0, arr[index]);
    arr.splice(index + 1, 1);
  } else {
    arr.splice(target + 1, 0, arr[index]);
    arr.splice(index, 1);
  }
};

const dragstart = (index: number) => {
  fromIndex.value = index;
};

const dragover = (e: Event, index: number) => {
  if (fromIndex.value === null) return;
  e.preventDefault();
  currentIndex.value = index;
};

const drop = (index: number) => {
  currentIndex.value = null;
  exchange(arr.value, fromIndex.value, index);
  emit('sort-data', arr.value);
  fromIndex.value = null;
};

const dragleave = () => {
  currentIndex.value = null;
};
</script>
<style scoped lang="less">
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.LibDragSort {
  .flex();
  width: 100%;
  height: 100%;
  .transition-group {
    .flex();
    flex-wrap: wrap;
    .box {
      transition: all 0.5s;
    }
  }
}
.active {
  transform: scale(1.25);
  transition: all 0.1s !important;
  opacity: 0.25;
}

/* 进入前状态 */
.sort-enter-from,
.sort-leave-active {
  opacity: 0;
}
/* 进入和离开动画属性 */
.sort-leave-active,
.sort-enter-active,
.sort-move {
  transition: all 0.5s;
}
/* 解决删除元素时，其他元素补位无动画 */
.sort-leave-active {
  position: absolute; /* 必须为绝对定位 */
}
</style>
