<template>
  <div class="TriggerRay" ref="TriggerRay">
    <div class="icon" v-if="play">
      <div class="shine">
        <span style="--i: 1"></span>
        <span style="--i: 2"></span>
        <span style="--i: 3"></span>
        <span style="--i: 4"></span>
        <span style="--i: 5"></span>
        <span style="--i: 6"></span>
        <span style="--i: 7"></span>
        <span style="--i: 8"></span>
        <span style="--i: 9"></span>
        <span style="--i: 10"></span>
        <span style="--i: 11"></span>
        <span style="--i: 12"></span>
        <span style="--i: 13"></span>
        <span style="--i: 14"></span>
        <span style="--i: 15"></span>
        <span style="--i: 16"></span>
      </div>
    </div>
    <i
      v-html="icon"
      @click="fn"
      :style="{ color: color }"
      :class="{
        scale: active,
      }"
    ></i>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface Props {
  modelValue?: boolean;
  color?: string;
  icon?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  color: 'red',
  icon: '',
});

const TriggerRay = ref();

const play = ref(false);
const active = ref(false);
const color = ref('#666');

if (props.modelValue) {
  color.value = props.color;
}

const fn = () => {
  if (color.value === props.color) {
    color.value = '#666';
    return;
  }
  active.value = true;
  play.value = true;
  setTimeout(() => {
    color.value = props.color;
  }, 150);
  setTimeout(() => {
    active.value = false;
  }, 500);

  if (play.value) {
    setTimeout(() => {
      play.value = false;
    }, 750);
  }
};

onMounted(() => {
  TriggerRay.value.style.setProperty('--color', props.color);
  TriggerRay.value.style.setProperty('--size', TriggerRay.value.offsetWidth / 100);
});
</script>
<style scoped lang="less">
.TriggerRay {
  --color: red;
  --size: 1;
  position: relative;

  i {
    display: inline-block;
    width: 5vw;
    min-width: 50px;
    height: 5vw;
    min-height: 50px;
    z-index: 1;
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

  .icon {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .shine {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .shine::after {
    position: absolute;
    box-sizing: border-box;
    content: '';
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    animation: ray_border 0.4s ease-out;
  }

  @keyframes ray_border {
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
    background-color: var(--color);
    border-radius: 50%;
  }

  .shine span:nth-child(even) {
    height: calc(30px * var(--size));
    animation: ray_even 0.75s ease;
  }

  .shine span:nth-child(odd) {
    height: calc(15px * var(--size));
    animation: ray_odd 0.75s ease;
  }

  @keyframes ray_even {
    0% {
      opacity: 1;
      transform: rotate(calc(22.5deg * var(--i))) translateY(0px);
    }

    60% {
      opacity: 0.8;
      height: calc(30px * var(--size));
    }

    100% {
      transform: rotate(calc(22.5deg * var(--i))) translateY(calc(120px * var(--size)));
      opacity: 0;
      height: calc(10px * var(--size));
    }
  }

  @keyframes ray_odd {
    0% {
      opacity: 1;
      transform: rotate(calc(22.5deg * var(--i))) translateY(0px);
    }

    60% {
      opacity: 1;
      height: calc(15px * var(--size));
    }

    100% {
      transform: rotate(calc(22.5deg * var(--i))) translateY(calc(125px * var(--size)));
      opacity: 0;
      height: calc(10px * var(--size));
    }
  }
}
</style>
