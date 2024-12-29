# _rotateArray

<ContainerBox title="介绍">
<template #desc>
将源数组向左或右移动指定步数，并返回移动后的数组。
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
  if (length === 0 || step % length === 0) return arr;
  const normalizedStep = ((step % length) + length) % length;
  return arr.slice(-normalizedStep).concat(arr.slice(0, -normalizedStep));
};
```
</template>
</CodeBox>
</ContainerBox>