# $type

<ContainerBox title="介绍">
<template #desc>
返回的数据类型为全小写的字符串
</template>
</ContainerBox>

<ContainerBox title="基础用法">

```js
$type('5555'); //string
$type(123); //number
$type(false); //boolean
$type([5, 5]); //array
$type(function () {}); //function
$type({ a: 1 }); //object
```

<ShowCode>
<template #codes>

```js
export function $type(o) {
  return Object.prototype.toString.call(o).substr(8).replace(/]/g, '').toLowerCase();
}
```

</template>
</ShowCode>
</ContainerBox>
