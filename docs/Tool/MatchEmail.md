# _matchEmail

<ContainerBox title="介绍">
<template #desc>
针对一些邮箱输入框输入时下拉快速选择邮箱后缀
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
/** 邮箱可选列表 */
const emails = [
  "@gmail.com",
  "@hotmail.com",
  "@yahoo.com.br",
  "@yahoo.com",
  "@outlook.com",
  "@bol.com.br",
  "@bol.com",
  "@icloud.com",
];
_matchEmail("132967", emails);
/*
[
  "132967@gmail.com",
  "132967@hotmail.com",
  "132967@yahoo.com.br",
  "132967@yahoo.com",
  "132967@outlook.com",
  "132967@bol.com.br",
  "132967@bol.com",
  "132967@icloud.com",
]
 */
```

<CodeBox>
<template #codes>

```ts
/**
 * @description 匹配电子邮件。
 * @param str 要匹配的字符串。
 * @param email_list 电子邮件列表。
 * @returns 匹配结果数组。
 */
export const _matchEmail = (str: string, email_list: string[]) => {
  return str.includes("@")
    ? email_list
        .filter((item) => item.includes(str.slice(str.indexOf("@"))))
        .map((item) => (str.includes("@") ? str.split("@")[0] : str) + item)
    : email_list.map((item) => str + item);
};
```

</template>
</CodeBox>
</ContainerBox>
