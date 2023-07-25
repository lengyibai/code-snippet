<script setup>
  import Particle from './Components/Particle/index.vue'
</script>

# Particle

<ContainerBox title="介绍">
<template #desc>

灵感来自`王者荣耀`粒子背景
</template>
</ContainerBox>

<ContainerBox title="使用">

<template #desc>

引入参考 [准备工作](/Directives/base/start.html#准备工作)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">
<Particle />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <BtnLogin v-particle></BtnLogin>
</template>
<script setup>
import BtnLogin from "./BtnLogin/index.vue";
</script>
```

</template>
</ShowCode>

<ShowCode iskey>
<template #codes>

```js
let particle_timer: any = null;
function $random(min = 0, max = 1, num = 0) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(num));
}
const particle = {
  mounted(el: HTMLElement, binding) {
    const {
      color = "#cfb45c",
      size = 10,
      num = 35,
      filter = true,
      down = false,
      brightness = 1.3,
      contrast = 1.1,
    } = binding.value || {};
    setTimeout(() => {
      const box = el;
      const box_width = box.offsetWidth;
      const box_height = box.offsetHeight;

      if (down) {
        document.styleSheets[0].insertRule(
          `
      @keyframes particle-rise-${box_height} {
        0% {
          transform: translateY(-${box_height}px) translateZ(0);
          opacity: 0;
        }
        50% {
          transform: translateY(${box_height / 2}px) translateZ(0);
          opacity: 1;
        }
        100% {
          transform: translateY(${box_height}px) translateZ(0);
          opacity: 0;
        }
      }
      `,
          document.styleSheets[0].cssRules.length
        );
      } else {
        document.styleSheets[0].insertRule(
          `
        @keyframes particle-rise-${box_height} {
          0% {
            transform: translateY(0px) translateZ(0);
            opacity: 1;
          }
          50% {
            transform: translateY(-${box_height / 2}px) translateZ(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-${box_height}px) translateZ(0);
            opacity: 0;
          }
        }
        `,
          document.styleSheets[0].cssRules.length
        );
      }
      for (let i = 0; i < num; i++) {
        const p = document.createElement("span");

        const style = `
      position: absolute;
      background-color: ${color};
      pointer-events: none;
      width: ${size}px;
      height: ${size}px;
      bottom: 0;
      opacity: 0;
      box-shadow: 0 0 10px 0 ${color};
      filter: brightness(200%);
      `;
        const left = $random(0, box_width - size);
        const scale = $random(0.25, 0.75, 1);
        const time = $random(1, 3, 1);
        const delay = $random(0, 5, 1);
        p.style.cssText = style;
        p.style.left = `${left}px`;
        p.style.scale = scale.toString();
        p.style.animation = `particle-rise-${box_height} ${time}s linear infinite`;
        p.style.animationDelay = delay + "s";

        box.appendChild(p);
      }
    }, 1000);

    if (filter) el.style.transition = "all 0.25s";
    el.addEventListener("mouseenter", () => {
      if (!filter) return;
      el.style.filter = `brightness(${brightness * 100}%) contrast(${
        contrast * 100
      }%)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.filter = "";
    });
  },
};
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="value">

<template #desc>

|            | 说明                                                                    | 类型    | 默认值  |
| ---------- | ----------------------------------------------------------------------- | ------- | ------- |
| color      | 粒子颜色                                                                | String  | #cfb45c |
| size       | 粒子大小                                                                | Number  | 10      |
| down       | 是否向下移动                                                            | Boolean | false   |
| num        | 数量                                                                    | Number  | 35      |
| filter     | 开启悬浮高亮滤镜效果                                                    | Boolean | true    |
| brightness | (开启 filter 生效)<br />亮度，`0-1`，大于`1`逐渐加亮，小于`1`逐渐变暗   | Number  | 1.3     |
| contrast   | (开启 filter 生效)<br />对比度，`0-1`，大于`1`逐渐加深，小于`1`逐渐变淡 | Number  | 1.1     |

</template>
</ContainerBox>
