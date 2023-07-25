# $strDelReps

<ContainerBox title="介绍">
<template #desc>
去掉字符串连续重复的字符
</template>
</ContainerBox>

<ContainerBox title="连续">
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
