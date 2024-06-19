<script setup lang="ts">
import { vSweepLight } from "../../../../Directives/Components/SweepLight/sweep-light";
</script>

<template>
  <div class="logo">
    <div v-sweep-light class="lib">
      <img src="/images/logo.png" />
    </div>
    <div class="name">Lib 代码片段</div>
  </div>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
