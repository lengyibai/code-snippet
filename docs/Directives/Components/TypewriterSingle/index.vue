<template>
  <div class="TypewriterSingle cursor" v-typewriterSingle>单行打字机</div>
</template>
<style scoped>
.TypewriterSingle {
  --size: 35px;
  height: var(--size);
  line-height: var(--size);
  padding-right: 0.1em;
  font-size: var(--size);
  border-right: 1px solid transparent;
  margin: 1em 0;
}

.cursor {
  border-right-color: currentColor;
}
</style>
