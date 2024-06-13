<script setup lang="ts">
import { ref } from "vue";

import LibStripeBtn from "../index.vue";

const active = ref(false);
const text = ref("删除");
const bgColor = ref("#f56c6c");

const fn = () => {
  text.value = "loading...";
  bgColor.value = "#67c23a";

  setTimeout(() => {
    bgColor.value = "#409eff";
    text.value = "创建";
    active.value = false;
  }, 2000);
};
</script>

<template>
  <div class="demo">
    <LibStripeBtn
      v-model="active"
      :text="text"
      :bg-color="bgColor"
      theme="black"
      color="black"
      @click="fn"
    />
  </div>
</template>

<style scoped>
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
}
</style>
