# _controlledDelayedCall

<ContainerBox title="介绍">
<template #desc>
目前用于游戏一些再次点击结束延迟调用的场景
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
//调用stop会立即停止延迟调用
const { start, stop } = _controlledDelayedCall(10000);
await start;
```
<CodeBox>
<template #codes>

```ts
/** @description 可控延迟调用函数 */
export const _controlledDelayedCall = (time: number) => {
  let _resolve: any;
  let timer: NodeJS.Timeout;

  const start = new Promise<void>((resolve) => {
    _resolve = resolve;
    timer = setTimeout(() => {
      resolve();
    }, time);
  });

  const stop = () => {
    clearTimeout(timer);
    _resolve();
  };

  return {
    start,
    stop,
  };
};
```
</template>
</CodeBox>
</ContainerBox>
