<template>
  <LibMaskClose @close="close" />
</template>
<script setup lang="ts">
import LibMaskClose from '../index.vue';
const close = () => {
  alert('关闭回调');
};
</script>
