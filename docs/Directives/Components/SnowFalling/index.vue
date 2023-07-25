<template>
  <div class="SnowFalling" v-snowFalling></div>
</template>
<style scoped lang="less">
.SnowFalling {
  position: relative;
  width: 100%;
  height: 75vh;
  background-size: cover;
  background: url(./bg.png) no-repeat center center;
  overflow: hidden;
}
</style>

<style>
/* 必加全局CSS */
@keyframes LibSnowFalling {
  100% {
    transform: translateX(var(--LibSnowFalling-left)) translateY(calc(100vh + 10px));
  }
}
</style>
