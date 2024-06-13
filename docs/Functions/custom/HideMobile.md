# _hideMobile

<ContainerBox title="介绍" noGap>
<template #desc>

将手机号中间部分替换为`*`
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
_hideMobile(12345678910); //123****8910
```
<CodeBox>

<template #codes>

```ts
/**
 * @description 隐藏手机号码中间的四位数字。
 * @param mobile 需要处理的手机号码。
 */
export const _hideMobile = (mobile: number | string) => {
  const m = mobile.toString();
  return m.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
}
```
</template>
</CodeBox>
</ContainerBox>