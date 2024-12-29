# _shuffleArray

<ContainerBox title="介绍">
<template #desc>
数组乱序，返回一个新数组，原数组不变。
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
const arr = ['a', 'a', 1, 1, ['a', 1], ['a', 1], { a: 1 }, { a: 1 }, true, true];
console.log(_arrDelRep(arr)); //[ "a", 1, [ "a", 1 ], { "a": 1 }, true ]
```
<CodeBox>
<template #codes>

```ts
/** @description 数组乱序
 * @param arr 需要乱序的数组
 */
export const _shuffleArray = <T>(arr: T[]): T[] => {
  const newArr = [...arr]; // 创建新数组以避免修改原数组
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]]; // 交换位置
  }
  return newArr; // 返回打乱后的新数组
};
```
</template>
</CodeBox>
</ContainerBox>
