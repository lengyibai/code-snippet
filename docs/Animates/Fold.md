<script setup>
  import Fold from './Components/Fold/index.vue'
</script>

# 折

<ContainerBox title="基础用法">
<template #desc>
折叠、展开纸张
</template>

<div class="demo-box">
<Fold />
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
  }, 750);

  setInterval(() => {
    show.value = !show.value;
    setTimeout(() => {
      box_show.value = !box_show.value;
    }, 750);
  }, 2000);
});
</script>

<template>
  <div class="demo">
    <transition name="fold">
      <div v-show="show" class="Fold">
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

  .Fold {
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

.fold-enter-active {
  animation: fold-in 0.75s;
}

.fold-leave-active {
  animation: fold-out 0.75s;
}

@keyframes fold-in {
  0% {
    clip-path: polygon(0 0, 50% 50%, 0 100%, 50% 50%, 100% 100%, 50% 50%, 100% 0, 50% 50%);
  }

  100% {
    clip-path: polygon(0 0, 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0, 50% 0);
  }
}

@keyframes fold-out {
  0% {
    clip-path: polygon(0 0, 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0, 50% 0);
  }

  100% {
    clip-path: polygon(0 0, 50% 50%, 0 100%, 50% 50%, 100% 100%, 50% 50%, 100% 0, 50% 50%);
  }
}
</style>
```

</template>
</CodeBox>

<CodeBox iskey>
<template #codes>

```css
.fold-enter-active {
  animation: fold-in 0.75s;
}

.fold-leave-active {
  animation: fold-out 0.75s;
}

@keyframes fold-in {
  0% {
    clip-path: polygon(0 0, 50% 50%, 0 100%, 50% 50%, 100% 100%, 50% 50%, 100% 0, 50% 50%);
  }
  100% {
    clip-path: polygon(0 0, 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0, 50% 0);
  }
}

@keyframes fold-out {
  0% {
    clip-path: polygon(0 0, 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0, 50% 0);
  }
  100% {
    clip-path: polygon(0 0, 50% 50%, 0 100%, 50% 50%, 100% 100%, 50% 50%, 100% 0, 50% 50%);
  }
}
```

</template>
</CodeBox>
</ContainerBox>
