<script setup>
  import TV from './Components/TV/index.vue'
</script>

# TV

<ContainerBox title="基础用法">
<template #desc>
电视打开和关闭
</template>

<div class="demo-box">
<TV />
</div>

<CodeBox>
<template #codes>

```vue
<script setup lang="ts">
import { ref, onMounted } from "vue";

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
    <transition name="tv">
      <div v-show="show" class="TV">
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

  .TV {
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

.tv-enter-active {
  animation: tv-in 1s;
}

.tv-leave-active {
  animation: tv-out 0.35s;
}

@keyframes tv-in {
  0% {
    clip-path: inset(50% 49.75% 50% 49.75%);
  }

  50% {
    clip-path: inset(0 49.75% 0 49.75%);
  }

  100% {
    clip-path: inset(0 0 0 0);
  }
}

@keyframes tv-out {
  0% {
    clip-path: inset(0 0 0 0);
  }

  80% {
    clip-path: inset(49.75% 0 49.75% 0%);
  }

  95% {
    clip-path: inset(49.75% 49.75% 49.75% 49.75%);
  }

  100% {
    clip-path: inset(50% 50% 50% 50%);
  }
}
</style>
```

</template>
</CodeBox>

<CodeBox iskey>
<template #codes>

```css
.tv-enter-active {
  animation: tv-in 1s;
}

.tv-leave-active {
  animation: tv-out 0.35s;
}

@keyframes tv-in {
  0% {
    clip-path: inset(50% 49.75% 50% 49.75%);
  }

  50% {
    clip-path: inset(0 49.75% 0 49.75%);
  }

  100% {
    clip-path: inset(0 0 0 0);
  }
}

@keyframes tv-out {
  0% {
    clip-path: inset(0 0 0 0);
  }

  80% {
    clip-path: inset(49.75% 0 49.75% 0%);
  }

  95% {
    clip-path: inset(49.75% 49.75% 49.75% 49.75%);
  }

  100% {
    clip-path: inset(50% 50% 50% 50%);
  }
}
```

</template>
</CodeBox>
</ContainerBox>
