<template>
  <div class="LibDragSort">
    <div class="transition-group">
      <transition-group name="sort">
        <div
          class="box"
          :class="{ active: fromIndex === index }"
          @dragstart="dragstart(index)"
          @dragover="dragover"
          @dragenter="dragenter(index)"
          @dragend="dragend"
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

const arr = ref<any>([]);
const fromIndex = ref<any>(null);
const enterIndex = ref<any>(null);
const isUpdate = ref(false);

arr.value = [...props.data];

const $debounceDelay = (() => {
  let timer: any = null;
  return (callback = () => {}, wait = 800) => {
    timer && clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
})();

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

const dragenter = (index: number) => {
  if (fromIndex.value === null) return;
  enterIndex.value = index;
  $debounceDelay(
    function () {
      if (fromIndex.value === enterIndex.value) return;
      drop(enterIndex.value);
    }.bind(this),
    100
  );
};

const dragover = (e: Event) => {
  e.preventDefault();
};

const drop = (index: number) => {
  exchange(arr.value, fromIndex.value, index);
  fromIndex.value = index;
  isUpdate.value = true;
};

const dragend = () => {
  setTimeout(() => {
    if (isUpdate.value) {
      emit('sort-data', arr.value);
      isUpdate.value = false;
    }
    fromIndex.value = null;
    enterIndex.value = null;
  }, 100);
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
      transition: all 0.1s;
    }
  }
}
.active {
  opacity: 0;
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
