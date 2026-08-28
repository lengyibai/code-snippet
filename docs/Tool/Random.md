# _random

<ContainerBox title="介绍">
<template #desc>
随机生成指定范围的数据，生成的数字会包含两个参数
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
_random(0, 1, 2); //0.57
```
<CodeBox>
<template #codes>

```ts
/** @description 随机数
 * @param min 最小值
 * @param max 最大值
 * @param num 保留小数位数
 */
export const _random = (min: number, max: number, num = 0) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(num));
};
```
</template>
</CodeBox>
</ContainerBox>