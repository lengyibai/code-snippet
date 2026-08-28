# _getFileSizeInKB

<ContainerBox title="介绍" noGap>
<template #desc>

计算文件大小，返回`KB`
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
_getFileSizeInKB(File);
```

<CodeBox>
<template #codes>

```ts
/** @description 计算文件大小
 * @param file 文件对象
 * @returns 文件大小KB
 */
export const _getFileSizeInKB = (file: any) => {
  const str = JSON.stringify(file, null, 2);
  const blob = new Blob([str]);
  const fileSizeInBytes = blob.size;
  const fileSizeInKB = (fileSizeInBytes / 1024).toFixed(2);
  return Number(fileSizeInKB);
};
```

</template>
</CodeBox>
</ContainerBox>