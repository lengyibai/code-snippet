<script setup>
  import SvgA from './Components/Svg/demo/index-a.vue'
  import SvgB from './Components/Svg/demo/index-b.vue'
</script>

# LibSvg

<ContainerBox title="介绍">
<template #desc>
让 SVG 图标变色，无需使用两张图进行变色
</template>
</ContainerBox>

<ContainerBox title="下载并引入">

[下载组件包及当前组件的所有案例](https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/static/LibSvg.zip)

引入参考 [引入组件](/Components/base/start.html)

</ContainerBox>

## 代码演示

<ContainerBox title="图标文件">
<template #desc>

::: tip

注意：`SVG`代码必须删除以下内容 `class="icon"` `width:宽度px` `height:高度px`

并将图标颜色`fill`值更改为`currentColor`

`currentColor`：继承父元素的字体颜色
:::

</template>
<ShowCode>
<template #codes>

```js
export default {
  wzry: `<svg t="1652365555846" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1314"><path d="M28.574446 966.827384l268.867636-263.747825-15.514578-18.927785a281.512017 281.512017 0 0 1-62.058312-177.021335c0-158.714132 131.873913-287.872994 293.613388-287.872993a294.311544 294.311544 0 0 1 181.132697 60.817145l18.539921 14.273412 151.111989-148.474511-21.720409-19.160504A511.981072 511.981072 0 0 0 210.94831 93.123927L194.114993 105.070152l7.757289 22.884002-65.936956 65.238801-24.202742-8.222727-11.713506 15.514578a489.872799 489.872799 0 0 0-38.786445 533.779055c6.593696 13.730401 0 81.06367-13.575256 144.052856zM963.793205 291.555379c-6.593696-13.807974 0-81.141243 14.118266-144.130429l19.703514-88.355522-269.876084 263.049669L742.710469 341.357174a280.969007 280.969007 0 0 1 61.437729 177.17648c-0.620583 158.403841-131.873913 287.019692-293.613388 287.019692h-1.08602a293.690961 293.690961 0 0 1-180.589688-62.058312L310.474327 729.221623l-151.810145 147.38849 21.642836 19.238077A509.188448 509.188448 0 0 0 516.818214 1023.998604h2.016895a507.714563 507.714563 0 0 0 292.915232-92.156593l16.678171-11.635934-7.757289-23.271867 66.712685-64.928508 24.202742 8.300299 11.791079-15.514578a490.105517 490.105517 0 0 0 40.648194-533.623909z" fill="currentColor" p-id="1315"></path><path d="M495.640815 442.201931V325.842596a183.227166 183.227166 0 0 0-31.029156 361.412093c10.006903 2.40476 31.029156 37.622852 31.029156 37.622852V575.86002a67.953851 67.953851 0 0 1 0-133.502944zM544.8996 576.558176l0.853302 116.359334A183.149593 183.149593 0 0 0 574.222152 331.272698c-10.084476-2.327187-31.029156-37.390133-31.029155-37.390132l1.163593 149.095094a67.953851 67.953851 0 0 1 1.008448 133.580516z" fill="currentColor" p-id="1316"></path></svg>`,
};
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="基础用法">
<div class="demoBox">
<SvgA />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    按下
    <LibSvg
      :svg="icon.wzry"
      color="#ffad31"
      enter-color="#4834d4"
      down-color="#c23616"
      size="10vw"
      left="0.5em"
      right="0.5em"
    />变色
  </div>
</template>
<script setup lang="ts">
import icon from './svg/icon.js';
</script>
<style scoped>
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 4vw;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="自定义样式">
<div class="demoBox">
<SvgB />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    按下
    <LibSvg
      :svg="icon.wzry"
      color="#ffad31"
      enter-color="#4834d4"
      down-color="#c23616"
      size="10vw"
      left="0.5em"
      right="0.5em"
      :downFn="downFn"
      :upFn="upFn"
    />动画
  </div>
</template>
<script setup lang="ts">
import icon from './svg/icon.js';

const downFn = (el: HTMLElement | undefined) => {
  el!.style.transition = 'all 0.25s';
  el!.style.transform = 'rotate(360deg) scale(0.75)';
};

const upFn = (el: HTMLElement | undefined) => {
  el!.style.transition = 'all 1s';
  el!.style.transform = 'rotate(0deg) scale(1)';
};
</script>
<style scoped>
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 4vw;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">
<template #desc>

| 参数                        | 说明                                 | 类型     | 默认值 |
| --------------------------- | ------------------------------------ | -------- | ------ |
| svg                         | SVG 代码                             | 未知     | -      |
| color                       | 图标颜色                             | String   | #000   |
| enterColor                  | 悬浮颜色                             | String   | -      |
| downColor                   | 按下颜色                             | String   | -      |
| title                       | 悬浮提示                             | String   | -      |
| size                        | 图标大小                             | String   | 25px   |
| top \|left \|bottom \|right | 图标外边距                           | String   | 0px    |
| downFn                      | 按下函数，回调参数：el(被按下的元素) | Function | -      |
| upFn                        | 抬起函数，回调参数：el(被抬起的元素) | Function | -      |

</template>
</ContainerBox>
