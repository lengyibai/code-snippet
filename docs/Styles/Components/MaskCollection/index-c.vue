<template>
  <div class="demo edge"></div>
</template>
<style scoped>
.demo {
  width: 100%;
  height: 75vh;
  background: url("https://lengyibai.gitee.io/img-bed/bg.jpg") no-repeat center;
  background-size: cover;
}

.edge {
  -webkit-mask: linear-gradient(135deg, transparent 50px, #fff 0) top left,
    linear-gradient(-135deg, transparent 50px, #fff 0) top right,
    linear-gradient(-45deg, transparent 50px, #fff 0) bottom right,
    linear-gradient(45deg, transparent 50px, #fff 0) bottom left;
  -webkit-mask-size: 50% 50%;
  -webkit-mask-repeat: no-repeat;
}
</style>
