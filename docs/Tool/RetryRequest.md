# _retryRequest

<ContainerBox title="介绍" noGap>
<template #desc>

当传递的接口请求失败后，会重新请求`n`次，直到请求成功
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
_retryRequest({
  promiseFn: API_DATA.Notice,
})
  .then((res) => {
    notice.value = res.data;
  })
  .catch(() => {
    $message($msgTipText("rc53", { v: "系统公告" }), "error");
  })
  .finally(() => {
    loading.value = false;
  });
```

<CodeBox>
<template #codes>

```ts
/** @description 请求失败重连
 * @param promiseFn 请求函数
 * @param maxRetries 最大重试次数
 * @param retryDelay 重试间隔时间
 * @param params 请求参数
 */
export const _retryRequest = <T>({
  promiseFn,
  maxRetries = 3,
  retryDelay = 2000,
  params = undefined,
}: {
  promiseFn: (params?: any) => Promise<T>;
  params?: any;
  maxRetries?: number;
  retryDelay?: number;
  onRetry?: () => void;
}): Promise<T> => {
  return new Promise((resolve, reject) => {
    let count = 0;
    const makeRequest = () => {
      promiseFn(params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          count++;
          if (count >= maxRetries) {
            reject(err);
            return;
          }
          setTimeout(makeRequest, retryDelay);
        });
    };

    makeRequest();
  });
};
```

</template>
</CodeBox>
</ContainerBox>
