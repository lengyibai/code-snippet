<template>
  <LibParallax class="LibParallax" :follow="false" :reverse="true" unit="vw">
    <!-- 树林背景 -->
    <img id="parallax-item" _x="2.6042" _blur="4" _initBlur="2" src="./img/demo-d/bg.png" />

    <!-- 22娘 -->
    <img id="parallax-item" _x="5.2083" _blur="6" src="./img/demo-d/girl1.png" />

    <!-- 秋 -->
    <h1 id="parallax-item" _x="6.5104" _blur="4" _initBlur="2">秋</h1>

    <!-- 小土丘 -->
    <img id="parallax-item" _x="10.4167" _blur="4" _initBlur="2" src="./img/demo-d/grassland.png" />

    <!-- 蘑菇松果 -->
    <img id="parallax-item" _x="15.625" _blur="4" _initBlur="4" src="./img/demo-d/mushroom.png" />

    <!-- 枯叶 -->
    <img id="parallax-item" _x="23.4375" _blur="2" _initBlur="6" src="./img/demo-d/leaf.png" />

    <!-- 33娘 -->
    <img id="parallax-item" _x="28.6458" _blur="0" _initBlur="8" src="./img/demo-d/spirit.png" />
  </LibParallax>
</template>
<script setup lang="ts">
import LibParallax from '../index.vue';
</script>
<style scoped lang="less">
.LibParallax {
  position: relative;
  width: 100vw;
  height: 11.7vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  h1 {
    color: #fff;
    font-size: 7vw;
    font-weight: bold;
    transform: rotateX();
  }
  img {
    position: absolute;
    height: 100%;
  }
}
</style>
