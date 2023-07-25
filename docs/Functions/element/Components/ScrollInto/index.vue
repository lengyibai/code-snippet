<template>
  <div class="demo">
    <input
      type="text"
      @blur="blur"
      v-model="name"
      placeholder="请输入动画库里的动画名"
    />
    <input
      type="text"
      @blur="blur"
      v-model="time"
      placeholder="请输入动画时长"
    />
    <input
      type="text"
      @blur="blur"
      v-model="into"
      placeholder="滚动到几倍自身大小显示"
    />
    <button class="btn" @click="once = !once">
      点击切换为{{ once ? "重复播放" : "播放一次" }}
    </button>
    <div class="scrollbox" @scroll="scroll" ref="scrollbox">
      <div class="fill"></div>

      <h1>由左上角输入框决定</h1>
      <div class="intobox" ref="intobox">
        <div class="box a"></div>
      </div>

      <h1>从小到大</h1>
      <div class="intobox" ref="intoboxA">
        <div class="box b"></div>
      </div>

      <h1>从大到小</h1>
      <div class="intobox" ref="intoboxB">
        <div class="box c"></div>
      </div>

      <h1>从左到右顺时针</h1>
      <div class="intobox" ref="intoboxC">
        <div class="box d"></div>
      </div>

      <h1>从右到左逆时针</h1>
      <div class="intobox" ref="intoboxD">
        <div class="box e"></div>
      </div>

      <h1>自定义动画</h1>
      <div class="intobox" ref="intoboxE">
        <div class="box f"></div>
      </div>

      <div class="fill"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { ScrollInto } from "./animate.js";

const name = ref("translate4");
const time = ref(0.5);
const into = ref(1);
const once = ref(false);

const scrollbox = ref();
const intobox = ref();
const intoboxA = ref();
const intoboxB = ref();
const intoboxC = ref();
const intoboxD = ref();
const intoboxE = ref();

const scrollInto = ref<ScrollInto>(); //滚动类型

onMounted(() => {
  scrollInto.value = new ScrollInto({
    parent: scrollbox.value,
    animate: { name: name.value, time: time.value, into: into.value },
  });

  /* 自定义动画 */
  const animate = (el: HTMLElement) => {
    el.style.transform = "rotate(360deg) scale(5)";
  };

  scrollInto.value.setOption(intobox.value);
  scrollInto.value.setOption(intoboxA.value, { name: "scale1" });
  scrollInto.value.setOption(intoboxB.value, { name: "scale2" });
  scrollInto.value.setOption(intoboxC.value, { name: "mixedTR5" });
  scrollInto.value.setOption(intoboxD.value, { name: "mixedTR6" });
  scrollInto.value.setOption(intoboxE.value, {
    name: animate,
    time: 2,
    into: 1,
  });
  scrollInto.value.mountAnimate(); //挂载动画
});

const scroll = () => {
  scrollInto.value!.scroll();
};

const blur = () => {
  scrollInto.value!.updateAnimate(
    { name: name.value, time: time.value, into: into.value },
    0
  );
};

watch(once, (v) => {
  if (v) {
    scrollInto.value!.mountAnimate("once"); //挂载动画
  } else {
    scrollInto.value!.mountAnimate(); //挂载动画
  }
});
</script>
<style scoped lang="less">
.demo {
  position: relative;
  width: 100%;
  input {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 0.75vw;
    padding: 0.25em;
    z-index: 1;
    &:nth-of-type(1) {
      transform: translateY(0%);
    }
    &:nth-of-type(2) {
      transform: translateY(150%);
    }
    &:nth-of-type(3) {
      transform: translateY(300%);
    }
  }
  .btn {
    position: absolute;
    right: 0;
    z-index: 1;
  }
  .scrollbox {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50vh;
    overflow: hidden auto;
    h1 {
      font-size: 2vw;
      margin-top: 1em;
    }
    .fill {
      flex-shrink: 0;
      width: 25vw;
      height: 100vh;
    }
    .box {
      width: 10vw;
      height: 10vw;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2vw;
    }
  }
}

.a {
  background-image: linear-gradient(180deg, #dc3545 0%, #fd7e14 100%);
}

.b {
  background-image: linear-gradient(180deg, #fd7e14 0%, #ffc107 100%);
}

.c {
  background-image: linear-gradient(180deg, #ffc107 0%, #28a745 100%);
}

.d {
  background-image: linear-gradient(180deg, #28a745 0%, #17a2b8 100%);
}

.e {
  background-image: linear-gradient(180deg, #17a2b8 0%, #007bff 100%);
}

.f {
  background-image: linear-gradient(180deg, #007bff 0%, #6610f2 100%);
}

.g {
  background-image: linear-gradient(180deg, #6610f2 0%, #e83e8c 100%);
}
</style>
