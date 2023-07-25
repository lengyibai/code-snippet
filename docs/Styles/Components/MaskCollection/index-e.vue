<template>
  <div class="demo mask"></div>
</template>
<style scoped>
.demo {
  width: 100%;
  height: 75vh;
  background: url("https://lengyibai.gitee.io/img-bed/bg.jpg") no-repeat center;
  background-size: cover;
}

.mask {
  -webkit-mask-image: url("./img/mask.png");
  -webkit-mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
}
</style>
