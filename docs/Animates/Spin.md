<script setup>
  import Spin from './Components/Spin/index.vue'
</script>

# 旋

<ContainerBox title="基础用法">

<template #desc>
类似电影开场镜头，圆形效果更好
</template>

<div class="demo-box">
<Spin />
</div>

<CodeBox>
<template #codes>

```vue
<script setup lang="ts">
import { onMounted, ref } from "vue";

const show = ref(false);
const box_show = ref(false);

onMounted(() => {
  show.value = true;
  setTimeout(() => {
    box_show.value = true;
  }, 1000);

  setInterval(() => {
    show.value = !show.value;
    setTimeout(() => {
      box_show.value = !box_show.value;
    }, 1000);
  }, 2000);
});
</script>

<template>
  <div class="demo">
    <transition name="spin">
      <div v-show="show" class="Spin">
        <transition name="fade">
          <div v-show="box_show" class="box">
            <h1>Hello World!</h1>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

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

  .Spin {
    .flex();

    width: 100%;
    height: 100%;
    background-color: var(--aniamte-demo-bg-color);

    .box {
      .flex();

      h1 {
        color: #fff;
        font-size: 5vw;
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

.spin-enter-active {
  animation: spin-in 1s linear;
}

.spin-leave-active {
  animation: spin-out 1s linear;
}

@keyframes spin-in {
  0% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0, 0 0, 50% 50%);
  }

  25% {
    clip-path: polygon(0 0, 100% 0, 100% 0, 100% 0, 100% 0, 50% 50%);
  }

  50% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%, 50% 50%);
  }

  75% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 50% 50%);
  }

  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 50% 50%);
  }
}

@keyframes spin-out {
  0% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 50% 50%);
  }

  25% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 50% 50%);
  }

  50% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%, 50% 50%);
  }

  75% {
    clip-path: polygon(0 0, 100% 0, 100% 0, 100% 0, 100% 0, 50% 50%);
  }

  100% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0, 0 0, 50% 50%);
  }
}
</style>
```

</template>
</CodeBox>

<CodeBox iskey>
<template #codes>

```css
.spin-enter-active {
  animation: spin-in 1s linear;
}
.spin-leave-active {
  animation: spin-out 1s linear;
}
@keyframes spin-in {
  0% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0, 0 0, 50% 50%);
  }
  25% {
    clip-path: polygon(0 0, 100% 0, 100% 0, 100% 0, 100% 0, 50% 50%);
  }
  50% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%, 50% 50%);
  }
  75% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 50% 50%);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 50% 50%);
  }
}
@keyframes spin-out {
  0% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 50% 50%);
  }
  25% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 50% 50%);
  }
  50% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%, 50% 50%);
  }
  75% {
    clip-path: polygon(0 0, 100% 0, 100% 0, 100% 0, 100% 0, 50% 50%);
  }
  100% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0, 0 0, 50% 50%);
  }
}
```

</template>
</CodeBox>
</ContainerBox>
