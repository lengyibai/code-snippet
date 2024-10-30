# _chunkArray

<ContainerBox title="介绍">
<template #desc>
将数组拆分成指定数组元素数量的多个数组。
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<template #desc>

```ts
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = _chunkArray(arr, 3);
console.log(result); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
```

</template>

<CodeBox>
<template #codes>

```ts
/**
 * @description 将数组拆分成指定数组元素数量的多个数组
 * @param arr 需要拆分的数组
 * @param chunkSize 每个数组的元素数量
 */
export const _chunkArray = <T>(arr:T[], chunkSize:number )=> {
  const result:T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}
```
</template>
</CodeBox>
</ContainerBox>
