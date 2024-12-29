# _randomColor

<ContainerBox title="介绍" noGap>
<template #desc>

随机生成`rgba`颜色
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
_randomColor(0.5);
```
<CodeBox>
<template #codes>

```ts
/** @description 随机颜色
 * @param alpha 透明度
 */
export const _randomColor = (alpha = 1) => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
```
</template>
</CodeBox>
</ContainerBox>