# _strDelRep

<ContainerBox title="介绍">
<template #desc>
去掉字符串重复的字符
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
_strDelRep('1233211234567'); //'1234567'
```

<CodeBox>
<template #codes>

```ts
/**
 * @description 删除字符串中的重复字符。
 * @param v 需要处理的字符串。
 */
export const _strDelRep = (v: string) => {
  const obj: { [key: string]: boolean } = {};
  let str = "";
  const len = v.length;

  for (let i = 0; i < len; i++) {
    if (!obj[v[i]]) {
      str += v[i];
      obj[v[i]] = true;
    }
  }

  return str;
}
```

</template>
</CodeBox>
</ContainerBox>
