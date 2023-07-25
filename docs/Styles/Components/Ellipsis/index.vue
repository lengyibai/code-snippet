<template>
  <div class="Ellipsis">
    <div class="one-line">测试测试测试测试</div>
    <hr />
    <div class="two-line">测试测试测试测试测试测试测试</div>
    <hr />
    <div class="three-line">测试测试测试测试测试测试测试测试测试测试</div>
  </div>
</template>
<style scoped lang="less">
.Ellipsis {
  position: relative;
  div {
    // display: flex; //注：flex布局会使其失效
    width: 20vw;
    font-size: 3vw;
  }
}

.one-line {
  word-break: break-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.two-line,
.three-line {
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.two-line {
  -webkit-line-clamp: 2;
}

.three-line {
  -webkit-line-clamp: 3;
}
</style>
