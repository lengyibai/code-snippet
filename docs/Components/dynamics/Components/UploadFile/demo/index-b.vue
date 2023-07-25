<template>
  <div class="demo">
    <UploadFile
      id="b"
      url="https://jsonplaceholder.typicode.com/posts/"
      :multiple="false"
      :size="1.25"
      :suffix="['png', 'jpg']"
      :files="files"
    />
    <p v-for="(item, index) in files" :key="index">
      {{ item }}
    </p>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import UploadFile from '../index.vue';

const files = ref([]);
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>
