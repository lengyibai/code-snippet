# $removeEmptyField

<ContainerBox title="介绍">
<template #desc>
过滤掉无意义的值
</template>
</ContainerBox>

<ContainerBox title="基础用法">

```js
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

$removeEmptyField(testObj);
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

<ShowCode>
<template #codes>

```js
export function $removeEmptyField(data, excludes = ['', null, undefined]) {
  let newObj = {};
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }
  if (data instanceof Array) {
    newObj = [];
  }
  if (data instanceof Object) {
    for (const attr in data) {
      if (!excludes.includes(data[attr])) {
        if (data[attr] instanceof Object) {
          if (JSON.stringify(data[attr]) === '{}' || JSON.stringify(data[attr]) === '[]') {
            continue;
          }
          newObj[attr] = $removeEmptyField(data[attr]);
        } else if (
          typeof data[attr] === 'string' &&
          ((data[attr].indexOf('{') > -1 && data[attr].indexOf('}') > -1) ||
            (data[attr].indexOf('[') > -1 && data[attr].indexOf(']') > -1))
        ) {
          try {
            const attrObj = JSON.parse(data[attr]);
            if (attrObj instanceof Object) {
              newObj[attr] = $removeEmptyField(attrObj);
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
</ShowCode>
</ContainerBox>

<ContainerBox title="Params">
<template #desc>

| 参数     | 说明                 | 类型            | 可选值                             |
| -------- | -------------------- | --------------- | ---------------------------------- |
| data     | 传递要进行过滤的数据 | Array \| Object | -                                  |
| excludes | 要过滤的参数         | Array           | ["" \| null \| undefined] （多选） |

</template>
</ContainerBox>
