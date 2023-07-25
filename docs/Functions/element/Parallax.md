# Parallax

<ContainerBox title="介绍">
<template #desc>

[视差组件](/Components/dynamics/Parallax) 精简版

</template>
</ContainerBox>

<ContainerBox title="基础用法">
针对全屏视差

```js
/* 针对全屏视差 */
const parallax = new Parallax((x, y) => {
  //x：当鼠标位于容器左侧边缘时为-1，位于右侧边缘时为1，位于屏幕中间时为0
  //y：当鼠标位于容器顶部边缘时为-1，位于底部边缘时为1，位于屏幕中间时为0
})
window.addEventListener('mousemove',(e: MouseEvent)=>{
  parallax.move(e)
})

/* 针对元素视差 */
const parent = document.querySelector('.parent')

const parallax = new Parallax((x, y) => {
  //...
}, true)
parent.addEventListener('mousemove',(e: MouseEvent)=>{
  parallax.move(e)
})

//离开元素后重置位置
parent.addEventListener('mouseleave',()=>{
  parallax.reset()
})
```

<ShowCode>
<template #codes>

```js
export default class {
  fn: (x: number, y: number) => void = () => {};
  scope: boolean;

  constructor(fn: (x: number, y: number) => void, scope: boolean = false) {
    this.fn = fn;
    this.scope = scope;
  }

  move(e: MouseEvent): void {
    if (this.scope) {
      const { offsetWidth: w, offsetHeight: h } = e.target as HTMLElement;
      const x = Number(((e.offsetX - w / 2) / (w / 2)).toFixed(2));
      const y = Number(((e.offsetY - h / 2) / (h / 2)).toFixed(2));
      this.fn(x, y);
    } else {
      const { innerWidth: w, innerHeight: h } = window;
      const x = Number(((e.clientX - w / 2) / (w / 2)).toFixed(2));
      const y = Number(((e.clientY - h / 2) / (h / 2)).toFixed(2));
      this.fn(x, y);
    }
  }

  reset() {
    this.fn(0, 0);
  }
}
```

</template>
</ShowCode>
</ContainerBox>