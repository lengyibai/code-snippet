<template>
  <div class="demo" ref="demo">
    <div class="container">
      <div class="a" ref="a">HTML+CSS</div>
      <div class="b" ref="b">JavaScript</div>
      <div class="c" ref="c">Vue</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ScrollFollow from './ScrollFollow.js';

const a = ref();
const b = ref();
const c = ref();
const demo = ref();

onMounted(() => {
  const scrollFollow = new ScrollFollow(demo.value, { unit: '%' });

  scrollFollow.setOptions({
    el: a.value,
    intoY: 0,
    endY: 500,
    intoStyle: {
      right: -100,
    },
    endStyle: {
      right: 50,
    },
  });
  scrollFollow.setOptions({
    el: b.value,
    intoY: 0,
    endY: 500,
    intoStyle: {
      left: -100,
    },
    endStyle: {
      left: 50,
    },
  });
  scrollFollow.setOptions({
    el: c.value,
    intoY: 0,
    endY: 500,
    intoStyle: {
      scale: 0,
    },
    endStyle: {
      scale: 1,
    },
  });
});
</script>
<style scoped lang="less">
.demo {
  position: relative;
  width: 100%;
  height: 75vh;
  overflow: auto;
  overscroll-behavior: contain;
  color: #fff;
  overflow-x: hidden;
  .container {
    width: 100%;
    height: 250vh;
    background-color: #1a1a1a;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      position: absolute;
      top: 32.5vh;
    }
    .a,
    .b,
    .c {
      position: absolute;
      font-size: 5vw;
    }
    .a {
      right: 0;
      top: 100vh;
    }
    .b {
      left: 0;
      top: 150vh;
    }
    .c {
      top: 205vh;
    }
  }
}
</style>
