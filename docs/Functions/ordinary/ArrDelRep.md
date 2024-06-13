# _arrDelRep

<ContainerBox title="介绍">
<template #desc>
去掉数组内重复的对象、数组、字符串
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
/**
 * @description 删除数组中的重复元素。
 * @param arr 需要处理的数组。
 */
export const _arrDelRep = (arr: any[]) => {
  const seen = new Map<any, boolean>();
  return arr.filter((item) => {
    if (!seen.has(item)) {
      seen.set(item, true);
      return true;
    }
    return false;
  });
}
```
</template>
</CodeBox>
</ContainerBox>
