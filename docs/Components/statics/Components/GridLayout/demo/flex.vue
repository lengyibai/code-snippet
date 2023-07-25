<template>
  <div class="flex">
    <div class="box" v-for="item in 10" :key="item"></div>
  </div>
</template>
<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
}
.box {
  flex: 1;
  min-width: 100px;
  height: 10vh;
  border: 1px solid #000;
  transition: all 0.5s;
}
</style>
