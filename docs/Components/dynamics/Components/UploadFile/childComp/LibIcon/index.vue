<template>
  <div
    class="LibIcon"
    @mouseenter="toggle = true"
    @mouseleave="toggle = false"
    :style="{
      width: `${size}`,
      height: `${size}`,
      margin: `${top} ${right} ${bottom} ${left}`,
      backgroundImage: `url(${!toggle ? imgUrl : imgUrlHover || imgUrl})`,
    }"
    :title="title"
  ></div>
</template>
<script>
export default {
  name: "LibIcon",
  props: {
    imgUrl: {
      default: null,
    },
    imgUrlHover: {
      default: null,
    },
    title: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "25px",
    },
    top: {
      type: String,
      default: "0px",
    },
    right: {
      type: String,
      default: "0px",
    },
    bottom: {
      type: String,
      default: "0px",
    },
    left: {
      type: String,
      default: "0px",
    },
  },
  data() {
    return {
      toggle: false,
    };
  },
};
</script>
<style scoped>
.LibIcon {
  position: relative;
  background: no-repeat center center;
  background-size: contain;
  cursor: pointer;
}
</style>
