# $timeCount

<ContainerBox title="介绍">
<template #desc>
一般记录网站已运行时间和倒计时
</template>
</ContainerBox>

<ContainerBox title="基础用法">
<template #desc>
计算两个时间戳的时间差，取绝对值
</template>

```js
const date1 = new Date("2022-01-01 00:00:00").getTime();
const date2 = new Date("2022-12-30 23:59:59").getTime();
const timeDiff = getTimeDiff(date1, date2);
console.log(timeDiff);
/*
{
  year: '00',
  month: '12',
  day: '03',
  hour: '23',
  minute: '59',
  second: '59'
}
*/
```

<ShowCode>
<template #codes>

```js
export const $timeCount = (date1, date2 = new Date().getTime()) => {
  const diff = Math.abs(date1 - date2);
  const year = Math.floor(diff / 31536000000); // 一年 = 31536000000 毫秒
  const month = Math.floor((diff % 31536000000) / 2592000000); // 一个月 = 2592000000 毫秒
  const day = Math.floor((diff % 2592000000) / 86400000); // 一天 = 86400000 毫秒
  const hour = Math.floor((diff % 86400000) / 3600000); // 一小时 = 3600000 毫秒
  const minute = Math.floor((diff % 3600000) / 60000); // 一分钟 = 60000 毫秒
  const second = Math.floor((diff % 60000) / 1000); // 一秒 = 1000 毫秒
  return {
    year: year.toString().padStart(2, "0"),
    month: month.toString().padStart(2, "0"),
    day: day.toString().padStart(2, "0"),
    hour: hour.toString().padStart(2, "0"),
    minute: minute.toString().padStart(2, "0"),
    second: second.toString().padStart(2, "0"),
  };
};
```

</template>
</ShowCode>
</ContainerBox>
