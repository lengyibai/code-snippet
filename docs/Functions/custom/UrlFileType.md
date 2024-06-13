# _urlFileType

<ContainerBox title="介绍">
<template #desc>
为了限制用户上传文件
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<template #desc>
判断时，内部自动将后缀名全小写进行判断
</template>

```ts
_urlFileType('文件.213.JPEG', ['zip', '7z', 'rar']); //false
_urlFileType('文件.213.7z', ['zip', '7z', 'rar']); //true
```

<CodeBox>
<template #codes>

```ts
/**
 * @description 检查URL的文件类型是否与给定的类型匹配。
 * @param url 文件的URL。
 * @param type 要检查的文件类型。
 */
export const _urlFileType = (url: string, type: string[]) => {
  return type.includes(url.replace(/.+\./, '').toLowerCase());
};
```

</template>
</CodeBox>
</ContainerBox>