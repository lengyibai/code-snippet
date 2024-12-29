# _typeSort

<ContainerBox title="介绍">
<template #desc>
可以根据类型进行排序，如姓名、年龄、时间等
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<template #desc>
支持普通数组和包含对象的数组
</template>

```ts
const data = [
  { id: 3, abbr: 'pg', name: '苹果', time: '2019-04-25 12:00:22' },
  { id: 1, abbr: 'hw', name: '华为', time: '2019-04-22 10:00:19' },
  { id: 2, abbr: 'xm', name: '小米', time: '2019-04-22 10:00:18' },
];

_typeSort(data, 'name');
/*
[
  { id: 1, abbr: 'hw', name: '华为', time: '2019-04-22 10:00:19' },
  { id: 3, abbr: 'pg', name: '苹果', time: '2019-04-25 12:00:22' },
  { id: 2, abbr: 'xm', name: '小米', time: '2019-04-22 10:00:18' }
]
*/

let num = [1, '百度', 5, '0', 3, 2, '阿里', 4, 5, 3, '腾讯', 6, 9, '333'];
_typeSort(num, false); //['腾讯', '百度', '阿里', 9, 6, 5, 5, 4, '333', 3, 3, 2, 1, '0']
```
<CodeBox>
<template #codes>

```ts
/**
 * @description 对数据进行排序。
 * @param data 需要排序的数据。
 * @param key 排序的键名。
 * @param rev 是否反向排序，默认为 true。
 */
export const _typeSort = (data: any[], key: string | boolean, rev: boolean = true) => {
  const num = typeof key === "boolean" ? (key ? 1 : -1) : rev ? 1 : -1;
  return data.sort((a, b) => {
    if (typeof data[0] === "object") {
      if (typeof a[key] === "number") {
        return (a[key] - b[key]) * num;
      }
      if (typeof a[key] === "string") {
        return a[key].toString().localeCompare(b[key].toString()) * num;
      }
    }

    if (typeof a === "number") {
      return (a - b) * num;
    }

    if (typeof a === "string") {
      return a.toString().localeCompare(b.toString()) * num;
    }
  });
};
```
</template>
</CodeBox>
</ContainerBox>