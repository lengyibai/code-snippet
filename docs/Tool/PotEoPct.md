# _potEoPct

<ContainerBox title="介绍">
<template #desc>
把计算好的小数用来展示百分比进度，但需要手动加百分比符号
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
_potEoPct(0.12345, 2); //12.35
_potEoPct('12.34%'); //0.1234
```
<CodeBox>
<template #codes>

```ts
/**
 * @description 将字符串百分比转换为小数或将小数转换为百分比字符串。
 * @param str 字符串百分比或小数。
 * @param ret 要保留的小数位数，默认为0。
 */
export function _potEoPct(str: string | number, ret: number = 0) {
  if (typeof str === 'string') return parseFloat(str.replace('%', '')) / 100;
  return Number((str * 100).toFixed(ret));
}
```
</template>
</CodeBox>
</ContainerBox>