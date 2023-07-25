# $throttle

<ContainerBox title="介绍">
<template #desc>
不管流得再猛，也必须给我限速

使用方法与 [防抖](/Functions/custom/Debounce.html) 一致

::: warning
与一般节流不同，此节流不可在同一函数作用域使用多个，但可以节流套节流使用
:::
</template>
</ContainerBox>

<ContainerBox title="节流（延迟执行）">
<ShowCode>
<template #codes>

```js
export const $throttleDelay = (() => {
  let timer;
  return function (fn, delay) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn();
      }, delay);
    }
  };
})();
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="节流（立即执行）">
<ShowCode>
<template #codes>

```js
export const $throttleInstant = (() => {
  let last = 0;
  return (callback, wait = 800) => {
    let now = +new Date();
    if (now - last > wait) {
      callback();
      last = now;
    }
  };
})();
```

</template>
</ShowCode>
</ContainerBox>
