# _getPathParams

<ContainerBox title="介绍">
<template #desc>
获取地址栏参数
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<CodeBox>
<template #codes>

```ts
/** @description 获取地址栏参数
 * @param key 参数名
 */
export const _getPathParams = () => {
  const v = location.href;
  const url = v.split("?")[1];

  if (!url) return;

  const p: Record<string, string> = url.split("&").reduce((pre: Record<string, string>, cur) => {
    const [k, v] = cur.split("=");
    return (pre[k] = v), pre;
  }, {});

  return p;
};
```
</template>
</CodeBox>
</ContainerBox>
