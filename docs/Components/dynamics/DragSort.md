<script setup>
  import DragSortA from './Components/DragSort/demo/index-a.vue'
  import DragSortB from './Components/DragSort/demo/index-b.vue'
</script>

# DragSort

<ContainerBox title="介绍">
<template #desc>
基于原生拖拽事件实现的拖拽排序
</template>
</ContainerBox>

<ContainerBox title="下载并引入">

<template #desc>

[下载组件包及当前组件的所有案例](https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/dynamic/LibDragSort.zip)

引入参考 [引入组件](/Components/base/start.html)
</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>

当存在图片时，图片会接替拖拽事件，需要给图片设置禁止拖拽`@dragstart.prevent`，拖拽的才是元素
</template>

<div class="demoBox">
<DragSortA />
</div>

::: warning
此处代码比较特殊，使用到了动态切换组件，需要手动引入组件进行切换

实际在使用组件的时候，已经自动化全局注册了，如果再手动引入就会报错

所以此处的代码仅供参考，但可以下载已经处理过的`demo`包进行预览
:::
<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <component
      :is="toggle ? comps[0] : comps[1]"
      :data="imgs"
      @sort-data="sort"
      id="name"
    >
      <template v-slot="{ item }">
        <div class="box">
          <img :src="item.src" alt="" />
        </div>
      </template>
    </component>
    <h1>{{ arr || ["A", "B", "C", "D", "E"] }}</h1>
    <button @click="toggle = !toggle">
      当前组件：{{ toggle ? "LibDragSortDown" : "LibDragSortMove" }}，点击切换
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import LibDragSortDown from "../DragSortDown/index.vue";
import LibDragSortMove from "../DragSortMove/index.vue";
const comps = [LibDragSortDown, LibDragSortMove];

const getImg = (src: string) => new URL(src, import.meta.url).href;

const arr = ref<string[]>([]);
const toggle = ref(false);
const imgs = [
  {
    name: "A",
    src: getImg("./img/a.png"),
  },
  {
    name: "B",
    src: getImg("./img/b.png"),
  },
  {
    name: "C",
    src: getImg("./img/c.png"),
  },
  {
    name: "D",
    src: getImg("./img/d.png"),
  },
  {
    name: "E",
    src: getImg("./img/e.png"),
  },
];

const sort = (data = imgs) => {
  arr.value = data.map((item) => {
    return item.name;
  });
};

sort();
</script>
<style scoped lang="less">
.demo {
  width: 100%;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 3vw;
    text-align: center;
    margin-bottom: 0 !important;
  }
  .box {
    width: 10vw;
    height: 10vw;
    margin: 0.5vw;
    img {
      width: 100%;
      height: 100%;
      filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 2px 4px);
    }
  }
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="区域拖拽">
<div class="demoBox">
<DragSortB />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <component
      :is="toggle ? comps[0] : comps[1]"
      :data="boxs"
      @sort-data="sort"
      id="name"
    >
      <template v-slot="{ item }">
        <div class="box" :draggable="draggable" @dragend="draggable = false">
          <svg
            class="icon"
            src="./img/icon.svg"
            @mousedown="draggable = true"
            @mouseup="draggable = false"
            t="1661959286791"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="886"
          >
            <path
              d="M128 234.666667A64 64 0 0 1 192 170.666667h640a64 64 0 0 1 0 128h-640A64 64 0 0 1 128 234.666667zM128 512a64 64 0 0 1 64-64h640a64 64 0 0 1 0 128h-640A64 64 0 0 1 128 512z m64 213.333333a64 64 0 0 0 0 128h640a64 64 0 0 0 0-128h-640z"
              p-id="887"
              fill="#ffffff"
            ></path>
          </svg>
          <span>{{ item.name }}</span>
        </div>
      </template>
    </component>
    <h1>{{ arr || ["A", "B", "C", "D", "E"] }}</h1>
    <button @click="toggle = !toggle">
      当前组件：{{ toggle ? "LibDragSortDown" : "LibDragSortMove" }}，点击切换
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import LibDragSortDown from "../DragSortDown/index.vue";
import LibDragSortMove from "../DragSortMove/index.vue";
const comps = [LibDragSortDown, LibDragSortMove];

const arr = ref<string[]>([]);
const draggable = ref(false);
const toggle = ref(false);
const boxs = [
  {
    name: "A",
  },
  {
    name: "B",
  },
  {
    name: "C",
  },
  {
    name: "D",
  },
  {
    name: "E",
  },
];

const sort = (data = boxs) => {
  arr.value = data.map((item) => {
    return item.name;
  });
};

sort();
</script>
<style scoped lang="less">
.demo {
  width: 100%;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 3vw;
    text-align: center;
    margin-bottom: 0 !important;
  }
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 10vw;
    height: 10vw;
    margin: 0.5vw;
    background-color: #000;
    .icon {
      width: 1vw;
      height: 1vw;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-50%, 50%);
      cursor: move;
    }
    span {
      color: #fff;
      font-size: 2vw;
    }
  }
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">

<template #desc>

| 参数 | 说明                                   | 类型   | 默认值 |
| ---- | -------------------------------------- | ------ | ------ |
| data | 要拖拽排序的数组                       | Array  | -      |
| key  | 数组元素唯一值的键名，如`id`或者`name` | String | id     |

</template>
</ContainerBox>

<ContainerBox title="Events">

<template #desc>

| 事件名    | 说明         | 回调参数   |
| --------- | ------------ | ---------- |
| sort-data | 拖拽排序触发 | 排好的数组 |

</template>
</ContainerBox>

<ContainerBox title="Slots">

<template #desc>

| 名称  | 说明       | 参数 |
| ----- | ---------- | ---- |
| item  | 数组元素   | -    |
| index | 数组索引号 | -    |

</template>
</ContainerBox>
