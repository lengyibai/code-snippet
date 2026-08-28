# _fmtByte

<ContainerBox title="介绍">
<template #desc>
一般用于上传文件时限制文件上传大小
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<template #desc>

返回一个数组，数组元素分别是`['大小', '单位', '大小及单位']`
</template>

```ts
_fmtByte(2000); //['1.95', 'KB', '1.95 KB']
_fmtByte(2048); //['2.00', 'KB', '2.00 KB']
```
<CodeBox>
<template #codes>

```ts
/**
 * @description 格式化字节大小。
 * @param bytes 字节数。
 */
export function _fmtByte(bytes: number) {
  if (!bytes) return [0, 'B', '0 B'];
  let k = 1024,
    size = 0,
    sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  i = Math.min(i, sizes.length - 1); // 防止超出数组范围
  size = (bytes / k ** i).toFixed(2) ? (bytes / k ** i).toFixed(2) : 0;
  return [parseFloat(size), sizes[i], `${size} ${sizes[i]}`];
}
```
</template>
</CodeBox>
</ContainerBox>
