# _mergeConfig

<ContainerBox title="介绍" noGap>
<template #desc>

灵感来自`Echarts`，可重复调用的`setOption`，配置项会被合并或覆盖
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
const arr = [1, 2, 3, 4, 5];
console.log(_rotateArray(arr, 2)); // [4, 5, 1, 2, 3]
console.log(_rotateArray(arr, -2)); // [3, 4, 5, 1, 2]
```
<CodeBox>
<template #codes>

```ts
/** @description 数组元素整体移动
 * @param arr 旋转的数组
 * @param step 负数为向后移动，正数为向前移动
 */
export const _rotateArray = <T>(arr: T[], step: number): T[] => {
  const length = arr.length;

  // 处理步长为0的情况，直接返回原数组
  if (length === 0 || step % length === 0) return arr;

  // 处理步长，负数转为正数等效的移动步长
  const normalizedStep = ((step % length) + length) % length;

  // 移动数组
  return arr.slice(-normalizedStep).concat(arr.slice(0, -normalizedStep));
};
```
</template>
</CodeBox>
</ContainerBox>