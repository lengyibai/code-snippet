# _objDelRep

<ContainerBox title="介绍">
<template #desc>
根据指定对象属性名，去掉数组内与包含唯一`id`相同的对象，只会保留第一个
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
const arr = [
  { id: 1, name: 'lyb' },
  { id: 1, name: 'lengyibai' },
  { id: 2, name: '冷弋白' },
];
console.log(_objDelRep(arr, 'id')); //[ { id: 1, name: 'lyb', }, { id: 2, name: '冷弋白', }, ];
```

<CodeBox>
<template #codes>

```ts
/**
 * @description 根据对象数组中的指定键删除重复元素
 * @param arr 需要处理的对象数组。
 * @param key 对象中用于判断重复的键。
 */
export const _objDelRep = (arr: any[], key: string) => {
  const seen = new Map<any, boolean>();
  return arr.filter((item) => {
    const value = item[key];
    if (!seen.has(value)) {
      seen.set(value, true);
      return true;
    }
    return false;
  });
};
```

</template>
</CodeBox>
</ContainerBox>
