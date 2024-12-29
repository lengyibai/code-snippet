# _type

<ContainerBox title="介绍">
<template #desc>
返回的数据类型为全小写的字符串
</template>
</ContainerBox>

<ContainerBox title="基础用法"  noGap>

```ts
_type('5555'); //string
_type(123); //number
_type(false); //boolean
_type([5, 5]); //array
_type(function () {}); //function
_type({ a: 1 }); //object
```
<CodeBox>
<template #codes>

```ts
/**
 * @description 返回数据类型
 */
export const _type = (o: any): 'string'|'number'|'boolean'|'array'|'function'|'object' => {
  return Object.prototype.toString.call(o).substring(8).replace(/]/g, "").toLowerCase();
};
```
</template>
</CodeBox>
</ContainerBox>
