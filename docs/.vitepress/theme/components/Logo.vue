<template>
  <div class="Logo">
    <div class="lib" v-sweepLight="{ time: 3 }">
      <img src="https://lengyibai.gitee.io/img-bed/lib.png" alt="加载失败" />
    </div>
    <div class="name">Lib</div>
    <div class="desc">轻量、PC端 Vue 自用组件库</div>
  </div>
</template>
<style scoped lang="less">
.Logo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 100%;
  background-color: var(--cb-bg);
  box-shadow: 0 8px 12px var(--cb-shadow);
  border-radius: 20px;
  margin-bottom: 24px;
  padding: 24px;
  .lib {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 25px;
    overflow: hidden;
    clip-path: circle(50% at 50% 50%);
    img {
      width: 100%;
    }
  }
  .name {
    font-size: 36px;
    margin-bottom: 15px;
  }
}
</style>
