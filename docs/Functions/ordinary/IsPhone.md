# $isPhone

<ContainerBox title="介绍">
<template #desc>
判断是否移动端访问
</template>
</ContainerBox>

<ContainerBox title="基础用法">
<template #desc>

返回`Boolean`值

```js
console.log($isPhone);
```

</template>
<ShowCode>
<template #codes>

```js
export const $isPhone = (() => /mobile/i.test(navigator.userAgent))();
```

</template>
</ShowCode>
</ContainerBox>
