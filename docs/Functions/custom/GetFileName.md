# $getFileName

<ContainerBox title="介绍">
<template #desc>
有些时候我们不想要后缀名
</template>
</ContainerBox>

<ContainerBox title="基础用法">

```js
$getFileName('冷弋白.lyb.png'); //冷弋白.lyb
```

<ShowCode>
<template #codes>

```js
export function $getFileName(str) {
  return str.replace(/\.\w+$/, '');
}
```

</template>
</ShowCode>
</ContainerBox>
