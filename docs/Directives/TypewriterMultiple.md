<script setup>
  import TypewriterMultiple from './Components/TypewriterMultiple/index.vue'
</script>

# typewriterMultiple

<ContainerBox title="介绍" noGap>
<template #desc>

比`CSS`打字机更高级一点
</template>
</ContainerBox>

## 代码演示

<ContainerBox>
<div class="demo-box">
<TypewriterMultiple />
</div>

<CodeBox>
<template #codes>

```vue
<script setup lang="ts">
import { vTypewriterMultiple } from "./typewriter-multiple";
</script>

<template>
  <div
    v-typewriter-multiple="{
      speed: 300,
      content: '你好，世界！',
    }"
    class="typewriter-multiple"
  ></div>
</template>

<style scoped>
.typewriter-multiple {
  font-size: 25px;
}
</style>
```

</template>
</CodeBox>

<CodeBox iskey>
<template #codes>

```ts
/**
 * v-typewriter-multiple
 * 多行打字机
 */
import type { Directive, DirectiveBinding } from "vue";

interface ElType extends HTMLElement {
  _timer1: NodeJS.Timeout;
  _timer2: NodeJS.Timeout;
  /** 上一次的内容 */
  _last_text: string;
  /** 开始输出 */
  _startOutput: (el: ElType, v: DirectiveBinding<Params>) => void;
}

interface Params {
  /** 打字内容 */
  content: string;
  /** 频率 ms/字 */
  speed?: number;
  /** 延迟多少毫秒触发 */
  delay?: number;
  /** 打字结束后触发 */
  callback?: () => void;
}

const vTypewriterMultiple: Directive<ElType, Params> = {
  mounted(el, binding) {
    el._startOutput = (el, binding) => {
      const { callback, speed = 100, delay, content } = binding.value || {};
      el.innerHTML = "";
      el._last_text = content;

      clearTimeout(el._timer2);
      el._timer2 = setTimeout(
        () => {
          /** 用于累加遍历字符串 */
          let num = 0,
            /** 用于输出在屏幕上 */
            text = "";
          fn();
          function fn() {
            clearInterval(el._timer1);
            el._timer1 = setInterval(() => {
              if (num >= content.length) {
                clearInterval(el._timer1);
                callback && callback();
                return;
              }
              text += content[num];
              el.innerHTML = text;
              num++;
            }, speed);
          }
        },
        delay === undefined ? 750 : delay,
      );
    };
    el._startOutput(el, binding);
  },

  updated(el, binding) {
    if (binding.value.content === el._last_text) return;
    el._startOutput(el, binding);
  },
};

export { vTypewriterMultiple };
```

</template>
</CodeBox>
</ContainerBox>