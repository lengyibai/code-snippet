# _repStr

<ContainerBox title="介绍">
<template #desc>
可去掉不想要的字符或替换成自己想要的字符

可以将多个字符替换成一个
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
const a = 'id: GROUP@TGS#GROUP4X4JBGRH2';
_repStr(a, 'GROUP'); //id: @TGS#4X4JBGRH2

const b = 'Hello World!';
_repStr(b, 'World', 'Vue'); //Hello Vue!

const c = 'React! Angular!';
_repStr(c, 'React|Angular', 'Vue'); //Vue! Vue!
```
<CodeBox>
<template #codes>

```ts
/**
 * @description 替换字符串中的匹配项。
 * @param str 需要替换的字符串。
 * @param match 要替换的匹配项。
 * @param rep 替换后的内容，默认为空字符串。
 */
export const _repStr = (str: string, match: string, rep: string = '') => {
  return str.replace(new RegExp(match, 'g'), rep);
};
```

</template>
</CodeBox>
</ContainerBox>