<script setup lang="ts">
import { onMounted, ref } from "vue";

const show = ref(false);

const tip = () => {
  show.value = window.innerWidth < window.innerHeight;
};

onMounted(() => {
  tip();
  window.addEventListener("resize", () => {
    tip();
  });
});
</script>

<template>
  <div v-if="show" class="phone-tip">
    <svg
      class="phone"
      t="1662996968845"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="6434"
    >
      <path
        d="M734.608696 1024 289.391304 1024c-49.174261 0-89.043478-39.869217-89.043478-89.043478L200.347826 89.043478c0-49.174261 39.869217-89.043478 89.043478-89.043478l445.217391 0c49.174261 0 89.043478 39.869217 89.043478 89.043478l0 845.913043C823.652174 984.130783 783.782957 1024 734.608696 1024zM779.130435 89.043478c0-24.598261-19.923478-44.521739-44.521739-44.521739L289.391304 44.521739C264.793043 44.521739 244.869565 64.445217 244.869565 89.043478l0 22.26087 534.26087 0L779.130435 89.043478zM779.130435 155.826087 244.869565 155.826087l0 712.347826 534.26087 0L779.130435 155.826087zM779.130435 912.695652 244.869565 912.695652l0 22.26087c0 24.598261 19.923478 44.521739 44.521739 44.521739l445.217391 0c24.598261 0 44.521739-19.923478 44.521739-44.521739L779.130435 912.695652z"
        p-id="6435"
        fill="#ffffff"
      ></path>
    </svg>
    <div class="message">
      <span>横屏查看更佳</span>
      <span>手机下拉状态栏</span>
      <span>设置自动旋屏，取消方向锁定</span>
    </div>
  </div>
</template>

<style scoped lang="less">
.phone-tip {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  background-color: rgb(0 0 0 / 90%);

  .phone {
    width: 200px;
    margin-bottom: 50px;
    animation: rotate 2s infinite ease-out;

    @keyframes rotate {
      50% {
        transform: rotate(-90deg);
      }

      75% {
        transform: rotate(-90deg);
      }
    }
  }

  .message {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
</style>
