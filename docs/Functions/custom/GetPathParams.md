# $getPathParams

<ContainerBox title="介绍">
</ContainerBox>

<ContainerBox title="基础用法">
<template #desc>
直接调用即可，返回一个参数对象
</template>

```js
$getPathParams();
```

<ShowCode>
<template #codes>

```js
export function $getPathParams() {
  let url = decodeURI(location.search);
  let params = {};
  if (url.indexOf('?') != -1) {
    let str = url.substr(1);
    let strs = str.split('&');
    for (let i = 0; i < strs.length; i++) {
      params[strs[i].split('=')[0]] = strs[i].split('=')[1];
    }
  }
  return params;
}
```

</template>
</ShowCode>
</ContainerBox>
