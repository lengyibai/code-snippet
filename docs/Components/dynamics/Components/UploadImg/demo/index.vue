<template>
  <LibUploadImg url="/upload" v-model="img_url" />
</template>
<script setup lang="ts">
import { ref } from "vue";
import LibUploadImg from "../index.vue";

const img_url = ref("https://lengyibai.gitee.io/img-bed/lyb.png");
</script>
