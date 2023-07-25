<script setup>
</script>

# Waterfall

<ContainerBox title="介绍">
<template #desc>
参考网上瀑布流基础代码进行拓展
</template>
</ContainerBox>

<ContainerBox title="下载并引入">

<template #desc>

[下载组件包及当前组件的所有案例](https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/dynamic/LibWaterfall.zip)

引入参考 [引入组件](/Components/base/start.html)
</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">

点击访问[瀑布流布局](https://lyb.cbb.plus/demo/waterfall/index.html)

</div>

<ShowCode>
<template #codes>

```vue
<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";

import imgs from "./index";

const libWaterfall = ref();
const page = ref(0); // 当前页数
const total = ref(0); // 总数
const total_page = ref(0); // 总页数
const limit = ref(30); //一页个数
const data = ref<string[]>([]); //当前展示数据
const count = ref(2); //一行个数
const loading = ref(false); //是否处于加载中

const loadMore = () => {
  return new Promise<void>((resolve) => {
    if (page.value > total_page.value) {
      alert("加载完毕");
      setTimeout(() => {
        resolve();
      }, 250);
      return;
    }
    if (page.value === 0) {
      total.value = imgs.length;
      total_page.value = Math.ceil(total.value / limit.value);
    }

    const start = page.value * limit.value;
    const end = start + limit.value;
    const newData = imgs.slice(start, end);
    data.value = data.value.concat(newData);
    page.value += 1;

    if (page.value > total_page.value) {
      setTimeout(() => {
        isLoadEnd.value = true;
      }, 250);
    }

    nextTick(() => {
      libWaterfall.value.updateLoad();
      resolve();
    });
  });
};

const handleLoadMore = () => {
  loading.value = true;
  setTimeout(async () => {
    await loadMore();
    loading.value = false;
  }, 500);
};

const isLoadEnd = ref(false);

onMounted(() => {
  handleLoadMore();
});

const setCount = () => {
  const w = document.documentElement.clientWidth;
  if (w >= 1780) {
    count.value = 8;
  } else if (w >= 1560) {
    count.value = 7;
  } else if (w >= 1280) {
    count.value = 6;
  } else if (w >= 980) {
    count.value = 5;
  } else if (w >= 760) {
    count.value = 4;
  } else if (w >= 640) {
    count.value = 3;
  } else if (w < 640) {
    count.value = 2;
  }
  nextTick(() => {
    setTimeout(() => {
      libWaterfall.value?.updateLoad();
    }, 1100);
  });
};

window.addEventListener("resize", () => {
  setCount();
});

onMounted(() => {
  setCount();
});
</script>

<template>
  <div class="goods-list">
    <LibWaterfall ref="libWaterfall" :count="count" @load-more="handleLoadMore">
      <div v-for="(item, index) in data" :key="index" class="goods-card goods">
        <img :src="item" alt="" />
      </div>
    </LibWaterfall>
  </div>
  <div class="loading" :class="{ hide: !loading }">加载中...</div>
</template>

<style scoped lang="less">
.goods-list {
  position: relative;
  overflow: auto;
  width: 100%;
  height: 100%;
  padding: 10px;
  padding-top: 0;
  background-color: var(--theme-color-seven);
  flex: 1;

  .goods-card {
    position: absolute;
    transition: all 0.75s;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .goods {
    min-width: 150px;

    @media screen and (min-width: 1780px) {
      width: calc(12.5% - 9px);
    }

    @media screen and (max-width: 1780px) {
      width: calc(14.28% - 8px);
    }

    @media screen and (max-width: 1560px) {
      width: calc(16.66% - 8px);
    }

    @media screen and (max-width: 1280px) {
      width: calc(20% - 8px);
    }

    @media screen and (max-width: 980px) {
      width: calc(25% - 7px);
    }

    @media screen and (max-width: 760px) {
      width: calc(33.33% - 6px);
    }

    @media screen and (max-width: 640px) {
      width: calc(50% - 3px);
    }
  }
}

.loading {
  position: fixed;
  bottom: 0;
  z-index: 99;
  width: 100%;
  height: 300px;
  color: #fff;
  font-size: 50px;
  text-align: center;
  transition: all 0.25s;
  line-height: 400px;
  background-image: linear-gradient(0deg, #000 0%, transparent 100%);

  &.hide {
    opacity: 0;
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

| 参数       | 说明                                                                                                                                                                                                                                                                        | 类型    | 默认值 |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------ |
| count      | 列数                                                                                                                                                                                                                                                                        | Number  | 2      |
| gap        | 间隔                                                                                                                                                                                                                                                                        | Number  | 10     |
| loadHeight | 距离底部多少像素触发加载更多，可用于预加载<br />注：当触发加载更多后会锁定，锁定后无法触发加载更多，需要距离底部`>loadHeight`才会解锁，所以填的上限取决于加载元素后增加的高度，如果增加的高度低于`loadHeight`，那将无法触发加载更多，遇到这种情况时，请减少`loadHeight`的值 | Number  | 0      |
| loading    | v-model:loading="loading"，当滚动到最底部（距离底部为 0）时为`true`，此时可以显示自己的`loading`组件<br />注：组件只负责给你显示，当加载完毕后，你需要手动设置为`false`进行隐藏                                                                                             | Boolean | false  |

</template>
</ContainerBox>

<ContainerBox title="Methods">

<template #desc>

| 参数         | 说明                                                                                                                                                       |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| updateLoad   | 当加载图片后，调用此方法用于更新图片高度                                                                                                                   |
| updateChilds | (备用)，如果你的数据是动态的，数据变化会影响容器高度，可调用此方法用于更新高度，可在出现问题后调用，因为`updateLoad`图片加载完毕后代码内部默认调用了此方法 |

</template>
</ContainerBox>
