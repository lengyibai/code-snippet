<template>
  <div class="demo">
    <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/528/528-mobileskin-1.jpg" alt="" />
    <img class="splice" src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/184/184-mobileskin-1.jpg" alt="" />
  </div>
</template>
<style scoped lang="less">
.demo {
  position: relative;
  width: 100%;
  height: 75vh;
  overflow: hidden;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.splice {
  -webkit-mask: linear-gradient(45deg, #000 45%, transparent 55%);
}
</style>
