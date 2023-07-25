<template>
  <div class="WaveDiffuse" v-waveDiffuse="'rgba(100,100,100,0.5)'">Hello</div>
</template>
<style scoped lang="less">
.WaveDiffuse {
  position: relative; //必须加定位
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 75px;
  font-size: 25px;
  cursor: pointer;
  user-select: none;
}
</style>
