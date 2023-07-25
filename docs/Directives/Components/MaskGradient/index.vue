<template>
  <div
    class="MaskGradient"
    v-maskGradient="{
      color: 'rgba(40, 100, 195, 0.5)',
      num1: '0%',
      num2: '50%',
    }"
  >
    <img src="./preview.png" alt="" />
  </div>
</template>
<style scoped>
.MaskGradient {
  position: relative;
  width: 100%;
  height: 50vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2.5vw;
}
img {
  width: 75%;
  z-index: 1;
}
</style>
