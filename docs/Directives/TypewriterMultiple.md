<script setup>
  import TypewriterMultiple from './Components/TypewriterMultiple/index.vue'
</script>

# typewriterMultiple

<ContainerBox title="介绍">
<template #desc>
比 CSS 打字机更高级一点
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

支持换行、标点符号延迟，但不支持光标不支持自动删除

</template>
<div class="demoBox">
<TypewriterMultiple />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="TypewriterMultiple" v-typewriterMultiple>
    这里是冷弋白，当前打字机支持换行，而CSS打字机通过设置step步长，只能单行显示。当前打字机原理即利用setInterval，将字符一个个追加进字符串，遇到，、。？！则会停顿750ms、250ms、1500ms、1000ms、1000ms。怎么样？是不是很智能？更多符号可自行修改源码。
  </div>
</template>
<style scoped>
.TypewriterMultiple {
  font-size: 18px;
  margin: 1em;
}
</style>
```

</template>
</ShowCode>

<ShowCode iskey>
<template #codes>

```js
const typewriterMultiple = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const say = el.innerHTML;
    el.innerHTML = "";
    setTimeout(() => {
      let timer: Interval;
      let num = 0, //用于累加遍历字符串
        text = ""; //用于输出在屏幕上
      fn();
      function fn() {
        timer = setInterval(() => {
          if (num >= say.length) {
            //如果文字输出完毕
            clearInterval(timer); //清除用于输出文字的计时器
            binding.value && binding.value();
            return;
          }
          text += say[num]; //遍历输出的文字
          el.innerHTML = text; //输出在屏幕上
          if ("，、。？！".includes(say[num])) {
            clearInterval(timer); //清除用于输出文字的计时器
            setTimeout(
              () => {
                fn();
              },
              "，" === say[num]
                ? 500
                : "、" === say[num]
                ? 250
                : "。？！" === say[num]
                ? 1000
                : 500
            );
          }
          num++;
        }, 100);
      }
    }, 750);
  },
};
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="value">

<template #desc>

| 说明             | 类型     | 默认值 |
| ---------------- | -------- | ------ |
| 文字输出完毕调用 | Function | -      |

</template>
</ContainerBox>
