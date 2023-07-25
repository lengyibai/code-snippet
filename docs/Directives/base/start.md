# 快速上手

<ContainerBox title="介绍">
<template #desc>

通过本章节你可以了解到`自定义指令`的基本使用姿势
</template>
</ContainerBox>

## 获取自定义指令

<ContainerBox title="复制代码">

<template #desc>
直接复制代码即可使用
</template>
</ContainerBox>

## 准备工作

<ContainerBox title="全局注册">
<template #desc>

1. 在项目内创建一个文件夹及文件`src/utils/directives.js`

2. 将复制的自定义指令粘贴进`directives.js`文件

```js
//directives.js

const aaa = {
  mounted(el, binding) {},
};
const bbb = {
  mounted(el, binding) {},
};
const ccc = {
  mounted(el, binding) {},
};

export default {
  aaa,
  bbb,
  ccc,
};
```

3. 在`main.js`文件内引入`directives.js`

```js
//main.js

import { createApp } from 'vue';

import App from './App.vue';
const app = createApp(App);

import directives from '@/utils/directives.js';
Object.keys(directives).forEach((key) => {
  app.directive(key, directives[key]);
});
```

</template>
</ContainerBox>

<ContainerBox title="局部注册">
<template #desc>
你也可以直接在组件内注册自定义指令
</template>

```vue
<script setup>
// 在模板中启用 v-focus
const vFocus = {
  mounted: (el) => el.focus(),
};
</script>

<template>
  <input v-focus />
</template>
```

</ContainerBox>

<ContainerBox title="全部引入">
<template #desc>
你也可以直接下载所有指令：

[directives.zip](https://gitee.com/lengyibai/lib3-component-packages/raw/master/utils/directives.zip)
</template>

在`main.js`文件内引入`directives.js`

```js
//main.js

import { createApp } from 'vue';

import App from './App.vue';
const app = createApp(App);

import directives from '@/utils/directives.js';
Object.keys(directives).forEach((key) => {
  app.directive(key, directives[key]);
});
```

</ContainerBox>
