<script setup>
  import Round from './Components/Round/index.vue'
</script>

# 圆

<ContainerBox title="基础用法">
<template #desc>
圆形开场、收场
</template>

<div class="demo-box">
<Round />
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
  }, 500);

  setInterval(() => {
    show.value = !show.value;
    setTimeout(() => {
      box_show.value = !box_show.value;
    }, 500);
  }, 2000);
});
</script>

<template>
  <div class="demo">
    <transition name="round">
      <div v-show="show" class="Round">
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

  .Round {
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
```

</template>
</CodeBox>

<CodeBox iskey>
<template #codes>

```css
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
```

</template>
</CodeBox>
</ContainerBox>
