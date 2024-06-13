<template>
  <div class="ellipsis">
    <div class="one-line">测试测试测试测试</div>
    <hr />
    <div class="two-line">测试测试测试测试测试测试测试</div>
    <hr />
    <div class="three-line">测试测试测试测试测试测试测试测试测试测试</div>
  </div>
</template>

<style scoped lang="less">
.ellipsis {
  position: relative;

  div {
    // display: flex; //注：flex布局会使其失效
    width: 20vw;
    font-size: 3vw;
  }
}

.one-line {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
}

.two-line,
.three-line {
  display: -webkit-box;
  overflow: hidden;
  word-break: break-all;
  -webkit-box-orient: vertical;
}

.two-line {
  -webkit-line-clamp: 2;
}

.three-line {
  -webkit-line-clamp: 3;
}
</style>
