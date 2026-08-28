# _groupArrayByKey

<ContainerBox title="介绍">
<template #desc>
将数组对象按照指定键值整理成一个以键值为键名的对象
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
const arr = [
  { area: "GZ", name: "YZW", age: 27 },
  { area: "GZ", name: "TYJ", age: 25 },
  { area: "SZ", name: "AAA", age: 23 },
  { area: "FS", name: "BBB", age: 21 },
  { area: "SZ", name: "CCC", age: 19 },
];
_groupArrayByKey(arr, "area");
/*
{
  GZ: [
    { area: 'GZ', name: 'YZW', age: 27 },
    { area: 'GZ', name: 'TYJ', age: 25 }
  ],
  SZ: [
    { area: 'SZ', name: 'AAA', age: 23 },
    { area: 'SZ', name: 'CCC', age: 19 }
  ],
  FS: [ { area: 'FS', name: 'BBB', age: 21 } ]
}
 */
```

<CodeBox>
<template #codes>

```ts
/**
 * @description 分类汇总，根据指定键将数组分组。
 * @param arr 要分组的数组。
 * @param key 分组的键。
 * @returns 分组后的对象。
 */
export const _groupArrayByKey = (arr: any[] = [], key: string) => {
  return key
    ? arr.reduce((t, v) => {
        if (!t[v[key]]) {
          t[v[key]] = [];
        }
        t[v[key]].push(v);
        return t;
      }, {})
    : {};
};
```
</template>
</CodeBox>
</ContainerBox>
