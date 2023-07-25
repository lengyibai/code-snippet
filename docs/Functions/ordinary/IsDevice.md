# $isDevice

<ContainerBox title="介绍">
<template #desc>
判断设备类型
</template>
</ContainerBox>

<ContainerBox title="基础用法">
<template #desc>

```js
const userAgent = navigator.userAgent;
/** 判断是否为安卓设备 */
const isAndroid = /Android/i.test(userAgent);
/** 判断是否为iOS设备 */
const isiOS = /(iPhone|iPod|iPad)/i.test(userAgent);
/** 当前的下载链接 */

const platform = navigator.platform;
/** 判断是否为Windows设备 */
const isWindows = platform.indexOf("Win") !== -1;
/** 判断是否为Mac设备 */
const isMac = platform.indexOf("Mac") !== -1;
```

</template>
</ContainerBox>
