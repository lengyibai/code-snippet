<script setup>
  import GridLetter from './Components/GridLetter/demo/index.vue'
</script>

# GridLetter

<ContainerBox title="介绍" noGap>
<template #desc>

利用了`grid`布局的`gridTemplateAreas`父属性，实现字母模板布局

推荐使用 [Grid 布局生成器](https://cssgrid-generator.netlify.app) 辅助布局，确定每个盒子的占用格数
</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>
数字模板：虽然可读性不强，但它直接修改的子元素属性，能触发子元素动画

字母模板：虽然看着更直观、可读性强，但字母模板属于父元素属性，修改布局并不会触发子元素的响应式动画

推荐：当布局定死不会改变或不需要动画时，可以考虑使用字母模板

试着缩小浏览器宽度查看效果
</template>

<div class="demo-box">
<GridLetter />
</div>

  <CodeBox>
  <template #codes>

  ```vue
  <script setup lang="ts">
  import { nextTick, onBeforeMount, onMounted, ref } from "vue";

  import LibGridLetter from "../index.vue";

  interface Layout {
    [propsName: string]: string;
  }

  /** 代表7个盒子，字母代表盒子的id */
  const box = ref("abcdefg");
  /** 用于存储当前的布局 */
  const layout = ref("");

  const layouts: Layout = {
    0: `
      'a a a a'
      'b b c c'
      'd d e e'
      'f f f f'
      'g g g g'
    `,
    500: `
      'a d d'
      'a g f'
      'b b e'
      'c c c'
    `,
    800: `
      'a b f f'
      'a b f f'
      'c b g e'
      'd d d e'
    `,
    1200: `
      'a a b c'
      'd e b g'
      'd f f f'
    `,
  };

  const changeArea = () => {
    //循环布局数组的 key，当大于 key 则使用该 key 布局
    Object.keys(layouts).forEach((item) => {
      if (document.documentElement.clientWidth > Number(item)) {
        layout.value = layouts[item];
      }
    });
  };

  onMounted(() => {
    nextTick(() => {
      changeArea();
    });
    window.addEventListener("resize", changeArea);
  });

  onBeforeMount(() => {
    window.removeEventListener("resize", changeArea);
  });
  </script>

  <template>
    <div class="grid" :style="{ gridTemplateAreas: layout }">
      <LibGridLetter v-for="(item, index) in box" :key="index" class="lib-grid-letter" :area="item">
        {{ item }}
      </LibGridLetter>
    </div>
  </template>

  <style scoped>
  .grid {
    display: grid;
    width: 100%;
    grid-gap: 5px;
  }

  .lib-grid-letter {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    font-size: 6vw;
  }
  </style>
  ```
  </template>
  </CodeBox>
</ContainerBox>

## 组件源码

<ContainerBox>
  <CodeBox>
  <template #codes>

  ```vue
  <script setup lang="ts">
  interface Props {
    area: string;
  }

  withDefaults(defineProps<Props>(), {
    area: "",
  });
  </script>

  <template>
    <div class="lib-grid-letter" :style="{ gridArea: area }">
      <slot></slot>
    </div>
  </template>

  <style scoped>
  .lib-grid-letter {
    width: 100%;
    height: 100%;
  }
  </style>
  ```
  </template>
  </CodeBox>
</ContainerBox>