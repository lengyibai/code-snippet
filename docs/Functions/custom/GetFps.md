# $getFps

<ContainerBox title="介绍">
<template #desc>
实时获取当前网页的fps
</template>
</ContainerBox>

<ContainerBox title="基础用法">

```js
$getFps();
```

<ShowCode>
<template #codes>

```js
let start = 0;
let count = 0;
export const $getFps = () => {
  count++;
  const current = performance.now();
  if (start === undefined) start = current;
  if (current - start >= 1000) {
    console.log(`FPS: ${count}`);
    start = current;
    count = 0;
  }
  window.requestAnimationFrame(getFPS);
};
```

</template>
</ShowCode>
</ContainerBox>
