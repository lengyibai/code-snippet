# $browserV

<ContainerBox title="介绍">
<template #desc>
判断用户浏览器到没达到要求的版本，没达到让他升级
</template>
</ContainerBox>

<ContainerBox title="基础用法">

```js
console.log($browserV); //{browser:"",version:0}
```

<ShowCode>
<template #codes>

```js
export const $browserV = (() => {
  const ua = navigator.userAgent;
  let browser = 0;
  let version = 0;
  if (ua.indexOf("Chrome") > -1) {
    browser = "chrome";
    version = Number(
      ua
        .match(/Chrome\/[\d.]+/)[0]
        .split("/")[1]
        .split(".")[0]
    );
  } else if (ua.indexOf("Safari") > -1) {
    browser = "safari";
    version = Number(
      ua
        .match(/Version\/[\d.]+/)[0]
        .split("/")[1]
        .split(".")[0]
    );
  }
  return { browser, version };
})();
```

</template>
</ShowCode>
</ContainerBox>
