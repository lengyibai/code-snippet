# _browserV

<ContainerBox title="介绍">
<template #desc>
判断用户浏览器到没达到要求的版本
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
console.log(_browserV); //{browser:"",version:0}
```
<CodeBox>
<template #codes>

```ts
export const _browserV = (() => {
  const ua = navigator.userAgent;
  let browser = "";
  let version = 0;
  if (ua.indexOf("Chrome") > -1) {
    browser = "chrome";
    version = Number(
      ua
        .match(/Chrome\/[\d.]+/)![0]
        .split("/")[1]
        .split(".")[0],
    );
  } else if (ua.indexOf("Safari") > -1) {
    browser = "safari";
    version = Number(
      ua
        .match(/Version\/[\d.]+/)![0]
        .split("/")[1]
        .split(".")[0],
    );
  } else if (ua.indexOf("Firefox") > -1) {
    browser = "firefox";
    version = Number(
      ua
        .match(/Firefox\/[\d.]+/)![0]
        .split("/")[1]
        .split(".")[0],
    );
  }
  return { browser, version };
})();
```
</template>
</CodeBox>
</ContainerBox>
