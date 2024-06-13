<template>
  <div class="demo">
    <div class="vignet"></div>
  </div>
</template>

<style scoped>
.demo {
  position: relative;
  width: 100%;
  height: 75vh;
  background: url("./img/bg.jpg") no-repeat center;
  background-size: cover;
}

.vignet {
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  background-color: #000;
  -webkit-mask: radial-gradient(transparent 0%, #000 75%);
}
</style>
