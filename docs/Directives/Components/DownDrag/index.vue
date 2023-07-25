<template>
  <div class="DownDrag" v-downDrag>
    这里可以拖动
    <div class="content" @mousedown.stop>这个区域拖动不了</div>
  </div>
</template>
<style scoped>
.DownDrag {
  position: absolute;
  width: 25vw;
  height: 25vw;
  background-color: #1a1a1a;
  font-size: 2vw;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  z-index: 999;
  user-select: none;
  box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;
}
.content {
  width: 100%;
  height: calc(100% - 50px);
  background-color: #555;
  cursor: initial;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
