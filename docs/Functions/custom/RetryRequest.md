# $retryRequest

<ContainerBox title="介绍">
<template #desc>
当传递的接口请求失败后，会重新请求，直到请求成功
</template>
</ContainerBox>

<ContainerBox title="基础用法">

```js
const res = await Util.TOOL.retryRequest(API_GAME.flows, {
  noType: 7,
});
```

<ShowCode>
<template #codes>

```ts
export const $retryRequest = <T>(
  promiseFn: (params?: any) => Promise<T>,
  params?: any
): Promise<T> => {
  return new Promise((resolve, reject) => {
    let count = 0;
    const makeRequest = () => {
      count++;

      if (count >= 6) {
        reject("网络繁忙");
        return;
      }
      promiseFn(params)
        .then((result) => {
          resolve(result);
        })
        .catch(() => {
          setTimeout(makeRequest, 2000);
        });
    };

    makeRequest();
  });
};
```

</template>
</ShowCode>
</ContainerBox>
