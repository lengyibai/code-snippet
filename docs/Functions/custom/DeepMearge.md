# $deepMearge

<ContainerBox title="介绍">
<template #desc>

灵感来自`Echarts`，可重复调用的`setOption`，配置项会被合并或覆盖
</template>
</ContainerBox>

<ContainerBox title="基础用法">

```js
const options1 = {
  style: {
    data: [1, 2, 3],
    color: '#fff',
    fontSize: '18px',
    other: {
      data: [4, 5, 6],
      fontWeight: 'blod',
      color: '#000',
    },
  },
};
const options2 = {
  style: {
    data: [4, 5, 6],
    fontWeight: 'blod',
    color: '#000',
    other: {
      data: [1, 2, 3],
      color: '#fff',
      fontSize: '18px',
    },
  },
};

deepMearge(options1, options2);
/*
{
  data: [ 1, 2, 3, 4, 5, 6 ],
  color: "#000",
  fontSize: "18px",
  other: {
      data: [ 4, 5, 6, 1, 2, 3 ],
      fontWeight: "blod",
      color: "#fff",
      fontSize: "18px"
  },
  fontWeight: "blod"
}
*/
```

<ShowCode>
<template #codes>

```js
export function $deepMearge(obj, target = {}) {
  for (let key in target) {
    let isA = Object.prototype.toString.call(obj[key]) === '[object Object]',
      isB = Object.prototype.toString.call(target[key]) === '[object Object]';
    if (isA && isB) {
      obj[key] = deepMearge(obj[key], target[key]);
    } else if (Array.isArray(obj[key]) && Array.isArray(target[key])) {
      obj[key] = Array.from(new Set(obj[key].concat(target[key])));
    } else {
      obj[key] = target[key];
    }
  }
  return obj;
}
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="Params">
<template #desc>

| 参数 | 说明                                                 | 类型             |
| ---- | ---------------------------------------------------- | ---------------- |
| str  | 传递要复制的值                                       | String \| Number |
| fn   | 复制成功后将会调用，并可以接收参数，参数为复制的内容 |                  |

</template>
</ContainerBox>
