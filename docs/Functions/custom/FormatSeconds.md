# $formatSeconds

<ContainerBox title="介绍">
<template #desc>

格式化秒数，如果想拆分，可使用 `join(':')` 转成数组
</template>
</ContainerBox>

<ContainerBox title="基础用法">

```js
console.log($formatSeconds(3699, true)); // 01:59:59
console.log($formatSeconds(3699, false)); // 01:59
```

<ShowCode>
<template #codes>

```js
export const $formatSeconds = (seconds, hours) => {
  let sec = seconds;
  if (hours) {
    return [3600, 60, 1]
      .map((unit) => {
        const value = Math.floor(sec / unit);
        sec -= unit * value;
        return value.toString().padStart(2, "0");
      })
      .reduce((acc, cur) => acc + ":" + cur);
  } else {
    let minute: number | string = parseInt(sec / 60);
    let second: number | string = parseInt(sec % 60);
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    return minute + ":" + second;
  }
};
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="Params">
<template #desc>

| 参数    | 说明           | 类型    |
| ------- | -------------- | ------- |
| seconds | 秒数           | Number  |
| hour    | 是否精确到小时 | Boolean |

</template>
</ContainerBox>
