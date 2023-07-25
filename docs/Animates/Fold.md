<script setup>
  import Fold from './Components/Fold/index.vue'
</script>

<ContainerBox title="基础用法">

<template #desc>
折叠、展开纸张
</template>

<div class="demoBox">
<Fold />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <transition name="fold">
      <div class="Fold" v-show="show">
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
  }, 750);

  setInterval(() => {
    show.value = !show.value;
    setTimeout(() => {
      box_show.value = !box_show.value;
    }, 750);
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
  .Fold {
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
</style>
```

</template>
</ShowCode>

<ShowCode iskey>
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
</ShowCode>
</ContainerBox>
