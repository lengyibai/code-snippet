# _downloadImage

<ContainerBox title="介绍">
<template #desc>
通过请求的方式，下载图片到本地
</template>
</ContainerBox>

<ContainerBox title="基础用法">
<CodeBox>
<template #codes>

```ts
/** @description 下载图片链接
 * @param link 图片链接
 * @param name 图片名称
 */
export const _downloadImage = (link: string, name: string) => {
  fetch(link)
    .then((res) => res.blob())
    .then((blob) => {
      const a = document.createElement("a");
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = name;
      a.click();
    });
};
```
</template>
</CodeBox>
</ContainerBox>
