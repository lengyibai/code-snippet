# _getUniqueRandomNumbers

<ContainerBox title="介绍">
<template #desc>
生成n个不重复的指定范围的随机整数的数组
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
_getUniqueRandomNumbers(0, 5, 5); //[2, 3, 5, 1, 4]
```
<CodeBox>
<template #codes>

```ts
/** @description 随机生成n个指定范围的随机数数组
 * @param min 最小值
 * @param max 最大值
 * @param count 数组长度
 * @returns 随机数数组
 */
export const _getUniqueRandomNumbers = (min:number, max:number, count:number) => {
  // 创建一个包含 1-40 的数字数组
  const numbers = Array.from({ length: max - min + 1 }, (_, i) => i + min);

  // 随机洗牌数组
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  // 返回前 count 个元素
  return numbers.slice(0, count);
};
```
</template>
</CodeBox>
</ContainerBox>