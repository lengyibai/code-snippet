<script setup>
  import Deploy from './Components/Deploy/index.vue'
</script>

# 展

<ContainerBox title="基础用法">

<template #desc>
折叠、展开纸张
</template>

<div class="demo-box">
<Deploy />
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
  }, 1500);

  setInterval(() => {
    show.value = !show.value;
    setTimeout(() => {
      box_show.value = !box_show.value;
    }, 1500);
  }, 3000);
});
</script>

<template>
  <div class="demo">
    <transition name="deploy">
      <div v-show="show" class="Deploy">
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

  .Deploy {
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
```

</template>
</CodeBox>

<CodeBox iskey>
<template #codes>

```css
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
```

</template>
</CodeBox>
</ContainerBox>
