# $objDelRep

<ContainerBox title="介绍">
<template #desc>
根据指定对象属性名，去掉数组内与包含唯一`id`相同的对象，只会保留第一个
</template>
</ContainerBox>

<ContainerBox title="基础用法">

```js
const arr = [
  { id: 1, name: 'lyb' },
  { id: 1, name: 'lengyibai' },
  { id: 2, name: '冷弋白' },
];
console.log($objDelRep(arr, 'id')); //[ { id: 1, name: 'lyb', }, { id: 2, name: '冷弋白', }, ];
```

<ShowCode>
<template #codes>

```js
export function $objDelRep(arr, key) {
  let data = arr;
  let obj = {};
  data = data.reduce((a, b) => {
    obj[b[key]] ? '' : (obj[b[key]] = true && a.push(b));
    return a;
  }, []);
  return data;
}
```

</template>
</ShowCode>
</ContainerBox>
