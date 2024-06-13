# _fmtNum

<ContainerBox title="介绍">
<template #desc>
每隔三位数字加逗号，并保留两位小数
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<template #desc>

```ts
_fmtNum(1000); //1,000
```

</template>

<CodeBox>
<template #codes>

```ts
/**
 * @description 格式化数字为千分位。
 * @param num 需要格式化的数字。
 */
export const _fmtNum = (num: number) => {
  const str = num.toFixed(2).toString(); // 先将数字保留两位小数并转为字符串
  const reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
  return str.replace(reg, "$1,");
}
```
</template>
</CodeBox>
</ContainerBox>
