# $retryRequest

<ContainerBox title="介绍">
<template #desc>
当传递的接口请求失败后，会重新请求，直到请求成功
</template>
</ContainerBox>

<ContainerBox title="基础用法">

```js
const promiseFn = () => {
  return new Promise((_, reject) => {
    reject();
  });
};
$retryRequest(promiseFn).then((res) => {
  console.log(res);
});
```

<ShowCode>
<template #codes>

```js
export const $retryRequest = (promiseFn, delay = 3000) => {
  return new Promise((resolve) => {
    const makeRequest = () => {
      promiseFn()
        .then((result) => {
          resolve(result);
        })
        .catch(() => {
          setTimeout(makeRequest, delay);
        });
    };

    makeRequest();
  });
};
```

</template>
</ShowCode>
</ContainerBox>
