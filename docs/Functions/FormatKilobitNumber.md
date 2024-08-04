# _formatKilobitNumber

<ContainerBox title="介绍" noGap>
<template #desc>

将大于1000的数字使用`k`为单位，大于100k的数字使用`w`为单位，大于1000w的数字使用`kw`为单位。
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<template #desc>

```ts
_formatKilobitNumber(100000); // "100k"
_formatKilobitNumber(10000000); // "1000w"
_formatKilobitNumber(100000000); // "10kw"
```

</template>

<CodeBox>
<template #codes>

```ts
/** @description 将大于1000的数字使用k为单位
 * @param num 数字
 */
export const _formatKilobitNumber = (num: number) => {
  if (num >= 100000000) {
    return `${ (num / 10000000).toFixed(1) }kw`;
  } else if (num >= 1000000) {
    return `${ (num / 10000).toFixed(1) }w`;
  } else if (num >= 1000) {
    return `${ (num / 1000).toFixed(1) }k`;
  } else {
    return num.toString();
  }
};
```
</template>
</CodeBox>
</ContainerBox>
