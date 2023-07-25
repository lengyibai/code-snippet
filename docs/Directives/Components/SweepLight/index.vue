<template>
  <div class="SweepLight" v-sweepLight="{ auto: false }"></div>
</template>
<style scoped>
.SweepLight {
  width: 25vw;
  height: 25vw;
  overflow: hidden;
  background: url("https://lengyibai.gitee.io/img-bed/lib.png") no-repeat center
    center;
  background-size: cover;
  clip-path: circle(50% at 50% 50%);
}
</style>
