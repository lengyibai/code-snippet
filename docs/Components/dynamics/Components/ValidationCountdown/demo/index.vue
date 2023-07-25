<template>
  <div class="demoFull flex">
    <LibValidationCountdown @change="statusChange" :time="3">
      <template v-slot="{ text, disabled }">
        <button class="btn" :disabled="disabled" :style="{ cursor: disabled ? 'not-allowed' : 'pointer' }">
          {{ text }}
        </button>
      </template>
    </LibValidationCountdown>
  </div>
</template>
<script setup>
import LibValidationCountdown from '../index.vue';

const statusChange = (status) => {
  alert(status);
};
</script>
<style scoped>
button {
  background-color: transparent;
  font-size: 2vw;
  padding: 1em;
}
</style>
