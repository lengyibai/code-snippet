<template>
  <div class="demo halation"></div>
</template>

<style scoped>
.demo {
  width: 100%;
  height: 75vh;
  background: url("./img/bg.jpg") no-repeat center;
  background-size: cover;
}

.halation {
  -webkit-mask: radial-gradient(#000 0%, transparent 75%);
}
</style>
