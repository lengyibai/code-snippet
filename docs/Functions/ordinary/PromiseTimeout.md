# $promiseTimeout

<ContainerBox title="介绍">
<template #desc>
Promise定时器，解决回调地狱，使用方法与原生`setTimeout`一样
</template>
</ContainerBox>

<ContainerBox title="基础用法">
<template #desc>

```js
(async function () {
  await $promiseTimeout(() => console.log(1), 1000);
  await $promiseTimeout(() => console.log(2), 1000);
  await $promiseTimeout(() => console.log(3), 1000);
  await $promiseTimeout(() => console.log(4), 1000);
  await $promiseTimeout(() => console.log(5), 1000);
  await $promiseTimeout(() => console.log(6), 1000);
  await $promiseTimeout(() => console.log(7), 1000);
  await $promiseTimeout(() => console.log(8), 1000);
  await $promiseTimeout(() => console.log(9), 1000);
})();

//等同于

setTimeout(() => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    setTimeout(() => {
      console.log(3);
      setTimeout(() => {
        console.log(4);
        setTimeout(() => {
          console.log(5);
          setTimeout(() => {
            console.log(6);
            setTimeout(() => {
              console.log(7);
              setTimeout(() => {
                console.log(8);
                setTimeout(() => {
                  console.log(9);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
```

</template>
<ShowCode>
<template #codes>

```js
export function $promiseTimeout(fn, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fn();
      resolve();
    }, delay);
  });
}
```

</template>
</ShowCode>
</ContainerBox>
