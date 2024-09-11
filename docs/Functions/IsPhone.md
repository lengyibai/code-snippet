# _isPhone

<ContainerBox title="介绍">
<template #desc>
判断是否移动端访问
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<template #desc>

返回`Boolean`值

```ts
console.log(_isPhone);
```

</template>
<CodeBox>
<template #codes>

```ts
export const _isPhone = (() => {
  const width = screen.width;
  const height = screen.height;
  const aspectRatio = width > height ? width / height : height / width;

  const isPad = aspectRatio > 1 && aspectRatio < 1.7;
  return /mobile|Android|iPhone/i.test(navigator.userAgent) && !isPad;
})();
```

</template>
</CodeBox>
</ContainerBox>
