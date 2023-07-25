<template>
  <LibParallax class="LibParallax" unit="vw">
    <div class="box1" id="parallax-item" _x="10" _y="5" _blur="10"></div>
    <div class="box2" id="parallax-item" _x="20" _y="10" _blur="10"></div>
    <div class="box3" id="parallax-item" _x="30" _y="15" _blur="10"></div>
    <div class="box4" id="parallax-item" _x="40" _y="20" _blur="10"></div>
  </LibParallax>
</template>
<script setup lang="ts">
import LibParallax from '../index.vue';
</script>
<style scoped lang="less">
.LibParallax {
  position: relative;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .box1 {
    position: absolute;
    width: 2.5vw;
    height: 2.5vw;
    background-color: rgba(231, 77, 60, 0.5);
  }
  .box2 {
    position: absolute;
    width: 5vw;
    height: 5vw;
    background-color: rgba(46, 204, 112, 0.5);
  }
  .box3 {
    position: absolute;
    width: 7.5vw;
    height: 7.5vw;
    background-color: rgba(52, 152, 219, 0.5);
  }
  .box4 {
    position: absolute;
    width: 10vw;
    height: 10vw;
    background-color: rgba(156, 89, 182, 0.5);
  }
}
</style>
