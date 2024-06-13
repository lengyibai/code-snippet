# _promiseTimeout

<ContainerBox title="介绍" noGap>
<template #desc>

Promise定时器，解决回调地狱，使用方法与原生`setTimeout`一样
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<template #desc>

```ts
(async function () {
  await _promiseTimeout(1000, () => console.log(1));
  await _promiseTimeout(1000, () => console.log(2));
  await _promiseTimeout(1000, () => console.log(3));
  await _promiseTimeout(1000, () => console.log(4));
  await _promiseTimeout(1000, () => console.log(5));
  await _promiseTimeout(1000, () => console.log(6));
  await _promiseTimeout(1000, () => console.log(7));
  await _promiseTimeout(1000, () => console.log(8));
  await _promiseTimeout(1000, () => console.log(9));
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
<CodeBox>
<template #codes>

```ts
/** @description Promise定时器
 * @param delay 延迟时间
 * @param fn 延迟后执行的函数
 */
export const _promiseTimeout = (delay = 1, fn?: () => void) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      fn?.();
      resolve();
    }, delay);
  });
};
```
</template>
</CodeBox>
</ContainerBox>
