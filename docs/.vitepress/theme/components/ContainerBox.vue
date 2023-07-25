<template>
  <div class="ContainerBox">
    <div class="title">{{ title }}</div>
    <div class="desc">
      <slot name="desc"></slot>
    </div>
    <div class="code">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
<style scoped lang="less">
.ContainerBox {
  max-width: 100%;
  background-color: var(--cb-bg);
  box-shadow: 0px 4px 12px var(--cb-shadow);
  border-radius: 20px;
  margin: 24px 0;
  padding: 24px;
  overflow-x: hidden;
  .title {
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 20px;
  }
  .desc {
    color: var(--font-color);
    font-size: 16px;
    overflow-x: auto;
    p {
      margin: 0;
    }
  }
  :deep(input[type='text']) {
    background-color: transparent;
    border: 2px solid #000;
    outline: none;
  }
}
</style>
