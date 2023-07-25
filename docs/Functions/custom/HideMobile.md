# $hideMobile

<ContainerBox title="介绍">
<template #desc>

将手机号中间部分替换为`*`
</template>
</ContainerBox>

<ContainerBox title="基础用法">

```js
$hideMobile(12345678910); //123****8910
```

<ShowCode>

<template #codes>

```js
export function $hideMobile(mobile) {
  const m = mobile.toString();
  return m.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
}
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="Params">
<template #desc>

| 参数   | 说明       | 类型             |
| ------ | ---------- | ---------------- |
| mobile | 传递手机号 | String \| Number |

</template>
</ContainerBox>
