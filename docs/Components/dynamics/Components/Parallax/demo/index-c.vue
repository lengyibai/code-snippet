<template>
  <LibParallax class="LibParallax" unit="vw" :outinit="false">
    <!-- 背景 -->
    <img class="background" id="parallax-item" _x="2" _y="2" src="./img/demo-c/background.png" alt="" />

    <!-- 海王星 -->
    <img class="neptune" id="parallax-item" _x="3" _y="3" src="./img/demo-c/neptune.png" alt="" />

    <!-- 木星 -->
    <img class="jupiter" id="parallax-item" _x="4" _y="4" src="./img/demo-c/jupiter.png" alt="" />

    <!-- 土星 -->
    <img class="saturn" id="parallax-item" _x="6" _y="6" src="./img/demo-c/saturn.png" alt="" />

    <!-- 陨石 -->
    <img class="rock" id="parallax-item" _x="7" _y="7" src="./img/demo-c/rock.png" alt="" />

    <!-- 地球 -->
    <img class="earth" id="parallax-item" _x="10" _y="10" src="./img/demo-c/earth.png" alt="" />

    <!-- 地面 -->
    <img class="mid" id="parallax-item" _x="5" _y="5" src="./img/demo-c/mid.png" alt="" />

    <!-- 地面 -->
    <img class="foreground" id="parallax-item" _x="8" _y="8" src="./img/demo-c/foreground.png" alt="" />
  </LibParallax>
</template>
<script setup lang="ts">
import LibParallax from '../index.vue';
</script>
<style scoped lang="less">
.LibParallax {
  position: relative;
  width: 100vw;
  height: 34vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .background {
    position: absolute;
    width: 110%;
    height: 110%;
    object-fit: cover;
  }
  .neptune {
    position: absolute;
    right: 25%;
    top: 15%;
    width: 8vw;
  }
  .jupiter {
    position: absolute;
    right: 5%;
    top: 10%;
    width: 10vw;
  }
  .saturn {
    position: absolute;
    left: 35%;
    top: 25%;
    width: 5vw;
  }
  .rock {
    position: absolute;
    left: 5%;
    top: 10%;
    width: 5vw;
  }
  .earth {
    position: absolute;
    width: 15vw;
  }
  .mid {
    position: absolute;
    width: 130%;
    bottom: -150px;
  }
  .foreground {
    position: absolute;
    height: 110%;
    top: 0;
    right: -200px;
  }
}
</style>
