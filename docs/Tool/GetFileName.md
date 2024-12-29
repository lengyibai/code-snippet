# _getFileName

<ContainerBox title="介绍">
<template #desc>
有些时候我们不想要后缀名
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
_getFileName('冷弋白.lyb.png'); //冷弋白.lyb
```

<CodeBox>
<template #codes>

```ts
/**
 * @description 获取文件名（去除文件扩展名）。
 * @param str 包含文件名的字符串。
 */
export const _getFileName = (str: string) => {
  return str.replace(/\.\w+$/, '');
};
```
</template>
</CodeBox>
</ContainerBox>
