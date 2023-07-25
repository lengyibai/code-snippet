# $fmtNum

<ContainerBox title="介绍">
<template #desc>
每隔三位数字加逗号，并保留两位小数
</template>
</ContainerBox>

<ContainerBox title="基础用法">
<template #desc>

```js
$fmtNum(1000); //1,000
```

</template>

<ShowCode>
<template #codes>

```js
export function $fmtNum(num) {
  const str = num.toFixed(2).toString(); // 先将数字保留两位小数并转为字符串
  const reg =
    str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
  return str.replace(reg, "$1,");
}
```

</template>
</ShowCode>
</ContainerBox>
