<script setup>
  import WaveDiffuse from './Components/WaveDiffuse/index.vue'
</script>

# waveDiffuse

<ContainerBox title="介绍">
<template #desc>
模拟安卓的点击和按下水波扩散效果
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
尝试点击方块内部，狂点、长按
</template>
<div class="demoBox">
<WaveDiffuse />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="WaveDiffuse" v-waveDiffuse="'rgba(100,100,100,0.5)'">Hello</div>
</template>
<style scoped lang="less">
.WaveDiffuse {
  position: relative; //必须加定位
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 75px;
  font-size: 25px;
  cursor: pointer;
  user-select: none;
}
</style>
```

</template>
</ShowCode>

<ShowCode iskey>
<template #codes>

```js
const waveDiffuse = {
  mounted(el: HTMLElement, { value = '#ccc' }) {
    el.style.cssText = `
      overflow: hidden;
    `;
    const style = `
      position: absolute;
      background-color: ${value};
      transform: translate(-50%, -50%);
      pointer-events: none;
      border-radius: 50%;
      width: 0;
      height: 0;
      transition: all 1s linear;
    `;
    el.addEventListener('mousedown', function (e: MouseEvent) {
      const v = e.target as HTMLInputElement;
      const c = document.createElement('span');
      c.style.cssText = style;
      const x = e.clientX - v.getBoundingClientRect().left;
      const y = e.clientY - v.getBoundingClientRect().top;
      c.style.left = x + 'px';
      c.style.top = y + 'px';
      this.appendChild(c);
      const width = v.offsetWidth;
      const height = v.offsetHeight;
      const size = width > height ? width : height;
      c.style.width = `${size * 5}px`;
      c.style.height = `${size * 5}px`;
      function fn() {
        c.style.transition = 'all 1s ease-out';
        c.style.opacity = '0';
        setTimeout(() => {
          c.remove();
        }, 750);
      }
      el.addEventListener('mouseup', fn);
      el.addEventListener('mouseleave', fn);
    });
  },
};
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="value">

<template #desc>

| 说明     | 类型   | 默认值             |
| -------- | ------ | ------------------ |
| 水波颜色 | String | rgba(0, 0, 0, 0.5) |

</template>
</ContainerBox>
