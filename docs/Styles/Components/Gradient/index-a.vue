<template>
  <div class="demo">
    <div class="text text-gradient">
      渐进式
      <br />
      JavaScript 框架
    </div>
  </div>
</template>

<style scoped>
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25vw;
}

.text {
  width: 100%;
  height: fit-content;
  font-size: 5vw;
  font-family: Arial;
  font-weight: bold;
  text-align: center;
  line-height: 5vw;
}

.text-gradient {
  color: transparent;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  -webkit-background-clip: text;
}
</style>
