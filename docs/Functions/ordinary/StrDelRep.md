# $strDelRep

<ContainerBox title="介绍">
<template #desc>
去掉字符串重复的字符
</template>
</ContainerBox>

<ContainerBox title="基础用法">

```js
$strDelRep('1233211234567'); //'1234567'
```

<ShowCode>
<template #codes>

```js
export function $strDelRep(v) {
  let obj = {},
    str = '',
    len = v.length;
  for (let i = 0; i < len; i++) {
    if (!obj[v[i]]) {
      str += v[i];
      obj[v[i]] = true;
    }
  }
  return str;
}
```

</template>
</ShowCode>
</ContainerBox>
