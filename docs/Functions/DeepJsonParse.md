# _deepJSONParse

<ContainerBox title="介绍" noGap>
<template #desc>

将数组、字符串、对象深度`JSON.parse`
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<CodeBox>
<template #codes>

```ts
/** @description 递归将JSON字符串深度解析为对象 */
export const _deepJSONParse = (data: any): any => {
  // 检查是否为字符串并尝试解析
  if (typeof data === "string") {
    try {
      const parsed = JSON.parse(data);
      // 递归解析解析后的结果
      return _deepJSONParse(parsed);
    } catch {
      // 如果解析失败，返回原始字符串
      return data;
    }
  }

  // 如果是数组，递归处理每个元素
  if (Array.isArray(data)) {
    return data.map((item) => _deepJSONParse(item));
  }

  // 如果是对象，递归处理每个属性值
  if (data !== null && typeof data === "object") {
    return Object.keys(data).reduce((acc: Record<string, any>, key) => {
      acc[key] = _deepJSONParse(data[key]);
      return acc;
    }, {});
  }

  // 其他情况返回原始值
  return data;
};
```
</template>
</CodeBox>
</ContainerBox>