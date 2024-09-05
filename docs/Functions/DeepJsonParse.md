# _deepJsonParse

<ContainerBox title="介绍" noGap>
<template #desc>

将对象深度`JSON.parse`
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<CodeBox>
<template #codes>

```ts
/** @description 深度JSON解析 */
export const _deepParse = (json: string) => {
  let result;

  try {
    result = JSON.parse(json);
  } catch (e) {
    return json;
  }

  if (typeof result === "object" && result !== null) {
    for (const key in result) {
      result[key] = _deepParse(result[key]);
    }
  }

  return result;
};
```
</template>
</CodeBox>
</ContainerBox>