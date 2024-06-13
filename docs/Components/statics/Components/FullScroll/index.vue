<script setup lang="ts">
import { nextTick, onUnmounted, onMounted, ref, watch } from "vue";

interface Props {
  /** 滚动时长 */
  duration?: number;
  /** 纵向或横向 */
  direction?: string;
}

const $props = withDefaults(defineProps<Props>(), {
  duration: 750,
  direction: "y",
});
const $emit = defineEmits<{
  start: [v: number];
  end: [v: number];
}>();

/** 滚动索引号 */
const modelValue = defineModel({ default: 0 });

/** 滚动索引号 */
let index = 0;

const scrollRef = ref<HTMLElement>();

/** @description 滚动到指定索引
 * @param i 索引号
 */
const scrollIndex = async (i: number) => {
  index = i - 1 === -1 ? 0 : i - 1;
  await nextTick();
  const direction = $props.direction === "y";
  try {
    if (!scrollRef.value) return;
    scrollRef.value.style[direction ? "top" : "left"] =
      -index * (direction ? scrollRef.value.offsetHeight : scrollRef.value.offsetWidth) + "px";
  } catch (error) {}
  setTimeout(() => {
    $emit("end", index + 1);
  }, $props.duration);
};

const $debounceDelay = (() => {
  let timer: NodeJS.Timeout;
  return (callback = () => {}, wait = 800) => {
    timer && clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
})();

watch(
  modelValue,
  () => {
    scrollIndex(modelValue.value);
  },
  {
    immediate: true,
  },
);

onMounted(() => {
  if (!scrollRef.value) return;
  const direction = $props.direction === "y";
  let scroll = true;
  const sonCount = scrollRef.value.querySelectorAll(".scroll-item").length;

  let start = 0;
  let startTime = 0;

  scrollRef.value.addEventListener("wheel", (e: WheelEvent) => {
    $debounceDelay(() => {
      if (!scrollRef.value) return;
      scrollRef.value.style.transition = `all ${$props.duration}ms`;

      if (!scroll) return;
      $emit("start", index + 1);
      scroll = false;

      //判断滚轮滚动方向，并更新索引
      if (-e.deltaY < 0 && index < sonCount - 1) {
        index++;
      } else if (-e.deltaY > 0 && index > 0) {
        index--;
      }

      //根据滚动方向更新滚动位置
      if (direction) {
        scrollRef.value.style.top = -index * scrollRef.value.offsetHeight + "px";
      } else {
        scrollRef.value.style.left = -index * scrollRef.value.offsetWidth + "px";
      }

      modelValue.value = index + 1;
      setTimeout(() => {
        scroll = true;
      }, $props.duration);
    }, 10);
  });

  scrollRef.value.ontouchstart = function (e) {
    start = direction ? e.changedTouches[0].pageY : e.changedTouches[0].pageX;
    startTime = e.timeStamp; //触摸开始的时间

    scrollRef.value!.ontouchmove = function (e) {
      const current = direction ? e.changedTouches[0].pageY : e.changedTouches[0].pageX;
      const status = start - current;
      const elapsedTime = e.timeStamp - startTime; //计算时间差
      const speed = Math.abs(status) / elapsedTime; //计算速度（单位 px/ms）

      if (Math.abs(status) < window.innerHeight / 3 && speed < 0.3) return; //增加速度条件

      $debounceDelay(() => {
        if (!scrollRef.value) return;
        scrollRef.value.style.transition = `all ${$props.duration}ms`;

        if (!scroll) return;
        $emit("start", index + 1);
        scroll = false;

        //判断触摸滑动方向，并更新索引
        if (-status < 0 && index < sonCount - 1) {
          index++;
        } else if (-status > 0 && index > 0) {
          index--;
        }

        //根据滑动方向更新滚动位置
        if (direction) {
          scrollRef.value.style.top = -index * scrollRef.value.offsetHeight + "px";
        } else {
          scrollRef.value.style.left = -index * scrollRef.value.offsetWidth + "px";
        }

        modelValue.value = index + 1;
        setTimeout(() => {
          scroll = true;
        }, $props.duration);
      }, 10);
    };
  };

  scrollRef.value!.ontouchend = () => {
    scrollRef.value!.ontouchmove = null;
  };
});

/* 改变宽度时纠正滚动位置 */
const debounceScrollIndex = () => {
  scrollIndex(modelValue.value);
};
window.addEventListener("resize", debounceScrollIndex);

onUnmounted(() => {
  window.removeEventListener("resize", debounceScrollIndex);
});
</script>

<template>
  <div
    ref="scrollRef"
    class="full-scroll"
    :style="{
      display: direction === 'x' ? 'flex' : 'block',
      transition: `all ${duration}ms`,
    }"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="less">
.full-scroll {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>
