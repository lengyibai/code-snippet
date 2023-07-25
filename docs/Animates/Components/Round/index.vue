<template>
  <div class="demo">
    <transition name="round">
      <div class="Round" v-show="show">
        <transition name="fade">
          <div class="box" v-show="box_show">
            <h1>Hello World!</h1>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

const show = ref(false);
const box_show = ref(false);

onMounted(() => {
  show.value = true;
  setTimeout(() => {
    box_show.value = true;
  }, 500);

  setInterval(() => {
    show.value = !show.value;
    setTimeout(() => {
      box_show.value = !box_show.value;
    }, 500);
  }, 2000);
});
</script>
<style scoped lang="less">
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.demo {
  position: relative;
  width: 100%;
  height: 50vh;
  .Round {
    .flex();
    width: 100%;
    height: 100%;
    background-color: var(--contrast1-color);
    .box {
      .flex();
      h1 {
        font-size: 5vw;
        color: var(--contrast2-color);
      }
    }
  }
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
.fade-leave-active,
.fade-enter-active {
  transition: all 0.5s;
}

.round-enter-active {
  animation: round-in 1s;
}
.round-leave-active {
  animation: round-out 1s;
}
@keyframes round-in {
  0% {
    clip-path: circle(0% at 50% 50%);
  }

  100% {
    clip-path: circle(100% at 50% 50%);
  }
}
@keyframes round-out {
  0% {
    clip-path: circle(100% at 50% 50%);
  }
  100% {
    clip-path: circle(0% at 50% 50%);
  }
}
</style>
