<script setup>
  import Parabolic from './Components/Parabolic/index.vue'
</script>

# Parabolic

<ContainerBox title="介绍">
<template #desc>
可用于点击加入购物车后将商品抛入购物车
</template>
</ContainerBox>

<ContainerBox title="下载所需文件">

<template #desc>

[Parabolic.zip](https://gitee.com/lengyibai/lib3-component-packages/raw/master/utils/Parabolic.zip)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>

只能通过固定定位来实现内部的坐标计算，具体参考`demo`源码

代码内使用了自定义指令 [v-downDrag](/Directives/DownDrag.html)
</template>

<div class="demoBox">
<Parabolic />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo" ref="parent">
    <div class="run" @click="run">篮球和鸡</div>
    <img class="move" ref="move" src="./img/ball.png" />
    <div class="middle" ref="middle" v-downDrag>拖拽设置顶点</div>
    <img class="right" ref="right" src="./img/cock.png" />
  </div>
</template>
<script>
import Parabolic from './Parabolic.js';
export default {
  data() {
    return { parabolic: null };
  },
  mounted() {
    const move = this.$refs.move;
    const middle = this.$refs.middle;
    const right = this.$refs.right;
    this.parabolic = new Parabolic(move, middle, right, 20);
  },
  methods: {
    run(e) {
      this.parabolic
        .run(e)
        .then(() => {
          this.$refs.right.style.transition = `all 0.25s`;
          this.$refs.right.style.transform = 'rotate(360deg)';
          setTimeout(() => {
            this.$refs.right.style.transition = `all 0s`;
            this.$refs.right.style.transform = 'rotate(0deg)';
          }, 250);
          console.log('结束');
        })
        .catch(() => {
          console.warn('未结束');
        });
    },
  },
  directives: {
    /* 此处使用了拖拽的自定义指令，右上角自定义指令库内自取 */
    downDrag: {
      mounted(el) {
        el.style.cursor = 'move';
        let x = 0,
          y = 0,
          startX = 0,
          startY = 0,
          moveX = 0,
          moveY = 0;
        el.addEventListener('mousedown', (e) => {
          e.stopPropagation();
          x = e.pageX;
          y = e.pageY;
          startX = el.offsetLeft;
          startY = el.offsetTop;
          window.addEventListener('mousemove', fn);
          function fn(e) {
            requestAnimationFrame(function () {
              moveX = e.pageX - x;
              moveY = e.pageY - y;
              el.style.left = `${moveX + startX}px`;
              el.style.top = `${moveY + startY}px`;
            });
          }
          window.addEventListener('mouseup', () => {
            window.removeEventListener('mousemove', fn);
          });
        });
      },
    },
  },
};
</script>
<style scoped lang="less">
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.demo {
  width: 100%;
  color: #fff;
  .run {
    .flex();
    background-color: #ff0036;
    width: 178px;
    height: 38px;
    cursor: pointer;
  }
  .point {
    position: fixed;
    width: 100px;
    height: 100px;
  }
  .move {
    .point();
    display: none;
    top: 0;
    z-index: 1;
  }

  .middle {
    .point();
    .flex();
    right: 300px;
    bottom: 400px;
    background-color: red;
    border-radius: 50%;
  }

  .right {
    .point();
    right: 40px;
    bottom: 150px;
    transition: all 0.25s;
  }
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="new Parabolic(move, middle, right)">

<template #desc>

| 参数   | 说明           | 类型    |
| ------ | -------------- | ------- |
| move   | 被抛元素       | Element |
| middle | 顶点元素       | Element |
| right  | 终点元素       | Element |
| speed  | 速度，默认`20` | Number  |

</template>
</ContainerBox>

<ContainerBox title="run(e)">

<template #desc>

| 参数 | 说明                 | 类型  |
| ---- | -------------------- | ----- |
| e    | 被点击元素的事件对象 | Event |

</template>
</ContainerBox>
