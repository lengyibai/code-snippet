<template>
  <div class="ParallaxVideo">
    <video v-parallaxVideo autoplay src="https://www.runoob.com/try/demo_source/movie.mp4" loop muted></video>
  </div>
</template>
<style scoped>
.ParallaxVideo {
  position: relative;
  width: 100%;
  height: 50vh;
  overflow: hidden;
}
</style>
