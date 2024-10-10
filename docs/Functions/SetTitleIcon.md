# _setTitleIcon

<ContainerBox title="介绍">
<template #desc>
设置网站标题及图标
</template>
</ContainerBox>

<ContainerBox noGap>
<CodeBox>
<template #codes>

```ts
/** @description 设置网站标题及图标 */
export const _setTitleIcon = (name: string, url: string) => {
  document.title = name;
  const link = document.createElement("link");
  link.setAttribute("rel", "icon");
  link.setAttribute("href", url);

  const head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(link);
};
```
</template>
</CodeBox>
</ContainerBox>
