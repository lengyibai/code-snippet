<template>
  <div class="back-top" :class="{ backTopShow: show }" :style="{ width: size, height: size }" @click="backTop">
    <img :src="imgUrl" />
  </div>
</template>
<script>
import backTopPng from './img/backTop.png';
export default {
  name: 'BackTop',
  props: {
    //更换返回顶部图标，引入本地图片方式要使用require，和下面一致
    imgUrl: {
      default: backTopPng,
    },
    show: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '50px',
    },
  },
  data() {
    this.backTopPng = backTopPng;
    return {};
  },
  methods: {
    backTop() {
      const scrollBox = this.$parent;
      scrollBox.scrollTo(0, -250, 0);
      setTimeout(() => {
        scrollBox.scrollTo(0, 0, 250);
      });
    },
  },
};
</script>
<style scoped>
.back-top {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 5%;
  bottom: 0;
  box-sizing: border-box;
  background-color: #fff;
  transition: all 0.25s;
  transform: translateY(100%);
  border-radius: 50%;
  box-shadow: 0rem 0 0.1333rem 0rem rgba(0, 0, 0, 0.2);
  z-index: 999;
}
.back-top img {
  width: 60%;
  height: 60%;
  background-color: #fff;
}
.backTopShow {
  bottom: 100px;
  transform: translateY(0);
}
</style>
