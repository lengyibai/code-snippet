<script setup>
  import SnowFalling from './Components/SnowFalling/index.vue'
</script>

# SnowFalling

<ContainerBox title="介绍">
<template #desc>
简易的雪花飘落
</template>
</ContainerBox>

<ContainerBox title="使用">

<template #desc>

引入参考 [准备工作](/Directives/base/start.html#准备工作)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>
只适用于在一个页面飘落，切换到另一个路由，事件依然存在，暂时没有解绑删除事件的思路
</template>
<div class="demoBox">
<SnowFalling />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="SnowFalling" v-snowFalling></div>
</template>
<style scoped lang="less">
.SnowFalling {
  position: relative;
  width: 100%;
  height: 75vh;
  background-size: cover;
  background: url(./bg.png) no-repeat center center;
  overflow: hidden;
}
</style>

<style>
/* 必加：全局CSS */
@keyframes LibSnowFalling {
  100% {
    transform: translateX(var(--LibSnowFalling-left)) translateY(calc(100vh + 10px));
  }
}
</style>
```

</template>
</ShowCode>

<ShowCode iskey>
<template #codes>

```js
const snowFalling = {
  mounted(el: HTMLElement) {
    function $random(min, max, num = 0) {
      return parseFloat((Math.random() * (max - min) + min).toFixed(num));
    }

    const lib = el;
    let particle: string[] = [];

    for (let i = 0; i < document.documentElement.offsetWidth / 15; i++) {
      particle.push('<div class="particle"></div>');
    }

    function update() {
      lib.innerHTML = '';
      lib.innerHTML = particle.join(' '); //join转换成字符串
      let left: number, size: number;
      const particles: NodeListOf<HTMLElement> = lib.querySelectorAll('.particle');
      particles.forEach((item) => {
        size = $random(100, 200);
        item.style.cssText = `
          --LibSnowFalling-left: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: ${document.documentElement.offsetWidth / size}px;
          height: ${document.documentElement.offsetWidth / size}px;
          animation: LibSnowFalling var(--LibSnowFalling-time) infinite linear;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          pointer-events: none;
          background-color: #fff;
          border-radius: 50%;
        `;
        left = $random(0, document.documentElement.offsetWidth);

        item.style.transform = `translateX(${left}px) translateY(-200%)`;
        item.style.setProperty('--LibSnowFalling-left', left + 'px');
        item.style.setProperty('--LibSnowFalling-time', $random(3, 5, 1) + 's');
        item.style.animationDelay = $random(0, 10, 1) + 's';
      });
    }
    window.addEventListener('resize', update);
    update();
  },
};
```

</template>
</ShowCode>
</ContainerBox>
