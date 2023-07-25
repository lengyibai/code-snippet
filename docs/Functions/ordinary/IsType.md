# $isArray

<ContainerBox title="介绍">
<template #desc>
判断是否为指定类型的数据
</template>
</ContainerBox>

<ContainerBox title="基础用法">
<template #desc>

返回`Boolean`值

</template>

```js
$isArray([]), //true
  $isBoolean(false), //true
  $isObject({}), //true
  $isString(''), //true
  $isFunction(() => {}); //true
```

<ShowCode>
<template #codes>

```js
export function $isArray(type) {
  return Object.prototype.toString.call(type) === '[object Array]';
}
export function $isBoolean(type) {
  return Object.prototype.toString.call(type) === '[object Boolean]';
}
export function $isObject(type) {
  return Object.prototype.toString.call(type) === '[object Object]';
}
export function $isString(type) {
  return Object.prototype.toString.call(type) === '[object String]';
}
export function $isFunction(type) {
  return Object.prototype.toString.call(type) === '[object Function]';
}
```

</template>
</ShowCode>
</ContainerBox>
