# $fmtTime

<ContainerBox title="介绍">
<template #desc>
一般用于向后端传递指定的时间格式
</template>
</ContainerBox>

<ContainerBox title="基础用法">
<template #desc>
默认返回当前时间，可传时间戳和指定格式的时间（假定当前时间为2023-04-09 01:17:32）

如果需要使用年月日时分秒的单位，可自行修改源码
</template>

```js
console.log($fmtTime()); //2023-04-09 01:17:32
console.log($fmtTime(new Date().getTime(), "Y-M-D")); //2023-04-09
console.log($fmtTime("2022-02-22 22:22:22", "h:m:s")); //22:22:22
```

<ShowCode>
<template #codes>

```js
export const $fmtTime = (
  time = new Date(),
  format = "Y-M-D h:m:s",
  noLeadZero = false
) => {
  const date = new Date(time);
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString();
  const week = "日一二三四五六".charAt(date.getDay());
  const day = date.getDate().toString();
  const hour = date.getHours().toString();
  const minute = date.getMinutes().toString();
  const second = date.getSeconds().toString();

  const placeholders = {
    Y: year,
    M: noLeadZero ? month : month.padStart(2, "0"),
    D: noLeadZero ? day : day.padStart(2, "0"),
    h: noLeadZero ? hour : hour.padStart(2, "0"),
    m: noLeadZero ? minute : minute.padStart(2, "0"),
    s: noLeadZero ? second : second.padStart(2, "0"),
    w: week,
  };

  let result = format;
  for (let key in placeholders) {
    result = result.replace(key, placeholders[key]);
  }

  return result;
};
```

</template>
</ShowCode>
</ContainerBox>
