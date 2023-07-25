<template>
  <div class="Home">
    <h2>热门组件推荐</h2>
    <a href="/doc/Components/statics/TriggerRay"
      ><h3>放射点击效果<span v-html="icon"></span></h3
    ></a>
    <a href="/doc/Components/dynamics/Parallax"
      ><h3>视差动画<span v-html="icon"></span></h3
    ></a>
    <a href="/doc/Components/dynamics/ScrollInto"
      ><h3>滚动入场动画<span v-html="icon"></span></h3
    ></a>
    <a href="/doc/Components/dynamics/Waterfall"
      ><h3>瀑布流布局<span v-html="icon"></span></h3
    ></a>

    <h2>热门指令推荐</h2>
    <a href="/doc/Directives/WaveDiffuse"
      ><h3>水波动画<span v-html="icon"></span></h3
    ></a>
    <a href="/doc/Directives/TypewriterMultiple"
      ><h3>打字机(多行)<span v-html="icon"></span></h3
    ></a>
    <a href="/doc/Directives/ViewImg"
      ><h3>查看图片<span v-html="icon"></span></h3
    ></a>

    <h2>热门函数推荐</h2>
    <a href="/doc/Functions/element/Parabolic"
      ><h3>抛物线元素<span v-html="icon"></span></h3
    ></a>
    <a href="/doc/Functions/element/ScrollParallax"
      ><h3>滚动视差动画<span v-html="icon"></span></h3
    ></a>
    <a href="/doc/Functions/element/ScrollFollow"
      ><h3>滚动跟随动画<span v-html="icon"></span></h3
    ></a>
    <a href="/doc/Functions/custom/imageOptimizer"
      ><h3>图片压缩<span v-html="icon"></span></h3
    ></a>
    <a href="/doc/Functions/custom/objToExc"
      ><h3>对象转Excel<span v-html="icon"></span></h3
    ></a>
    <a href="/doc/Functions/custom/search"
      ><h3>搜索(支持拼音)<span v-html="icon"></span></h3
    ></a>
    <a href="/doc/Functions/custom/typeSort"
      ><h3>排序<span v-html="icon"></span></h3
    ></a>
    <a href="/doc/Functions/custom/fmtTime"
      ><h3>日期格式化<span v-html="icon"></span></h3
    ></a>
    <a href="/doc/Functions/custom/getCountTime"
      ><h3>倒计时或记录已过去时间<span v-html="icon"></span></h3
    ></a>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    this.icon = `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>`;
    return {};
  },
};
</script>
<style scoped lang="less">
.Home {
  a {
    span {
      display: inline;
    }
  }
}
</style>
