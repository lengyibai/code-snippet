<template>
  <div class="LibGridLetter" :style="{ gridArea: area }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "LibGridLetter",
  props: {
    area: {
      type: String,
      default: "",
    },
  },
};
</script>
<style scoped>
.LibGridLetter {
  width: 100%;
  height: 100%;
}
</style>
