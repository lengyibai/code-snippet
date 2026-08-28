<script setup lang="ts">
import { onMounted, ref } from "vue";

interface Props {
  /** 元素颜色 */
  color: string;
  /** 元素SVG */
  icon: string;
  /** 元素大小 */
  size: string;
}

const $props = defineProps<Props>();

/** 是否已点击过 */
const modelValue = defineModel<boolean>({ required: true });

const triggerRayRef = ref<HTMLElement>();

/** 元素当前颜色 */
const _color = ref("#666");
/** 是否显示放射元素 */
const play_ray = ref(false);
/** 是否播放缩放动画 */
const play_scale = ref(false);

//设置初始状态
if (modelValue.value) {
  _color.value = $props.color;
}

/** @description 播放动画 */
const handlePlay = () => {
  if (play_ray.value) return;

  modelValue.value = !modelValue.value;

  if (modelValue.value) {
    _color.value = "#666";
    return;
  }

  play_scale.value = true;
  play_ray.value = true;
  setTimeout(() => {
    _color.value = $props.color;
  }, 150);

  setTimeout(() => {
    play_scale.value = false;
  }, 500);

  if (play_ray.value) {
    setTimeout(() => {
      play_ray.value = false;
    }, 750);
  }
};

onMounted(() => {
  triggerRayRef.value!.style.setProperty("--color", $props.color);
  triggerRayRef.value!.style.setProperty(
    "--size",
    (triggerRayRef.value!.offsetWidth / 100).toString(),
  );
});
</script>

<template>
  <div ref="triggerRayRef" class="trigger-ray">
    <div v-if="play_ray" class="shine">
      <span v-for="(item, index) in 16" :key="index" :style="`--i:${item}`"></span>
    </div>

    <i
      :style="{ color: _color, width: size, height: size }"
      :class="{
        scale: play_scale,
      }"
      @click="handlePlay"
      v-html="icon"
    ></i>
  </div>
</template>

<style scoped lang="less">
.trigger-ray {
  position: relative;

  i {
    z-index: 1;
    display: inline-block;
  }

  .scale {
    animation: scale 0.5s;
  }

  @keyframes scale {
    35% {
      transform: scale(0);
    }

    75% {
      transform: scale(1.3);
    }

    100% {
      transform: scale(1);
    }
  }

  .shine {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .shine::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: ray-border 0.4s ease-out;
    box-sizing: border-box;
  }

  @keyframes ray-border {
    0% {
      width: 0;
      height: 0;
      border: 0 solid var(--color);
      opacity: 0.75;
    }

    35% {
      width: calc(100px * var(--size));
      height: calc(100px * var(--size));
      border: calc(50px * var(--size)) solid var(--color);
      opacity: 0.75;
    }

    100% {
      width: calc(200px * var(--size));
      height: calc(200px * var(--size));
      border: 0 solid var(--color);
      opacity: 0.75;
    }
  }

  .shine span {
    position: absolute;
    display: block;
    width: calc(5px * var(--size));
    border-radius: 50%;
    background-color: var(--color);
  }

  .shine span:nth-child(even) {
    height: calc(30px * var(--size));
    animation: ray-even 0.75s ease;
  }

  .shine span:nth-child(odd) {
    height: calc(15px * var(--size));
    animation: ray-odd 0.75s ease;
  }

  @keyframes ray-even {
    0% {
      transform: rotate(calc(22.5deg * var(--i))) translateY(0);
      opacity: 1;
    }

    60% {
      height: calc(30px * var(--size));
      opacity: 0.8;
    }

    100% {
      height: calc(10px * var(--size));
      transform: rotate(calc(22.5deg * var(--i))) translateY(calc(120px * var(--size)));
      opacity: 0;
    }
  }

  @keyframes ray-odd {
    0% {
      transform: rotate(calc(22.5deg * var(--i))) translateY(0);
      opacity: 1;
    }

    60% {
      height: calc(15px * var(--size));
      opacity: 1;
    }

    100% {
      height: calc(10px * var(--size));
      transform: rotate(calc(22.5deg * var(--i))) translateY(calc(125px * var(--size)));
      opacity: 0;
    }
  }
}
</style>
