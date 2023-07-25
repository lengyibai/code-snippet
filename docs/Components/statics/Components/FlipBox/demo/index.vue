<template>
  <div class="demo">
    <LibFlipBox>
      <template #front>
        <div class="box flex">鼠标放上来</div>
      </template>
      <template #back>
        <div class="box flex">鼠标移出去</div>
      </template>
    </LibFlipBox>
  </div>
</template>
<script setup lang="ts">
import LibFlipBox from '../index.vue';
</script>
<style scoped>
.demo {
  width: 100%;
  height: 300px;
  font-size: 4vw;
}
.box {
  height: 100%;
  background-color: #eee;
}
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
