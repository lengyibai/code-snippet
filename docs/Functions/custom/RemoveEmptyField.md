# _removeEmptyField

<ContainerBox title="介绍">
<template #desc>
过滤掉无意义的值
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
const testObj = [
  {
    a: '',
    b: 123,
    c: null,
    d: undefined,
  },
  {
    a: '',
    b: 123,
    c: null,
    d: undefined,
    e: [
      {
        a: '',
        b: 123,
        c: null,
        d: undefined,
      },
      {
        e: [],
        f: [1, 2, 3, '', null],
        g: {},
        h: { x: 1, y: '', z: null },
      },
    ],
    f: [1, 2, 3, '', null],
    g: {},
    h: { x: 1, y: '', z: null },
  },
];

_removeEmptyField(testObj);
/*
[
  {
    b: 123,
  },
  {
    b: 123,
    e: [
      {
        b: 123,
      },
      {
        f: [1, 2, 3],
        h: {
          x: 1,
        },
      },
    ],
    f: [1, 2, 3],
    h: {
      x: 1,
    },
  },
]
*/
```

<CodeBox>
<template #codes>

```ts
/**
 * @description 移除对象或数组中的空字段。
 * @param data 要处理的数据。
 * @param excludes 要排除的值，默认排除空字符串、null 和 undefined。
 * @returns 处理后的新对象或数组。
 */
export function _removeEmptyField(data: any, excludes = ['', null, undefined]) {
  let newObj: any = {};
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }
  if (Array.isArray(data)) {
    newObj = [];
    for (const item of data) {
      newObj.push(_removeEmptyField(item, excludes));
    }
  } else if (data instanceof Object) {
    for (const attr in data) {
      if (!excludes.includes(data[attr])) {
        if (data[attr] instanceof Object) {
          if (JSON.stringify(data[attr]) === '{}' || JSON.stringify(data[attr]) === '[]') {
            continue;
          }
          newObj[attr] = _removeEmptyField(data[attr], excludes);
        } else if (typeof data[attr] === 'string' && (data[attr].includes('{') || data[attr].includes('['))) {
          try {
            const attrObj = JSON.parse(data[attr]);
            if (attrObj instanceof Object) {
              newObj[attr] = _removeEmptyField(attrObj, excludes);
            } else {
              newObj[attr] = data[attr];
            }
          } catch (e) {
            newObj[attr] = data[attr];
          }
        } else {
          newObj[attr] = data[attr];
        }
      }
    }
  }
  return newObj;
}
```
</template>
</CodeBox>
</ContainerBox>