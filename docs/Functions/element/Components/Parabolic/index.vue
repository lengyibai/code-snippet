<template>
  <div class="demo" ref="parent">
    <div class="run" @click="run">点击投掷</div>
    <img class="move" ref="move" src="./img/ball.png" />
    <div class="middle" ref="middle" v-downDrag>拖拽设置顶点</div>
    <img class="right" ref="right" src="./img/cock.png" />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Parabolic from './Parabolic.js';

const parabolic = ref<Parabolic>();
const move = ref();
const middle = ref();
const right = ref();
onMounted(() => {
  parabolic.value = new Parabolic(move.value, middle.value, right.value, 10);
});

const run = (e: Event) => {
  parabolic
    .value!.run(e)
    .then(() => {
      right.value.style.transition = `all 0.25s`;
      right.value.style.transform = 'rotate(360deg)';
      setTimeout(() => {
        right.value.style.transition = `all 0s`;
        right.value.style.transform = 'rotate(0deg)';
      }, 250);
      console.log('运动结束');
    })
    .catch(() => {
      console.warn('运动未结束');
    });
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
