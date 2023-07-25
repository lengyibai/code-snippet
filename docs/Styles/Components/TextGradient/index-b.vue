<template>
  <div class="demo">
    <button @click="play">点击播放动画</button>
    <div class="text">
      Hello Word!
      <div :class="{ textClip: show }"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      timer: null,
    };
  },
  methods: {
    play() {
      clearTimeout(this.timer);
      this.show = !this.show;
      this.timer = setTimeout(() => {
        this.show = false;
      }, 2500);
    },
  },
};
</script>
<style scoped lang="less">
.demo {
  position: relative;
  width: 100%;
  .text {
    position: relative;
    width: 100%;
    line-height: 5vw;
    font-size: 5vw;
    white-space: nowrap;
    color: #fff;
    text-align: center;
    overflow: hidden;
    background-color: #000;
  }
}

.textClip {
  position: absolute;
  width: 150%;
  height: 100%;
  top: 0;
  background: linear-gradient(90deg, transparent 0%, #000 30%, #000 100%);
  animation: animate 3s linear both;
  @keyframes animate {
    0% {
      left: -35%;
    }

    100% {
      left: 100%;
    }
  }
}
</style>
