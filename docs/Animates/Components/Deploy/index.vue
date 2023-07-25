<template>
  <div class="demo">
    <transition name="deploy">
      <div class="Deploy" v-show="show">
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
  }, 1500);

  setInterval(() => {
    show.value = !show.value;
    setTimeout(() => {
      box_show.value = !box_show.value;
    }, 1500);
  }, 3000);
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
  .Deploy {
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

.deploy-enter-active {
  animation: deploy-in 1.5s;
}

.deploy-leave-active {
  animation: deploy-out 1.5s;
}

@keyframes deploy-in {
  0% {
    clip-path: polygon(50% 50%, 100% 100%, 50% 50%, 100% 0, 50% 50%, 0 0, 50% 50%, 0 100%);
  }
  33% {
    clip-path: polygon(50% 0, 100% 100%, 0 50%, 100% 0, 50% 100%, 0 0, 100% 50%, 0 100%);
  }
  66% {
    clip-path: polygon(50% 0, 100% 100%, 0 50%, 0 100%, 50% 100%, 0 0, 100% 50%, 100% 0);
  }
  100% {
    clip-path: polygon(50% 0, 0 0, 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0);
  }
}

@keyframes deploy-out {
  0% {
    clip-path: polygon(50% 0, 0 0, 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0);
  }
  33% {
    clip-path: polygon(50% 0, 100% 100%, 0 50%, 0 100%, 50% 100%, 0 0, 100% 50%, 100% 0);
  }
  66% {
    clip-path: polygon(50% 0, 100% 100%, 0 50%, 100% 0, 50% 100%, 0 0, 100% 50%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 100% 100%, 50% 50%, 100% 0, 50% 50%, 0 0, 50% 50%, 0 100%);
  }
}
</style>
